import {
  DollarSign,
  Camera,
  Handshake,
  Megaphone,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: DollarSign,
    title: "Strategic Pricing",
    description:
      "Comprehensive market analysis to position your property competitively and maximize value.",
  },
  {
    icon: Camera,
    title: "Professional Marketing",
    description:
      "High-quality photography, MLS exposure, digital advertising, and social media campaigns.",
  },
  {
    icon: Handshake,
    title: "Expert Negotiation",
    description:
      "Strong negotiation strategies designed to protect your equity and secure the best terms.",
  },
  {
    icon: Megaphone,
    title: "Maximum Exposure",
    description:
      "Your property is promoted through Century 21's network and targeted online marketing.",
  },
];

export default function Selling() {
  return (
    <section className="bg-[#0a1628] pt-20 pb-28">
      <div className="container mx-auto px-8 py-3">

        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-[#c9a84c] uppercase tracking-[0.3em] text-sm font-semibold">
            Selling
          </p>

          <h2 className="text-5xl font-bold text-white mt-3">
            Sell With Confidence
          </h2>

          <p className="mt-6 text-lg text-gray-300 leading-8">
            Every property deserves more than a listing. I combine pricing
            strategy, professional marketing, and skilled negotiation to help
            you sell faster and for the strongest possible value.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mt-16">

          {features.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-9 transition duration-300 hover:border-[#c9a84c] hover:bg-[#18263f]"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#c9a84c]/10 flex items-center justify-center mb-6">
                <item.icon className="text-[#c9a84c]" size={22} />
              </div>

              <h3 className="text-2xl font-semibold text-white mb-3">
                {item.title}
              </h3>

              <p className="text-gray-300 leading-7">
                {item.description}
              </p>
            </div>
          ))}

        </div>

        <div className="mt-16 flex justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-[#c9a84c] px-10 py-4 font-semibold text-[#0a1628] transition hover:scale-105"
          >
            Free Home Evaluation
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>

      </div>
    </section>
  );
}