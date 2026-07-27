import {
  MessageSquare,
  Scale,
  Clock3,
  Camera,
  BarChart3,
  HeartHandshake,
} from "lucide-react";

const expectations = [
  {
    icon: MessageSquare,
    title: "Honest Communication",
    description:
      "Clear advice and transparent communication from our first conversation to closing day.",
  },
  {
    icon: Scale,
    title: "Skilled Negotiation",
    description:
      "Focused on protecting your interests while helping you achieve the best possible outcome.",
  },
  {
    icon: Clock3,
    title: "Responsive Support",
    description:
      "Questions answered promptly and guidance available throughout every step of the process.",
  },
  {
    icon: Camera,
    title: "Modern Marketing",
    description:
      "Professional presentation and digital marketing strategies designed to maximize exposure.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Decisions",
    description:
      "Market insights and technology help remove guesswork from important real estate decisions.",
  },
  {
    icon: HeartHandshake,
    title: "Long-Term Relationships",
    description:
      "Support doesn't end after closing. My goal is to be your trusted real estate advisor for years to come.",
  },
];

export default function WhyChooseMe() {
  return (
    <section className="bg-[#07111f] py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-24 max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#c9a84c]">
            What You Can Expect
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white lg:text-5xl">
            A Better Real Estate Experience
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            Buying or selling a home should feel organized, informed and
            stress-free. Here's what you can expect when we work together.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {expectations.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-10 transition-all duration-300 hover:-translate-y-2 hover:border-[#c9a84c]/40 hover:bg-[#111d30] hover:shadow-2xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#c9a84c]/10 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-[#c9a84c]/20">
                  <Icon className="text-[#c9a84c]" size={34} />
                </div>

                <h3 className="text-xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 flex-grow leading-7 text-gray-300">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}