"use client";

import { useTransition } from "react";
import { updateLeadStatus } from "@/app/actions/updateLeadStatus";

export default function StatusSelector({
  id,
  currentStatus,
}: {
  id: string;
  currentStatus: string;
}) {
  const [isPending, startTransition] = useTransition();

  const statuses = [
    "New",
    "Contacted",
    "Qualified",
    "Application Submitted",
    "Approved",
    "Closed",
    "Lost",
  ];

  return (
    <select
      defaultValue={currentStatus}
      disabled={isPending}
      className="rounded-lg border border-gray-300 px-3 py-2"
      onChange={(e) =>
        startTransition(async () => {
          await updateLeadStatus(id, e.target.value);
        })
      }
    >
      {statuses.map((status) => (
        <option
          key={status}
          value={status}
        >
          {status}
        </option>
      ))}
    </select>
  );
}