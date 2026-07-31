import Link from "next/link";
import { createListing } from "../actions";

export default function NewListingPage() {
  return (
    <main className="mx-auto max-w-5xl p-10">

      <div className="mb-8 flex items-center justify-between">

        <h1 className="text-4xl font-bold">
          Add Listing
        </h1>

        <Link
          href="/admin/listings"
          className="rounded-lg bg-gray-200 px-4 py-2 hover:bg-gray-300"
        >
          Back
        </Link>

      </div>

      <form
        action={createListing}
        className="space-y-8 rounded-xl bg-white p-8 shadow-lg"
      >

        <div className="grid gap-6 md:grid-cols-2">

          <Input
            label="Address"
            name="address"
          />

          <Input
            label="City"
            name="city"
          />

          <Input
            label="Province"
            name="province"
            defaultValue="ON"
          />

          <Input
            label="Postal Code"
            name="postal_code"
          />

          <Input
            label="Price"
            name="price"
            type="number"
          />

          <Input
            label="Bedrooms"
            name="bedrooms"
            type="number"
          />

          <Input
            label="Bathrooms"
            name="bathrooms"
            type="number"
          />

          <Input
            label="Square Feet"
            name="sqft"
            type="number"
          />

          <Input
            label="Property Type"
            name="property_type"
          />

          <Input
            label="MLS Number"
            name="mls_number"
          />

          <Input
            label="Image URL"
            name="image_url"
          />

          <div>
            <label className="mb-2 block font-medium">
              Status
            </label>

            <select
              name="status"
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
            className="w-full rounded-lg border p-3"
          />

        </div>

        <label className="flex items-center gap-3">

          <input
            type="checkbox"
            name="featured"
          />

          Featured Listing

        </label>

        <button
          className="rounded-lg bg-[#0a1628] px-6 py-3 font-semibold text-white hover:bg-[#15243d]"
        >
          Save Listing
        </button>

      </form>

    </main>
  );
}

function Input({
  label,
  name,
  type = "text",
  defaultValue,
}: {
  label: string;
  name: string;
  type?: string;
  defaultValue?: string;
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