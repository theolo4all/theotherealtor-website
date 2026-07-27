import {
  MessageCircle,
  Landmark,
  Search,
  Handshake,
  KeyRound,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Initial Consultation",
    description:
      "Every successful real estate journey starts with a conversation. We'll discuss your goals, timeline, budget, and answer your questions to create a personalized plan that fits your needs.",
  },
  {
    number: "02",
    icon: Landmark,
    title: "Mortgage & Financial Preparation",
    description:
      "Before searching for properties, I'll connect you with trusted mortgage professionals who can help you secure a pre-approval quickly and confidently. Knowing your buying power allows us to move quickly when the right opportunity appears.",
  },
  {
    number: "03",
    icon: Search,
    title: "Finding the Right Opportunity",
    description:
      "Whether you're buying, selling, leasing, or investing, we'll use market data, technology, and local expertise to identify the opportunities that best match your goals.",
  },
  {
    number: "04",
    icon: Handshake,
    title: "Negotiation & Due Diligence",
    description:
      "Once the right opportunity is found, I negotiate strategically on your behalf while coordinating inspections, reviewing market data, and helping you make informed decisions every step of the way.",
  },
  {
    number: "05",
    icon: KeyRound,
    title: "Closing & Beyond",
    description:
      "From accepted offer to closing day, I coordinate with lawyers, lenders, inspectors, and other professionals to keep everything running smoothly. Even after closing, I'm always available as your trusted real estate resource.",
  },
];

export default function Process() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="container mx-auto px-6">

        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#c9a84c]">
            Your Journey Starts Here
          </p>

          <h2 className="mt-4 text-5xl font-bold text-[#0a1628]">
            A Clear Process,
            <br />
            Every Step of the Way
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Buying, selling, leasing, or investing doesn't have to feel
            overwhelming. From our first conversation to closing day,
            I guide you through every step with a clear strategy and
            trusted professionals by your side.
          </p>

        </div>

        {/* Timeline */}

        <div className="mx-auto mt-20 max-w-5xl">

          {steps.map((step, index) => (
            <div
              key={step.number}
              className="flex gap-8"
            >
              {/* Left */}

              <div className="flex flex-col items-center">

                <div className="flex h-18 w-18 items-center justify-center rounded-full bg-[#c9a84c] shadow-lg text-[#0a1628] shadow-md">

                  <step.icon size={28} />

                </div>

                {index !== steps.length - 1 && (
                  <div className="my-2 h-20 w-1 rounded-full bg-[#c9a84c]/50" />
                )}

              </div>

              {/* Right */}

              <div className="mb-14 flex-1 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#c9a84c] hover:shadow-xl">

                <span className="text-sm font-bold tracking-[0.3em] text-[#c9a84c]">
                  STEP {step.number}
                </span>

                <h3 className="mt-2 text-2xl font-bold text-[#0a1628]">
                  {step.title}
                </h3>

                <p className="mt-4 leading-8 text-gray-600">
                  {step.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}