"use client";

import PageWrapper from "@/components/layout/PageWrapper";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import {
  Video,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Tv,
  ExternalLink,
  Globe2,
  Mail,
  Heart,
} from "lucide-react";

const CORE_SERVICES = [
  "Creating original video content",
  "Publishing regular inspirational messages on YouTube",
  "Providing faith-based digital media for viewers worldwide",
];

const YOUTUBE_CHANNELS = [
  {
    name: "God's Daily Message",
    handle: "@godsdailymessageofficial",
    url: "https://youtube.com/@godsdailymessageofficial?si=Ev36GQG9HoYM7UZf",
  },
  {
    name: "God's Daily Voice",
    handle: "@godsdailyvoice-mp4",
    url: "https://youtube.com/@godsdailyvoice-mp4?si=iATQfcR0L-6u3S8q",
  },
  {
    name: "God's Affirmation",
    handle: "@godsaffirmation01",
    url: "https://youtube.com/@godsaffirmation01?si=aXGPtfTJJAEW5-gf",
  },
  {
    name: "God Affirmations",
    handle: "@godaffirmations01",
    url: "https://youtube.com/@godaffirmations01?si=DifcJU-a8iWf_He5",
  },
];

export default function AboutView() {
  return (
    <PageWrapper>
      <div className="max-w-4xl mx-auto px-6 py-20 space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <Badge variant="gold" className="gap-1.5">
            <Sparkles size={14} className="text-[#c5a059]" />
            About Faith Rising Media
          </Badge>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-[#1a1d20] tracking-tight">
            About Us
          </h1>

          <p className="text-lg sm:text-xl font-heading text-[#c5a059] font-bold tracking-wide">
            Digital Content Creation Services
          </p>
        </div>

        {/* Main Content Card */}
        <GlassCard className="p-8 sm:p-12 border border-[#c5a059]/35 bg-white shadow-xl rounded-3xl space-y-8">
          <div className="space-y-5 text-base sm:text-lg text-[var(--color-text-secondary)] leading-relaxed font-normal">
            <p>
              Faith Rising Media is a digital content creation service focused on producing original inspirational and faith-based video content.
            </p>
            <p>
              I create and publish high-quality video content on multiple YouTube channels, delivering messages of hope, encouragement, spiritual growth, and positive affirmations to a global audience. The content is designed to provide value through consistent digital media that people can access anytime.
            </p>
          </div>

          {/* Core Services Section */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#FAF5E8] border border-[#c5a059]/40 space-y-4">
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#1a1d20] flex items-center gap-2">
              <Video size={22} className="text-[#c5a059]" />
              <span>Core Services</span>
            </h2>
            <p className="text-sm text-[var(--color-text-secondary)] font-normal">
              As a digital content creator, my core service includes:
            </p>
            <div className="space-y-3 pt-1">
              {CORE_SERVICES.map((service) => (
                <div key={service} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[#c5a059] shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base font-semibold text-[#1a1d20]">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Service Payments & Digital Disclaimer */}
          <div className="space-y-5 text-base sm:text-lg text-[var(--color-text-secondary)] leading-relaxed font-normal">
            <p>
              All payments received through this platform are strictly for digital content creation services. Viewers who find value in the content may choose to support the ongoing creation and publishing of these digital videos.
            </p>
            <p>
              There are no physical products, no merchandise, and no shipping involved. This is purely a digital service delivered through online platforms, primarily YouTube.
            </p>
            <p>
              Faith Rising Media operates with complete transparency and is committed to delivering consistent digital content that uplifts and encourages people across the world.
            </p>
          </div>

          {/* Mandatory PayPal Compliance Box */}
          <div className="p-6 rounded-2xl bg-white border-2 border-[#c5a059] shadow-md space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#c5a059]">
              <ShieldCheck size={16} />
              <span>Official Service Statement</span>
            </div>
            <p className="text-base sm:text-lg font-bold text-[#1a1d20] leading-snug">
              All payments received are for digital content creation services. There are no physical products involved.
            </p>
          </div>
        </GlassCard>

        {/* YouTube Channels Overview */}
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#1a1d20]">
              My YouTube Channels
            </h2>
            <p className="text-sm text-[var(--color-text-secondary)] font-normal">
              Watch and subscribe to my original inspirational video channels:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {YOUTUBE_CHANNELS.map((ch) => (
              <a
                key={ch.name}
                href={ch.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-white border border-[#c5a059]/30 hover:border-[#c5a059] shadow-sm hover:shadow-md transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-red-600/10 border border-red-500/20 flex items-center justify-center text-red-600">
                    <Tv size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#1a1d20] group-hover:text-[#c5a059] transition-colors">
                      {ch.name}
                    </h3>
                    <p className="text-xs text-[var(--color-text-muted)] font-mono">
                      {ch.handle}
                    </p>
                  </div>
                </div>
                <ExternalLink size={15} className="text-[var(--color-text-muted)] group-hover:text-[#c5a059] transition-colors" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/#support" variant="gold" size="lg" className="w-full sm:w-auto gap-2">
            <Heart size={16} />
            <span>Support the Content</span>
          </Button>

          <Button href="/contact" variant="gold-outline" size="lg" className="w-full sm:w-auto gap-2">
            <Mail size={16} />
            <span>Contact Us</span>
          </Button>
        </div>
      </div>
    </PageWrapper>
  );
}
