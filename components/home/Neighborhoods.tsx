import Link from "next/link";

const neighborhoods = [
  {
    name: "Oshawa",
    subtitle: "Growing Community",
    highlights: ["Great Value", "GO Transit", "Ontario Tech"],
  },
  {
    name: "Whitby",
    subtitle: "Family Favourite",
    highlights: ["Top Schools", "Waterfront", "Strong Resale"],
  },
  {
    name: "Ajax",
    subtitle: "Modern Living",
    highlights: ["Parks", "Toronto Access", "Waterfront"],
  },
  {
    name: "Pickering",
    subtitle: "Rapid Growth",
    highlights: ["New Developments", "GO Station", "Frenchman's Bay"],
  },
  {
    name: "Clarington",
    subtitle: "Small Town Charm",
    highlights: ["Affordable", "Family Friendly", "Growing Communities"],
  },
  {
    name: "Toronto & GTA",
    subtitle: "Urban Lifestyle",
    highlights: ["Luxury Homes", "Condos", "Investment"],
  },
  {
    name: "London",
    subtitle: "Southwestern Ontario",
    highlights: ["Western University", "Growing Economy", "Strong Rental Market"],
  },
  {
    name: "Ottawa",
    subtitle: "Canada's Capital",
    highlights: ["Government Hub", "Stable Market", "Excellent Schools"],
  },
];

export default function Neighborhoods() {
  return (
    <section className="bg-[#101a2b] py-24">
      <div className="container mx-auto px-6">

        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c9a84c]">
            Communities
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white lg:text-5xl">
            Explore Durham Region
            <br />
            & Beyond
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/70">
            I proudly help buyers, sellers and investors throughout Durham
            Region, the GTA and communities across Ontario.
          </p>
        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {neighborhoods.map((area) => (

            <div
              key={area.name}
              className="group rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#c9a84c]/40 hover:shadow-[0_20px_50px_rgba(201,168,76,.18)]"
            >

              {/* Icon */}

              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#c9a84c]/10 transition-all duration-300 group-hover:bg-[#c9a84c]">

                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  className="text-[#c9a84c] group-hover:text-[#0a1628]"
                >
                  <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0116 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>

              </div>

              {/* Name */}

              <h3 className="text-2xl font-bold text-white">
                {area.name}
              </h3>

              <p className="mt-2 font-medium text-[#c9a84c]">
                {area.subtitle}
              </p>

              {/* Highlights */}

              <div className="mt-6 space-y-3">

                {area.highlights.map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-3 text-white/80"
                  >
                    <div className="h-2 w-2 rounded-full bg-[#c9a84c]" />
                    <span>{item}</span>
                  </div>

                ))}

              </div>

              {/* Footer */}

              <div className="mt-8 flex items-center gap-2 font-semibold text-[#c9a84c]">

                <span>Explore Community</span>

                <span className="transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>

              </div>

            </div>

          ))}

        </div>

        {/* CTA */}

        <div className="mt-20 text-center">

          <p className="mb-6 text-xl font-medium text-white">
            Not sure which community is right for you?
          </p>

          <Link
            href="/neighborhoods"
            className="inline-flex items-center gap-3 rounded-2xl bg-[#c9a84c] px-8 py-4 text-lg font-semibold text-[#0a1628] transition-all duration-300 hover:scale-105 hover:shadow-[0_15px_35px_rgba(201,168,76,.35)]"
          >
            Browse All Communities
            <span>→</span>
          </Link>

        </div>

      </div>
    </section>
  );
}