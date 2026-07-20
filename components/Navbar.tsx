"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/neighborhoods", label: "Neighborhoods" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a1628]/95 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#c9a84c] rounded-lg flex items-center justify-center">
              <span className="text-[#0a1628] font-bold text-lg">T</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-white font-bold text-lg leading-tight">The Other Realtor</p>
              <p className="text-[#c9a84c] text-xs">Theo Tajou | Century 21</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-[#c9a84c] transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+16478385184"
              className="flex items-center gap-2 bg-[#c9a84c] text-[#0a1628] px-4 py-2 rounded-lg font-semibold text-sm hover:bg-[#e8d5a3] transition-colors"
            >
              <Phone size={16} />
              647-838-5184
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden pb-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-white/80 hover:text-[#c9a84c] transition-colors py-2"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+16478385184"
              className="flex items-center gap-2 bg-[#c9a84c] text-[#0a1628] px-4 py-3 rounded-lg font-semibold w-full justify-center"
            >
              <Phone size={16} />
              647-838-5184
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
