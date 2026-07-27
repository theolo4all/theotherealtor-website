import { Building2, Home, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

const landlords = [
  "Rental pricing strategy",
  "Professional marketing",
  "Tenant screening",
  "Lease preparation",
  "Move-in coordination",
];

const tenants = [
  "Personalized rental search",
  "Property showings",
  "Rental applications",
  "Lease review",
  "Move-in support",
];

export default function Leasing() {
  return (
    <section className="bg-white pt-24 pb-32">
      <div className="container mx-auto px-6">

        {/* Heading */}

        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="text-[#c9a84c] uppercase tracking-[0.3em] text-sm font-semibold">
            Leasing
          </p>

          <h2 className="text-5xl font-bold text-[#0a1628] mt-3 mb-6">
            Leasing Without the Stress
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            Whether you're leasing out your property or searching for the perfect
            rental, I simplify every step with professional guidance, market
            knowledge, and responsive communication.
          </p>
        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Landlords */}

          <div className="rounded-3xl border border-gray-200 px-10 py-12 shadow-sm hover:-translate-y-2 hover:border-[#c9a84c] hover:shadow-xl transition-all duration-300">

            <div className="flex items-center gap-4 mb-8">

              <div className="w-14 h-14 rounded-full bg-[#c9a84c]/10 flex items-center justify-center">
                <Building2 className="text-[#c9a84c]" size={26} />
              </div>

              <div>
                <p className="text-sm uppercase tracking-widest text-[#c9a84c] font-semibold">
                  For Landlords
                </p>

                <h3 className="text-3xl font-bold text-[#0a1628]">
                  Maximize Your Rental
                </h3>
              </div>

            </div>

            <div className="space-y-5">

              {landlords.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    className="text-[#c9a84c] flex-shrink-0"
                    size={20}
                  />

                  <span className="text-gray-700">
                    {item}
                  </span>
                </div>
              ))}

            </div>

          </div>

          {/* Tenants */}

          <div className="rounded-3xl border border-gray-200 p-10 shadow-sm hover:border-[#c9a84c] hover:shadow-xl transition-all duration-300">

            <div className="flex items-center gap-4 mb-8">

              <div className="w-14 h-14 rounded-full bg-[#c9a84c]/10 flex items-center justify-center">
                <Home className="text-[#c9a84c]" size={26} />
              </div>

              <div>
                <p className="text-sm uppercase tracking-widest text-[#c9a84c] font-semibold">
                  For Tenants
                </p>

                <h3 className="text-3xl font-bold text-[#0a1628]">
                  Find the Right Home
                </h3>
              </div>

            </div>

            <div className="space-y-5">

              {tenants.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    className="text-[#c9a84c] flex-shrink-0"
                    size={20}
                  />

                  <span className="text-gray-700">
                    {item}
                  </span>
                </div>
              ))}

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-16 text-center">

  <p className="text-gray-500 text-lg">
    Residential & Commercial Leasing Services
  </p>

  <div className="mt-8">
    <Link
      href="/contact"
      className="inline-flex items-center rounded-full bg-[#c9a84c] px-8 py-3 font-semibold text-[#0a1628] transition-all duration-300 hover:-translate-y-1 hover:bg-[#d8b95c] hover:shadow-lg"
    >
      Let's Talk About Leasing
      <ArrowRight size={18} className="ml-2" />
    </Link>
  </div>

</div>

      </div>
    </section>
  );
}