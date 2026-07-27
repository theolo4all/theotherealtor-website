import { BarChart3, Handshake, MapPinned } from "lucide-react";

const cards = [
  {
    icon: BarChart3,
    title: "Technology-Driven Insights",
    description:
      "Modern technology and market analysis help identify opportunities and support informed real estate decisions.",
  },
  {
    icon: Handshake,
    title: "Personalized Guidance",
    description:
      "Every client has different goals. Whether you're buying, selling, or investing, the strategy is tailored to your needs.",
  },
  {
    icon: MapPinned,
    title: "Local Market Expertise",
    description:
      "Knowledge of Ontario communities and neighbourhood trends helps you move forward with confidence.",
  },
];

export default function Approach() {
  return (
    <section className="bg-white py-32 lg:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-24 max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#c9a84c]">
            My Approach
          </p>

          <h2 className="mt-4 text-4xl font-bold text-[#07111f] lg:text-5xl">
            How I Help You Succeed
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Every client has different goals. My approach combines
            technology, market expertise and personalized guidance to help
            you make confident real estate decisions.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className="group flex h-full flex-col rounded-3xl border border-gray-200 bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#c9a84c]/40 hover:bg-[#07111f] hover:shadow-xl"
              >
                <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-[#c9a84c]/10">
                  <Icon size={42} className="text-[#c9a84c]" />
                </div>

                <h3 className="text-2xl font-bold text-[#07111f] transition-colors duration-300 group-hover:text-white">
                  {card.title}
                </h3>

                <p className="mt-5 flex-grow leading-8 text-gray-600 transition-colors duration-300 group-hover:text-gray-300">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}