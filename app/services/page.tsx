import { Home, DollarSign, Key, BarChart3, Shield, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Home,
    title: "For Buyers",
    description: "Finding your perfect home requires more than browsing listings. I use data analytics to identify properties that match your criteria, negotiate strategically, and guide you through every step from pre-approval to closing.",
    features: [
      "Personalized property search with data-driven matching",
      "Market analysis to ensure fair pricing",
      "Negotiation strategy backed by comparable sales data",
      "First-time buyer education and guidance",
      "Access to off-market and pre-construction opportunities",
    ],
  },
  {
    icon: DollarSign,
    title: "For Sellers",
    description: "Selling your property is about maximizing value and minimizing time on market. I leverage digital marketing, professional photography, and targeted exposure to attract qualified buyers and secure the best price.",
    features: [
      "Comprehensive market analysis and pricing strategy",
      "Professional staging and photography recommendations",
      "Multi-platform digital marketing campaigns",
      "Open house coordination and buyer screening",
      "Offer negotiation and closing management",
    ],
  },
  {
    icon: Key,
    title: "Leasing Services",
    description: "Whether you&apos;re a landlord seeking quality tenants or a renter looking for the perfect space, I streamline the leasing process with thorough screening, market-rate analysis, and efficient documentation.",
    features: [
      "Tenant screening and qualification",
      "Market-rate rental analysis",
      "Lease agreement preparation and review",
      "Property showings and applications",
      "Residential and commercial leasing",
    ],
  },
  {
    icon: BarChart3,
    title: "Market Analytics",
    description: "My tech background enables me to provide deep market insights that most agents can&apos;t offer. I analyze trends, predict market movements, and identify investment opportunities using data.",
    features: [
      "Neighborhood price trend analysis",
      "Investment ROI calculations",
      "Comparative market analysis (CMA)",
      "Days on market and inventory tracking",
      "Custom reports for investor clients",
    ],
  },
  {
    icon: Shield,
    title: "Investment Properties",
    description: "Building wealth through real estate requires strategic thinking. I help investors identify cash-flow positive properties, analyze cap rates, and build portfolios across Ontario.",
    features: [
      "Multi-unit and rental property analysis",
      "Pre-construction investment opportunities",
      "Cash flow and cap rate calculations",
      "Portfolio growth strategy",
      "1031 exchange and tax considerations guidance",
    ],
  },
  {
    icon: Users,
    title: "Relocation Services",
    description: "Moving to Ontario from another province or country? I help newcomers navigate the market, understand local regulations, and find communities that match their lifestyle and budget.",
    features: [
      "Newcomer orientation to Ontario real estate",
      "Virtual tours and remote buying assistance",
      "School district and community research",
      "Mortgage pre-approval guidance for newcomers",
      "Settlement support and local connections",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-[#0a1628] py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-[#c9a84c] font-semibold text-sm tracking-wide uppercase">Services</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6">
              Full-Service Real Estate
            </h1>
            <p className="text-xl text-white/70">
              Comprehensive real estate services powered by technology and local expertise. 
              Serving Durham Region and all of Ontario.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="grid md:grid-cols-3 gap-8 p-8 bg-gray-50 rounded-2xl hover:bg-[#0a1628] group transition-all duration-300"
              >
                <div className="md:col-span-1">
                  <div className="w-16 h-16 bg-[#c9a84c]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#c9a84c] transition-colors">
                    <service.icon className="text-[#c9a84c] group-hover:text-[#0a1628] transition-colors" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0a1628] group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                </div>
                <div className="md:col-span-2">
                  <p className="text-gray-600 group-hover:text-white/70 mb-4 transition-colors leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, fIndex) => (
                      <li
                        key={fIndex}
                        className="flex items-start gap-2 text-gray-600 group-hover:text-white/70 transition-colors"
                      >
                        <ArrowRight className="text-[#c9a84c] mt-1 flex-shrink-0" size={14} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/contact" className="btn-primary">
              Discuss Your Needs
              <ArrowRight className="inline ml-2" size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
