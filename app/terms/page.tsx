import LegalPageView from "@/components/views/LegalPageView";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Faith Rising Media",
  description: "Terms of Service governing Faith Rising Media digital content creation services and website usage.",
};

const content = `
<div class="p-5 rounded-2xl bg-[#FAF5E8] border border-[#c5a059]/40 mb-10 space-y-2">
  <p class="text-xs font-bold uppercase tracking-wider text-[#c5a059]">Welcome to Faith Rising Media</p>
  <p class="text-base text-[#1a1d20] leading-relaxed font-medium">
    By accessing this website or making a payment, you agree to the following Terms of Service.
  </p>
</div>

<h2>1. Nature of Services</h2>
<p>Faith Rising Media provides digital content creation services. These services include the creation and publishing of original inspirational and faith-based video content on YouTube and related digital platforms.</p>
<p><strong>All payments made on this website are strictly for digital content creation services.</strong></p>

<h2>2. No Physical Products</h2>
<p>We do not sell, offer, or ship any physical products, merchandise, or goods. All services provided are digital in nature and delivered online.</p>

<div class="p-4 rounded-xl bg-white border border-[#c5a059]/40 my-6 shadow-xs">
  <p class="text-xs font-bold text-[#1a1d20] uppercase tracking-wider">Clear Service Disclosure</p>
  <p class="text-sm font-semibold text-[#1a1d20] mt-1">
    All payments received are for digital content creation services. There are no physical products involved.
  </p>
</div>

<h2>3. Payments</h2>
<p>Payments are processed securely through PayPal. By making a payment, you acknowledge that you are paying for digital content creation services provided by Faith Rising Media.</p>

<h2>4. Intellectual Property</h2>
<p>All video content, text, graphics, and other materials created and published by Faith Rising Media remain the sole intellectual property of Faith Rising Media. You may not copy, reproduce, distribute, or create derivative works without prior written permission.</p>

<h2>5. User Conduct</h2>
<p>You agree not to misuse this website or engage in any activity that may harm the website, its services, or other users.</p>

<h2>6. Limitation of Liability</h2>
<p>Faith Rising Media shall not be held liable for any indirect, incidental, or consequential damages arising from the use of this website or digital content services.</p>

<h2>7. Changes to Terms</h2>
<p>We reserve the right to update or modify these Terms of Service at any time. Continued use of the website after changes are posted constitutes acceptance of the updated terms.</p>

<h2>8. Governing Law</h2>
<p>These Terms shall be governed by and interpreted in accordance with the laws of India.</p>

<h2>9. Contact Information</h2>
<p>For any questions regarding these Terms of Service, please contact us through the email provided on the <a href="/contact">Contact Us</a> page (<a href="mailto:contact@faithrisingmedia.com">contact@faithrisingmedia.com</a>).</p>
`;

export default function TermsPage() {
  return (
    <LegalPageView
      title="Terms of Service"
      lastUpdated="September 2026"
      content={content}
    />
  );
}
