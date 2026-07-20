import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a1628] border-t border-white/10">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[#c9a84c] rounded-lg flex items-center justify-center">
                <span className="text-[#0a1628] font-bold text-lg">T</span>
              </div>
              <div>
                <p className="text-white font-bold">The Other Realtor</p>
                <p className="text-[#c9a84c] text-xs">Theo Tajou</p>
              </div>
            </div>
            <p className="text-white/60 text-sm max-w-md mb-4">
              Tech-savvy real estate services for buyers, sellers, and leasing across Durham Region 
              and all of Ontario. Century 21 Titans Realty Inc.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <Phone size={14} className="text-[#c9a84c]" />
                <span>Cell: 647-838-5184</span>
              </div>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <Phone size={14} className="text-[#c9a84c]" />
                <span>Office: 416-289-2155</span>
              </div>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <Mail size={14} className="text-[#c9a84c]" />
                <span>theo.tajou@century21.ca</span>
              </div>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <MapPin size={14} className="text-[#c9a84c]" />
                <span>2100 Ellesmere Rd, Suite 116, Toronto, ON</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-white/60 hover:text-[#c9a84c] text-sm transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-white/60 hover:text-[#c9a84c] text-sm transition-colors">About</Link></li>
              <li><Link href="/services" className="text-white/60 hover:text-[#c9a84c] text-sm transition-colors">Services</Link></li>
              <li><Link href="/neighborhoods" className="text-white/60 hover:text-[#c9a84c] text-sm transition-colors">Neighborhoods</Link></li>
              <li><Link href="/contact" className="text-white/60 hover:text-[#c9a84c] text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><span className="text-white/60 text-sm">Buying</span></li>
              <li><span className="text-white/60 text-sm">Selling</span></li>
              <li><span className="text-white/60 text-sm">Leasing</span></li>
              <li><span className="text-white/60 text-sm">Investment Properties</span></li>
              <li><span className="text-white/60 text-sm">Market Analytics</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Theo Tajou. All rights reserved.
          </p>
          <p className="text-white/40 text-xs">
            CENTURY 21 TITANS REALTY INC., Brokerage | Independently Owned & Operated
          </p>
        </div>
      </div>
    </footer>
  );
}
