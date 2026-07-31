"use server";

import { resend } from "@/lib/resend";
import { supabase } from "@/lib/supabase";
import MortgageLeadEmail from "@/app/emails/MortgageLeadEmail";
import CustomerConfirmationEmail from "@/app/emails/CustomerConfirmationEmail";

export async function submitMortgageLead(formData: FormData) {
  try {
    const firstName = formData.get("firstName")?.toString() ?? "";
    const lastName = formData.get("lastName")?.toString() ?? "";
    const email = formData.get("email")?.toString() ?? "";
    const phone = formData.get("phone")?.toString() ?? "";
    const city = formData.get("city")?.toString() ?? "";
    const province = formData.get("province")?.toString() ?? "";
    const message = formData.get("message")?.toString() ?? "";
const { error } = await supabase
  .from("mortgage_leads")
  .insert({
    first_name: firstName,
    last_name: lastName,
    email,
    phone,
    city,
    province,
    message,
  });

if (error) {
  console.error("Supabase Error:", error);

  return {
    success: false,
    error: "Unable to save lead.",
  };
}

    // Send lead notification to Theo
    await resend.emails.send({
      from: "Mortgage Ready <mortgage@send.theotherealtor.com>",
      to: "theo.tajou@century21.ca",
      subject: `New Mortgage Lead - ${firstName} ${lastName}`,
      react: MortgageLeadEmail({
        firstName,
        lastName,
        email,
        phone,
        city,
        province,
        message,
      }),
    });

    // Send confirmation email to the client
    await resend.emails.send({
      from: "Theo Tajou <mortgage@send.theotherealtor.com>",
      to: email,
      subject: "Thanks for contacting The Other Realtor!",
      react: CustomerConfirmationEmail({
        firstName,
      }),
    });

    return {
      success: true,
    };

  } catch (error) {
    console.error("Mortgage Lead Error:", error);

    return {
      success: false,
      error: "Unable to send email.",
    };
  }
}