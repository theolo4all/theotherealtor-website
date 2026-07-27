import {
  Home,
  Zap,
  Handshake,
  ShieldCheck,
} from "lucide-react";

const benefits = [
  {
    icon: Home,
    title: "Know Your Budget",
    description:
      "Understand exactly what you can comfortably afford before you begin your home search, helping you focus on properties within your price range.",
  },
  {
    icon: Zap,
    title: "Move Faster",
    description:
      "Having a mortgage pre-approval puts you in a stronger position to make an offer quickly when you find the right home.",
  },
  {
    icon: Handshake,
    title: "Trusted Mortgage Professionals",
    description:
      "I'll connect you with experienced mortgage professionals who will explain your financing options and answer your questions every step of the way.",
  },
  {
    icon: ShieldCheck,
    title: "Buy With Confidence",
    description:
      "With financing in place, you can focus on finding the right home instead of worrying about whether you'll qualify.",
  },
];

export default function Benefits() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#c9a84c]">
            Why Get Mortgage Ready?
          </p>

          <h2 className="mt-4 text-5xl font-bold text-[#0a1628]">
            Start Your Home Search
            <br />
            With Confidence
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Getting mortgage ready before searching for homes helps you
            understand your buying power, strengthens your offers, and
            gives you confidence throughout the buying process.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#c9a84c] hover:shadow-xl"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#c9a84c]/10">
                <benefit.icon
                  className="text-[#c9a84c]"
                  size={28}
                />
              </div>

              <h3 className="text-2xl font-bold text-[#0a1628]">
                {benefit.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {benefit.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}