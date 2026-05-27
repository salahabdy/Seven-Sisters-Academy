import { Link } from "wouter";
import { MapPin, Phone, Mail, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#001a0f] text-white pt-16">
      
      <div className="h-4 bg-[#d4a017]" />

      <div className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Brand */}
        <div>
          <img
            src="/assets/logo-gold.png"
            alt="Seven Sisters Academy"
            className="h-28 w-auto mb-6"
          />

          <p className="text-sm leading-7 text-gray-300">
            A girls-only culinary school in Nairobi, Kenya,
            dedicated to empowering women with professional
            training in baking and international cuisine.
          </p>

          <div className="flex gap-4 mt-6">
            <a
              href="https://www.instagram.com/sevensistersacademy/"
              target="_blank"
              className="border border-white/20 p-3 hover:bg-[#d4a017] transition"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>

        {/* Programs */}
        <div>
          <h3 className="text-[#d4a017] tracking-[0.3em] text-sm mb-6">
            PROGRAMS
          </h3>

          <ul className="space-y-4 text-gray-300">
            <li>Professional Baking & Pastry</li>
            <li>International Cuisine</li>
            <li>Patisserie Arts</li>
            <li>Bread & Artisan Baking</li>
            <li>Chocolate & Confectionery</li>
            <li>Culinary Management</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-[#d4a017] tracking-[0.3em] text-sm mb-6">
            QUICK LINKS
          </h3>

          <ul className="space-y-4 text-gray-300">
            <li><Link href="/about">About the Academy</Link></li>
            <li><Link href="/courses">Admissions</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-[#d4a017] tracking-[0.3em] text-sm mb-6">
            CONTACT
          </h3>

          <div className="space-y-5 text-gray-300">

            <div className="flex gap-3">
              <MapPin className="text-[#d4a017]" size={18} />
              <p>
                Ikhlas Apartment, 10C <br />
                Kirongothi Street <br />
                Nairobi, Kenya
              </p>
            </div>

            <div className="flex gap-3">
              <Phone className="text-[#d4a017]" size={18} />
              <p>+254 (0) 799 911 937</p>
            </div>

            <div className="flex gap-3">
              <Mail className="text-[#d4a017]" size={18} />
              <p>admissions@sevensistersacademy.com</p>
            </div>

          </div>

          <div className="border border-[#d4a017]/30 p-6 mt-8">
            <p className="text-[#d4a017] tracking-[0.3em] text-xs mb-3">
              INTAKE 2026
            </p>

            <h4 className="text-2xl mb-2">
              Applications Open
            </h4>

            <p className="text-sm text-gray-400">
              Every start of a month
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}