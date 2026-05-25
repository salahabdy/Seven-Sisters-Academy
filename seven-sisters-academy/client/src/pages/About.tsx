/* =============================================================
   ABOUT PAGE — Seven Sisters Academy
   Design: International Culinary Heritage
   Sections: Mission, History, Faculty, Values, Accreditations
   ============================================================= */

import { Link } from "wouter";
import { ArrowRight, Globe, Award, Heart, Lightbulb, Shield, Leaf } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CHEF_IMG from "../assets/IMG_6926(1).webp";
import BAKING_CLASS_IMG from "../assets/FullSizeRender(5).webp";
import FACULTY_IMG_1 from "../assets/FullSizeRender(4).webp";
import FACULTY_IMG_2 from "../assets/FullSizeRender.webp";
import AcademyVideo from "../assets/academy-video.mp4";
import BunsBg from "../assets/buns-bg.webp";

const faculty = [
  {
    name: "Chef Jamila Abdinasir",
    title: "Dean of Patisserie Arts",
    origin: "Kenya",
    bio: "A master of elite patisserie with extensive international training, Chef Jamila brings refined pastry techniques and creative vision to Seven Sisters Academy, specializing in contemporary patisserie design and execution.",
    specialty: "Elite Patisserie & Pastry Design",
  },
  {
    name: "Chef Farhiya Abdinasir",
    title: "Head of International Cuisine",
    origin: "Kenya",
    bio: "An expert in international culinary traditions, Chef Farhiya has mastered cuisines from across the globe. Her passion for flavor exploration and cultural food heritage ensures students develop a truly cosmopolitan palate.",
    specialty: "International Cuisine & Global Flavors",
  },
  {
    name: "Chef Sumaya Abdinasir",
    title: "Master Pastry Chef",
    origin: "Kenya",
    bio: "A skilled pastry chef with deep expertise in patisserie arts, Chef Sumaya combines traditional techniques with modern innovation, mentoring students in the precision and artistry required for world-class pastry work.",
    specialty: "Patisserie & Baking Arts",
  },
];

const values = [
  {
    icon: Globe,
    title: "International Perspective",
    description: "We celebrate the diversity of global food culture, ensuring every student develops a truly international culinary worldview.",
  },
  {
    icon: Award,
    title: "Excellence in Craft",
    description: "We hold ourselves and our students to the highest standards of technical skill, creativity, and professional conduct.",
  },
  {
    icon: Heart,
    title: "Passion-Led Learning",
    description: "We believe the best chefs are driven by genuine passion. Our environment nurtures that fire and channels it into mastery.",
  },
  {
    icon: Lightbulb,
    title: "Innovation & Tradition",
    description: "We honour classical techniques while embracing modern innovation — teaching students to respect the past and shape the future.",
  },
  {
    icon: Shield,
    title: "Integrity & Ethics",
    description: "From sourcing to service, we instil a deep commitment to ethical practices, sustainability, and respect for producers.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Our kitchens operate on zero-waste principles. We teach students to cook with conscience and responsibility for the planet.",
  },
];


export default function About() {
  return (
    <div className="min-h-screen bg-[oklch(0.20_0.055_150)]">
      <Navbar />

      {/* Page Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={BAKING_CLASS_IMG}
            alt="Seven Sisters Academy"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.20_0.055_150/0.6)] to-[oklch(0.20_0.055_150)]" />
        </div>
        <div className="container relative z-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="gold-rule w-10" />
            <span className="section-label">Our Story</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-[oklch(0.95_0.015_80)] leading-tight mb-6 max-w-3xl">
            More Than a School —
            <br />
            <span className="text-[oklch(0.72_0.16_75)] italic">A Culinary Community</span>
          </h1>
          <p className="font-body text-lg text-[oklch(0.70_0.015_80)] max-w-2xl leading-relaxed">
            Seven Sisters Academy was founded on the belief that great cooking transcends borders. Since 2024, we have been building a global community of culinary professionals united by craft, curiosity, and a love of food.
          </p>
        </div>
      </section>

      {/* Mission & History */}
      <section className="py-24 bg-[oklch(0.17_0.05_150)]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="gold-rule w-10" />
                <span className="section-label">Our Mission</span>
              </div>
              <h2 className="font-display text-4xl font-bold text-[oklch(0.95_0.015_80)] mb-6 leading-tight">
                Empowering Women in
                <br />
                <span className="text-[oklch(0.72_0.16_75)] italic">Culinary Excellence</span>
              </h2>
              <p className="font-body text-base text-[oklch(0.70_0.015_80)] leading-relaxed mb-5">
                Our mission is to provide an unparalleled culinary education that combines rigorous technical training with creative freedom, cultural exploration, and professional mentorship.
              </p>
              <p className="font-body text-base text-[oklch(0.70_0.015_80)] leading-relaxed mb-5">
                We believe that the best culinary education happens when students are immersed in a diverse, challenging, and inspiring environment — one that mirrors the reality of the global food industry.
              </p>
              <p className="font-body text-base text-[oklch(0.70_0.015_80)] leading-relaxed mb-8">
                Founded by three passionate chefs in Nairobi, Seven Sisters Academy was created to empower women with professional culinary training and global opportunities. The academy's name is inspired by the founders' heritage — they come from a household of seven sisters, embodying the bond of sisterhood and shared excellence that drives our mission.
              </p>

              {/* Timeline */}
              <div className="space-y-4">
                {[
                  { year: "2024", event: "Academy founded by three sister chefs in Nairobi" },
                  { year: "2025", event: "1,000+ graduates" },
                  { year: "2026", event: "Launched in-person learning programs" },
                ].map((item) => (
                  <div key={item.year} className="flex gap-5">
                    <div className="shrink-0">
                      <span className="font-label text-[0.65rem] tracking-[0.15em] text-[oklch(0.72_0.16_75)]">{item.year}</span>
                    </div>
                    <div className="flex gap-3 items-start">
                      <div className="w-px h-full bg-[oklch(0.72_0.16_75/0.3)] mt-1.5 shrink-0" style={{ minHeight: "16px" }} />
                      <p className="font-body text-sm text-[oklch(0.70_0.015_80)]">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chef video */}
            <div className="relative">
              <div className="relative overflow-hidden">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-[560px] object-cover object-center"
                >
                  <source src={AcademyVideo} type="video/mp4" />
                  src={BunsBg}
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.14_0.05_150/0.5)] to-transparent" />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-5 -right-5 w-28 h-28 border-2 border-[oklch(0.72_0.16_75/0.25)] pointer-events-none" />
              <div className="absolute -bottom-5 -left-5 w-20 h-20 border border-[oklch(0.62_0.12_40/0.3)] pointer-events-none" />
              {/* Quote overlay */}
              <div className="absolute bottom-8 left-6 right-6 bg-[oklch(0.14_0.05_150/0.90)] backdrop-blur-sm p-5 border-l-2 border-[oklch(0.72_0.16_75)]">
                <p className="font-display text-base italic text-[oklch(0.90_0.015_80)] leading-relaxed">
                  "We don't just teach cooking. We teach students how to think, feel, and create with food."
                </p>
                <p className="font-body text-xs text-[oklch(0.60_0.015_80)] mt-2">— The Seven Founders</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="gold-rule w-10" />
              <span className="section-label">Our Values</span>
              <div className="gold-rule w-10" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[oklch(0.95_0.015_80)]">
              What We <span className="text-[oklch(0.72_0.16_75)] italic">Stand For</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <div
                key={value.title}
                className="border border-white/10 bg-[oklch(0.24_0.055_150)] p-7 hover:border-[oklch(0.72_0.16_75/0.4)] transition-all duration-300 group"
              >
                <div className="w-10 h-10 border border-[oklch(0.72_0.16_75/0.4)] flex items-center justify-center mb-5 group-hover:bg-[oklch(0.72_0.16_75/0.1)] transition-colors">
                  <value.icon size={18} className="text-[oklch(0.72_0.16_75)]" />
                </div>
                <h3 className="font-display text-xl font-semibold text-[oklch(0.95_0.015_80)] mb-3">{value.title}</h3>
                <p className="font-body text-sm text-[oklch(0.65_0.015_80)] leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section className="py-24 bg-[oklch(0.17_0.05_150)]">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="gold-rule w-10" />
                <span className="section-label">Our Faculty</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-[oklch(0.95_0.015_80)] leading-tight">
                Learn From the
                <br />
                <span className="text-[oklch(0.72_0.16_75)] italic">World's Best</span>
              </h2>
            </div>
            <p className="font-body text-sm text-[oklch(0.65_0.015_80)] max-w-sm leading-relaxed">
              
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faculty.map((member) => (
              <div
                key={member.name}
                className="border border-white/10 bg-[oklch(0.22_0.055_150)] p-7 hover:border-[oklch(0.72_0.16_75/0.4)] transition-all duration-300 group"
              >
                <div className="flex items-start gap-5">
                  {/* Avatar placeholder */}
                  <div className="w-16 h-16 rounded-full bg-[oklch(0.72_0.16_75/0.15)] border-2 border-[oklch(0.72_0.16_75/0.4)] flex items-center justify-center shrink-0">
                    <span className="font-display text-xl font-bold text-[oklch(0.72_0.16_75)]">
                      {member.name.split(" ").slice(-1)[0][0]}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-display text-lg font-semibold text-[oklch(0.95_0.015_80)]">{member.name}</h3>
                        <p className="font-body text-xs text-[oklch(0.72_0.16_75)] mt-0.5">{member.title}</p>
                      </div>
                      <span className="section-label shrink-0">{member.origin}</span>
                    </div>
                    <p className="font-body text-sm text-[oklch(0.65_0.015_80)] leading-relaxed mt-3">{member.bio}</p>
                    <div className="flex items-center gap-2 mt-4">
                      <div className="w-1 h-1 rounded-full bg-[oklch(0.72_0.16_75)]" />
                      <span className="font-body text-xs text-[oklch(0.60_0.015_80)]">Specialty: {member.specialty}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="py-20 bg-[oklch(0.72_0.16_75)]">
        <div className="container text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[oklch(0.15_0.04_60)] mb-4">
            Join Our Community
          </h2>
          <p className="font-body text-base text-[oklch(0.25_0.06_60)] mb-8 max-w-xl mx-auto">
            Become part of a legacy of culinary excellence. Applications are now open.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="font-label text-[0.65rem] tracking-[0.2em] uppercase px-10 py-4 bg-[oklch(0.15_0.04_60)] text-[oklch(0.95_0.015_80)] hover:bg-[oklch(0.22_0.055_150)] transition-all duration-200 font-semibold inline-flex items-center gap-2 justify-center"
            >
              Apply Now <ArrowRight size={14} />
            </Link>
            <Link
              href="/courses"
              className="font-label text-[0.65rem] tracking-[0.2em] uppercase px-10 py-4 border-2 border-[oklch(0.15_0.04_60)] text-[oklch(0.15_0.04_60)] hover:bg-[oklch(0.15_0.04_60/0.1)] transition-all duration-200 font-semibold inline-flex items-center gap-2 justify-center"
            >
              View Programs
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
