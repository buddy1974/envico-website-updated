import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Bishops House", href: "/bishops-house" },
  { label: "Funding", href: "/funding" },
  { label: "Gallery", href: "/gallery" },
  { label: "News", href: "/news" },
  { label: "Careers", href: "/careers" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Cookie Policy", href: "/cookies" },
  { label: "Complaints", href: "/complaints" },
  { label: "Easy Read", href: "/easy-read" },
];

export default function Footer() {
  return (
    <footer className="bg-envico-dark text-gray-300 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <Image
              src="/images/logo.png"
              alt="Envico Supported Living"
              width={160}
              height={54}
              className="h-14 w-auto object-contain mb-4 brightness-0 invert"
            />
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              CQC-registered supported living and domiciliary care for adults
              with learning disabilities, autism and complex needs in Hayes,
              Middlesex.
            </p>
            <Image
              src="/images/CQC.jpg"
              alt="CQC Registered"
              width={70}
              height={70}
              className="rounded-md"
            />
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-envico-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="text-white font-semibold mt-6 mb-3">Legal &amp; Accessibility</h4>
            <ul className="space-y-2 text-sm">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-envico-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-white font-medium">Head Office</p>
                <p className="text-gray-400">
                  59 Commonwealth Avenue, Hayes, UB3 2PN
                </p>
                <a href="tel:02087979974" className="text-envico-gold hover:underline">
                  020 8797 9974
                </a>
              </div>
              <div>
                <p className="text-white font-medium">Bishops House</p>
                <p className="text-gray-400">
                  45 Bishops Road, Hayes, UB3 2TE
                </p>
                <a href="tel:02087973601" className="text-envico-gold hover:underline">
                  020 8797 3601
                </a>
              </div>
              <div>
                <a
                  href="mailto:info@envicosl.co.uk"
                  className="text-envico-gold hover:underline"
                >
                  info@envicosl.co.uk
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 space-y-2 text-center text-xs text-gray-500">
          <p>
            Envico Supported Living LTD is registered with the Care Quality Commission.
            Registered in England &amp; Wales.
          </p>
          <p>
            © 2026 Envico Supported Living LTD. All rights reserved. | Developed by{" "}
            <a
              href="https://maxpromo.digital"
              target="_blank"
              rel="noopener noreferrer"
              className="text-envico-gold hover:underline"
            >
              maxpromo.digital
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
