import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#07111f] py-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 lg:flex-row">
        {/* Left */}
        <div className="flex-1">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#c9a84c]">
            About Theo
          </p>

          <h1 className="max-w-2xl text-5xl font-extrabold leading-tight text-white lg:text-6xl">
            Helping You Make Smarter
            <span className="block text-[#c9a84c]">
              Real Estate Decisions
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-300">
            Whether you're buying your first home, selling your current
            property, or investing for the future, my goal is to make every
            step clear, informed, and stress-free through technology,
            market knowledge, and personalized guidance.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-[#c9a84c] px-7 py-4 font-semibold text-[#07111f] transition hover:-translate-y-0.5"
            >
              Book Consultation
            </Link>

            <Link
              href="/properties"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-7 py-4 font-semibold text-white transition hover:border-[#c9a84c] hover:text-[#c9a84c]"
            >
              Browse Listings
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        {/* Right */}
        <div className="relative flex-1">
          <div className="relative mx-auto w-fit">
            <Image
              src="/theo-tajou.jpg"
              alt="Theo Tajou"
              width={430}
              height={560}
              className="rounded-[32px] object-cover"
            />

            <div className="absolute -bottom-8 -left-8 rounded-3xl border border-white/10 bg-[#0f1727]/90 p-6 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#c9a84c]">
                Technology-Driven
              </p>

              <p className="mt-2 max-w-xs text-sm leading-7 text-gray-300">
                Combining modern technology, market insights and local
                expertise to help clients make confident real estate
                decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}