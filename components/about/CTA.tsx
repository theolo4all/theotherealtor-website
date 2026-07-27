import Link from "next/link";
import { Phone, Mail } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-[#0a1628] py-24">
      <div className="container mx-auto px-6">

        <div className="mx-auto max-w-4xl text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#c9a84c]">
            Let's Work Together
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Ready to Make Your Next Move?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-300">
            Whether you're buying your first home, selling your current
            property, or investing across Ontario, I'm here to help you make
            confident real estate decisions backed by technology, market
            knowledge, and personalized service.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <Link
              href="/contact"
              className="rounded-2xl bg-[#c9a84c] px-8 py-4 font-semibold text-[#0a1628] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#c9a84c]/30"
            >
              Book a Consultation
            </Link>

            <Link
              href="/properties"
              className="rounded-2xl border border-white/20 px-8 py-4 font-semibold text-white transition-all duration-300 hover:border-[#c9a84c] hover:text-[#c9a84c]"
            >
              Browse Listings
            </Link>

          </div>

          <div className="mt-14 flex flex-wrap justify-center gap-10 text-gray-300">

            <div className="flex items-center gap-3">
              <Phone className="text-[#c9a84c]" size={18} />
              <span>647-838-5184</span>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="text-[#c9a84c]" size={18} />
              <span>theo.tajou@century21.ca</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}