import Link from "next/link";
import { ArrowRight, Code, Award, MapPin } from "lucide-react";

export default function AboutPreview() {
  return (
    <section className="section-padding bg-[#0a1628]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[#c9a84c] font-semibold text-sm tracking-wide uppercase">About Me</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-6">
              Tech Meets Real Estate
            </h2>
            <p className="text-white/70 mb-6 leading-relaxed">
              I&apos;m not your typical agent. With a background in technology and cloud platforms, I bring a 
              data-driven approach to real estate. I analyze market trends, automate processes, and use 
              digital tools to give my clients an edge in today&apos;s competitive market.
            </p>
            <p className="text-white/70 mb-8 leading-relaxed">
              Based in Oshawa and serving all of Ontario, I specialize in Durham Region real estate 
              while leveraging technology to serve clients across the province. From first-time buyers 
              to seasoned investors, I provide the insights and service you need.
            </p>

            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Code className="mx-auto text-[#c9a84c] mb-2" size={28} />
                <p className="text-white font-bold">Tech-Driven</p>
                <p className="text-white/60 text-sm">Data & Analytics</p>
              </div>
              <div className="text-center">
                <Award className="mx-auto text-[#c9a84c] mb-2" size={28} />
                <p className="text-white font-bold">Century 21</p>
                <p className="text-white/60 text-sm">Titans Realty</p>
              </div>
              <div className="text-center">
                <MapPin className="mx-auto text-[#c9a84c] mb-2" size={28} />
                <p className="text-white font-bold">Oshawa</p>
                <p className="text-white/60 text-sm">All Ontario</p>
              </div>
            </div>

            <Link href="/about" className="btn-primary">
              Learn More About Me
              <ArrowRight className="inline ml-2" size={18} />
            </Link>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-[#c9a84c]/20 to-[#1a2a4a] rounded-3xl flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-32 h-32 bg-[#c9a84c] rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-[#0a1628] font-bold text-4xl">TT</span>
                </div>
                <p className="text-white font-bold text-xl">Theo Tajou</p>
                <p className="text-[#c9a84c] text-sm mt-1">The Other Realtor</p>
                <p className="text-white/60 text-sm mt-4">Century 21 Titans Realty Inc.</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#c9a84c]/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
