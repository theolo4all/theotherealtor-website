import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  ShieldCheck,
 Handshake,
  CircleDollarSign,
} from "lucide-react";

const highlights = [
  {
    icon: CircleDollarSign,
    title: "No Cost",
  },
  {
    icon: ShieldCheck,
    title: "No Obligation",
  },
  {
    icon: Handshake,
    title: "Trusted Mortgage Professionals",
  },
  {
    icon: BadgeCheck,
    title: "Personalized Guidance",
  },
];

export default function Hero() {
  return (
    <section className="bg-[#0a1628] pt-36 pb-28">
      <div className="container mx-auto px-6">

        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#c9a84c]">
            Step 1
          </p>

          <p className="mt-4 text-lg uppercase tracking-[0.25em] text-white/70">
            Your Home-Buying Journey Starts Here
          </p>

          <h1 className="mt-5 text-6xl font-bold leading-tight text-white">
            Get Mortgage Ready
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-white/75">
            Buying a home starts with understanding your budget—not guessing it.
            I'll connect you with trusted mortgage professionals who will help
            you understand your financing options, answer your questions, and
            guide you through the pre-approval process so you can move forward
            with confidence.
          </p>

          <div className="mt-12">

            <Link
              href="#mortgage-form"
              className="inline-flex items-center rounded-full bg-[#c9a84c] px-10 py-4 text-lg font-semibold text-[#0a1628] transition-all duration-300 hover:-translate-y-1 hover:bg-[#d8b95c] hover:shadow-xl"
            >
              Start My Journey

              <ArrowRight
                className="ml-2"
                size={20}
              />

            </Link>

          </div>

        </div>

        <div className="mx-auto mt-20 grid max-w-5xl gap-6 md:grid-cols-4">

          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-[#15233b] p-6 text-center transition-all duration-300 hover:border-[#c9a84c] hover:-translate-y-2"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#c9a84c]/10">
                <item.icon
                  className="text-[#c9a84c]"
                  size={24}
                />
              </div>

              <h3 className="font-semibold text-white">
                {item.title}
              </h3>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}