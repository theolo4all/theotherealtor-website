import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0a1628] border-t border-white/10">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[#c9a84c] rounded-lg flex items-center justify-center">
                <span className="text-[#0a1628] font-bold text-lg">T</span>
              </div>
              <div>
                <p className="font-bold" style={{ color: '#ffffff' }}>The Other Realtor</p>
                <p className="text-[#c9a84c] text-xs">Theo Tajou</p>
              </div>
            </div>
            <p className="text-sm max-w-md mb-4" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Tech-savvy real estate services for buyers, sellers, and leasing across Durham Region 
              and all of Ontario. Century 21 Titans Realty Inc.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
                <span className="text-[#c9a84c]">📞</span>
                <span>Cell: 647-838-5184</span>
              </div>
              <div className="flex items-center gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
                <span className="text-[#c9a84c]">📞</span>
                <span>Office: 416-289-2155</span>
              </div>
              <div className="flex items-center gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
                <span className="text-[#c9a84c]">✉️</span>
                <span>theo.tajou@century21.ca</span>
              </div>
              <div className="flex items-center gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
                <span className="text-[#c9a84c]">📍</span>
                <span>2100 Ellesmere Rd, Suite 116, Toronto, ON</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4" style={{ color: '#ffffff' }}>Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm hover:text-[#c9a84c] transition-colors" style={{ color: 'rgba(255,255,255,0.6)' }}>Home</Link></li>
              <li><Link href="/about" className="text-sm hover:text-[#c9a84c] transition-colors" style={{ color: 'rgba(255,255,255,0.6)' }}>About</Link></li>
              <li><Link href="/services" className="text-sm hover:text-[#c9a84c] transition-colors" style={{ color: 'rgba(255,255,255,0.6)' }}>Services</Link></li>
              <li><Link href="/neighborhoods" className="text-sm hover:text-[#c9a84c] transition-colors" style={{ color: 'rgba(255,255,255,0.6)' }}>Neighborhoods</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-[#c9a84c] transition-colors" style={{ color: 'rgba(255,255,255,0.6)' }}>Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4" style={{ color: '#ffffff' }}>Services</h4>
            <ul className="space-y-2">
              <li><span className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>Buying</span></li>
              <li><span className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>Selling</span></li>
              <li><span className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>Leasing</span></li>
              <li><span className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>Investment Properties</span></li>
              <li><span className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>Market Analytics</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>
            &copy; {new Date().getFullYear()} Theo Tajou. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
            CENTURY 21 TITANS REALTY INC., Brokerage | Independently Owned & Operated
          </p>
        </div>
      </div>
    </footer>
  );
}
