"use server";

import { resend } from "@/lib/resend";
import MortgageLeadEmail from "@/app/emails/MortgageLeadEmail";

export async function submitMortgageLead(formData: FormData) {
  try {
    const firstName = formData.get("firstName")?.toString() ?? "";
    const lastName = formData.get("lastName")?.toString() ?? "";
    const email = formData.get("email")?.toString() ?? "";
    const phone = formData.get("phone")?.toString() ?? "";
    const city = formData.get("city")?.toString() ?? "";
    const province = formData.get("province")?.toString() ?? "";
    const message = formData.get("message")?.toString() ?? "";

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

    return {
      success: true,
    };

  } catch (error) {

    console.error(error);

    return {
      success: false,
      error: "Unable to send email.",
    };
  }
}