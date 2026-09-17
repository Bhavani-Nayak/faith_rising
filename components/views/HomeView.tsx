"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Play,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Video,
  Globe2,
  Tv,
  CheckCircle2,
  ArrowRight,
  Heart,
  Lock,
} from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const YOUTUBE_CHANNELS = [
  {
    id: "channel-1",
    name: "God's Daily Message",
    handle: "@godsdailymessageofficial",
    url: "https://youtube.com/@godsdailymessageofficial?si=Ev36GQG9HoYM7UZf",
    description:
      "Original inspirational video messages and daily spiritual encouragement to guide and uplift your heart.",
    badge: "Daily Message",
  },
  {
    id: "channel-2",
    name: "God's Daily Voice",
    handle: "@godsdailyvoice-mp4",
    url: "https://youtube.com/@godsdailyvoice-mp4?si=iATQfcR0L-6u3S8q",
    description:
      "Uplifting voice messages, reflections, and peaceful guidance delivered through high-quality video content.",
    badge: "Daily Voice",
  },
  {
    id: "channel-3",
    name: "God's Affirmation",
    handle: "@godsaffirmation01",
    url: "https://youtube.com/@godsaffirmation01?si=aXGPtfTJJAEW5-gf",
    description:
      "Powerful spiritual affirmations, faith-building declarations, and positive digital media.",
    badge: "Affirmations",
  },
  {
    id: "channel-4",
    name: "God Affirmations",
    handle: "@godaffirmations01",
    url: "https://youtube.com/@godaffirmations01?si=DifcJU-a8iWf_He5",
    description:
      "Spiritual affirmations and faith-centered inspirational videos produced for viewers around the world.",
    badge: "Faith Video",
  },
];

const SUPPORT_PRESETS = [
  { id: "10", amount: "$10", value: 10, label: "Creator Support" },
  { id: "25", amount: "$25", value: 25, label: "Video Production" },
  { id: "50", amount: "$50", value: 50, label: "Digital Content" },
  { id: "100", amount: "$100", value: 100, label: "Studio & Publishing" },
  { id: "other", amount: "Custom", value: 0, label: "Choose Amount" },
];

export default function HomeView() {
  const [selectedPreset, setSelectedPreset] = useState<string>("25");
  const [customAmount, setCustomAmount] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const paypalBaseUrl =
    process.env.NEXT_PUBLIC_PAYPAL_SUPPORT_URL ??
    process.env.NEXT_PUBLIC_PAYPAL_ME_URL ??
    "https://www.paypal.me/bhavaninayak";

  const handleSupportRedirect = () => {
    setErrorMsg(null);
    let finalAmount = "";

    if (selectedPreset === "other") {
      const numVal = Number(customAmount);
      if (!customAmount.trim() || isNaN(numVal) || numVal <= 0) {
        setErrorMsg("Please enter a valid positive amount (e.g. 15).");
        return;
      }
      finalAmount = numVal.toString();
    } else {
      const presetObj = SUPPORT_PRESETS.find((p) => p.id === selectedPreset);
      if (presetObj && presetObj.value > 0) {
        finalAmount = presetObj.value.toString();
      }
    }

    let url = paypalBaseUrl;
    if (finalAmount && !isNaN(Number(finalAmount))) {
      const cleanBase = paypalBaseUrl.replace(/\/$/, "");
      url = `${cleanBase}/${finalAmount}`;
    }

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-[#fafaf7] text-[#1a1d20]">
      <Navbar />

      {/* ─── Hero Section ─── */}
      <section className="relative min-h-[90vh] pt-32 sm:pt-36 pb-20 flex items-center justify-center overflow-hidden border-b border-[#c5a059]/25 bg-gradient-to-b from-[#FAF5E8]/60 via-[#fafaf7] to-[#fafaf7]">
        {/* Ambient background glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#c5a059]/15 to-amber-200/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#c5a059]/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Service Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#c5a059]/40 bg-white/80 backdrop-blur-md shadow-xs text-xs font-semibold text-[#1a1d20]">
              <Sparkles size={14} className="text-[#c5a059]" />
              <span>Official Digital Content Platform</span>
            </div>

            {/* Heading */}
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#1a1d20] leading-[1.15]">
              Digital Content <br />
              <span className="text-[#c5a059]">Creation Services</span>
            </h1>

            {/* Paragraph */}
            <p className="max-w-2xl mx-auto text-base sm:text-lg text-[var(--color-text-secondary)] font-normal leading-relaxed">
              I create and publish original inspirational video content on YouTube.
              My work focuses on delivering faith-based messages, affirmations, and
              spiritual encouragement to a global audience through digital platforms.
            </p>

            {/* PayPal Proof Notice Line */}
            <div className="inline-block max-w-xl mx-auto p-3.5 rounded-2xl bg-[#FAF5E8] border border-[#c5a059]/40 shadow-xs">
              <p className="text-xs sm:text-sm font-semibold text-[#1a1d20] flex items-center justify-center gap-2">
                <ShieldCheck size={16} className="text-[#c5a059] shrink-0" />
                <span>
                  All payments received are for digital content creation services. There are no physical products involved.
                </span>
              </p>
            </div>

            {/* Hero Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                href="#channels"
                variant="gold"
                size="lg"
                className="w-full sm:w-auto shadow-lg gap-2"
              >
                <Tv size={18} />
                <span>Watch on YouTube</span>
              </Button>

              <Button
                href="#support"
                variant="gold-outline"
                size="lg"
                className="w-full sm:w-auto shadow-sm gap-2"
              >
                <Heart size={18} className="text-[#c5a059]" />
                <span>Support the Content</span>
              </Button>
            </div>
          </motion.div>

          {/* Quick Metrics */}
          <div className="pt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="p-4 rounded-2xl bg-white border border-[#c5a059]/30 shadow-xs">
              <p className="font-heading text-2xl font-bold text-[#1a1d20]">4 Channels</p>
              <p className="text-xs text-[var(--color-text-muted)] mt-0.5">Active YouTube Channels</p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-[#c5a059]/30 shadow-xs">
              <p className="font-heading text-2xl font-bold text-[#1a1d20]">Original</p>
              <p className="text-xs text-[var(--color-text-muted)] mt-0.5">Video &amp; Voice Content</p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-[#c5a059]/30 shadow-xs">
              <p className="font-heading text-2xl font-bold text-[#1a1d20]">Global</p>
              <p className="text-xs text-[var(--color-text-muted)] mt-0.5">Worldwide Reach</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 2: My YouTube Channels ─── */}
      <section id="channels" className="py-24 px-6 max-w-6xl mx-auto scroll-mt-24">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="gold" className="gap-1.5">
            <Video size={14} className="text-[#c5a059]" />
            Digital Content Creation
          </Badge>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a1d20] tracking-tight">
            My YouTube Channels
          </h2>

          <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
            I provide digital content creation services through the following YouTube channels:
          </p>
        </div>

        {/* Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {YOUTUBE_CHANNELS.map((channel, index) => (
            <motion.div
              key={channel.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard className="p-8 h-full flex flex-col justify-between hover-gold-glow transition-all duration-300 border border-[#c5a059]/30 bg-white shadow-lg group rounded-3xl">
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-2xl bg-red-600/10 border border-red-500/30 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <Play size={22} className="text-red-600 fill-red-600 ml-0.5" />
                      </div>
                      <div>
                        <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#1a1d20] group-hover:text-[#c5a059] transition-colors">
                          {channel.name}
                        </h3>
                        <p className="text-xs text-[#c5a059] font-mono font-semibold">
                          {channel.handle}
                        </p>
                      </div>
                    </div>

                    <Badge variant="subtle" className="text-[11px] bg-black/5 text-[#4a505a]">
                      {channel.badge}
                    </Badge>
                  </div>

                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed font-normal">
                    {channel.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-black/5 flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#1a1d20] flex items-center gap-1.5">
                    <CheckCircle2 size={15} className="text-[#c5a059]" />
                    <span>Regular Original Video Releases</span>
                  </span>

                  <a
                    href={channel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-[#FAF5E8] border border-[#c5a059]/40 text-[#1a1d20] hover:bg-[#c5a059] hover:text-white transition-all shadow-xs group-hover:border-[#c5a059]"
                  >
                    <span>Visit Channel</span>
                    <ExternalLink size={13} />
                  </a>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Section Subtext */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-[#FAF5E8] border border-[#c5a059]/30 max-w-3xl mx-auto">
          <p className="text-sm text-[#1a1d20] font-medium flex items-center justify-center gap-2">
            <Globe2 size={16} className="text-[#c5a059]" />
            <span>These channels regularly publish original video content for viewers worldwide.</span>
          </p>
        </div>
      </section>

      {/* ─── Section 3: Support / Services Section ─── */}
      <section id="support" className="py-24 px-6 max-w-6xl mx-auto scroll-mt-24 border-t border-black/10">
        <div className="relative rounded-3xl overflow-hidden p-8 sm:p-14 border border-[#c5a059]/40 bg-gradient-to-br from-[#FAF5E8] via-[#FFFDF8] to-[#F5EFE0] shadow-2xl">
          <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-[#c5a059]/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <Badge variant="gold" className="gap-1.5">
                <Sparkles size={14} className="text-[#c5a059]" />
                Digital Content Services
              </Badge>

              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a1d20] tracking-tight">
                Support the Content
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed font-normal">
                <p>
                  Faith Rising Media provides digital content creation services through YouTube by
                  regularly producing and publishing original inspirational video content for a global audience.
                </p>
                <p>
                  If you find value in the digital content I create, you may choose to support the
                  continued production of these videos. Your payment helps cover the time, effort,
                  and resources required to create, edit, and publish consistent digital content.
                </p>
                <p className="font-semibold text-[#1a1d20]">
                  All payments received are for digital content creation services only.
                </p>
                <p>
                  This is not a donation, charity, or gift. It is a voluntary payment in exchange
                  for the digital content services provided through my YouTube channels.
                </p>
                <p>
                  There are no physical products involved, and no goods are shipped. This is a pure digital service.
                </p>
                <p className="italic text-[#1a1d20] font-medium">
                  Thank you for supporting the creation of meaningful digital content.
                </p>
              </div>

              {/* PayPal Verification Box */}
              <div className="p-4 rounded-2xl bg-white border border-[#c5a059]/50 shadow-sm space-y-1.5">
                <p className="text-xs font-bold uppercase tracking-wider text-[#c5a059] flex items-center gap-1.5">
                  <ShieldCheck size={14} />
                  <span>Important Service Notice</span>
                </p>
                <p className="text-sm font-bold text-[#1a1d20]">
                  All payments received are for digital content creation services. There are no physical products involved.
                </p>
              </div>
            </div>

            {/* Interactive Payment Support Box */}
            <div className="lg:col-span-5">
              <GlassCard className="p-6 sm:p-8 border-2 border-[#c5a059]/50 bg-white shadow-2xl rounded-3xl space-y-6">
                <div className="space-y-1 text-center">
                  <h3 className="font-heading text-2xl font-bold text-[#1a1d20]">
                    Support the Content
                  </h3>
                  <p className="text-xs text-[var(--color-text-muted)]">
                    Direct payment for digital video production &amp; publishing
                  </p>
                </div>

                {/* Preset Options */}
                <div className="grid grid-cols-2 gap-2.5">
                  {SUPPORT_PRESETS.map((preset) => {
                    const isSelected = selectedPreset === preset.id;
                    return (
                      <button
                        key={preset.id}
                        type="button"
                        onClick={() => {
                          setSelectedPreset(preset.id);
                          setErrorMsg(null);
                        }}
                        className={`p-3 rounded-2xl border text-center transition-all ${
                          isSelected
                            ? "border-[#c5a059] bg-[#FAF5E8] shadow-sm font-bold text-[#1a1d20]"
                            : "border-black/10 bg-[#fafaf7] hover:border-[#c5a059]/50 text-[var(--color-text-secondary)]"
                        }`}
                      >
                        <div className="font-heading text-lg font-bold">
                          {preset.amount}
                        </div>
                        <div className="text-[10px] text-[var(--color-text-muted)]">
                          {preset.label}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Custom Amount Input */}
                {selectedPreset === "other" && (
                  <div className="space-y-1">
                    <div className="flex items-center border-2 border-[#c5a059] rounded-2xl overflow-hidden bg-white shadow-sm">
                      <span className="px-3.5 text-base font-bold text-[#1a1d20] bg-[#FAF5E8] py-2.5 border-r border-[#c5a059]/30">
                        $
                      </span>
                      <input
                        type="number"
                        min="1"
                        step="1"
                        placeholder="Enter amount (USD)"
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value);
                          if (errorMsg) setErrorMsg(null);
                        }}
                        className="w-full px-3 py-2 text-sm text-[#1a1d20] outline-none font-medium placeholder:text-slate-400 font-sans"
                      />
                      <span className="px-3 text-[11px] font-bold text-[var(--color-text-muted)]">
                        USD
                      </span>
                    </div>
                  </div>
                )}

                {errorMsg && (
                  <p className="text-xs font-bold text-red-500 bg-red-50 border border-red-200 p-2.5 rounded-xl text-center">
                    {errorMsg}
                  </p>
                )}

                {/* Submit Button */}
                <button
                  type="button"
                  onClick={handleSupportRedirect}
                  className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#c5a059] to-[#b38f38] text-white font-bold text-base shadow-xl shadow-[#c5a059]/25 hover:shadow-2xl hover:brightness-105 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Support the Content</span>
                  <ArrowRight size={18} />
                </button>

                {/* Security Footer */}
                <div className="pt-2 text-center space-y-2 border-t border-black/5">
                  <p className="text-xs font-medium text-[var(--color-text-muted)] flex items-center justify-center gap-1.5">
                    <Lock size={12} className="text-[#c5a059]" />
                    <span>Processed securely through</span>
                    <span className="font-bold text-[#003087]">Pay</span>
                    <span className="font-bold text-[#0079C1]">Pal</span>
                  </p>
                  <p className="text-[10px] text-[var(--color-text-muted)] leading-tight">
                    Payments are strictly for digital content creation services delivered online.
                  </p>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
