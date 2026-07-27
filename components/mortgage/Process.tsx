import {
  ClipboardCheck,
  Handshake,
  MessageCircle,
  BadgeCheck,
  Home,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "We Review Your Information",
    description:
      "After you submit your information, I personally review your goals, timeline, and preferred location so I can connect you with the right mortgage professional.",
  },
  {
    number: "02",
    icon: Handshake,
    title: "Introduction to a Trusted Mortgage Professional",
    description:
      "I'll introduce you to one of my trusted mortgage professionals who best fits your situation. They'll explain your financing options and answer any questions you may have.",
  },
  {
    number: "03",
    icon: MessageCircle,
    title: "Mortgage Consultation",
    description:
      "You'll discuss your financial goals, review your options, and receive professional guidance on the mortgage solutions available to you.",
  },
  {
    number: "04",
    icon: BadgeCheck,
    title: "Get Mortgage Ready",
    description:
      "Once you're pre-approved, you'll have a clear understanding of your buying power and be in a stronger position when it's time to make an offer.",
  },
  {
    number: "05",
    icon: Home,
    title: "Let's Find Your Home",
    description:
      "With your financing in place, we'll begin searching for homes that fit your lifestyle, budget, and long-term goals. That's where the exciting part begins.",
  },
];

export default function Process() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#c9a84c]">
            What Happens Next?
          </p>

          <h2 className="mt-4 text-5xl font-bold text-[#0a1628]">
            Here's What You Can Expect
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Most buyers complete this first stage within a few days,
            depending on their individual situation. Throughout the
            process, I'll be available to answer questions and help
            coordinate with your mortgage professional.
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

                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#c9a84c] shadow-lg text-[#0a1628]">

                  <step.icon size={30} />

                </div>

                {index !== steps.length - 1 && (
                  <div className="my-2 h-24 w-1 rounded-full bg-[#c9a84c]/50" />
                )}

              </div>

              {/* Right */}

              <div className="mb-14 flex-1 rounded-3xl border border-gray-200 bg-gray-50 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#c9a84c] hover:shadow-xl">

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