"use server";

export async function testResend() {
  console.log("API Key Loaded:", !!process.env.RESEND_API_KEY);
}