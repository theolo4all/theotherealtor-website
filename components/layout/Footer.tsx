import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0a1628]">
      <div className="container mx-auto px-6 py-20">

        <div className="grid gap-14 lg:grid-cols-4">

          {/* Brand */}

          <div className="lg:col-span-1">

            <div className="flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#c9a84c]">

                <span className="text-xl font-bold text-[#0a1628]">
                  T
                </span>

              </div>

              <div>

                <h3 className="text-xl font-bold text-white">
                  Theo Tajou
                </h3>

                <p className="text-sm text-[#c9a84c]">
                  REALTOR®
                </p>

              </div>

            </div>

            <p className="mt-6 leading-7 text-slate-300">
              Helping buyers, sellers, investors, and newcomers make
              confident real estate decisions across Durham Region,
              the GTA, and Ontario.
            </p>

            <div className="mt-8 space-y-4">

              <a
                href="tel:6478385184"
                className="flex items-center gap-3 text-slate-300 transition-colors hover:text-[#c9a84c]"
              >
                <Phone size={18} />
                647-838-5184
              </a>

              <a
                href="mailto:theo.tajou@century21.ca"
                className="flex items-center gap-3 text-slate-300 transition-colors hover:text-[#c9a84c]"
              >
                <Mail size={18} />
                theo.tajou@century21.ca
              </a>

              <div className="flex items-start gap-3 text-slate-300">

                <MapPin size={18} className="mt-1" />

                <span>
                  2100 Ellesmere Rd, Suite 116
                  <br />
                  Toronto, Ontario
                </span>

              </div>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h4 className="mb-6 font-bold text-white">
              Quick Links
            </h4>

            <ul className="space-y-3">

              <li><Link href="/" className="text-slate-300 hover:text-[#c9a84c] transition-colors">Home</Link></li>

              <li><Link href="/about" className="text-slate-300 hover:text-[#c9a84c] transition-colors">About</Link></li>

              <li><Link href="/services" className="text-slate-300 hover:text-[#c9a84c] transition-colors">Services</Link></li>

              <li><Link href="/neighborhoods" className="text-slate-300 hover:text-[#c9a84c] transition-colors">Neighborhoods</Link></li>

              <li><Link href="/contact" className="text-slate-300 hover:text-[#c9a84c] transition-colors">Contact</Link></li>

            </ul>

          </div>

          {/* Services */}

          <div>

            <h4 className="mb-6 font-bold text-white">
              Services
            </h4>

            <ul className="space-y-3">

              <li><Link href="/services#buying" className="text-slate-300 hover:text-[#c9a84c] transition-colors">Buying</Link></li>

              <li><Link href="/services#selling" className="text-slate-300 hover:text-[#c9a84c] transition-colors">Selling</Link></li>

              <li><Link href="/services#leasing" className="text-slate-300 hover:text-[#c9a84c] transition-colors">Leasing</Link></li>

              <li><Link href="/services#investing" className="text-slate-300 hover:text-[#c9a84c] transition-colors">Investing</Link></li>

              <li><Link href="/get-mortgage-ready" className="text-slate-300 hover:text-[#c9a84c] transition-colors">Get Mortgage Ready</Link></li>

            </ul>

          </div>

          {/* Resources */}

          <div>

            <h4 className="mb-6 font-bold text-white">
              Resources
            </h4>

            <ul className="space-y-3">

              <li>

                <Link
                  href="/search"
                  className="text-slate-300 transition-colors hover:text-[#c9a84c]"
                >
                  Search Listings
                </Link>

              </li>

              <li>

                <Link
                  href="/get-mortgage-ready"
                  className="text-slate-300 transition-colors hover:text-[#c9a84c]"
                >
                  Get Mortgage Ready
                </Link>

              </li>

              <li className="text-slate-500">
                First-Time Buyers
                <span className="ml-2 text-xs">(Coming Soon)</span>
              </li>

              <li className="text-slate-500">
                Neighbourhood Guides
                <span className="ml-2 text-xs">(Coming Soon)</span>
              </li>

            </ul>

            <div className="mt-10">

              <h5 className="mb-4 font-semibold text-white">
                Let's Connect
              </h5>

              <div className="flex gap-4">

                  <a
    href="https://www.facebook.com/share/1JnxZGjZS3/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-slate-300 transition-colors duration-300 hover:text-[#c9a84c]"
    aria-label="Facebook"
  >
    <FaFacebookF size={20} />
  </a>

  <a
    href="https://www.instagram.com/realtor_theo_tajou?igsh=ZWMzanY2NG53ZHp1"
    target="_blank"
    rel="noopener noreferrer"
    className="text-slate-300 transition-colors duration-300 hover:text-[#c9a84c]"
    aria-label="Instagram"
  >
    <FaInstagram size={20} />
  </a>

</div>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-16 border-t border-white/10 pt-8">

          <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">

            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} Theo Tajou. All Rights Reserved.
            </p>

            <p className="text-center text-sm text-[#c9a84c]">
              Your Home-Buying Journey Starts Here.
            </p>

            <p className="text-sm text-slate-500">
              CENTURY 21 TITANS REALTY INC., Brokerage
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
}