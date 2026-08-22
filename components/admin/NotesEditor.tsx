"use client";

import { useState, useTransition } from "react";
import { updateLeadNotes } from "@/app/actions/updateLeadNotes";

export default function NotesEditor({
  id,
  notes,
}: {
  id: string;
  notes: string | null;
}) {
  const [value, setValue] = useState(notes ?? "");
  const [isPending, startTransition] = useTransition();

  return (
    <div>
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        rows={8}
        className="w-full rounded-lg border border-gray-300 p-4"
      />

      <button
        disabled={isPending}
        onClick={() =>
          startTransition(async () => {
            await updateLeadNotes(id, value);
          })
        }
        className="mt-4 rounded-lg bg-[#0a1628] px-6 py-3 text-white"
      >
        {isPending ? "Saving..." : "Save Notes"}
      </button>
    </div>
  );
}