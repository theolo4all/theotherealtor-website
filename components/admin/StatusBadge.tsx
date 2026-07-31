type StatusBadgeProps = {
  status: string;
};

export default function StatusBadge({
  status,
}: StatusBadgeProps) {
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