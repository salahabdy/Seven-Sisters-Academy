/* =============================================================
   404 PAGE — Seven Sisters Academy
   Design: International Culinary Heritage
   ============================================================= */

import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[oklch(0.20_0.055_150)] flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center py-32">
        <div className="container text-center">
          <p className="font-label text-[0.65rem] tracking-[0.25em] text-[oklch(0.72_0.16_75)] uppercase mb-4">404 — Page Not Found</p>
          <h1 className="font-display text-7xl md:text-9xl font-bold text-[oklch(0.72_0.16_75/0.15)] mb-4 leading-none select-none">
            404
          </h1>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-[oklch(0.90_0.015_80)] mb-4">
            This Recipe Doesn't Exist
          </h2>
          <p className="font-body text-base text-[oklch(0.65_0.015_80)] max-w-md mx-auto mb-10 leading-relaxed">
            The page you are looking for seems to have wandered off the menu. Let us guide you back to the kitchen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="font-label text-[0.65rem] tracking-[0.2em] uppercase px-8 py-4 bg-[oklch(0.72_0.16_75)] text-[oklch(0.15_0.04_60)] hover:bg-[oklch(0.82_0.14_80)] transition-all duration-200 font-semibold inline-flex items-center gap-2 justify-center"
            >
              Back to Home <ArrowRight size={14} />
            </Link>
            <Link
              href="/courses"
              className="font-label text-[0.65rem] tracking-[0.2em] uppercase px-8 py-4 border border-[oklch(0.72_0.16_75/0.5)] text-[oklch(0.80_0.015_80)] hover:border-[oklch(0.72_0.16_75)] hover:text-[oklch(0.72_0.16_75)] transition-all duration-200 font-semibold inline-flex items-center gap-2 justify-center"
            >
              View Programs
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
