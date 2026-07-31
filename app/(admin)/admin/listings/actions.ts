"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export async function createListing(formData: FormData) {
  const supabase = await createClient();

  const address = formData.get("address") as string;
  const city = formData.get("city") as string;
  const province = formData.get("province") as string;
  const postal_code = formData.get("postal_code") as string;
  const price = Number(formData.get("price"));
  const bedrooms = Number(formData.get("bedrooms"));
  const bathrooms = Number(formData.get("bathrooms"));
  const sqft = Number(formData.get("sqft"));
  const property_type = formData.get("property_type") as string;
  const mls_number = formData.get("mls_number") as string;
  const description = formData.get("description") as string;
  const image_url = formData.get("image_url") as string;

  const featured = formData.get("featured") === "on";

  const status = formData.get("status") as string;

  const slug =
    address
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "") +
    "-" +
    city.toLowerCase();

  const { error } = await supabase.from("listings").insert({
    address,
    city,
    province,
    postal_code,
    price,
    bedrooms,
    bathrooms,
    sqft,
    property_type,
    mls_number,
    description,
    image_url,
    featured,
    status,
    slug,
  });

  if (error) {
    throw new Error(error.message);
  }

  redirect("/admin/listings");
}