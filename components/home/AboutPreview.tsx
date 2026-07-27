import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Code,
  Award,
  MapPin,
  Cpu,
  CheckCircle2,
} from "lucide-react";
import { siteConfig } from "@/config/site";

export default function AboutPreview() {
  return (
    <section className="relative overflow-hidden bg-[#0a1628] py-24">
      {/* Background Glow */}
      <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[#c9a84c]/5 blur-3xl" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT */}

          <div>
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-[#c9a84c]">
              About Me
            </span>

            <h2 className="mb-6 text-4xl font-bold leading-tight text-white lg:text-5xl">
              Where Technology
              <br />
              Meets Real Estate
            </h2>

            <p className="mb-6 text-lg leading-8 text-white/85">
              Most Realtors help people buy and sell homes.
              <br />
              <br />
              I help clients make smarter real estate decisions using technology,
              market data and local expertise.
            </p>

            <p className="mb-10 leading-8 text-white/70">
              My background in Cloud Engineering and DevOps allows me to analyze
              markets differently, automate repetitive processes and uncover
              insights that many traditional agents simply don't have.
              <br />
              <br />
              Whether you're buying your first home, selling an investment
              property, leasing, or expanding your portfolio, you'll benefit
              from a modern real estate experience powered by technology.
            </p>

            {/* FEATURES */}

            {/* FEATURES */}

<div className="mb-10 grid grid-cols-1 gap-4 md:grid-cols-3">

  <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#c9a84c]/40 hover:bg-white/10">
    <Code className="mx-auto mb-4 text-[#c9a84c]" size={28} />

    <h4 className="font-semibold text-white">
      Tech-Driven
    </h4>

    <p className="mt-2 text-sm text-white/60">
      Cloud & Data Analytics
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#c9a84c]/40 hover:bg-white/10">
    <Award className="mx-auto mb-4 text-[#c9a84c]" size={28} />

    <h4 className="font-semibold text-white">
      Century 21
    </h4>

    <p className="mt-2 text-sm text-white/60">
      Trusted Global Brand
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#c9a84c]/40 hover:bg-white/10">
    <MapPin className="mx-auto mb-4 text-[#c9a84c]" size={28} />

    <h4 className="font-semibold text-white">
      Durham Region
    </h4>

    <p className="mt-2 text-sm text-white/60">
      Local Expertise
    </p>
  </div>

</div>

<Link
  href="/about"
  className="group mt-10 inline-flex items-center gap-3 rounded-2xl bg-[#c9a84c] px-8 py-4 font-semibold text-[#0a1628] transition-all duration-300 hover:-translate-y-1 hover:bg-[#d8b85a] hover:shadow-xl"
>
  Learn More About Me

  <ArrowRight
    size={18}
    className="transition-transform duration-300 group-hover:translate-x-1"
  />
</Link>
          </div>

          {/* RIGHT */}

          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Glow */}

              <div className="absolute inset-0 rounded-3xl bg-[#c9a84c]/10 blur-3xl" />

              {/* CARD */}

              <div className="relative rounded-[32px] border border-white/10 bg-gradient-to-br from-[#2b3649] via-[#222f44] to-[#172131] p-12 text-center shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-[#c9a84c]/40 hover:shadow-[0_35px_80px_rgba(201,168,76,.22)]">
                {/* Premium Top Highlight */}
                <div className="absolute left-8 right-8 top-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/60 to-transparent" />
                
                {/* PHOTO */}

                <div className="mx-auto h-44 w-44 overflow-hidden rounded-full border-[5px] border-[#c9a84c] shadow-2xl">
                  <Image
                    src="/theo-tajou.jpg"
                    alt={siteConfig.owner.fullName}
                    width={176}
                    height={176}
                    className="h-full w-full object-cover object-center"
                    priority
                  />
                </div>

                {/* Divider */}

                <div className="mx-auto mb-6 mt-8 h-1 w-20 rounded-full bg-[#c9a84c]" />

                <h3 className="text-3xl font-bold text-white">
                  {siteConfig.owner.fullName}
                </h3>

                <p className="mt-2 text-lg font-medium text-[#c9a84c]">
                  {siteConfig.owner.brandName}
                </p>

                <p className="mt-3 text-white/60">
                  Century 21 Titans Realty Inc.
                </p>

                {/* Badge */}

                <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#c9a84c]/30 bg-[#c9a84c]/15 px-5 py-2">
                  <Cpu
                    size={18}
                    className="text-[#c9a84c]"
                  />

                  <span className="text-sm font-medium text-[#c9a84c]">
                    Technology-Driven Realtor
                  </span>
                </div>

                {/* TRUST LIST */}

                <div className="mt-8 space-y-4 text-left">
                  <div className="flex items-center gap-3">
                    <CheckCircle2
                      size={18}
                      className="text-[#c9a84c]"
                    />

                    <span className="text-white/80">
                      Cloud Platform Engineer
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <CheckCircle2
                      size={18}
                      className="text-[#c9a84c]"
                    />

                    <span className="text-white/80">
                      Data-Driven Market Analysis
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <CheckCircle2
                      size={18}
                      className="text-[#c9a84c]"
                    />

                    <span className="text-white/80">
                      Durham Region Specialist
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <CheckCircle2
                      size={18}
                      className="text-[#c9a84c]"
                    />

                    <span className="text-white/80">
                      Buyers • Sellers • Investors
                    </span>
                  </div>
                </div>

                {/* CTA */}

                <Link
                  href="/contact"
                  className="mt-10 inline-flex w-full items-center justify-center rounded-2xl bg-[#c9a84c] px-6 py-4 font-semibold text-[#0a1628] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d8b85a] hover:shadow-lg"
                >
                  Book a Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}