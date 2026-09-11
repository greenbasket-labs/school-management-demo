import { redirect } from "next/navigation";

const demoAccounts = [
  {
    role: "School Owner",
    name: "Grace Ibrahim",
    username: "owner",
    destination: "/dashboard",
    description: "Explore the complete school administration and reporting experience.",
  },
  {
    role: "Teacher",
    name: "Musa Ibrahim",
    username: "teacher1",
    destination: "/portal",
    description: "Explore teaching, attendance, results and portal workflows.",
  },
  {
    role: "Teacher",
    name: "Johno Okafor",
    username: "teacher2",
    destination: "/portal",
    description: "See another teacher's real school activity and assignments.",
  },
  {
    role: "Student",
    name: "Amina Abdullahi",
    username: "student1",
    destination: "/portal",
    description: "View a student's classes, attendance, fees and results.",
  },
  {
    role: "Parent",
    name: "Abdullahi Family",
    username: "parent1",
    destination: "/portal",
    description: "Explore the parent portal and linked student information.",
  },
];

async function enterDemo(formData: FormData) {
  "use server";

  const username = String(formData.get("username") ?? "");
  const account = demoAccounts.find((item) => item.username === username);

  if (!account) {
    redirect("/demo-login");
  }

  const target = `${account.destination}?demoUser=${encodeURIComponent(account.username)}`;
  redirect(target);
}

export default function DemoLoginPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10 text-slate-900">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-3xl bg-slate-900 px-6 py-10 text-white shadow-sm sm:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
            Green Basket Demo School
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Explore the school system
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
            Choose a prepared school role. No password is required for the public demo.
            The demo uses prepared school data for exploration and testing.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {demoAccounts.map((account) => (
            <form key={account.username} action={enterDemo}>
              <input type="hidden" name="username" value={account.username} />
              <button
                type="submit"
                className="w-full rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-emerald-700">{account.role}</p>
                    <h2 className="mt-1 text-xl font-bold">{account.name}</h2>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                    Enter
                  </span>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-500">{account.description}</p>
              </button>
            </form>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-900">
          <p className="font-semibold">Demo data boundary</p>
          <p className="mt-1 leading-6">
            This is a dedicated demonstration environment. Visitor activity must not change
            the permanent prepared demo dataset.
          </p>
        </div>
      </div>
    </main>
  );
}
