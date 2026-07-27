import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-[#0a1628] py-16">
      <div className="container mx-auto px-6">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}

          <div>

            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#c9a84c]">
              Services
            </span>

            <h1 className="mt-4 text-4xl font-bold leading-tight text-white lg:text-5xl">
              Helping You
              <br />
              Buy, Sell &
              <span className="block text-[#c9a84c]">
                Invest
              </span>
              Across Ontario
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-gray-300">
              Whether you're purchasing your first home, selling your
              current property, investing in real estate, or looking for
              expert leasing guidance, I combine technology, local market
              expertise, and personalized service to help you make
              confident decisions.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">

              <Link
                href="/contact"
                className="rounded-2xl bg-[#c9a84c] px-8 py-4 font-semibold text-[#0a1628] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#c9a84c]/30"
              >
                Book Consultation
              </Link>

              <Link
                href="/properties"
                className="rounded-2xl border border-white/20 px-8 py-4 font-semibold text-white transition-all duration-300 hover:border-[#c9a84c] hover:text-[#c9a84c]"
              >
                Browse Listings
              </Link>

            </div>

          </div>

          {/* Right */}

          <div className="rounded-3xl border border-white/10 bg-[#111d33] p-10">

            <div className="grid grid-cols-2 gap-6">

              <div className="rounded-2xl border border-white/10 bg-[#15233b] p-6 transition-all duration-300 hover:border-[#c9a84c]/50 hover:-translate-y-1">
                <h3 className="text-lg font-bold text-white">
                  Buyers
                </h3>

                <p className="mt-2 text-sm text-gray-400">
                  First homes, upsizing, downsizing and relocation.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#15233b] p-6 transition-all duration-300 hover:border-[#c9a84c]/50 hover:-translate-y-1">
                <h3 className="text-lg font-bold text-white">
                  Sellers
                </h3>

                <p className="mt-2 text-sm text-gray-400">
                  Pricing strategy, marketing and negotiation.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#15233b] p-6 transition-all duration-300 hover:border-[#c9a84c]/50 hover:-translate-y-1">
                <h3 className="text-lg font-bold text-white">
                  Investors
                </h3>

                <p className="mt-2 text-sm text-gray-400">
                  Market analysis and long-term portfolio growth.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#15233b] p-6 transition-all duration-300 hover:border-[#c9a84c]/50 hover:-translate-y-1">
                <h3 className="text-lg font-bold text-white">
                  Leasing
                </h3>

                <p className="mt-2 text-sm text-gray-400">
                  Residential and commercial leasing solutions.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}