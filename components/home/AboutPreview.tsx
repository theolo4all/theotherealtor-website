import Link from "next/link";
import { ArrowRight, Code, Award, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function AboutPreview() {
  return (
    <section className="section-padding bg-[#0a1628]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <span className="text-[#c9a84c] font-semibold text-sm tracking-wide uppercase">About Me</span>
            <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-4" style={{ color: '#ffffff' }}>
              Tech Meets Real Estate
            </h2>
            <p className="mb-4 leading-relaxed text-sm" style={{ color: 'rgba(255,255,255,0.8)' }}>
              I&apos;m not your typical agent. With a background in technology and cloud platforms, I bring a 
              data-driven approach to real estate. I analyze market trends, automate processes, and use 
              digital tools to give my clients an edge in today&apos;s competitive market.
            </p>
            <p className="mb-6 leading-relaxed text-sm" style={{ color: 'rgba(255,255,255,0.8)' }}>
              Based in Oshawa and serving all of Ontario, I specialize in Durham Region real estate 
              while leveraging technology to serve clients across the province. From first-time buyers 
              to seasoned investors, I provide the insights and service you need.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <Code className="mx-auto text-[#c9a84c] mb-1" size={22} />
                <p className="font-bold text-sm" style={{ color: '#ffffff' }}>Tech-Driven</p>
                <p className="text-xs" style={{ color: 'rgba(255,255,255,0.6)' }}>Data & Analytics</p>
              </div>
              <div className="text-center">
                <Award className="mx-auto text-[#c9a84c] mb-1" size={22} />
                <p className="font-bold text-sm" style={{ color: '#ffffff' }}>Century 21</p>
                <p className="text-xs" style={{ color: 'rgba(255,255,255,0.6)' }}>Titans Realty</p>
              </div>
              <div className="text-center">
                <MapPin className="mx-auto text-[#c9a84c] mb-1" size={22} />
                <p className="font-bold text-sm" style={{ color: '#ffffff' }}>Oshawa</p>
                <p className="text-xs" style={{ color: 'rgba(255,255,255,0.6)' }}>All Ontario</p>
              </div>
            </div>

            <Link href="/about" className="btn-primary">
              Learn More About Me
              <ArrowRight className="inline ml-2" size={16} />
            </Link>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-[#c9a84c]/20 to-[#1a2a4a] rounded-3xl flex items-center justify-center max-w-sm mx-auto">
              <div className="text-center p-6">
                <div className="w-28 h-28 rounded-full mx-auto mb-4 overflow-hidden border-4 border-[#c9a84c]">
                  <img 
                    src="/Headshot New_InPixio.jpg" 
                    alt="{siteConfig.owner.fullName}- Real Estate Agent" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-bold text-lg" style={{ color: '#ffffff' }}>{siteConfig.owner.fullName}</p>
                <p className="text-[#c9a84c] text-sm mt-1">{siteConfig.owner.brandName}</p>
                <p className="text-sm mt-2" style={{ color: 'rgba(255,255,255,0.6)' }}>Century 21 Titans Realty Inc.</p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-36 h-36 bg-[#c9a84c]/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
