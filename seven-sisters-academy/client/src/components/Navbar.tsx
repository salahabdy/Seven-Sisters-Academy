/* =============================================================
   NAVBAR — Seven Sisters Academy
   Design: International Culinary Heritage
   Transparent → solid forest green on scroll, saffron CTA
   ============================================================= */

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import LogoGold from "../assets/logo-gold.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[oklch(0.18_0.055_150/0.97)] backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-40 py-2">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <img src="/assets/logo-gold.png" alt="Seven Sisters Academy" className="h-32 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-body text-sm tracking-wide transition-colors duration-200 relative group ${
                location === link.href
                  ? "text-[oklch(0.72_0.16_75)]"
                  : "text-[oklch(0.85_0.015_80)] hover:text-[oklch(0.72_0.16_75)]"
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-1 left-0 h-px bg-[oklch(0.72_0.16_75)] transition-all duration-300 ${
                  location === link.href ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/contact"
            className="font-label text-[0.65rem] tracking-[0.2em] uppercase px-5 py-2.5 bg-[oklch(0.72_0.16_75)] text-[oklch(0.15_0.04_60)] hover:bg-[oklch(0.82_0.14_80)] transition-all duration-200 font-semibold"
          >
            Enroll Now
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-[oklch(0.95_0.015_80)] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[oklch(0.18_0.055_150/0.98)] backdrop-blur-md border-t border-white/10">
          <nav className="container py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-body text-base py-2 border-b border-white/5 transition-colors ${
                  location === link.href
                    ? "text-[oklch(0.72_0.16_75)]"
                    : "text-[oklch(0.85_0.015_80)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="font-label text-[0.65rem] tracking-[0.2em] uppercase px-5 py-3 bg-[oklch(0.72_0.16_75)] text-[oklch(0.15_0.04_60)] text-center mt-2 font-semibold"
            >
              Enroll Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
