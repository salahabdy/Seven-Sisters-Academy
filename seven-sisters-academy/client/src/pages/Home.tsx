/* =============================================================
   HOME PAGE — Seven Sisters Academy
   Design: International Culinary Heritage
   Sections: Hero, Stats, Programs, About Snippet, Testimonials, CTA
   ============================================================= */

import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { ChevronDown, Award, Globe, Users, BookOpen, Star, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Image URLs from real culinary photos
const HERO_IMG = "/manus-storage/FullSizeRender(17)_1d9f01b3.webp";
const BAKING_CLASS_IMG = "/manus-storage/FullSizeRender(5)_cb7d7237.webp";
const PASTRY_IMG = "/manus-storage/pastry-tarts-01.webp";
const CHEF_IMG = "/manus-storage/IMG_6926(1)_5f68f251.webp";
const GALLERY_IMG_1 = "/manus-storage/FullSizeRender(6)_65609ca3.webp";
const GALLERY_IMG_2 = "/manus-storage/FullSizeRender(8)_5a2bc803.webp";
const GALLERY_IMG_3 = "/manus-storage/FullSizeRender(9)_8886d995.webp";
const GALLERY_IMG_4 = "/manus-storage/FullSizeRender(10)_0fb13f7e.webp";
const GALLERY_IMG_5 = "/manus-storage/FullSizeRender(12)_1f44154e.webp";
const GALLERY_IMG_6 = "/manus-storage/FullSizeRender(13)_d669621f.webp";

const stats = [
  { value: "1000+", label: "Graduates" },
  { value: "2", label: "Programs" },
];

const programs = [
  {
    number: "01",
    title: "International Advanced Pastry Technique Programme",
    duration: "1 month",
    level: "Certificate",
    description: "A comprehensive professional program covering the full spectrum of baking and pastry arts. Students master artisan bread production, laminated doughs, cake design, sugar work, and advanced pastry techniques under the guidance of experienced instructors.",
    tags: ["Artisan Breads", "Viennoiserie", "Cake Design"],
  },
  {
    number: "02",
    title: "International Advanced Cooking Technique Programme",
    duration: "2 months",
    level: "Advanced Certificate",
    description: "An immersive journey through the world's great culinary traditions. Students develop mastery of classical techniques while exploring the vibrant cuisines of Africa, Asia, the Mediterranean, and beyond.",
    tags: ["Classical Techniques", "African Heritage", "Asian Traditions"],
  },
];

const testimonials = [
  {
    quote: "Seven Sisters Academy gave me the confidence and technical skills to pursue my dream of becoming a professional baker. The supportive environment for women is truly special.",
    name: "Aisha Hirsi",
    title: "Chef, Culinary Entrepreneur",
    country: "Kenya",
  },
  {
    quote: "The curriculum is world-class and the mentorship from experienced female chefs has been transformative. I feel empowered to start my own catering business.",
    name: "Rukia Mohamed",
    title: "Chef, Culinary Entrepreneur",
    country: "Kenya",
  },
  {
    quote: "Being in an all-girls environment made me feel supported and encouraged to push my boundaries. Seven Sisters Academy truly invests in our success.",
    name: "Zainab Hassan",
    title: "Chef, Culinary Entrepreneur",
    country: "Uganda",
  },
];

function AnimatedCounter({ target, suffix = "" }: { target: string; suffix?: string }) {
  return (
    <span className="font-display text-4xl md:text-5xl font-bold text-[oklch(0.72_0.16_75)]">
      {target}
    </span>
  );
}

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function CreationsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const items = [
    { img: GALLERY_IMG_1, title: "Artisan Pastries", desc: "Hand-crafted with precision" },
    { img: GALLERY_IMG_2, title: "Signature Desserts", desc: "Creative flavor combinations" },
    { img: GALLERY_IMG_3, title: "Plated Cuisine", desc: "Culinary artistry on display" },
    { img: GALLERY_IMG_4, title: "Baking Excellence", desc: "Mastery of traditional techniques" },
    { img: GALLERY_IMG_5, title: "Culinary Techniques", desc: "Advanced skill demonstration" },
    { img: GALLERY_IMG_6, title: "Creative Plating", desc: "Modern presentation methods" },
  ];

  useEffect(() => {
    if (!isAutoPlay) return;
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 5000);
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlay, items.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    setIsAutoPlay(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
    setIsAutoPlay(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
  };

  return (
    <section className="py-24 bg-[oklch(0.20_0.055_150)]">
      <div className="container">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="section-label">Student Work</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[oklch(0.95_0.015_80)] mt-3 mb-4">
            Creations from Our
            <br />
            <span className="text-[oklch(0.72_0.16_75)] italic">Culinary Artists</span>
          </h2>
          <p className="font-body text-lg text-[oklch(0.70_0.015_80)] max-w-2xl mx-auto">
            Witness the artistry and precision of our students' work across baking, pastry, and international cuisine.
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative group">
          {/* Main Image Container */}
          <div className="relative h-[500px] md:h-[600px] overflow-hidden rounded-lg shadow-2xl">
            {items.map((item, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  index === currentIndex
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95"
                }`}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.15_0.04_60/0.95)] via-[oklch(0.15_0.04_60/0.40)] to-transparent" />

                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                  <div className="max-w-2xl">
                    <p className="font-body text-sm text-[oklch(0.72_0.16_75)] mb-2 uppercase tracking-widest">
                      {item.desc}
                    </p>
                    <h3 className="font-display text-4xl md:text-5xl font-bold mb-2">{item.title}</h3>
                    <div className="w-16 h-1 bg-[oklch(0.72_0.16_75)]" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-[oklch(0.72_0.16_75)] hover:bg-[oklch(0.82_0.14_80)] text-[oklch(0.15_0.04_60)] p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 transform hover:scale-110"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-[oklch(0.72_0.16_75)] hover:bg-[oklch(0.82_0.14_80)] text-[oklch(0.15_0.04_60)] p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 transform hover:scale-110"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Thumbnail Strip */}
        <div className="mt-8 flex gap-3 justify-center overflow-x-auto pb-4">
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative h-20 w-20 md:h-24 md:w-24 rounded-lg overflow-hidden flex-shrink-0 transition-all duration-300 ${
                index === currentIndex
                  ? "ring-2 ring-[oklch(0.72_0.16_75)] scale-110"
                  : "opacity-60 hover:opacity-100"
              }`}
            >
              <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/20" />
            </button>
          ))}
        </div>

        {/* Slide Counter & Autoplay Toggle */}
        <div className="mt-8 flex items-center justify-center gap-6">
          <span className="font-body text-sm text-[oklch(0.70_0.015_80)]">
            {String(currentIndex + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
          </span>
          <button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className={`font-label text-xs tracking-widest uppercase px-4 py-2 border transition-all duration-300 ${
              isAutoPlay
                ? "border-[oklch(0.72_0.16_75)] text-[oklch(0.72_0.16_75)] bg-[oklch(0.72_0.16_75/0.1)]"
                : "border-[oklch(0.70_0.015_80)] text-[oklch(0.70_0.015_80)] hover:border-[oklch(0.72_0.16_75)]"
            }`}
          >
            {isAutoPlay ? "Pause" : "Play"}
          </button>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { ref: statsRef, inView: statsInView } = useInView();
  const { ref: programsRef, inView: programsInView } = useInView();
  const { ref: testimonialsRef, inView: testimonialsInView } = useInView();

  return (
    <div className="min-h-screen bg-[oklch(0.20_0.055_150)]">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt="Seven Sisters Academy Kitchen"
            className="w-full h-full object-cover object-center"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.14_0.05_150/0.92)] via-[oklch(0.14_0.05_150/0.70)] to-[oklch(0.14_0.05_150/0.30)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.14_0.05_150/0.80)] via-transparent to-transparent" />
        </div>

        <div className="container relative z-10 pt-24 pb-16">
          <div className="max-w-2xl">
            {/* Label */}
            <div className="flex items-center gap-3 mb-6">
              <div className="gold-rule w-12" />
              <span className="section-label">International Culinary School</span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-5xl md:text-7xl font-bold text-[oklch(0.96_0.015_80)] leading-[1.05] mb-6">
              Women in
              <br />
              <span className="text-[oklch(0.72_0.16_75)] italic">Culinary</span>
              <br />
              Excellence
            </h1>

            <p className="font-body text-lg text-[oklch(0.80_0.015_80)] leading-relaxed mb-10 max-w-xl">
              Seven Sisters Academy is a girls-only culinary school in Nairobi, Kenya, offering professional programs in baking and international cuisine. Founded in 2024, we are dedicated to empowering women with world-class culinary skills.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/courses"
                className="font-label text-[0.65rem] tracking-[0.2em] uppercase px-8 py-4 bg-[oklch(0.72_0.16_75)] text-[oklch(0.15_0.04_60)] hover:bg-[oklch(0.82_0.14_80)] transition-all duration-200 font-semibold inline-flex items-center gap-2 justify-center"
              >
                Explore Programs <ArrowRight size={14} />
              </Link>
              <Link
                href="/about"
                className="font-label text-[0.65rem] tracking-[0.2em] uppercase px-8 py-4 border border-[oklch(0.72_0.16_75/0.5)] text-[oklch(0.95_0.015_80)] hover:border-[oklch(0.72_0.16_75)] hover:text-[oklch(0.72_0.16_75)] transition-all duration-200 font-semibold inline-flex items-center gap-2 justify-center"
              >
                Our Story
              </Link>
            </div>

            {/* Accreditation badges */}
            <div className="flex items-center gap-6 mt-12">
              <div className="flex items-center gap-2">
                <Award size={16} className="text-[oklch(0.72_0.16_75)]" />
                <span className="font-body text-xs text-[oklch(0.65_0.015_80)]">Girls Only</span>
              </div>
              <div className="w-px h-4 bg-white/20" />
              <div className="flex items-center gap-2">
                <Globe size={16} className="text-[oklch(0.72_0.16_75)]" />
                <span className="font-body text-xs text-[oklch(0.65_0.015_80)]">Nairobi, Kenya</span>
              </div>
              <div className="w-px h-4 bg-white/20" />
              <div className="flex items-center gap-2">
                <Star size={16} className="text-[oklch(0.72_0.16_75)]" />
                <span className="font-body text-xs text-[oklch(0.65_0.015_80)]">Est. 2024</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
          <span className="font-label text-[0.55rem] tracking-[0.2em] text-[oklch(0.65_0.015_80)] uppercase">Scroll</span>
          <ChevronDown size={16} className="text-[oklch(0.72_0.16_75)]" />
        </div>
      </section>

      {/* ── STATS ── */}
      <section ref={statsRef} className="bg-[oklch(0.16_0.05_150)] py-16">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`text-center transition-all duration-700 ${
                  statsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <AnimatedCounter target={stat.value} />
                <p className="font-body text-sm text-[oklch(0.65_0.015_80)] mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROGRAMS ── */}
      <section ref={programsRef} className="py-24">
        <div className="container">
          {/* Section header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="gold-rule w-10" />
                <span className="section-label">Academic Programs</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-[oklch(0.95_0.015_80)] leading-tight">
                Our Signature
                <br />
                <span className="text-[oklch(0.72_0.16_75)] italic">Programs</span>
              </h2>
            </div>
          </div>

          {/* Program cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {programs.map((program, i) => (
              <div
                key={program.number}
                className={`group relative border border-white/10 bg-[oklch(0.24_0.055_150)] hover:border-[oklch(0.72_0.16_75/0.4)] transition-all duration-500 p-8 overflow-hidden ${
                  programsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {/* Oversized number */}
                <span className="font-label text-[5rem] font-bold text-[oklch(0.72_0.16_75/0.08)] absolute top-2 right-6 leading-none select-none">
                  {program.number}
                </span>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="section-label">{program.level}</span>
                    <span className="text-[oklch(0.50_0.015_80)]">·</span>
                    <span className="font-body text-xs text-[oklch(0.60_0.015_80)]">{program.duration}</span>
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-[oklch(0.95_0.015_80)] mb-3 group-hover:text-[oklch(0.72_0.16_75)] transition-colors duration-300">
                    {program.title}
                  </h3>
                  <p className="font-body text-sm text-[oklch(0.65_0.015_80)] leading-relaxed mb-5">
                    {program.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {program.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-body text-xs px-3 py-1 border border-[oklch(0.72_0.16_75/0.3)] text-[oklch(0.72_0.16_75)] bg-[oklch(0.72_0.16_75/0.08)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href="/courses"
                    className="font-label text-[0.6rem] tracking-[0.2em] uppercase text-[oklch(0.72_0.16_75)] hover:text-[oklch(0.82_0.14_80)] flex items-center gap-2 transition-colors"
                  >
                    Learn More <ArrowRight size={12} />
                  </Link>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-[oklch(0.72_0.16_75)] group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT SNIPPET ── */}
      <section className="py-24 bg-[oklch(0.17_0.05_150)]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image side */}
            <div className="relative">
              <div className="relative overflow-hidden">
                <img
                  src={BAKING_CLASS_IMG}
                  alt="Baking class at Seven Sisters Academy"
                  className="w-full h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.14_0.05_150/0.4)] to-transparent" />
              </div>
              {/* Floating stat card */}
              <div className="absolute -bottom-6 -right-6 bg-[oklch(0.72_0.16_75)] p-6 text-[oklch(0.15_0.04_60)] shadow-2xl">
                <p className="font-display text-4xl font-bold">2+</p>
                <p className="font-body text-sm font-semibold mt-1">Years of Excellence</p>
              </div>
              {/* Decorative border */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-[oklch(0.72_0.16_75/0.3)] pointer-events-none" />
            </div>

            {/* Text side */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="gold-rule w-10" />
                <span className="section-label">About the Academy</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-[oklch(0.95_0.015_80)] leading-tight mb-6">
                The Art of
                <br />
                <span className="text-[oklch(0.72_0.16_75)] italic">Patisserie & Cuisine</span>
              </h2>
              <p className="font-body text-base text-[oklch(0.70_0.015_80)] leading-relaxed mb-5">
                Founded in 2024, Seven Sisters Academy is a girls-only culinary school in Nairobi, Kenya, dedicated to empowering women with professional culinary training and global opportunities.
              </p>
              <p className="font-body text-base text-[oklch(0.70_0.015_80)] leading-relaxed mb-8">
                Our faculty comprises experienced chefs and culinary professionals thus designing every program to equip our graduates with the skills, confidence, and creative vision to excel in the global culinary industry.
              </p>

              {/* Feature list */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Award, text: "Girls-Only Community" },
                  { icon: Globe, text: "Global Perspective" },
                  { icon: Users, text: "Expert Mentorship" },
                  { icon: BookOpen, text: "Hands-On Training" },
                ].map((feature) => (
                  <div key={feature.text} className="flex items-start gap-3">
                    <feature.icon size={18} className="text-[oklch(0.72_0.16_75)] shrink-0 mt-1" />
                    <span className="font-body text-sm text-[oklch(0.70_0.015_80)]">{feature.text}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="font-label text-[0.65rem] tracking-[0.2em] uppercase text-[oklch(0.72_0.16_75)] hover:text-[oklch(0.82_0.14_80)] flex items-center gap-2 transition-colors"
              >
                Discover Our Story <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── PASTRY SHOWCASE ── */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/manus-storage/FullSizeRender_78b2b367.webp" alt="Artisan pastries" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[oklch(0.14_0.05_150/0.75)]" />
        </div>
        <div className="container relative z-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="gold-rule w-16" />
            <span className="section-label">The Art of Patisserie</span>
            <div className="gold-rule w-16" />
          </div>
          <h2 className="font-display text-5xl md:text-7xl font-bold text-[oklch(0.96_0.015_80)] leading-tight mb-6">
            Every Creation Tells
            <br />
            <span className="text-[oklch(0.72_0.16_75)] italic">a Story</span>
          </h2>
          <p className="font-body text-lg text-[oklch(0.80_0.015_80)] max-w-xl mx-auto mb-10">
            From delicate macarons to architectural entremets, our students learn to transform the finest ingredients into edible works of art.
          </p>
          <Link
            href="/courses"
            className="font-label text-[0.65rem] tracking-[0.2em] uppercase px-10 py-4 bg-[oklch(0.72_0.16_75)] text-[oklch(0.15_0.04_60)] hover:bg-[oklch(0.82_0.14_80)] transition-all duration-200 font-semibold inline-flex items-center gap-2"
          >
            Explore Patisserie Arts <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section ref={testimonialsRef} className="py-24 bg-[oklch(0.16_0.05_150)]">
        <div className="container">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="gold-rule w-10" />
              <span className="section-label">Alumni Voices</span>
              <div className="gold-rule w-10" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[oklch(0.95_0.015_80)]">
              Stories of <span className="text-[oklch(0.72_0.16_75)] italic">Success</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className={`border border-white/10 bg-[oklch(0.22_0.055_150)] p-8 relative transition-all duration-700 ${
                  testimonialsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Quote mark */}
                <span className="font-display text-7xl text-[oklch(0.72_0.16_75/0.20)] absolute top-4 left-6 leading-none select-none">"</span>

                <div className="relative z-10">
                  {/* Stars */}
                  <div className="flex gap-1 mb-5">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={12} className="text-[oklch(0.72_0.16_75)] fill-[oklch(0.72_0.16_75)]" />
                    ))}
                  </div>
                  <p className="font-display text-lg italic text-[oklch(0.85_0.015_80)] leading-relaxed mb-6">
                    "{t.quote}"
                  </p>
                  <div className="border-t border-white/10 pt-5">
                    <p className="font-body text-sm font-semibold text-[oklch(0.90_0.015_80)]">{t.name}</p>
                    <p className="font-body text-xs text-[oklch(0.60_0.015_80)] mt-1">{t.title}</p>
                    <p className="section-label mt-2">{t.country}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY SHOWCASE - INTERACTIVE CAROUSEL ── */}
      <CreationsCarousel />

      {/* ── CTA BANNER ── */}
      <section className="py-20 bg-[oklch(0.72_0.16_75)]">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="font-label text-[0.65rem] tracking-[0.2em] uppercase text-[oklch(0.25_0.06_60)] mb-2">Begin Your Journey</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-[oklch(0.15_0.04_60)] leading-tight">
                Ready to Join Our
                <br />
                <span className="italic">Culinary Community?</span>
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link
                href="/contact"
                className="font-label text-[0.65rem] tracking-[0.2em] uppercase px-8 py-4 bg-[oklch(0.15_0.04_60)] text-[oklch(0.95_0.015_80)] hover:bg-[oklch(0.22_0.055_150)] transition-all duration-200 font-semibold inline-flex items-center gap-2 justify-center"
              >
                Apply Now <ArrowRight size={14} />
              </Link>
              <Link
                href="/courses"
                className="font-label text-[0.65rem] tracking-[0.2em] uppercase px-8 py-4 border-2 border-[oklch(0.15_0.04_60)] text-[oklch(0.15_0.04_60)] hover:bg-[oklch(0.15_0.04_60/0.1)] transition-all duration-200 font-semibold inline-flex items-center gap-2 justify-center"
              >
                View Programs
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
