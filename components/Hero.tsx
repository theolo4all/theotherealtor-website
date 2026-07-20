"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative py-16 md:py-24 flex items-center bg-[#0a1628] overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#c9a84c] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#c9a84c] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-[#c9a84c] mb-6">
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0116 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <span className="text-sm font-medium tracking-wide uppercase">Serving Durham Region & All of Ontario</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6" style={{ color: '#ffffff' }}>
            Your Tech-Savvy <span style={{ color: '#c9a84c' }}>Real Estate</span> Partner
          </h1>

          <p className="text-lg md:text-xl mb-8 max-w-2xl" style={{ color: 'rgba(255,255,255,0.85)' }}>
            Hi, I&apos;m Theo Tajou. I combine cutting-edge technology with deep local market knowledge 
            to help you buy, sell, or lease property across Ontario. Based in Oshawa, serving everywhere 
            from Durham to Toronto and beyond.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link href="/contact" className="btn-primary text-center">
              Get a Free Consultation
              <span className="inline-block ml-2">→</span>
            </Link>
            <Link href="/services" className="btn-secondary text-center">
              Explore Services
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <svg width="20" height="20" fill="none" stroke="#c9a84c" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                <span className="text-2xl font-bold" style={{ color: '#ffffff' }}>Buyers</span>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.7)' }} className="text-sm">First-time & seasoned</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <svg width="20" height="20" fill="none" stroke="#c9a84c" strokeWidth="2" viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
                <span className="text-2xl font-bold" style={{ color: '#ffffff' }}>Sellers</span>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.7)' }} className="text-sm">Maximize your return</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <svg width="20" height="20" fill="none" stroke="#c9a84c" strokeWidth="2" viewBox="0 0 24 24"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0116 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span className="text-2xl font-bold" style={{ color: '#ffffff' }}>Leasing</span>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.7)' }} className="text-sm">Residential & commercial</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
