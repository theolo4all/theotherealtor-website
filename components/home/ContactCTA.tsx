import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="section-padding bg-[#0a1628] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#c9a84c] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[#c9a84c] font-semibold text-sm tracking-wide uppercase">Get Started</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-6" style={{ color: '#ffffff' }}>
            Ready to Make Your Move?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Whether you&apos;re buying, selling, or leasing, I&apos;m here to guide you through every step. 
            Let&apos;s talk about your real estate goals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/contact" className="btn-primary text-center">
              Schedule a Consultation
              <span className="inline-block ml-2">→</span>
            </Link>
            <a href="tel:+16478385184" className="btn-secondary text-center">
              📞 Call Now
            </a>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 pt-8 border-t border-white/10">
            <div className="flex items-center justify-center gap-3">
              <span className="text-[#c9a84c] text-xl">📞</span>
              <div className="text-left">
                <p className="text-xs" style={{ color: 'rgba(255,255,255,0.6)' }}>Cell</p>
                <p className="font-medium" style={{ color: '#ffffff' }}>647-838-5184</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <span className="text-[#c9a84c] text-xl">✉️</span>
              <div className="text-left">
                <p className="text-xs" style={{ color: 'rgba(255,255,255,0.6)' }}>Email</p>
                <p className="font-medium text-sm" style={{ color: '#ffffff' }}>theo.tajou@century21.ca</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <span className="text-[#c9a84c] text-xl">📍</span>
              <div className="text-left">
                <p className="text-xs" style={{ color: 'rgba(255,255,255,0.6)' }}>Office</p>
                <p className="font-medium text-sm" style={{ color: '#ffffff' }}>Toronto, ON</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
