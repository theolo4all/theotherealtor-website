"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/neighborhoods", label: "Neighborhoods" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0a1628]/95 backdrop-blur-md">
      <div className="container mx-auto px-6">
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}

          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#c9a84c]">
              <span className="text-lg font-bold text-[#0a1628]">T</span>
            </div>

            <div className="hidden sm:block">
              <p className="text-lg font-bold leading-tight text-white">
                The Other Realtor
              </p>

              <p className="text-xs text-[#c9a84c]">
                Theo Tajou | Century 21
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 ${
                  pathname === link.href
                    ? "text-[#c9a84c]"
                    : "text-white/80 hover:text-[#c9a84c]"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <a
              href="tel:+16478385184"
              className="flex items-center gap-2 rounded-lg bg-[#c9a84c] px-4 py-2 text-sm font-semibold text-[#0a1628] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e8d5a3]"
            >
              📞 Call/Text Theo
            </a>
          </div>

          {/* Mobile Menu Button */}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-white md:hidden"
          >
            {isOpen ? (
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}

        {isOpen && (
          <div className="space-y-4 bg-[#0a1628] pb-6 md:hidden">

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block py-2 font-medium transition-colors duration-300 ${
                  pathname === link.href
                    ? "text-[#c9a84c]"
                    : "text-white hover:text-[#c9a84c]"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Mortgage Ready */}

            <Link
              href="/get-mortgage-ready"
              onClick={() => setIsOpen(false)}
              className={`block py-2 font-medium transition-colors duration-300 ${
                pathname === "/get-mortgage-ready"
                  ? "text-[#c9a84c]"
                  : "text-white hover:text-[#c9a84c]"
              }`}
            >
              Get Mortgage Ready
            </Link>

            {/* Call Button */}

            <a
              href="tel:+16478385184"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#c9a84c] px-4 py-3 font-semibold text-[#0a1628] transition-all duration-300 hover:bg-[#e8d5a3]"
            >
              📞 Call Theo
            </a>

          </div>
        )}
      </div>
    </nav>
  );
}