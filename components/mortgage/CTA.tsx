import Link from "next/link";
import { ArrowRight, Phone, Mail } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-[#0a1628] py-24">
      <div className="container mx-auto px-6">

        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#c9a84c]">
            Ready To Take The First Step?
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white leading-tight">
            Let's Get You
            <br />
            Mortgage Ready
          </h2>

          <p className="mt-8 text-xl leading-9 text-white/75">
            Whether you're buying your first home, upgrading, downsizing,
            or investing, getting your financing in place is the smartest
            way to begin. Let's make your home-buying journey simple,
            organized, and stress-free.
          </p>

          <div className="mt-12">

            <Link
              href="#mortgage-form"
              className="inline-flex items-center rounded-full bg-[#c9a84c] px-10 py-4 text-lg font-semibold text-[#0a1628] transition-all duration-300 hover:-translate-y-1 hover:bg-[#d8b95c] hover:shadow-xl"
            >
              Start My Home-Buying Journey

              <ArrowRight
                className="ml-2"
                size={20}
              />

            </Link>

          </div>

          {/* Contact Information */}

          <div className="mt-16 flex flex-col items-center justify-center gap-8 sm:flex-row">

            <div className="flex items-center gap-3">

              <Phone
                className="text-[#c9a84c]"
                size={22}
              />

              <span className="text-xl font-medium text-white">
                647-838-5184
              </span>

            </div>

            <div className="hidden h-8 border-l border-white/20 sm:block" />

            <div className="flex items-center gap-3">

              <Mail
                className="text-[#c9a84c]"
                size={22}
              />

              <span className="text-xl font-medium text-white">
                theo.tajou@century21.ca
              </span>

            </div>

          </div>

          {/* Reassurance */}

          <div className="mt-16">

            <p className="text-white/60 text-lg">
              No cost. No obligation. Just honest guidance to help you
              take the first step toward homeownership.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}