import { getSchool } from "../src/lib/school";

const roles = [
  ["Owner / Admin", "Run the school, manage records, finance and operations.", "admin"],
  ["Cashier", "Receive school fees, record payments and manage receipts.", "cashier"],
  ["Teacher", "Take attendance, manage classes and enter academic results.", "teacher1"],
  ["Parent", "View your child's attendance, results, fees and announcements.", "parent1"],
  ["Student", "Access subjects, attendance, results and school updates.", "student1"],
  ["School Admin", "Explore the administrative side of a real school setup.", "admin"],
];

export default async function Home() {
  const school = await getSchool();

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-600">
              Green Basket Global
            </p>
            <h1 className="mt-1 text-xl font-bold tracking-tight sm:text-2xl">
              School Management System
            </h1>
          </div>
          <a
            href="/login"
            className="rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
          >
            Sign in
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="rounded-3xl bg-slate-900 px-6 py-10 text-white shadow-sm sm:px-10 lg:px-12 lg:py-14">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-300">
              Live product demo
            </p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              Don&apos;t just see screenshots. Enter the school and use it.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              Experience a real school environment with students, teachers,
              classes, attendance, fees, payments, examinations, results and
              school communication already connected.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3 text-sm text-slate-300">
              <span className="rounded-full border border-slate-700 px-3 py-1.5">
                {school?.name ?? "Green Basket Demo School"}
              </span>
              <span className="rounded-full border border-slate-700 px-3 py-1.5">
                Gwarinpa, Abuja
              </span>
              <span className="rounded-full border border-slate-700 px-3 py-1.5">
                2025/2026 Session
              </span>
            </div>
          </div>
        </div>

        <section className="mt-10">
          <div>
            <p className="text-sm font-semibold text-emerald-600">
              Experience the system
            </p>
            <h3 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
              Choose a role to explore
            </h3>
            <p className="mt-2 text-sm text-slate-500">
              Each option signs into the same real school system with a representative demo account.
            </p>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {roles.map(([title, description, login]) => (
              <a
                key={`${title}-${login}`}
                href={`/login?demo=${encodeURIComponent(login)}`}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-200 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 font-bold text-emerald-700">
                    {title.charAt(0)}
                  </div>
                  <span className="text-sm font-semibold text-emerald-700 transition group-hover:translate-x-0.5">
                    Enter →
                  </span>
                </div>
                <h4 className="mt-5 text-lg font-semibold">{title}</h4>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {description}
                </p>
              </a>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-2xl border border-emerald-100 bg-emerald-50 p-6 sm:p-7">
          <p className="text-sm font-semibold text-emerald-800">One connected system</p>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-emerald-950/75">
            The demo is intentionally populated like a working private school,
            so you can move beyond a landing page and see how the same data
            flows across administration, teaching, parent and student views.
          </p>
        </section>
      </section>
    </main>
  );
}
