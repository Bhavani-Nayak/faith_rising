import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  explore: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "YouTube Channels", href: "/#channels" },
    { label: "Support the Content", href: "/#support" },
    { label: "Contact Us", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Refund Policy", href: "/refund-policy" },
    { label: "DMCA Notice", href: "/dmca" },
  ],
};

const youtubeChannels = [
  {
    name: "God's Daily Message",
    href: "https://youtube.com/@godsdailymessageofficial?si=Ev36GQG9HoYM7UZf",
  },
  {
    name: "God's Daily Voice",
    href: "https://youtube.com/@godsdailyvoice-mp4?si=iATQfcR0L-6u3S8q",
  },
  {
    name: "God's Affirmation",
    href: "https://youtube.com/@godsaffirmation01?si=aXGPtfTJJAEW5-gf",
  },
  {
    name: "God Affirmations",
    href: "https://youtube.com/@godaffirmations01?si=DifcJU-a8iWf_He5",
  },
];

export default function Footer() {
  return (
    <footer className="relative z-0 border-t border-[#c5a059]/30 mt-auto bg-[#F4F2EC]">
      {/* Top ambient gold subtle glow line */}
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[#c5a059]/60 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="h-10 px-2.5 rounded-xl border border-[#c5a059]/40 bg-white flex items-center justify-center shadow-sm overflow-hidden">
                <Image
                  src="/images/gracePathLogo.png"
                  alt="Faith Rising Logo"
                  width={34}
                  height={34}
                  className="object-contain"
                />
              </div>
              <span className="font-heading font-bold text-xl text-[#1a1d20] tracking-wide group-hover:text-[#c5a059] transition-colors">
                Faith Rising <span className="text-[#c5a059] font-sans text-xs uppercase tracking-widest ml-1 font-bold">Media</span>
              </span>
            </Link>

            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed max-w-sm font-normal">
              Faith Rising Media provides digital content creation services through YouTube, producing and publishing original inspirational video content for a global audience.
            </p>

            <p className="text-xs text-[#c5a059] font-semibold border-l-2 border-[#c5a059] pl-3 py-1 bg-[#FAF5E8] rounded-r-md">
              All payments received are for digital content creation services. There are no physical products involved.
            </p>
          </div>

          {/* Explore Column */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#c5a059] mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.explore.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-text-secondary)] hover:text-[#c5a059] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* YouTube Channels Column */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#c5a059] mb-4">
              YouTube Channels
            </h3>
            <ul className="space-y-2.5">
              {youtubeChannels.map((channel) => (
                <li key={channel.name}>
                  <a
                    href={channel.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[var(--color-text-secondary)] hover:text-[#c5a059] transition-colors duration-200"
                  >
                    {channel.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#c5a059] mb-4">
              Legal & Policies
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-text-secondary)] hover:text-[#c5a059] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom copyright notice */}
        <div className="mt-12 pt-8 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-xs text-[var(--color-text-muted)]">
            © {new Date().getFullYear()} Faith Rising Media. All rights reserved.
          </p>
          <p className="text-xs text-[var(--color-text-muted)]">
            Digital Content Creation Services
          </p>
        </div>
      </div>
    </footer>
  );
}
