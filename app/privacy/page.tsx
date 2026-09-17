import LegalPageView from "@/components/views/LegalPageView";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Faith Rising Media",
  description: "Faith Rising Media Privacy Policy — explaining how we collect, use, and protect your information for digital content creation services.",
};

const content = `
<div class="p-5 rounded-2xl bg-[#FAF5E8] border border-[#c5a059]/40 mb-10 space-y-2">
  <p class="text-xs font-bold uppercase tracking-wider text-[#c5a059]">Service Privacy Disclosure</p>
  <p class="text-base text-[#1a1d20] leading-relaxed font-medium">
    Faith Rising Media (“we”, “us”, or “our”) operates this website and provides digital content creation services primarily through YouTube and related digital platforms. This Privacy Policy explains how we collect, use, and protect your information.
  </p>
</div>

<h2>1. Information We Collect</h2>
<p>We may collect the following types of information:</p>
<ul>
  <li>Name and email address (when you contact us or make a payment)</li>
  <li>Payment information (processed securely through PayPal)</li>
  <li>Basic technical information such as IP address, browser type, and device information when you visit this website</li>
</ul>
<p>We do not collect sensitive personal information unnecessarily.</p>

<h2>2. How We Use Your Information</h2>
<p>We use the information we collect for the following purposes:</p>
<ul>
  <li>To process payments for digital content creation services</li>
  <li>To respond to your inquiries</li>
  <li>To improve our website and digital content services</li>
  <li>To comply with legal and regulatory requirements</li>
</ul>

<h2>3. Payment Processing</h2>
<p>All payments are processed through PayPal. We do not store your full payment card details on our servers. Please refer to PayPal’s Privacy Policy for information on how they handle your payment data.</p>

<h2>4. Sharing of Information</h2>
<p>We do not sell, rent, or trade your personal information.</p>
<p>We may share information only in the following cases:</p>
<ul>
  <li>With payment processors (such as PayPal) to complete transactions</li>
  <li>When required by law or legal process</li>
  <li>To protect our rights and prevent fraud</li>
</ul>

<h2>5. Data Security</h2>
<p>We take reasonable technical and organizational measures to protect your personal information from unauthorized access, loss, or misuse. However, no method of transmission over the internet is 100% secure.</p>

<h2>6. Third-Party Links</h2>
<p>This website may contain links to third-party platforms such as YouTube and PayPal. We are not responsible for the privacy practices of these external websites.</p>

<h2>7. Your Rights</h2>
<p>You may request access to, correction of, or deletion of your personal information by contacting us through the email provided on the <a href="/contact">Contact Us</a> page.</p>

<h2>8. Changes to This Privacy Policy</h2>
<p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.</p>

<h2>9. Contact Us</h2>
<p>If you have any questions about this Privacy Policy or our data practices, please contact us at the email address provided on the <a href="/contact">Contact Us</a> page (<a href="mailto:contact@faithrisingmedia.com">contact@faithrisingmedia.com</a>).</p>
`;

export default function PrivacyPage() {
  return (
    <LegalPageView
      title="Privacy Policy"
      lastUpdated="September 2026"
      content={content}
    />
  );
}
