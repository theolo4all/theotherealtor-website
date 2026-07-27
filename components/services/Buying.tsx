import { Search, BarChart3, Handshake, Home } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Personalized Home Search",
    text: "Properties carefully matched to your lifestyle, budget, and long-term goals instead of overwhelming you with endless listings.",
  },
  {
    icon: BarChart3,
    title: "Market Analysis",
    text: "Every recommendation is backed by pricing data, neighbourhood trends, and comparable sales.",
  },
  {
    icon: Handshake,
    title: "Strategic Negotiation",
    text: "Strong negotiation strategies designed to protect your interests and secure the best possible outcome.",
  },
  {
    icon: Home,
    title: "Closing Support",
    text: "From accepted offer to closing day, I coordinate every detail to keep the process smooth and stress-free.",
  },
];

export default function Buying() {
  return (
    <section className="pt-16 pb-24 bg-white">
      <div className="container mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <div>

            <p className="text-sm tracking-[0.35em] uppercase text-[#c9a84c] font-semibold">
              Buying
            </p>

            <h2 className="mt-3 text-5xl font-bold text-[#0a1628] leading-tight">
              Buying a Home
              <br />
              Should Feel Exciting
            </h2>

            <p className="mt-8 text-lg text-gray-600 leading-8">
              Whether you're purchasing your first home, upgrading,
              downsizing, or investing, I combine technology,
              market expertise, and strategic negotiation to help
              you buy with confidence.
            </p>

            <Link
              href="/contact"
              className="inline-flex mt-10 rounded-full bg-[#c9a84c] px-10 py-4 font-semibold text-[#0a1628] transition hover:scale-105"
            >
              Start Your Home Search →
            </Link>

<div className="mt-8 text-center">

  <p className="text-gray-500">
    Need financing before you start?
  </p>

  <Link
    href="/get-mortgage-ready"
    className="mt-3 inline-flex items-center font-semibold text-[#c9a84c] transition-colors duration-300 hover:text-[#b89638]"
  >
    Get Mortgage Ready

    <ArrowRight className="ml-2 h-5 w-5" />
  </Link>

  </div>
          </div>

          {/* RIGHT */}

          <div className="grid gap-8">

            {features.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-gray-200 bg-white p-9 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#c9a84c] hover:shadow-xl"
              >

                <div className="flex items-start gap-5">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#c9a84c]/10">

                    <item.icon
                      className="text-[#c9a84c]"
                      size={32}
                    />

                  </div>

                  <div>

                    <h3 className="text-xl font-bold text-[#0a1628]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-gray-600 leading-7">
                      {item.text}
                    </p>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}