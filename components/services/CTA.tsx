import Link from "next/link";
import { ArrowRight, Phone, Mail } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-[#0a1628] pb-28">
      <div className="container mx-auto px-6">

        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#c9a84c]">
            Let's Get Started
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white leading-tight">
            Ready to Make
            <br />
            Your Next Move?
          </h2>

          <p className="mt-8 text-xl leading-9 text-white/75">
            Whether you're buying your first home, selling your current
            property, investing, or looking for the perfect rental,
            I'm here to help you make confident real estate decisions
            backed by technology, local expertise, and personalized service.
          </p>

          {/* Buttons */}

          <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#c9a84c] px-10 py-4 font-semibold text-[#0a1628] transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Book a Consultation
              <ArrowRight className="ml-2" size={18} />
            </Link>

            <Link
              href="/search"
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-10 py-4 font-semibold text-white transition-all duration-300 hover:border-[#c9a84c] hover:bg-white/10"
            >
              Browse Listings
            </Link>

          </div>

          {/* Contact */}

          <div className="mt-14 flex flex-col items-center justify-center gap-4 text-white sm:flex-row">

            <div className="flex items-center gap-3">

              <Phone
                size={20}
                className="text-[#c9a84c]"
              />

              <span className="text-xl font-medium">
                647-838-5184
              </span>

            </div>

            <div className="hidden h-6 border-l border-white/20 sm:block" />

            <div className="flex items-center gap-3">

              <Mail
                size={20}
                className="text-[#c9a84c]"
              />

              <span className="text-xl font-medium">
                theo.tajou@century21.ca
              </span>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}