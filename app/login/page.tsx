import { login } from "./actions";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-xl">
        <h1 className="mb-2 text-center text-3xl font-bold text-[#0a1628]">
          The Other Realtor
        </h1>

        <p className="mb-8 text-center text-gray-500">
          Admin Login
        </p>

        <form action={login} className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium">
              Email
            </label>

            <input
              name="email"
              type="email"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#0a1628] focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Password
            </label>

            <input
              name="password"
              type="password"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#0a1628] focus:outline-none"
            />
          </div>

          <button
            className="w-full rounded-lg bg-[#0a1628] py-3 font-semibold text-white hover:bg-[#15243d]"
          >
            Sign In
          </button>
        </form>
      </div>
    </main>
  );
}