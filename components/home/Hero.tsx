// =========================
// HERO.TSX - PART 1 OF 3
// =========================

import Image from "next/image";
import Link from "next/link";

import Container from "@/components/ui/Container";
import SearchBar from "@/components/search/SearchBar";

import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Home,
  KeyRound,
  MapPin,
  TrendingUp,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0a1628] text-white">

      {/* Background Glow */}

      <div className="absolute inset-0">

        <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-[#c9a84c]/10 blur-3xl" />

        <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-3xl" />

      </div>

      <Container className="relative z-10 py-12 sm:py-16 lg:py-28">

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">

          {/* =======================================
              LEFT COLUMN
          ======================================= */}

          <div className="order-2 max-w-xl lg:order-1">

            {/* Badge */}

            <div className="inline-flex items-center gap-2 rounded-full border border-[#c9a84c]/20 bg-[#c9a84c]/10 px-4 py-2 text-sm font-semibold tracking-wide text-[#d8bb66]">

              <MapPin className="h-4 w-4" />

              Durham Region • GTA • Ontario

            </div>

            {/* Heading */}

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:mt-8 lg:text-6xl">

              Helping You

              <span className="mt-2 block text-[#c9a84c]">

                Buy • Sell • Invest

              </span>

              <span className="mt-2 block">

                With Confidence

              </span>

            </h1>

            {/* Description */}

            <p className="mt-8 max-w-lg text-lg leading-8 text-slate-300">

              Technology-driven real estate guidance for buyers,
              sellers and investors across Ontario.

              Combining local market expertise with modern
              technology to help you make smarter real estate
              decisions.

            </p>

            {/* Trust Points */}

            <div className="mt-8 flex flex-wrap gap-6">

  <div className="flex items-center gap-2">
    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#c9a84c]" />
    <span className="text-sm font-medium text-slate-200">
      Honest Advice
    </span>
  </div>

  <div className="flex items-center gap-2">
    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#c9a84c]" />
    <span className="text-sm font-medium text-slate-200">
      Local Expertise
    </span>
  </div>

  <div className="flex items-center gap-2">
    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#c9a84c]" />
    <span className="text-sm font-medium text-slate-200">
      Data-Driven

                </span>

              </div>

            </div>

            {/* Search Card */}

            <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#c9a84c]">

                SEARCH LISTINGS

              </p>

              <h2 className="mt-3 text-2xl font-bold">

                Search Ontario Listings

              </h2>

              <p className="mt-2 text-sm text-slate-400">

                Find homes by city, postal code or MLS® number.

              </p>

              <div className="mt-6">

  <SearchBar />

  {/* Popular Searches */}

  <div className="mt-5 flex flex-wrap items-center gap-2">

  <span className="mr-2 text-sm font-medium text-slate-400">
    Explore Markets
  </span>

  {[
    "Durham Region",
    "York Region",
    "Toronto",
    "Niagara",
    "Hamilton",
    "London",
    "Ottawa",
    "Barrie",
  ].map((city) => (
    <button
      key={city}
      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-300 transition-all duration-300 hover:border-[#c9a84c] hover:bg-[#c9a84c]/10 hover:text-white"
    >
      {city}
    </button>
  ))}

</div>

</div>
            </div>

            {/* CTA Buttons */}

            <div className="mt-10 flex flex-wrap gap-4">

             <Link
  href="/search"
  className="inline-flex items-center justify-center rounded-xl bg-[#c9a84c] px-7 py-3.5 font-semibold text-[#0a1628] transition-all duration-300 hover:-translate-y-1 hover:bg-[#d8b95c] hover:shadow-xl"
>
  Browse Listings

  <ArrowRight className="ml-2 h-5 w-5" />
</Link>

              <Link
  href="/get-mortgage-ready"
  className="inline-flex items-center justify-center rounded-xl border border-[#c9a84c] px-7 py-3.5 font-semibold text-[#c9a84c] transition-all duration-300 hover:bg-[#c9a84c] hover:text-[#0a1628]"
>
  Get Mortgage Ready

  <ArrowRight className="ml-2 h-5 w-5" />
</Link>

            </div>

<p className="mt-6 text-sm text-white/70">
  Not sure where to start? Get connected with trusted mortgage professionals before you begin your home search.
</p>

          </div>

          {/* =======================================
              RIGHT COLUMN
              (CONTINUES IN PART 2)
          ======================================= */}

                    <div className="order-1 relative flex justify-center lg:order-2 lg:justify-end">

            {/* Decorative Glow */}

            <div className="absolute inset-0 flex items-center justify-center">

              <div className="h-[520px] w-[520px] rounded-full bg-[#c9a84c]/10 blur-3xl" />

            </div>

            {/* Portrait */}

            <div className="relative z-10">

              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur">

                <Image
  src="/theo-tajou.jpg"
  alt="Theo Tajou"
  width={360}
  height={460}
  priority
  className="w-[260px] rounded-[1.5rem] object-cover transition duration-500 hover:scale-[1.02] sm:w-[320px] lg:w-[420px]"
/>

              </div>

              {/* Floating Card - Technology */}

              <div className="absolute -right-12 bottom-14 hidden w-64 rounded-2xl border border-white/10 bg-[#13233b]/90 p-5 shadow-2xl backdrop-blur lg:block">

                <div className="flex items-start gap-4">

                  <div className="rounded-xl bg-[#c9a84c]/20 p-3">

                    <TrendingUp className="h-6 w-6 text-[#d8bb66]" />

                  </div>

                  <div>

                    <p className="font-semibold">

                      Technology-Driven 

                    </p>

                    <p className="mt-1 text-sm leading-6 text-slate-300">

                      Modern technology and local expertise
                      to help you buy and sell with confidence.
                      

                    </p>

                  </div>

                </div>

              </div>

              {/* Bottom Trust Strip */}

{/* Expertise Cards */}

<div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">

  <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#c9a84c] hover:bg-white/10">

    <Home className="mx-auto mb-3 h-8 w-8 text-[#c9a84c]" />

    <h3 className="font-semibold text-white">
      Buyers
    </h3>

    <p className="mt-2 text-xs leading-5 text-slate-300">
      First-time buyers, growing families and newcomers.
    </p>

  </div>

  <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#c9a84c] hover:bg-white/10">

    <KeyRound className="mx-auto mb-3 h-8 w-8 text-[#c9a84c]" />

    <h3 className="font-semibold text-white">
      Sellers
    </h3>

    <p className="mt-2 text-xs leading-5 text-slate-300">
      Strategic pricing, marketing and skilled negotiation.
    </p>

  </div>

  <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#c9a84c] hover:bg-white/10">

    <Building2 className="mx-auto mb-3 h-8 w-8 text-[#c9a84c]" />

    <h3 className="font-semibold text-white">
      Investors
    </h3>

    <p className="mt-2 text-xs leading-5 text-slate-300">
      Build wealth through data-driven real estate decisions.
    </p>

  </div>

</div>

            </div>

          </div>

        </div>
                {/* Bottom Divider */}

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-slate-950/30" />

      </Container>

    </section>
  );
}