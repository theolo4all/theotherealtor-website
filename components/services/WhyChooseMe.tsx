import {
  CheckCircle2,
  Cpu,
  Handshake,
  MapPinned,
  MessageCircle,
  ShieldCheck,
  HeartHandshake,
} from "lucide-react";

const reasons = [
  {
    icon: Cpu,
    title: "Technology-Driven Decisions",
  },
  {
    icon: MapPinned,
    title: "Local Market Expertise",
  },
  {
    icon: Handshake,
    title: "Strong Negotiation",
  },
  {
    icon: MessageCircle,
    title: "Honest Communication",
  },
  {
    icon: ShieldCheck,
    title: "Professional Guidance",
  },
  {
    icon: HeartHandshake,
    title: "Long-Term Relationships",
  },
];

export default function WhyChooseMe() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6">

        {/* Header */}

        <div className="max-w-3xl mx-auto text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#c9a84c]">
            Why Choose Me
          </p>

          <h2 className="mt-4 text-5xl font-bold text-[#0a1628]">
            Technology Meets
            <br />
            Personalized Real Estate Service
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Real estate is about more than buying and selling properties.
            It's about making informed decisions with confidence.
            My approach combines technology, market knowledge,
            and personalized service to deliver an experience that is
            organized, transparent, and focused on your goals.
          </p>

        </div>

        {/* Reasons */}

        <div className="mt-16 grid gap-6 md:grid-cols-2">

          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="flex items-center gap-4 rounded-2xl border border-gray-200 p-6 transition-all duration-300 hover:border-[#c9a84c] hover:shadow-lg"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#c9a84c]/10">
                <reason.icon className="text-[#c9a84c]" size={24} />
              </div>

              <h3 className="text-xl font-semibold text-[#0a1628]">
                {reason.title}
              </h3>
            </div>
          ))}

        </div>

        {/* Quote */}

        <div className="mx-auto mt-24 max-w-3xl rounded-3xl bg-gray-50 p-12 text-center">

          <CheckCircle2
            className="mx-auto mb-6 text-[#c9a84c]"
            size={40}
          />

          <p className="text-2xl leading-10 font-medium text-[#0a1628] italic">

            "My goal isn't simply helping you complete a transaction.
            It's helping you make confident real estate decisions backed
            by technology, local expertise, and personalized guidance."

          </p>

          <div className="mt-8">

            <p className="font-bold text-[#0a1628]">
              Theo Tajou
            </p>

            <p className="text-gray-500">
              REALTOR® | Century 21 Titans Realty
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}