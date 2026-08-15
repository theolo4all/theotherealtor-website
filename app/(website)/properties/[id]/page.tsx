import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  BedDouble,
  Bath,
  Square,
  MapPin,
  Home,
} from "lucide-react";

import { createClient } from "@/lib/supabase/server";

interface PropertyPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function PropertyPage({
  params,
}: PropertyPageProps) {
  const { id } = await params;

  const supabase = await createClient();

  const { data: listing, error } = await supabase
    .from("listings")
    .select("*")
    .eq("slug", id)
    .single();

  if (error || !listing) {
    return (
      <section className="min-h-[70vh] bg-[#0a1628] px-6 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold">
            Property Not Found
          </h1>

          <p className="mt-4 text-gray-400">
            We couldn't find the property you're looking for.
          </p>

          <Link
            href="/"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#c9a84c] px-6 py-3 font-semibold text-[#0a1628]"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[#0a1628] px-0 py-0 text-white sm:px-6 sm:py-12">
      <div className="mx-auto max-w-6xl">

        {/* Back */}

        <Link
          href="/"
          className="mb-8 hidden items-center gap-2 text-sm font-semibold text-[#c9a84c] hover:text-[#e8d5a3] sm:inline-flex"
        >
          <ArrowLeft size={18} />
          Back to Listings
        </Link>

        {/* Property */}

        <div className="overflow-hidden border border-white/10 bg-[#111d31] sm:rounded-3xl">

          {/* Image */}

          <div className="relative h-[300px] sm:h-[350px] md:h-[550px]">

            <Image
              src={
                listing.image_url ||
                "https://images.unsplash.com/photo-1600585154526-990dced4db0d"
              }
              alt={listing.address}
              fill
              priority
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 right-6">

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#c9a84c]">
                {listing.property_type}
              </p>

              <h1 className="mt-2 text-3xl font-extrabold leading-tight md:text-5xl">
                {listing.address}
              </h1>

              <div className="mt-2 flex items-center gap-2 text-gray-200">
                <MapPin
                  size={18}
                  className="text-[#c9a84c]"
                />

                {listing.city}, {listing.province}
              </div>

            </div>
          </div>

          {/* Content */}

          <div className="p-4 sm:p-6 md:p-10">

            {/* Price */}

            <div>
              <p className="text-sm text-gray-400">
                Asking Price
              </p>

              <p className="mt-1 text-4xl font-extrabold text-[#c9a84c] sm:text-5xl">
                ${Number(listing.price).toLocaleString()}
              </p>
            </div>

            {/* Stats */}

            <div className="mt-6 grid grid-cols-3 gap-2 sm:gap-3">

              <div className="rounded-2xl bg-[#0a1628] px-3 py-4 text-center sm:px-5">
                <BedDouble
                  className="mx-auto mb-2 text-[#c9a84c]"
                  size={20}
                />

                <p className="font-bold">
                  {listing.bedrooms ?? "--"}
                </p>

                <p className="text-xs text-gray-400">
                  Beds
                </p>
              </div>

              <div className="rounded-2xl bg-[#0a1628] px-3 py-4 text-center sm:px-5">
                <Bath
                  className="mx-auto mb-2 text-[#c9a84c]"
                  size={20}
                />

                <p className="font-bold">
                  {listing.bathrooms ?? "--"}
                </p>

                <p className="text-xs text-gray-400">
                  Baths
                </p>
              </div>

              <div className="rounded-2xl bg-[#0a1628] px-3 py-4 text-center sm:px-5">
                <Square
                  className="mx-auto mb-2 text-[#c9a84c]"
                  size={20}
                />

                <p className="font-bold">
                  {listing.sqft ?? "--"}
                </p>

                <p className="text-xs text-gray-400">
                  Sq Ft
                </p>
              </div>

            </div>

            {/* Description */}

            {listing.description && (
              <div className="mt-8 border-t border-white/10 pt-8 sm:mt-10">

                <h2 className="flex items-center gap-2 text-2xl font-bold">
                  <Home
                    className="text-[#c9a84c]"
                    size={22}
                  />

                  Property Details
                </h2>

                <p className="mt-4 max-w-4xl leading-8 text-gray-300">
                  {listing.description}
                </p>

              </div>
            )}

            {/* Contact CTA */}

            <div className="mt-8 rounded-2xl border border-[#c9a84c]/20 bg-[#c9a84c]/10 p-5 sm:mt-10 sm:p-6">

              <h2 className="text-2xl font-bold">
                Interested in this property?
              </h2>

              <p className="mt-2 leading-7 text-gray-300">
                Let's discuss the property, arrange a showing, or answer
                any questions you may have.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">

                <Link
                  href="/contact"
                  className="rounded-xl bg-[#c9a84c] px-5 py-3 font-semibold text-[#0a1628] transition hover:bg-[#e8d5a3]"
                >
                  Contact Theo
                </Link>

                <a
                  href="tel:+16478385184"
                  className="rounded-xl border border-[#c9a84c] px-5 py-3 font-semibold text-[#c9a84c] transition hover:bg-[#c9a84c] hover:text-[#0a1628]"
                >
                  Call / Text Theo
                </a>

              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}