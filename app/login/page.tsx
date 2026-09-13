import { redirect } from "next/navigation";
import { authenticateUser } from "../../src/lib/login";
import { getSchool } from "../../src/lib/school";

type LoginPageProps = {
  searchParams: Promise<{
    error?: string;
    demo?: string;
  }>;
};

const demoAccounts = [
  ["Owner / Admin", "admin"],
  ["Cashier", "cashier"],
  ["Teacher", "teacher1"],
  ["Parent", "parent1"],
  ["Student", "student1"],
];

async function loginAction(formData: FormData) {
  "use server";

  const login = String(formData.get("login") ?? "");
  const password = String(formData.get("password") ?? "");

  const result = await authenticateUser(login, password);

  if (!result.success) {
    redirect(
      result.reason === "DEVICE_LIMIT"
        ? "/login?error=device-limit"
        : "/login?error=invalid",
    );
  }

  const user = result.user;

  if (
    user.userType === "STUDENT" ||
    user.userType === "PARENT" ||
    user.userType === "TEACHER"
  ) {
    redirect("/portal");
  }

  redirect("/dashboard");
}

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const school = await getSchool();
  const params = await searchParams;
  const error = params.error;
  const selectedDemo = demoAccounts.some(([, username]) => username === params.demo)
    ? params.demo
    : "";

  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-md">
        <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <div className="mb-8">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-emerald-600">
              Green Basket Demo
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
              Enter the school
            </h1>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              {school?.name ?? "School Management System"} · Use a demo role below or sign in normally.
            </p>
          </div>

          <div className="mb-6">
            <p className="mb-3 text-sm font-semibold text-slate-700">Choose a demo role</p>
            <div className="grid grid-cols-2 gap-2">
              {demoAccounts.map(([label, username]) => (
                <a
                  key={username}
                  href={`/login?demo=${encodeURIComponent(username)}`}
                  className={`rounded-xl border px-3 py-2.5 text-center text-sm font-medium transition ${
                    selectedDemo === username
                      ? "border-emerald-500 bg-emerald-50 text-emerald-800"
                      : "border-slate-200 text-slate-600 hover:border-emerald-200 hover:bg-slate-50"
                  }`}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {error === "device-limit" && (
            <div className="mb-5 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
              <p className="font-semibold">Maximum 2 active devices reached.</p>
              <p className="mt-1">Revoke one existing device before signing in on this device.</p>
            </div>
          )}

          {error === "invalid" && (
            <div className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              Invalid email, username, phone or password.
            </div>
          )}

          <form action={loginAction} className="space-y-5">
            <div>
              <label htmlFor="login" className="mb-2 block text-sm font-medium text-slate-700">
                Email, username or phone
              </label>
              <input
                id="login"
                name="login"
                type="text"
                autoComplete="username"
                defaultValue={selectedDemo}
                placeholder="Enter your email, username or phone"
                required
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
              />
            </div>

            <div>
              <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                placeholder="Demo@12345"
                required
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              Enter demo
            </button>
          </form>

          <div className="mt-6 border-t border-slate-100 pt-5 text-center">
            <p className="text-xs text-slate-400">Demo password: Demo@12345</p>
            <a href="/" className="mt-3 inline-block text-sm font-medium text-emerald-700 hover:text-emerald-800">
              Back to school home
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
