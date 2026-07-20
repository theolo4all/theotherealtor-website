"use client";

import Link from "next/link";
import { ArrowRight, MapPin, Home, TrendingUp } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#0a1628] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#c9a84c] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#c9a84c] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-[#c9a84c] mb-6">
            <MapPin size={18} />
            <span className="text-sm font-medium tracking-wide uppercase">Serving Durham Region & All of Ontario</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6" style={{ color: '#ffffff' }}>
            Your Tech-Savvy
            <span className="text-[#c9a84c]"> Real Estate</span> Partner
          </h1>

          <p className="text-lg md:text-xl mb-8 max-w-2xl" style={{ color: 'rgba(255,255,255,0.85)' }}>
            Hi, I&apos;m Theo Tajou. I combine cutting-edge technology with deep local market knowledge 
            to help you buy, sell, or lease property across Ontario. Based in Oshawa, serving everywhere 
            from Durham to Toronto and beyond.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link href="/contact" className="btn-primary text-center">
              Get a Free Consultation
              <ArrowRight className="inline ml-2" size={18} />
            </Link>
            <Link href="/services" className="btn-secondary text-center">
              Explore Services
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
            <div>
              <div className="flex items-center gap-2 text-[#c9a84c] mb-2">
                <Home size={20} />
                <span className="text-2xl font-bold text-white">Buyers</span>
              </div>
              <p className="text-white/80 text-sm">First-time & seasoned</p>
            </div>
            <div>
              <div className="flex items-center gap-2 text-[#c9a84c] mb-2">
                <TrendingUp size={20} />
                <span className="text-2xl font-bold text-white">Sellers</span>
              </div>
              <p className="text-white/60 text-sm">Maximize your return</p>
            </div>
            <div>
              <div className="flex items-center gap-2 text-[#c9a84c] mb-2">
                <MapPin size={20} />
                <span className="text-2xl font-bold text-white">Leasing</span>
              </div>
              <p className="text-white/60 text-sm">Residential & commercial</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
