import {
  TrendingUp,
  Building2,
  BarChart3,
  MapPinned,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: TrendingUp,
    title: "Cash Flow Evaluation",
    description:
      "Estimate rental income, expenses, and long-term profitability before making an investment.",
  },
  {
    icon: BarChart3,
    title: "ROI Analysis",
    description:
      "Compare opportunities using market trends, appreciation potential, and your investment goals.",
  },
  {
    icon: MapPinned,
    title: "Growth Communities",
    description:
      "Identify Ontario communities with strong long-term growth potential and demand.",
  },
  {
    icon: Building2,
    title: "Portfolio Strategy",
    description:
      "Develop a long-term investment strategy that aligns with your financial objectives.",
  },
];

const advantages = [
  "Data-informed property evaluation",
  "Market & neighbourhood research",
  "Long-term investment planning",
  "Ontario-wide opportunities",
];

export default function Investing() {
  return (
    <section className="bg-[#0a1628] py-24">
      <div className="container mx-auto px-6">

        <div className="max-w-3xl mx-auto text-center">

          <p className="text-sm uppercase tracking-[0.3em] text-[#c9a84c] font-semibold">
            Investing
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            Build Long-Term Wealth Through Real Estate
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/70">
            Whether you're purchasing your first investment property or
            expanding your portfolio, I help you evaluate opportunities
            using market research, local expertise, and thoughtful analysis.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {features.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-[#15233b] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#c9a84c]"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#c9a84c]/10">
                <item.icon className="text-[#c9a84c]" size={28} />
              </div>

              <h3 className="text-2xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-3 leading-7 text-white/70">
                {item.description}
              </p>
            </div>
          ))}

        </div>

        <div className="mx-auto mt-16 max-w-4xl rounded-3xl border border-white/10 bg-[#15233b] p-12">

          <h3 className="text-3xl font-bold text-white text-center">
            A Smarter Approach to Investing
          </h3>

          <div className="mt-8 grid gap-5 md:grid-cols-2">

            {advantages.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 className="text-[#c9a84c]" size={20} />
                <span className="text-white/80">{item}</span>
              </div>
            ))}

          </div>

        </div>

        <div className="mt-24 flex justify-center">

          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-[#c9a84c] px-8 py-4 font-semibold text-[#0a1628] transition-all duration-300 hover:-translate-y-1 hover:bg-[#d8b95c] hover:shadow-xl"
          >
            Explore Investment Opportunities
            <ArrowRight className="ml-2" size={18} />
          </Link>

        </div>

      </div>
    </section>
  );
}