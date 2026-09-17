"use client";

import { useState } from "react";
import PageWrapper from "@/components/layout/PageWrapper";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";
import {
  Sparkles,
  ShieldCheck,
  Video,
  Globe2,
  Tv,
  Lock,
  ArrowRight,
  Heart,
  CheckCircle2,
} from "lucide-react";

const paypalBaseUrl =
  process.env.NEXT_PUBLIC_PAYPAL_SUPPORT_URL ??
  process.env.NEXT_PUBLIC_PAYPAL_ME_URL ??
  "https://www.paypal.me/bhavaninayak";

const supportTiers = [
  {
    id: "10",
    amount: "$10",
    value: 10,
    title: "Video Support",
    description: "Supports regular video scripting and audio creation.",
    isPopular: false,
  },
  {
    id: "25",
    amount: "$25",
    value: 25,
    title: "Content Creation",
    description: "Covers digital video editing and graphic assets.",
    isPopular: false,
  },
  {
    id: "50",
    amount: "$50",
    value: 50,
    title: "Channel Growth",
    description: "Assists ongoing publishing and digital media tools.",
    isPopular: true,
  },
  {
    id: "100",
    amount: "$100",
    value: 100,
    title: "Production Studio",
    description: "Supports high-definition inspirational media production.",
    isPopular: false,
  },
  {
    id: "other",
    amount: "Custom",
    value: 0,
    title: "Choose Amount",
    description: "Enter any amount to support digital content services.",
    isPopular: false,
  },
];

export default function SupportView() {
  const [selectedTier, setSelectedTier] = useState<string>("25");
  const [customAmount, setCustomAmount] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSupportRedirect = () => {
    setErrorMsg(null);
    let finalAmount = "";

    if (selectedTier === "other") {
      const numVal = Number(customAmount);
      if (!customAmount.trim() || isNaN(numVal) || numVal <= 0) {
        setErrorMsg("Please enter a valid positive amount (e.g., $15).");
        return;
      }
      finalAmount = numVal.toString();
    } else if (selectedTier) {
      const tierObj = supportTiers.find((t) => t.id === selectedTier);
      if (tierObj && tierObj.value > 0) {
        finalAmount = tierObj.value.toString();
      }
    }

    let url = paypalBaseUrl;
    if (finalAmount && !isNaN(Number(finalAmount))) {
      const baseUrl = paypalBaseUrl.replace(/\/$/, "");
      url = `${baseUrl}/${finalAmount}`;
    }

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <PageWrapper>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-20 space-y-16">
        {/* Header */}
        <div className="space-y-4 max-w-3xl">
          <Badge variant="gold" className="gap-1.5">
            <Sparkles size={14} className="text-[#c5a059]" />
            Digital Content Creation Services
          </Badge>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#1a1d20]">
            Support the Content
          </h1>

          <p className="text-base sm:text-lg text-[var(--color-text-secondary)] font-normal leading-relaxed">
            Faith Rising Media provides digital content creation services through YouTube by regularly
            producing and publishing original inspirational video content for a global audience.
          </p>
        </div>

        {/* Content & PayPal Compliance Notice */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-6">
            <GlassCard className="p-8 border border-[#c5a059]/30 bg-white shadow-lg rounded-3xl space-y-4">
              <h2 className="font-heading text-2xl font-bold text-[#1a1d20]">
                About Your Support
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed font-normal">
                <p>
                  If you find value in the digital content I create, you may choose to support the continued production of these videos. Your payment helps cover the time, effort, and resources required to create, edit, and publish consistent digital content.
                </p>
                <p className="font-bold text-[#1a1d20]">
                  All payments received are for digital content creation services only.
                </p>
                <p>
                  This is not a donation, charity, or gift. It is a voluntary payment in exchange for the digital content services provided through my YouTube channels.
                </p>
                <p>
                  There are no physical products involved, and no goods are shipped. This is a pure digital service.
                </p>
                <p className="italic text-[#1a1d20] font-medium">
                  Thank you for supporting the creation of meaningful digital content.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF5E8] border border-[#c5a059]/50 shadow-xs space-y-1">
                <p className="text-xs font-bold uppercase tracking-wider text-[#c5a059] flex items-center gap-1.5">
                  <ShieldCheck size={14} />
                  <span>Clear Service Disclosure</span>
                </p>
                <p className="text-sm font-bold text-[#1a1d20]">
                  All payments received are for digital content creation services. There are no physical products involved.
                </p>
              </div>
            </GlassCard>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-white border border-[#c5a059]/30 shadow-xs flex items-center gap-3">
                <Video size={20} className="text-[#c5a059] shrink-0" />
                <span className="text-xs font-semibold text-[#1a1d20]">Original YouTube Videos</span>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-[#c5a059]/30 shadow-xs flex items-center gap-3">
                <Globe2 size={20} className="text-[#c5a059] shrink-0" />
                <span className="text-xs font-semibold text-[#1a1d20]">Global Digital Reach</span>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-[#c5a059]/30 shadow-xs flex items-center gap-3">
                <Tv size={20} className="text-[#c5a059] shrink-0" />
                <span className="text-xs font-semibold text-[#1a1d20]">Regular Publishing</span>
              </div>
            </div>
          </div>

          {/* Payment Selection Box */}
          <div className="lg:col-span-5">
            <GlassCard className="p-6 sm:p-8 border-2 border-[#c5a059]/50 bg-white shadow-2xl rounded-3xl space-y-6">
              <div className="space-y-1 text-center">
                <h3 className="font-heading text-2xl font-bold text-[#1a1d20]">
                  Choose Support Level
                </h3>
                <p className="text-xs text-[var(--color-text-muted)]">
                  Voluntary payment for digital video production
                </p>
              </div>

              {/* Tiers */}
              <div className="space-y-2.5">
                {supportTiers.map((tier) => {
                  const isSelected = selectedTier === tier.id;
                  return (
                    <div
                      key={tier.id}
                      onClick={() => {
                        setSelectedTier(tier.id);
                        setErrorMsg(null);
                      }}
                      className={`relative cursor-pointer p-3.5 rounded-2xl border transition-all flex items-center justify-between ${
                        isSelected
                          ? "border-[#c5a059] bg-[#FAF5E8] shadow-xs"
                          : "border-black/10 bg-[#fafaf7] hover:border-[#c5a059]/50"
                      }`}
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-heading text-lg font-bold text-[#1a1d20]">
                            {tier.amount}
                          </span>
                          <span className="text-xs font-semibold text-[#1a1d20]">
                            — {tier.title}
                          </span>
                          {tier.isPopular && (
                            <span className="bg-[#c5a059] text-white text-[9px] font-bold uppercase px-2 py-0.5 rounded-full">
                              Popular
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-[var(--color-text-muted)] mt-0.5">
                          {tier.description}
                        </p>
                      </div>

                      <div
                        className={`h-4 w-4 rounded-full border flex items-center justify-center ${
                          isSelected ? "border-[#c5a059] bg-[#c5a059]" : "border-slate-300"
                        }`}
                      >
                        {isSelected && <div className="h-1.5 w-1.5 rounded-full bg-white" />}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Custom Amount Input */}
              {selectedTier === "other" && (
                <div className="space-y-1">
                  <div className="flex items-center border-2 border-[#c5a059] rounded-2xl overflow-hidden bg-white shadow-sm">
                    <span className="px-3.5 text-base font-bold text-[#1a1d20] bg-[#FAF5E8] py-2.5 border-r border-[#c5a059]/30">
                      $
                    </span>
                    <input
                      type="number"
                      min="1"
                      step="1"
                      placeholder="Enter positive amount (USD)"
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

              {/* Primary Action Button */}
              <button
                type="button"
                onClick={handleSupportRedirect}
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#c5a059] to-[#b38f38] text-white font-bold text-base shadow-xl shadow-[#c5a059]/25 hover:shadow-2xl hover:brightness-105 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Heart size={18} className="fill-white" />
                <span>Support the Content</span>
              </button>

              <div className="pt-2 text-center space-y-1 border-t border-black/5">
                <p className="text-xs font-medium text-[var(--color-text-muted)] flex items-center justify-center gap-1.5">
                  <Lock size={12} className="text-[#c5a059]" />
                  <span>Secure Payment Powered by</span>
                  <span className="font-bold text-[#003087]">Pay</span>
                  <span className="font-bold text-[#0079C1]">Pal</span>
                </p>
                <p className="text-[10px] text-[var(--color-text-muted)] leading-tight">
                  This payment is strictly for digital content creation services. There are no physical products involved.
                </p>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
