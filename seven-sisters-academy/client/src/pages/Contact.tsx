/*
   CONTACT PAGE — Seven Sisters Academy
   Design: International Culinary Heritage
   Sections: Contact info, Application form, Map placeholder
   ============================================================= */

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Calendar, Loader2 } from "lucide-react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { trpc } from "@/lib/trpc";

const programs = [
  "International Advanced Pastry Technique Programme",
  "International Advanced Cooking Technique Programme",
  "General Enquiry",
];

function MapContainer() {
  const handleGetDirections = () => {
    const destination = "IKHLAS APARTMENTS, Kirongothi Street, Nairobi, Kenya";
    const mapsUrl = `https://www.google.com/maps/search/${encodeURIComponent(destination)}`;
    window.open(mapsUrl, "_blank");
  };

  return (
    <div className="space-y-4">
      <div className="h-80 bg-[oklch(0.20_0.055_150)] border border-white/10 rounded-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.815891962897!2d36.8396800!3d-1.2768600!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d6b5b5b5b5%3A0x1234567890abcdef!2sIKHLAS%20APARTMENTS!5e0!3m2!1sen!2ske!4v1779709000000"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <button
        onClick={handleGetDirections}
        className="w-full font-label text-[0.65rem] tracking-[0.2em] uppercase px-6 py-3 bg-[oklch(0.72_0.16_75)] text-[oklch(0.15_0.04_60)] hover:bg-[oklch(0.82_0.14_80)] transition-all duration-300 font-semibold inline-flex items-center justify-center gap-2 hover:shadow-lg hover:scale-105 active:scale-95 hover:-translate-y-1"
      >
        <MapPin size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
        Get Directions
      </button>
    </div>
  );
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    nationality: "",
    program: "",
    intake: null as Date | null,
    message: "",
    experience: "beginner",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleDateSelect = (date: Date | undefined) => {
    setForm((prev) => ({ ...prev, intake: date || null }));
  };

  const submitMutation = trpc.contact.submit.useMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.firstName || !form.email || !form.program) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    try {
      const result = await submitMutation.mutateAsync({
        fullName: `${form.firstName} ${form.lastName}`.trim(),
        email: form.email,
        phone: form.phone || undefined,
        programInterest: form.program,
        message: form.message || "Inquiry about the program",
      });
      if (result.success) {
        setSubmitted(true);
        toast.success(result.message);
        // Reset form
        setForm({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          nationality: "",
          program: "",
          intake: null,
          message: "",
          experience: "beginner",
        });
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Failed to submit form";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[oklch(0.20_0.055_150)]">
      <Navbar />

      {/* Page Hero */}
      <section className="pt-32 pb-16 bg-[oklch(0.17_0.05_150)]">
        <div className="container">
          <div className="flex items-center gap-3 mb-5">
            <div className="gold-rule w-10" />
            <span className="section-label">Get in Touch</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-[oklch(0.95_0.015_80)] leading-tight mb-5">
            Begin Your
            <br />
            <span className="text-[oklch(0.72_0.16_75)] italic">Culinary Journey</span>
          </h1>
          <p className="font-body text-lg text-[oklch(0.70_0.015_80)] max-w-xl leading-relaxed">
            Whether you are ready to apply or simply want to learn more, our admissions team is here to guide you every step of the way.
          </p>
        </div>
      </section>

      <div className="gold-rule" />

      {/* Main Content */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Address */}
                <div>
                  <div className="flex items-start gap-4">
                    <MapPin size={20} className="text-[oklch(0.72_0.16_75)] shrink-0 mt-1" />
                    <div>
                      <p className="section-label mb-1">Address</p>
                      <p className="font-body text-sm text-[oklch(0.70_0.015_80)] leading-relaxed">
                        Ikhlas Apartment, 10C<br />
                        10th Floor, Kirongothi Street<br />
                        Nairobi, Kenya
                      </p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <div className="flex items-start gap-4">
                    <Phone size={20} className="text-[oklch(0.72_0.16_75)] shrink-0 mt-1" />
                    <div>
                      <p className="section-label mb-1">Phone</p>
                      <p className="font-body text-sm text-[oklch(0.70_0.015_80)]">
                        +254 (0) 799 911 937
                      </p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div>
                  <div className="flex items-start gap-4">
                    <Mail size={20} className="text-[oklch(0.72_0.16_75)] shrink-0 mt-1" />
                    <div>
                      <p className="section-label mb-1">Email</p>
                      <p className="font-body text-sm text-[oklch(0.70_0.015_80)]">
                        admissions@sevensisters.com
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div>
                  <div className="flex items-start gap-4">
                    <Clock size={20} className="text-[oklch(0.72_0.16_75)] shrink-0 mt-1" />
                    <div>
                      <p className="section-label mb-1">Hours</p>
                      <p className="font-body text-sm text-[oklch(0.70_0.015_80)]">
                        Monday - Friday: 9:00 AM - 5:00 PM<br />
                        Saturday: 10:00 AM - 2:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>

                {/* Intake Status */}
                <div className="p-4 border border-[oklch(0.72_0.16_75/0.3)] bg-[oklch(0.72_0.16_75/0.05)]">
                  <p className="section-label mb-2">Intake 2026</p>
                  <p className="font-display text-lg font-semibold text-[oklch(0.95_0.015_80)]">Applications Open</p>
                  <p className="font-body text-xs text-[oklch(0.65_0.015_80)] mt-2">
                    Every start of a month
                  </p>
                </div>
              </div>
            </div>

            {/* Application Form */}
            <div className="lg:col-span-2">
              <div className="bg-[oklch(0.17_0.05_150)] border border-white/8 p-8 md:p-10">
                {submitted ? (
                  <div className="text-center py-12">
                    <CheckCircle size={48} className="text-[oklch(0.72_0.16_75)] mx-auto mb-4" />
                    <h3 className="font-display text-2xl font-bold text-[oklch(0.95_0.015_80)] mb-3">
                      Application Received!
                    </h3>
                    <p className="font-body text-[oklch(0.70_0.015_80)] mb-6">
                      Thank you for your interest in Seven Sisters Academy. Our admissions team will review your application and contact you within 2 business days.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="font-label text-[0.65rem] tracking-[0.2em] uppercase px-6 py-3 bg-[oklch(0.72_0.16_75)] text-[oklch(0.15_0.04_60)] hover:bg-[oklch(0.82_0.14_80)] transition-all duration-200 font-semibold"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="font-display text-2xl font-bold text-[oklch(0.95_0.015_80)] mb-8">
                      Application Enquiry Form
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name fields */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="section-label block mb-2">
                            First Name <span className="text-[oklch(0.72_0.16_75)]">*</span>
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            value={form.firstName}
                            onChange={handleChange}
                            required
                            placeholder="Your first name"
                            className="w-full bg-[oklch(0.20_0.055_150)] border border-white/15 text-[oklch(0.90_0.015_80)] placeholder:text-[oklch(0.45_0.015_80)] px-4 py-3 font-body text-sm focus:outline-none focus:border-[oklch(0.72_0.16_75)] transition-colors"
                          />
                        </div>
                        <div>
                          <label className="section-label block mb-2">Last Name</label>
                          <input
                            type="text"
                            name="lastName"
                            value={form.lastName}
                            onChange={handleChange}
                            placeholder="Your last name"
                            className="w-full bg-[oklch(0.20_0.055_150)] border border-white/15 text-[oklch(0.90_0.015_80)] placeholder:text-[oklch(0.45_0.015_80)] px-4 py-3 font-body text-sm focus:outline-none focus:border-[oklch(0.72_0.16_75)] transition-colors"
                          />
                        </div>
                      </div>

                      {/* Email & Phone */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="section-label block mb-2">
                            Email <span className="text-[oklch(0.72_0.16_75)]">*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            placeholder="your.email@example.com"
                            className="w-full bg-[oklch(0.20_0.055_150)] border border-white/15 text-[oklch(0.90_0.015_80)] placeholder:text-[oklch(0.45_0.015_80)] px-4 py-3 font-body text-sm focus:outline-none focus:border-[oklch(0.72_0.16_75)] transition-colors"
                          />
                        </div>
                        <div>
                          <label className="section-label block mb-2">Phone</label>
                          <input
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="+254 7XX XXX XXX"
                            className="w-full bg-[oklch(0.20_0.055_150)] border border-white/15 text-[oklch(0.90_0.015_80)] placeholder:text-[oklch(0.45_0.015_80)] px-4 py-3 font-body text-sm focus:outline-none focus:border-[oklch(0.72_0.16_75)] transition-colors"
                          />
                        </div>
                      </div>

                      {/* Nationality */}
                      <div>
                        <label className="section-label block mb-2">Nationality / Country of Residence</label>
                        <input
                          type="text"
                          name="nationality"
                          value={form.nationality}
                          onChange={handleChange}
                          placeholder="e.g. United States, France, Japan..."
                          className="w-full bg-[oklch(0.20_0.055_150)] border border-white/15 text-[oklch(0.90_0.015_80)] placeholder:text-[oklch(0.45_0.015_80)] px-4 py-3 font-body text-sm focus:outline-none focus:border-[oklch(0.72_0.16_75)] transition-colors"
                        />
                      </div>

                      {/* Program & Intake */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="section-label block mb-2">
                            Program of Interest <span className="text-[oklch(0.72_0.16_75)]">*</span>
                          </label>
                          <select
                            name="program"
                            value={form.program}
                            onChange={handleChange}
                            required
                            className="w-full bg-[oklch(0.20_0.055_150)] border border-white/15 text-[oklch(0.90_0.015_80)] px-4 py-3 font-body text-sm focus:outline-none focus:border-[oklch(0.72_0.16_75)] transition-colors appearance-none"
                          >
                            <option value="" disabled>Select a program</option>
                            {programs.map((p) => (
                              <option key={p} value={p}>{p}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="section-label block mb-2">Preferred Intake Date</label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant="outline"
                                className="w-full justify-start text-left font-body bg-[oklch(0.20_0.055_150)] border border-white/15 text-[oklch(0.90_0.015_80)] hover:bg-[oklch(0.22_0.055_150)] hover:border-[oklch(0.72_0.16_75/0.5)]"
                              >
                                <Calendar size={16} className="mr-2" />
                                {form.intake ? format(form.intake, "MMM dd, yyyy") : "Select a date"}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0 bg-[oklch(0.20_0.055_150)] border border-white/15" align="start">
                              <CalendarComponent
                                mode="single"
                                selected={form.intake || undefined}
                                onSelect={handleDateSelect}
                                disabled={(date) => date < new Date()}
                                className="text-[oklch(0.90_0.015_80)]"
                              />
                            </PopoverContent>
                          </Popover>
                        </div>
                      </div>

                      {/* Experience level */}
                      <div>
                        <label className="section-label block mb-3">Culinary Experience Level</label>
                        <div className="flex flex-wrap gap-3">
                          {[
                            { value: "beginner", label: "Beginner" },
                            { value: "home-cook", label: "Home Cook" },
                            { value: "professional", label: "Working Professional" },
                            { value: "advanced", label: "Advanced" },
                          ].map((opt) => (
                            <label
                              key={opt.value}
                              className={`flex items-center gap-2 px-4 py-2 border cursor-pointer transition-all duration-200 ${
                                form.experience === opt.value
                                  ? "border-[oklch(0.72_0.16_75)] bg-[oklch(0.72_0.16_75/0.1)] text-[oklch(0.72_0.16_75)]"
                                  : "border-white/15 text-[oklch(0.65_0.015_80)] hover:border-white/30"
                              }`}
                            >
                              <input
                                type="radio"
                                name="experience"
                                value={opt.value}
                                checked={form.experience === opt.value}
                                onChange={handleChange}
                                className="w-4 h-4"
                              />
                              {opt.label}
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="section-label block mb-2">Message / Questions</label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Tell us about your culinary background, goals, or any questions you have..."
                          rows={4}
                          className="w-full bg-[oklch(0.20_0.055_150)] border border-white/15 text-[oklch(0.90_0.015_80)] placeholder:text-[oklch(0.45_0.015_80)] px-4 py-3 font-body text-sm focus:outline-none focus:border-[oklch(0.72_0.16_75)] transition-colors resize-none"
                        />
                      </div>

                      {/* Submit Button */}
                      <div className="pt-4 border-t border-white/8">
                        <button
                          type="submit"
                          disabled={loading}
                          className="w-full font-label text-[0.65rem] tracking-[0.2em] uppercase px-6 py-3 bg-[oklch(0.72_0.16_75)] text-[oklch(0.15_0.04_60)] hover:bg-[oklch(0.82_0.14_80)] disabled:opacity-50 transition-all duration-200 font-semibold flex items-center justify-center gap-2"
                        >
                          {loading ? "Submitting..." : "Submit Application Enquiry"}
                          {!loading && <Send size={12} />}
                        </button>
                        <p className="font-body text-xs text-[oklch(0.55_0.015_80)] mt-3 text-center">
                          By submitting this form, you agree to our Privacy Policy. We will never share your information with third parties.
                        </p>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-[oklch(0.17_0.05_150)]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="gold-rule w-10" />
                <span className="section-label">Visit Us</span>
              </div>
              <h2 className="font-display text-4xl font-bold text-[oklch(0.95_0.015_80)] mb-5">
                Located in<br />
                <span className="text-[oklch(0.72_0.16_75)] italic">Nairobi, Kenya</span>
              </h2>
              <p className="font-body text-[oklch(0.70_0.015_80)] mb-6 leading-relaxed">
                Visit our campus at Ikhlas Apartment, 10C, 10th Floor, Kirongothi Street, Nairobi. We welcome prospective students for tours and consultations.
              </p>
            </div>
            <MapContainer />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
