import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default async function LeadsPage() {
  const { data: leads, error } = await supabase
    .from("mortgage_leads")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return (
      <main className="p-8">
        <h1 className="text-2xl font-bold text-red-600">
          Error loading leads
        </h1>
        <p>{error.message}</p>
      </main>
    );
  }

  const total = leads?.length ?? 0;
  const newLeads =
    leads?.filter((lead) => lead.status === "New").length ?? 0;
  const contacted =
    leads?.filter((lead) => lead.status === "Contacted").length ?? 0;
  const closed =
    leads?.filter((lead) => lead.status === "Closed").length ?? 0;

  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold">
              Mortgage Leads
            </h1>

            <p className="mt-2 text-gray-500">
              Manage and track all mortgage leads.
            </p>
          </div>

          <button className="rounded-lg bg-[#0a1628] px-5 py-3 font-semibold text-white transition hover:bg-[#15243d]">
            + New Lead
          </button>
        </div>

        {/* Dashboard Cards */}
        <div className="mb-8 grid gap-6 md:grid-cols-4">
          <StatCard title="Total Leads" value={total} />
          <StatCard title="New" value={newLeads} />
          <StatCard title="Contacted" value={contacted} />
          <StatCard title="Closed" value={closed} />
        </div>

        {/* Leads Table */}
        <div className="overflow-hidden rounded-xl bg-white shadow-lg">

          <table className="min-w-full">

            <thead className="bg-gray-100">
              <tr>
                <th className="p-4 text-left font-semibold">Name</th>
                <th className="p-4 text-left font-semibold">Email</th>
                <th className="p-4 text-left font-semibold">Phone</th>
                <th className="p-4 text-left font-semibold">City</th>
                <th className="p-4 text-left font-semibold">Status</th>
              </tr>
            </thead>

            <tbody>
              {leads?.map((lead, index) => (
                <tr
                  key={lead.id}
                  className={`border-t transition hover:bg-blue-50 ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }`}
                >
                  <td className="p-4 font-medium">
                    <Link
                      href={`/admin/leads/${lead.id}`}
                      className="block w-full h-full text-blue-700 hover:underline"
                    >
                      {lead.first_name} {lead.last_name}
                    </Link>
                  </td>

                  <td className="p-4">
                    {lead.email}
                  </td>

                  <td className="p-4">
                    {lead.phone}
                  </td>

                  <td className="p-4">
                    {lead.city}
                  </td>

                  <td className="p-4">
                    <StatusBadge status={lead.status ?? ""} />
                  </td>
                </tr>
              ))}
            </tbody>

          </table>

        </div>

      </div>
    </main>
  );
}

function StatCard({
  title,
  value,
}: {
  title: string;
  value: number;
}) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-lg">
      <p className="text-sm text-gray-500">
        {title}
      </p>

      <h2 className="mt-2 text-3xl font-bold text-[#0a1628]">
        {value}
      </h2>
    </div>
  );
}

function StatusBadge({
  status,
}: {
  status: string;
}) {
  const colors: Record<string, string> = {
    New: "bg-yellow-100 text-yellow-800",
    Contacted: "bg-blue-100 text-blue-800",
    Qualified: "bg-green-100 text-green-800",
    Closed: "bg-purple-100 text-purple-800",
    Lost: "bg-red-100 text-red-800",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-sm font-semibold ${
        colors[status] ?? "bg-gray-100 text-gray-700"
      }`}
    >
      {status}
    </span>
  );
}