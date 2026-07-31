import Link from "next/link";
import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { updateListing, deleteListing } from "../updateListing";

export default async function EditListingPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const supabase = await createClient();

  const { data: listing, error } = await supabase
    .from("listings")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !listing) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-5xl p-10">

      <div className="mb-8 flex items-center justify-between">

        <h1 className="text-4xl font-bold">
          Edit Listing
        </h1>

        <Link
          href="/admin/listings"
          className="rounded-lg bg-gray-200 px-4 py-2 hover:bg-gray-300"
        >
          Back
        </Link>

      </div>

      <form
        action={updateListing}
        className="space-y-8 rounded-xl bg-white p-8 shadow-lg"
      >

        <input
          type="hidden"
          name="id"
          defaultValue={listing.id}
        />

        <div className="grid gap-6 md:grid-cols-2">

          <Input label="Address" name="address" defaultValue={listing.address} />
          <Input label="City" name="city" defaultValue={listing.city} />
          <Input label="Province" name="province" defaultValue={listing.province} />
          <Input label="Postal Code" name="postal_code" defaultValue={listing.postal_code ?? ""} />
          <Input label="Price" name="price" type="number" defaultValue={String(listing.price)} />
          <Input label="Bedrooms" name="bedrooms" type="number" defaultValue={String(listing.bedrooms ?? "")} />
          <Input label="Bathrooms" name="bathrooms" type="number" defaultValue={String(listing.bathrooms ?? "")} />
          <Input label="Square Feet" name="sqft" type="number" defaultValue={String(listing.sqft ?? "")} />
          <Input label="Property Type" name="property_type" defaultValue={listing.property_type ?? ""} />
          <Input label="MLS Number" name="mls_number" defaultValue={listing.mls_number ?? ""} />
          <Input label="Image URL" name="image_url" defaultValue={listing.image_url ?? ""} />

          <div>

            <label className="mb-2 block font-medium">
              Status
            </label>

            <select
              name="status"
              defaultValue={listing.status}
              className="w-full rounded-lg border p-3"
            >
              <option>For Sale</option>
              <option>Sold</option>
              <option>Leased</option>
            </select>

          </div>

        </div>

        <div>

          <label className="mb-2 block font-medium">
            Description
          </label>

          <textarea
            name="description"
            rows={6}
            defaultValue={listing.description ?? ""}
            className="w-full rounded-lg border p-3"
          />

        </div>

        <label className="flex items-center gap-3">

          <input
            type="checkbox"
            name="featured"
            defaultChecked={listing.featured}
          />

          Featured Listing

        </label>

        <div className="flex gap-4">

          <button
            className="rounded-lg bg-[#0a1628] px-6 py-3 font-semibold text-white hover:bg-[#15243d]"
          >
            Save Changes
          </button>

          <button
            formAction={deleteListing}
            className="rounded-lg bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700"
          >
            Delete Listing
          </button>

        </div>

      </form>

    </main>
  );
}

function Input({
  label,
  name,
  defaultValue,
  type = "text",
}: {
  label: string;
  name: string;
  defaultValue?: string;
  type?: string;
}) {
  return (
    <div>

      <label className="mb-2 block font-medium">
        {label}
      </label>

      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        className="w-full rounded-lg border p-3"
      />

    </div>
  );
}