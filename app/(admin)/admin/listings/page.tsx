import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

export default async function ListingsPage() {
  const supabase = await createClient();

  const { data: listings, error } = await supabase
    .from("listings")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return (
      <main className="p-10">
        <h1 className="text-2xl font-bold text-red-600">
          Error loading listings
        </h1>

        <p>{error.message}</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <div className="mx-auto max-w-7xl">

        <div className="mb-8 flex items-center justify-between">

          <div>
            <h1 className="text-4xl font-bold">
              Listings
            </h1>

            <p className="mt-2 text-gray-500">
              Manage all property listings.
            </p>
          </div>

          <Link
            href="/admin/listings/new"
            className="rounded-lg bg-[#0a1628] px-5 py-3 font-semibold text-white hover:bg-[#15243d]"
          >
            + Add Listing
          </Link>

        </div>

        <div className="overflow-hidden rounded-xl bg-white shadow-lg">

          <table className="min-w-full">

            <thead className="bg-gray-100">

              <tr>
                <th className="p-4 text-left">Address</th>
                <th className="p-4 text-left">City</th>
                <th className="p-4 text-left">Price</th>
                <th className="p-4 text-left">Status</th>
                <th className="p-4 text-left">Featured</th>
              </tr>

            </thead>

            <tbody>

              {listings?.map((listing) => (

                <tr
                  key={listing.id}
                  className="border-t hover:bg-blue-50"
                >

                  <td className="p-4 font-medium">
  <Link
    href={`/admin/listings/${listing.id}`}
    className="text-[#0a1628] hover:underline"
  >
    {listing.address}
  </Link>
</td>

                  <td className="p-4">
                    {listing.city}
                  </td>

                  <td className="p-4">
                    $
                    {Number(listing.price).toLocaleString()}
                  </td>

                  <td className="p-4">
                    {listing.status}
                  </td>

                  <td className="p-4">
                    {listing.featured ? "⭐" : ""}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>
    </main>
  );
}