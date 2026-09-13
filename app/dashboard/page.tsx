import Link from "next/link";
import { redirect } from "next/navigation";
import { getCurrentUser } from "../../src/lib/current-user";
import { getSchool } from "../../src/lib/school";
import { getStudents } from "../../src/lib/students";
import { db } from "../../src/prisma/db";

function money(value: number) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(value);
}

export default async function DashboardPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  const school = await getSchool();

  if (!school || school.id !== user.schoolId) {
    throw new Error("School not found");
  }

  const [students, users, classes, sessions, terms, assignments, payments, allocations, attendance] =
    await Promise.all([
      getStudents(user.schoolId),
      db.orm.public.User.all(),
      db.orm.public.SchoolClass.all(),
      db.orm.public.AcademicSession.all(),
      db.orm.public.Term.all(),
      db.orm.public.FeeAssignment.all(),
      db.orm.public.Payment.all(),
      db.orm.public.PaymentAllocation.all(),
      db.orm.public.AttendanceRecord.all(),
    ]);

  const schoolUsers = users.filter((item) => item.schoolId === user.schoolId && item.status === "ACTIVE");
  const teacherCount = schoolUsers.filter((item) => item.userType === "TEACHER").length;
  const schoolClasses = classes.filter((item) => item.schoolId === user.schoolId);
  const activeSession = sessions
    .filter((item) => item.schoolId === user.schoolId && item.status === "ACTIVE")
    .sort((a, b) => b.startDate.getTime() - a.startDate.getTime())[0];
  const activeTerm = activeSession
    ? terms
        .filter((item) => item.sessionId === activeSession.id && item.isActive === true)
        .sort((a, b) => a.startDate.getTime() - b.startDate.getTime())[0]
    : undefined;

  const schoolAssignments = assignments.filter(
    (item) => item.schoolId === user.schoolId && item.status === "ACTIVE",
  );
  const completedPayments = new Set(
    payments
      .filter((item) => item.schoolId === user.schoolId && item.status === "COMPLETED")
      .map((item) => item.id),
  );
  const allocatedByAssignment = new Map<number, number>();

  for (const allocation of allocations) {
    if (allocation.schoolId !== user.schoolId || !completedPayments.has(allocation.paymentId)) {
      continue;
    }

    allocatedByAssignment.set(
      allocation.feeAssignmentId,
      (allocatedByAssignment.get(allocation.feeAssignmentId) ?? 0) + Number(allocation.amount),
    );
  }

  const totalFees = schoolAssignments.reduce((sum, item) => sum + Number(item.amount), 0);
  const totalPaid = schoolAssignments.reduce(
    (sum, item) => Math.min(Number(item.amount), allocatedByAssignment.get(item.id) ?? 0) + sum,
    0,
  );
  const outstandingFees = Math.max(0, totalFees - totalPaid);

  const schoolAttendance = attendance.filter((item) => item.schoolId === user.schoolId);
  const presentCount = schoolAttendance.filter((item) => item.status === "PRESENT").length;
  const attendanceRate = schoolAttendance.length > 0 ? Math.round((presentCount / schoolAttendance.length) * 100) : 0;

  const stats = [
    ["Students", students.filter((item) => item.status === "ACTIVE").length.toString(), "Registered active students"],
    ["Teachers", teacherCount.toString(), "Active teaching staff"],
    ["Classes", schoolClasses.length.toString(), "School classes"],
    ["Fees Outstanding", money(outstandingFees), "Current assigned fees less allocated payments"],
  ];

  const modules = [
    ["Students", "Registration, profiles and student records", "/students"],
    ["Teachers", "Teacher profiles, classes and subjects", "/teachers"],
    ["Academics", "Sessions, terms, classes and subjects", "/academic-sessions"],
    ["Finance", "Fees, payments, balances and receipts", "/fees"],
    ["Attendance", "Daily attendance and attendance records", "/attendance"],
    ["Exams & Results", "Scores, grading, positions and report cards", "/exams"],
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <p className="text-sm font-semibold text-emerald-600">{school.name}</p>
            <h1 className="mt-1 text-2xl font-bold text-slate-900">School Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden text-sm text-slate-500 sm:inline">{user.name}</span>
            <Link href="/logout" className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
              Sign out
            </Link>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-8">
        <section className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-medium text-slate-500">Welcome, {user.name}</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">{school.name}</h2>
              <p className="mt-3 max-w-2xl text-slate-500">
                A live view of the school&apos;s students, staff, academics, attendance and finance records.
              </p>
            </div>
            <div className="rounded-xl bg-emerald-50 px-5 py-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">Current academic period</p>
              <p className="mt-1 text-lg font-bold text-emerald-950">{activeSession?.name ?? "No active session"}</p>
              <p className="text-sm text-emerald-800">{activeTerm?.name ?? "No active term"}</p>
            </div>
          </div>
        </section>

        <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(([title, value, description]) => (
            <div key={title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm font-medium text-slate-500">{title}</p>
              <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900">{value}</p>
              <p className="mt-2 text-xs leading-5 text-slate-400">{description}</p>
            </div>
          ))}
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 lg:col-span-2">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-lg font-bold text-slate-900">School operations</h2>
                <p className="mt-1 text-sm text-slate-500">Open a real module and work with the seeded school data.</p>
              </div>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {modules.map(([title, description, href]) => (
                <Link key={title} href={href} className="rounded-xl border border-slate-200 p-5 transition hover:border-emerald-300 hover:bg-emerald-50/40">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-semibold text-slate-900">{title}</h3>
                    <span className="text-emerald-600">→</span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-500">{description}</p>
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-lg font-bold text-slate-900">At a glance</h2>
            <div className="mt-5 space-y-5">
              <div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">Attendance rate</span>
                  <span className="font-semibold text-slate-900">{attendanceRate}%</span>
                </div>
                <div className="mt-2 h-2 rounded-full bg-slate-100">
                  <div className="h-2 rounded-full bg-emerald-500" style={{ width: `${attendanceRate}%` }} />
                </div>
              </div>
              <div className="border-t border-slate-100 pt-5">
                <p className="text-sm text-slate-500">Payments recorded</p>
                <p className="mt-1 text-2xl font-bold text-slate-900">
                  {money(
                    payments
                      .filter((item) => item.schoolId === user.schoolId && item.status === "COMPLETED")
                      .reduce((sum, item) => sum + Number(item.amount), 0),
                  )}
                </p>
              </div>
              <div className="border-t border-slate-100 pt-5">
                <p className="text-sm text-slate-500">Active students</p>
                <p className="mt-1 text-2xl font-bold text-slate-900">
                  {students.filter((item) => item.status === "ACTIVE").length}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
