type DashboardStatsProps = {
  total: number;
  newLeads: number;
  contacted: number;
  closed: number;
};

function Card({
  title,
  value,
}: {
  title: string;
  value: number;
}) {
  return (
    <div className="rounded-xl bg-white p-6 shadow">
      <p className="text-sm text-gray-500">
        {title}
      </p>

      <h2 className="mt-2 text-3xl font-bold">
        {value}
      </h2>
    </div>
  );
}

export default function DashboardStats({
  total,
  newLeads,
  contacted,
  closed,
}: DashboardStatsProps) {
  return (
    <div className="mb-8 grid gap-6 md:grid-cols-4">
      <Card title="Total Leads" value={total} />
      <Card title="New" value={newLeads} />
      <Card title="Contacted" value={contacted} />
      <Card title="Closed" value={closed} />
    </div>
  );
}