import Link from "next/link";
import { notFound } from "next/navigation";
import { supabase } from "@/lib/supabase";
import StatusSelector from "@/components/admin/StatusSelector";
import NotesEditor from "@/components/admin/NotesEditor";

export default async function LeadDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const { data: lead, error } = await supabase
    .from("mortgage_leads")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !lead) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <div className="mx-auto max-w-5xl">

        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-4xl font-bold text-[#0a1628]">
            Lead Details
          </h1>

          <Link
            href="/admin/leads"
            className="rounded-lg bg-[#0a1628] px-4 py-2 text-white hover:bg-[#15243d]"
          >
            ← Back to Leads
          </Link>
        </div>

        <div className="rounded-xl bg-white p-8 shadow-lg">

          <div className="mb-8">
            <h2 className="text-3xl font-semibold">
              {lead.first_name} {lead.last_name}
            </h2>

            <p className="mt-1 text-gray-500">
              Mortgage Lead
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">

            <Info
              label="Email"
              value={lead.email}
            />

            <Info
              label="Phone"
              value={lead.phone}
            />

            <Info
              label="City"
              value={lead.city}
            />

            <Info
              label="Province"
              value={lead.province}
            />

            {/* Status Selector */}
            <div>
              <p className="mb-2 text-sm text-gray-500">
                Status
              </p>

              <StatusSelector
                id={lead.id}
                currentStatus={lead.status ?? "New"}
              />
            </div>

            <Info
              label="Source"
              value={lead.source}
            />

          </div>

          <hr className="my-8" />

          <div>
  <h3 className="mb-3 text-xl font-semibold">
    Notes
  </h3>

  <NotesEditor
    id={lead.id}
    notes={lead.notes}
  />
</div>

        </div>

      </div>
    </main>
  );
}

function Info({
  label,
  value,
}: {
  label: string;
  value: string | null;
}) {
  return (
    <div>
      <p className="mb-1 text-sm text-gray-500">
        {label}
      </p>

      <p className="text-lg font-medium text-gray-900">
        {value || "-"}
      </p>
    </div>
  );
}