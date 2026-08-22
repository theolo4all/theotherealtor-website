"use server";

import { supabase } from "@/lib/supabase";
import { revalidatePath } from "next/cache";

export async function updateLeadNotes(
  id: string,
  notes: string
) {
  const { error } = await supabase
    .from("leads")
    .update({
      notes,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/admin/leads");
  revalidatePath(`/admin/leads/${id}`);
}