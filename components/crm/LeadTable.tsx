import { supabase } from "@/lib/supabase";

export default async function LeadTable() {
  const { data: leads, error } = await supabase
    .from("mortgage_leads")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return (
      <div className="rounded-lg border border-red-300 bg-red-50 p-6 text-red-600">
        Error loading leads: {error.message}
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-lg">
      <div className="border-b px-6 py-5">
        <h1 className="text-3xl font-bold text-gray-900">
          Mortgage Leads
        </h1>

        <p className="mt-1 text-gray-500">
          {leads?.length ?? 0} lead(s)
        </p>
      </div>

      <table className="min-w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left">Name</th>
            <th className="px-6 py-3 text-left">Email</th>
            <th className="px-6 py-3 text-left">Phone</th>
            <th className="px-6 py-3 text-left">City</th>
            <th className="px-6 py-3 text-left">Status</th>
          </tr>
        </thead>

        <tbody>
          {leads?.map((lead) => (
            <tr key={lead.id} className="border-b hover:bg-gray-50">
              <td className="px-6 py-4">
                {lead.first_name} {lead.last_name}
              </td>

              <td className="px-6 py-4">
                {lead.email}
              </td>

              <td className="px-6 py-4">
                {lead.phone}
              </td>

              <td className="px-6 py-4">
                {lead.city}
              </td>

              <td className="px-6 py-4">
                <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-800">
                  {lead.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}