import {
  ArrowRight,
  Home,
  TrendingUp,
  KeyRound,
  ChartNoAxesCombined,
  Building2,
  MapPinned,
} from "lucide-react";

const services = [
  {
    title: "Buy",
    description:
      "Find your ideal home with expert guidance, smart negotiation and technology-powered market insights.",
    icon: Home,
  },
  {
    title: "Sell",
    description:
      "Strategic pricing, premium marketing and maximum exposure to help you achieve the best possible sale price.",
    icon: TrendingUp,
  },
  {
    title: "Lease",
    description:
      "Helping landlords secure qualified tenants while assisting renters in finding the perfect place to call home.",
    icon: KeyRound,
  },
  {
    title: "Market Intelligence",
    description:
      "Real-time market data, neighbourhood trends and pricing insights that help you make informed decisions.",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Investment",
    description:
      "Data-driven analysis for rental properties, pre-construction opportunities and long-term wealth building.",
    icon: Building2,
  },
  {
    title: "Relocation",
    description:
      "Whether you're moving across Ontario or arriving from abroad, I'll help make your transition seamless.",
    icon: MapPinned,
  },
];

export default function Services() {
  return (
    <section className="bg-[#101a2b] py-24">
      <div className="container mx-auto px-6">

        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c9a84c]">
            How I Help
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white lg:text-5xl">
            Real Estate Services
            <br />
            Designed Around You
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/70">
            Whether you're buying your first home, selling an investment
            property, leasing, or building your portfolio, you'll receive
            expert guidance backed by technology and local market knowledge.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#c9a84c]/40 hover:shadow-[0_20px_50px_rgba(201,168,76,.18)]"
              >

                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#c9a84c]/10 transition-all duration-300 group-hover:bg-[#c9a84c]">

                  <Icon
                    size={30}
                    className="text-[#c9a84c] transition-colors duration-300 group-hover:text-[#0a1628]"
                  />

                </div>

                <h3 className="text-2xl font-bold text-white">
                  {service.title}
                </h3>

                <p className="mt-4 leading-8 text-white/70">
                  {service.description}
                </p>

                <div className="mt-8 flex items-center gap-2 font-semibold text-[#c9a84c]">

                  <span>Learn More</span>

                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-2"
                  />

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}