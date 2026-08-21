"use server";

import { createClient } from "@/lib/supabase/server";

interface ContactLead {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export async function submitContactLead(data: ContactLead) {
  const supabase = await createClient();

  const { error } = await supabase.from("leads").insert({
    name: data.name,
    email: data.email,
    phone: data.phone || null,
    service: data.service || null,
    message: data.message || null,
    source: "Website",
    status: "New",
  });

  if (error) {
    console.error("Error creating contact lead:", error);
    throw new Error("Unable to submit your message.");
  }

  return { success: true };
}