import Link from "next/link";

export default function AdminDashboard() {
  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <div className="mx-auto max-w-6xl">

        <h1 className="mb-2 text-4xl font-bold">
          Welcome Theo 👋
        </h1>

        <p className="mb-10 text-gray-500">
          Real Estate CRM Dashboard
        </p>

        <div className="grid gap-6 md:grid-cols-3">

          <Link
            href="/admin/leads"
            className="rounded-xl bg-white p-8 shadow hover:shadow-lg"
          >
            <h2 className="text-2xl font-bold">
              Mortgage Leads
            </h2>

            <p className="mt-3 text-gray-500">
              View and manage leads.
            </p>
          </Link>

          <div className="rounded-xl bg-white p-8 shadow">
            <h2 className="text-2xl font-bold">
              Listings
            </h2>

            <p className="mt-3 text-gray-500">
              Coming Soon
            </p>
          </div>

          <div className="rounded-xl bg-white p-8 shadow">
            <h2 className="text-2xl font-bold">
              Settings
            </h2>

            <p className="mt-3 text-gray-500">
              Coming Soon
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}