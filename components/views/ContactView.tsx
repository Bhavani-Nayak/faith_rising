"use client";

import PageWrapper from "@/components/layout/PageWrapper";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import {
  Mail,
  Clock,
  Globe,
  Building2,
  Sparkles,
  Tag,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

interface ContactViewProps {
  formData: {
    name: string;
    email: string;
    subject: string;
    message: string;
    slug?: string;
  };
  setField: (
    field: "name" | "email" | "subject" | "message" | "slug",
    value: string
  ) => void;
  submit: () => void;
  isSubmitting: boolean;
  isSubmitted: boolean;
  error: string | null;
}

const MESSAGE_SLUGS = [
  { value: "digital-content", label: "Digital Content Inquiries" },
  { value: "support-questions", label: "Support Questions" },
  { value: "general-inquiry", label: "General Inquiry" },
];

export default function ContactView({
  formData,
  setField,
  submit,
  isSubmitting,
  isSubmitted,
  error,
}: ContactViewProps) {
  return (
    <PageWrapper>
      <div className="max-w-5xl mx-auto px-6 py-20 space-y-12">
        {/* Header */}
        <div className="space-y-4 max-w-3xl">
          <Badge variant="gold" className="gap-1.5">
            <Sparkles size={14} className="text-[#c5a059]" />
            Get in Touch
          </Badge>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-[#1a1d20] tracking-tight">
            Contact Us
          </h1>
          <p className="text-base sm:text-lg text-[var(--color-text-secondary)] font-normal leading-relaxed">
            For any questions related to digital content services or support, please contact:
          </p>
        </div>

        {/* Main Grid: Form and Contact Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Form */}
          <div className="lg:col-span-2">
            <GlassCard className="p-8 border border-[#c5a059]/30 bg-white shadow-lg rounded-3xl space-y-6">
              <div>
                <h2 className="font-heading text-2xl font-bold text-[#1a1d20] mb-1">
                  Send Us a Message
                </h2>
                <p className="text-xs text-[var(--color-text-secondary)] font-normal">
                  Fill out the form below and we will get back to you promptly.
                </p>
              </div>

              {isSubmitted ? (
                <div className="text-center py-12 space-y-4 bg-[#fafaf7] rounded-2xl border border-[#c5a059]/30 p-8 shadow-sm">
                  <div className="h-14 w-14 rounded-full bg-[#c5a059]/15 border border-[#c5a059]/30 text-[#c5a059] flex items-center justify-center mx-auto mb-2">
                    <CheckCircle2 size={28} />
                  </div>
                  <h3 className="font-heading text-3xl font-bold text-[#1a1d20]">
                    Message Sent
                  </h3>
                  <p className="text-[var(--color-text-secondary)] font-medium max-w-md mx-auto text-base leading-relaxed">
                    Thank you for contacting Faith Rising Media! We have received your inquiry and aim to respond within 24–48 hours.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    submit();
                  }}
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-[#c5a059] mb-2 uppercase tracking-wider">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        value={formData.name}
                        onChange={(e) => setField("name", e.target.value)}
                        required
                        className="w-full bg-[#fafaf7] border border-black/15 rounded-xl px-4 py-3 text-sm text-[#1a1d20] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059] transition-all"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#c5a059] mb-2 uppercase tracking-wider">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        value={formData.email}
                        onChange={(e) => setField("email", e.target.value)}
                        required
                        className="w-full bg-[#fafaf7] border border-black/15 rounded-xl px-4 py-3 text-sm text-[#1a1d20] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059] transition-all"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#c5a059] mb-2 uppercase tracking-wider flex items-center gap-1.5">
                      <Tag size={13} />
                      <span>Inquiry Topic</span>
                    </label>
                    <select
                      id="contact-slug"
                      value={formData.slug || "digital-content"}
                      onChange={(e) => setField("slug", e.target.value)}
                      className="w-full bg-[#fafaf7] border border-black/15 rounded-xl px-4 py-3 text-sm text-[#1a1d20] focus:outline-none focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059] transition-all"
                    >
                      {MESSAGE_SLUGS.map((slugOpt) => (
                        <option key={slugOpt.value} value={slugOpt.value}>
                          {slugOpt.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#c5a059] mb-2 uppercase tracking-wider">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="contact-subject"
                      value={formData.subject}
                      onChange={(e) => setField("subject", e.target.value)}
                      required
                      className="w-full bg-[#fafaf7] border border-black/15 rounded-xl px-4 py-3 text-sm text-[#1a1d20] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059] transition-all"
                      placeholder="What is your inquiry regarding?"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#c5a059] mb-2 uppercase tracking-wider">
                      Your Message
                    </label>
                    <textarea
                      id="contact-message"
                      value={formData.message}
                      onChange={(e) => setField("message", e.target.value)}
                      required
                      rows={5}
                      className="w-full bg-[#fafaf7] border border-black/15 rounded-xl px-4 py-3 text-sm text-[#1a1d20] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059] transition-all resize-none"
                      placeholder="Write your message here..."
                    />
                  </div>

                  {error && (
                    <p className="text-sm text-red-600 font-medium">{error}</p>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    variant="gold"
                    size="lg"
                    className="w-full sm:w-auto cursor-pointer"
                  >
                    {isSubmitting ? "Sending Message..." : "Send Message"}
                  </Button>
                </form>
              )}
            </GlassCard>
          </div>

          {/* Contact Details Sidebar */}
          <div className="space-y-4">
            <p className="text-xs font-bold text-[#c5a059] uppercase tracking-wider">
              Contact Details
            </p>

            {[
              {
                icon: Building2,
                label: "Business Name",
                value: "Faith Rising Media",
              },
              {
                icon: Mail,
                label: "Email",
                value: "contact@faithrisingmedia.com",
                link: "mailto:contact@faithrisingmedia.com",
              },
              {
                icon: Clock,
                label: "Response Time",
                value: "We aim to respond within 24–48 hours.",
              },
              {
                icon: Globe,
                label: "Website",
                value: "https://faithrisingmedia.com",
                link: "https://faithrisingmedia.com",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <GlassCard
                  key={item.label}
                  className="p-5 flex items-start gap-3.5 border border-[#c5a059]/30 bg-white shadow-sm rounded-2xl"
                >
                  <div className="h-10 w-10 rounded-xl bg-[#c5a059]/15 border border-[#c5a059]/35 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-[#c5a059]" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-[#c5a059] uppercase tracking-wider mb-0.5">
                      {item.label}
                    </p>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-sm text-[#1a1d20] font-semibold hover:underline hover:text-[#c5a059]"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-[#1a1d20] font-medium leading-relaxed">
                        {item.value}
                      </p>
                    )}
                  </div>
                </GlassCard>
              );
            })}

            {/* Service Disclaimer Box */}
            <div className="p-5 rounded-2xl bg-[#FAF5E8] border border-[#c5a059]/40 space-y-1.5 shadow-xs">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#c5a059] uppercase tracking-wider">
                <ShieldCheck size={14} />
                <span>Service Notice</span>
              </div>
              <p className="text-xs text-[#1a1d20] font-medium leading-relaxed">
                All payments received are for digital content creation services. There are no physical products involved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
