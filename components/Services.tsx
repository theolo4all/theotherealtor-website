import { Home, DollarSign, Key, BarChart3, Shield, Users } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Buyers",
    description: "From first-time buyers to seasoned investors, I use data-driven insights and tech tools to find your perfect property in Durham Region or anywhere in Ontario.",
  },
  {
    icon: DollarSign,
    title: "Sellers",
    description: "Strategic pricing, professional marketing, and targeted exposure. I leverage digital marketing and analytics to get you the best price, fast.",
  },
  {
    icon: Key,
    title: "Leasing",
    description: "Residential and commercial leasing services. I connect landlords with qualified tenants and help renters find their ideal space.",
  },
  {
    icon: BarChart3,
    title: "Market Analytics",
    description: "Access to real-time market data, neighborhood trends, and investment analysis. Make informed decisions with confidence.",
  },
  {
    icon: Shield,
    title: "Investment Properties",
    description: "Multi-unit, pre-construction, and rental property expertise. I analyze cash flow, cap rates, and growth potential.",
  },
  {
    icon: Users,
    title: "Relocation Services",
    description: "Moving to Ontario? I help newcomers and relocating professionals navigate the market, from Oshawa to Toronto and beyond.",
  },
];

export default function Services() {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <span className="text-[#c9a84c] font-semibold text-sm tracking-wide uppercase">What I Offer</span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0a1628] mt-2 mb-3">
            Full-Service Real Estate
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm">
            Whether you&apos;re buying your first home, selling an investment property, or looking for the perfect lease, 
            I bring technology and expertise to every transaction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-5 rounded-2xl bg-gray-50 hover:bg-[#0a1628] transition-all duration-300 cursor-pointer"
            >
              <div className="w-12 h-12 bg-[#c9a84c]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#c9a84c] transition-colors">
                <service.icon className="text-[#c9a84c] group-hover:text-[#0a1628] transition-colors" size={22} />
              </div>
              <h3 className="text-lg font-bold text-[#0a1628] group-hover:text-white mb-2 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 group-hover:text-white/70 transition-colors leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}