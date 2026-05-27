/* =============================================================
   FOOTER — Seven Sisters Academy
   Design: International Culinary Heritage
   Dark forest green, saffron accents, gold rule dividers
   ============================================================= */

import { Link } from "wouter";
import { Instagram, MapPin, Phone, Mail } from "lucide-react";
import LogoGold from "../assets/logo-gold.png";

// TikTok Icon Component
const TikTokIcon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.1 1.82 2.89 2.89 0 0 1 5.1-1.82V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43h-3.47a3.38 3.38 0 0 1-3.6-3.69 3.5 3.5 0 0 1 3.5-3.5c1.95 0 3.44 1.25 3.62 3.12h3.44a6.8 6.8 0 0 0-.08-1.31z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[oklch(0.14_0.045_150)] text-[oklch(0.80_0.015_80)]">
      {/* Gold rule top */}
      <div className="gold-rule" />

      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img src={LogoGold} alt="Seven Sisters Academy" className="h-32 w-auto" />
            </div>
            <p className="font-body text-sm leading-relaxed text-[oklch(0.65_0.015_80)] mb-6">
              A girls-only culinary school in Nairobi, Kenya, dedicated to empowering women with professional training in baking and international cuisine. Founded in 2024.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/sevensistersacademy/"
                className="w-9 h-9 border border-white/15 flex items-center justify-center text-[oklch(0.65_0.015_80)] hover:text-[oklch(0.72_0.16_75)] hover:border-[oklch(0.72_0.16_75)] transition-all duration-200"
                title="Instagram"
              >
                <Instagram size={15} />
              </a>
              <a
                href="https://www.tiktok.com/@sevensistersacademy1"
                className="w-9 h-9 border border-white/15 flex items-center justify-center text-[oklch(0.65_0.015_80)] hover:text-[oklch(0.72_0.16_75)] hover:border-[oklch(0.72_0.16_75)] transition-all duration-200"
                title="TikTok"
              >
                <TikTokIcon size={15} />
              </a>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="section-label mb-5">Programs</h4>
            <ul className="space-y-3">
              {[
                "Professional Baking & Pastry",
                "International Cuisine",
                "Patisserie Arts",
                "Bread & Artisan Baking",
                "Chocolate & Confectionery",
                "Culinary Management",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/courses"
                    className="font-body text-sm text-[oklch(0.65_0.015_80)] hover:text-[oklch(0.72_0.16_75)] transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="section-label mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "About the Academy", href: "/about" },
                { label: "Our Faculty", href: "/about" },
                { label: "Admissions", href: "/contact" },
                { label: "Student Life", href: "/about" },
                { label: "Career Services", href: "/about" },
                { label: "Contact Us", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="font-body text-sm text-[oklch(0.65_0.015_80)] hover:text-[oklch(0.72_0.16_75)] transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="section-label mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-[oklch(0.72_0.16_75)] mt-0.5 shrink-0" />
                <span className="font-body text-sm text-[oklch(0.65_0.015_80)] leading-relaxed">
                  Ikhlas Apartment, 10C<br />10th Floor, Kirongothi Street<br />Nairobi, Kenya
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-[oklch(0.72_0.16_75)] shrink-0" />
                <span className="font-body text-sm text-[oklch(0.65_0.015_80)]">+254 (0) 799 911 937</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-[oklch(0.72_0.16_75)] shrink-0" />
                <span className="font-body text-sm text-[oklch(0.65_0.015_80)]">admissions@sevensistersacademy.com</span>
              </li>
            </ul>

            <div className="mt-6 p-4 border border-[oklch(0.72_0.16_75/0.3)] bg-[oklch(0.72_0.16_75/0.05)]">
              <p className="section-label mb-1">Intake 2026</p>
              <p className="font-display text-[oklch(0.95_0.015_80)] text-lg font-semibold">Applications Open</p>
              <p className="font-body text-xs text-[oklch(0.65_0.015_80)] mt-1">Every start of a month</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-[oklch(0.50_0.015_80)]">
            © 2025 Seven Sisters Academy. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {["Privacy Policy", "Terms of Use", "Accreditation"].map((item) => (
              <a
                key={item}
                href="#"
                onClick={(e) => e.preventDefault()}
                className="font-body text-xs text-[oklch(0.50_0.015_80)] hover:text-[oklch(0.72_0.16_75)] transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
