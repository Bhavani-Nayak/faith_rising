"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "YouTube Channels", href: "/#channels" },
  { label: "Support the Content", href: "/#support" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2">
      <nav className="liquid-glass-strong rounded-full px-4 sm:px-6 py-2.5 flex items-center justify-between shadow-xl border border-[#c5a059]/35 bg-white/90 backdrop-blur-xl transition-all duration-300">
        {/* Left Side: Brand Logo & Title */}
        <Link href="/" className="flex items-center gap-3 group" id="navbar-logo">
          <div className="h-10 w-10 sm:h-10 sm:w-10 rounded-xl border border-[#c5a059]/40 bg-white flex items-center justify-center shadow-xs group-hover:scale-105 group-hover:border-[#c5a059] transition-all duration-300 overflow-hidden shrink-0">
            <Image
              src="/images/gracePathLogo.png"
              alt="Faith Rising Logo"
              width={34}
              height={34}
              className="object-contain"
            />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-1.5">
            <span className="font-heading font-bold text-lg sm:text-xl text-[#1a1d20] tracking-wide group-hover:text-[#c5a059] transition-colors">
              Faith Rising
            </span>
            <span className="text-[#c5a059] text-[10px] sm:text-xs font-sans uppercase font-bold tracking-widest hidden sm:inline-block">
              Media
            </span>
          </div>
        </Link>

        {/* Right Side: All Page Links */}
        <div className="hidden md:flex items-center gap-1 sm:gap-2">
          <div className="flex items-center gap-1 bg-[#1a1d20]/[0.03] p-1 rounded-full border border-black/5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  id={`nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                  className={`px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "text-[#1a1d20] bg-white border border-[#c5a059]/40 shadow-xs font-semibold"
                      : "text-[var(--color-text-secondary)] hover:text-[#c5a059] hover:bg-white/60"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <Link
            href="/#support"
            id="nav-support-cta"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs lg:text-sm font-semibold border border-[#c5a059]/60 text-[#1a1d20] bg-gradient-to-r from-amber-500/10 via-[#c5a059]/15 to-amber-500/10 hover:bg-[#c5a059] hover:text-white hover:border-[#c5a059] transition-all duration-300 shadow-xs group"
          >
            <Sparkles size={14} className="text-[#c5a059] group-hover:text-white transition-colors" />
            <span>Support</span>
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            className="p-2 rounded-full text-[var(--color-text-secondary)] hover:text-[#c5a059] hover:bg-[#c5a059]/10 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            id="nav-mobile-toggle"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu dropdown */}
      {mobileOpen && (
        <div className="md:hidden mt-2 liquid-glass-strong rounded-3xl p-4 space-y-2 border border-[#c5a059]/35 bg-white/95 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="text-xs font-semibold text-[#c5a059] uppercase tracking-wider px-3 pt-1">
            Navigation
          </div>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                id={`nav-mobile-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center justify-between px-4 py-2.5 rounded-2xl text-sm transition-all ${
                  isActive
                    ? "text-[#1a1d20] bg-[#c5a059]/20 border border-[#c5a059]/40 font-bold shadow-xs"
                    : "text-[var(--color-text-secondary)] hover:text-[#c5a059] hover:bg-[#c5a059]/10 font-medium"
                }`}
              >
                <span>{link.label}</span>
                {isActive && <Sparkles size={14} className="text-[#c5a059]" />}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}



