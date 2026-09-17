import LegalPageView from "@/components/views/LegalPageView";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DMCA Notice | Faith Rising Media",
  description: "DMCA Notice and copyright policies for Faith Rising Media digital content creation services and YouTube channels.",
};

const content = `
<div class="p-5 rounded-2xl bg-[#FAF5E8] border border-[#c5a059]/40 mb-10 space-y-2">
  <p class="text-xs font-bold uppercase tracking-wider text-[#c5a059]">DMCA Notice – Faith Rising Media</p>
  <p class="text-base text-[#1a1d20] leading-relaxed font-medium">
    Faith Rising Media respects the intellectual property rights of others.
  </p>
</div>

<p>
  If you believe that any content on this website or our YouTube channels infringes your copyright, please send a notice to the email address provided on the <a href="/contact">Contact Us</a> page with the following information:
</p>

<ul>
  <li>Your full name and contact information</li>
  <li>Description of the copyrighted work</li>
  <li>URL or location of the allegedly infringing material</li>
  <li>A statement that you have a good faith belief that the use is not authorized</li>
  <li>A statement under penalty of perjury that the information is accurate</li>
  <li>Your physical or electronic signature</li>
</ul>

<p>
  We will review and respond to valid DMCA notices promptly.
</p>

<h2>Contact for Copyright Notices</h2>
<p>
  Please send all notices to: <a href="mailto:contact@faithrisingmedia.com">contact@faithrisingmedia.com</a> or via our <a href="/contact">Contact Us</a> page.
</p>
`;

export default function DMCAPage() {
  return (
    <LegalPageView
      title="DMCA Notice"
      lastUpdated="September 2026"
      content={content}
    />
  );
}
