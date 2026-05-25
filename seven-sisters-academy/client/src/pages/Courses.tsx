/* =============================================================
   COURSES PAGE — Seven Sisters Academy
   Design: International Culinary Heritage
   Full program listings with filters and detailed cards
   ============================================================= */

import { useState } from "react";
import { Link } from "wouter";
import { Clock, Award, Users, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BAKING_CLASS_IMG = "/assets/FullSizeRender(8).webp";
const PASTRY_IMG = "/assets/pastry-tarts-01.webp";
const CUISINE_IMG = "/assets/IMG_9284.webp";

const categories = ["All", "Baking", "Cuisine"];

const courses = [
  {
    id: 1,
    category: "Baking",
    level: "Certificate",
    title: "International Advanced Pastry Technique Programme",
    duration: "1 month",

    image: BAKING_CLASS_IMG,
    description: "A comprehensive professional program covering the full spectrum of baking and pastry arts. Students master artisan bread production, laminated doughs, cake design, sugar work, and advanced pastry techniques under the guidance of experienced instructors.",
    modules: [
      "Artisan Bread & Sourdough",
      "Viennoiserie & Laminated Doughs",
      "Cake Design & Sugar Craft",
      "Pastry Fundamentals",
      "Food Science & Nutrition",
      "Business of Baking",
    ],
    outcomes: ["Diploma in Professional Baking", "Industry Placement", "Career Support"],
  },
  {
    id: 2,
    category: "Cuisine",
    level: "Advanced Certificate",
    title: "International Advanced Cooking Technique Programme",
    duration: "2 months",

    image: CUISINE_IMG,
    description: "An immersive journey through the world's great culinary traditions. Students develop mastery of classical techniques while exploring the vibrant cuisines of Africa, Asia, the Mediterranean, and beyond.",
    modules: [
      "Classical Culinary Techniques",
      "African Culinary Heritage",
      "Asian Culinary Traditions",
      "Mediterranean & Middle Eastern",
      "Fermentation & Preservation",
      "Modern Gastronomy",
    ],
    outcomes: ["Advanced Diploma in Cuisine", "Industry Placement", "Career Support"],
  },
];

function CourseCard({ course }: { course: typeof courses[0] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border border-white/10 bg-[oklch(0.24_0.055_150)] overflow-hidden group hover:border-[oklch(0.72_0.16_75/0.4)] transition-all duration-300">
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.14_0.05_150/0.7)] to-transparent" />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="font-label text-[0.55rem] tracking-[0.15em] uppercase px-2.5 py-1 bg-[oklch(0.72_0.16_75)] text-[oklch(0.15_0.04_60)] font-semibold">
            {course.level}
          </span>
          <span className="font-label text-[0.55rem] tracking-[0.15em] uppercase px-2.5 py-1 bg-[oklch(0.14_0.05_150/0.8)] text-[oklch(0.80_0.015_80)] border border-white/20">
            {course.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display text-xl font-semibold text-[oklch(0.95_0.015_80)] mb-3 group-hover:text-[oklch(0.72_0.16_75)] transition-colors duration-300">
          {course.title}
        </h3>
        <p className="font-body text-sm text-[oklch(0.65_0.015_80)] leading-relaxed mb-5 line-clamp-3">
          {course.description}
        </p>

        {/* Meta */}
        <div className="grid grid-cols-2 gap-3 mb-5 py-4 border-y border-white/8">
          <div className="text-center">
            <Clock size={14} className="text-[oklch(0.72_0.16_75)] mx-auto mb-1" />
            <p className="font-body text-xs text-[oklch(0.60_0.015_80)]">{course.duration}</p>
          </div>
          <div className="text-center">
            <Award size={14} className="text-[oklch(0.72_0.16_75)] mx-auto mb-1" />
            <p className="font-body text-xs text-[oklch(0.60_0.015_80)]">{course.level}</p>
          </div>
        </div>

        {/* Expandable modules */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full flex items-center justify-between text-left mb-4 group/btn"
        >
          <span className="section-label">Course Modules</span>
          {expanded ? (
            <ChevronUp size={14} className="text-[oklch(0.72_0.16_75)]" />
          ) : (
            <ChevronDown size={14} className="text-[oklch(0.65_0.015_80)]" />
          )}
        </button>

        {expanded && (
          <ul className="space-y-2 mb-5">
            {course.modules.map((mod) => (
              <li key={mod} className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-[oklch(0.72_0.16_75)] shrink-0" />
                <span className="font-body text-xs text-[oklch(0.70_0.015_80)]">{mod}</span>
              </li>
            ))}
          </ul>
        )}

        {/* CTA */}
        <div className="pt-4 border-t border-white/8">
          <Link
            href="/contact"
            className="font-label text-[0.6rem] tracking-[0.15em] uppercase px-5 py-2.5 bg-[oklch(0.72_0.16_75)] text-[oklch(0.15_0.04_60)] hover:bg-[oklch(0.82_0.14_80)] transition-all duration-200 font-semibold flex items-center justify-center gap-1.5 w-full"
          >
            Apply <ArrowRight size={11} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Courses() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? courses
    : courses.filter((c) => c.category === activeCategory);

  return (
    <div className="min-h-screen bg-[oklch(0.20_0.055_150)]">
      <Navbar />

      {/* Page Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.16_0.05_150)] to-[oklch(0.20_0.055_150)]" />
        <div className="container relative z-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="gold-rule w-10" />
            <span className="section-label">Academic Programs</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-[oklch(0.95_0.015_80)] leading-tight mb-5">
            Our Programs &<br />
            <span className="text-[oklch(0.72_0.16_75)] italic">Courses</span>
          </h1>
          <p className="font-body text-lg text-[oklch(0.70_0.015_80)] max-w-2xl leading-relaxed">
            Seven Sisters Academy offers two comprehensive culinary programs designed to empower women with world-class professional training in baking and international cuisine.
          </p>
        </div>
      </section>

      {/* Gold rule */}
      <div className="gold-rule" />

      {/* Filter Bar */}
      <section className="py-8 bg-[oklch(0.18_0.05_150)] sticky top-20 z-30 border-b border-white/8">
        <div className="container">
          <div className="flex items-center gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-label text-[0.6rem] tracking-[0.15em] uppercase px-4 py-2 transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-[oklch(0.72_0.16_75)] text-[oklch(0.15_0.04_60)]"
                    : "border border-white/15 text-[oklch(0.65_0.015_80)] hover:border-[oklch(0.72_0.16_75/0.5)] hover:text-[oklch(0.72_0.16_75)]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {filtered.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="font-display text-2xl text-[oklch(0.65_0.015_80)]">No programs found in this category.</p>
            </div>
          )}
        </div>
      </section>



      {/* CTA */}
      <section className="py-16 bg-[oklch(0.72_0.16_75)]">
        <div className="container text-center">
          <h2 className="font-display text-4xl font-bold text-[oklch(0.15_0.04_60)] mb-4">
            Not Sure Which Program is Right for You?
          </h2>
          <p className="font-body text-base text-[oklch(0.25_0.06_60)] mb-8 max-w-xl mx-auto">
            Our admissions team is here to help you find the perfect path. Book a free consultation today.
          </p>
          <Link
            href="/contact"
            className="font-label text-[0.65rem] tracking-[0.2em] uppercase px-10 py-4 bg-[oklch(0.15_0.04_60)] text-[oklch(0.95_0.015_80)] hover:bg-[oklch(0.22_0.055_150)] transition-all duration-200 font-semibold inline-flex items-center gap-2"
          >
            Book a Consultation <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
