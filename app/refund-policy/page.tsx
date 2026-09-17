import LegalPageView from "@/components/views/LegalPageView";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy | Faith Rising Media",
  description: "Faith Rising Media Refund Policy for digital content creation services.",
};

const content = `
<div class="p-5 rounded-2xl bg-[#FAF5E8] border border-[#c5a059]/40 mb-10 space-y-2">
  <p class="text-xs font-bold uppercase tracking-wider text-[#c5a059]">Refund Policy Overview</p>
  <p class="text-base text-[#1a1d20] leading-relaxed font-medium">
    All payments received by Faith Rising Media are for digital content creation services. Please review our refund guidelines below.
  </p>
</div>

<h2>1. Nature of Payments</h2>
<p>All payments received by Faith Rising Media are for digital content creation services provided through YouTube and related digital platforms.</p>
<p>These payments are not for physical products, subscriptions with guaranteed deliverables, or tangible goods.</p>

<h2>2. Non-Refundable Services</h2>
<p>Since the services provided are digital in nature and involve the creation and publishing of online video content, all payments are generally non-refundable.</p>

<h2>3. Exceptional Cases</h2>
<p>If you believe a payment was made in error, you may contact us within 7 days of the transaction date. We will review such requests on a case-by-case basis.</p>

<h2>4. How to Request a Review</h2>
<p>To request a review of a payment, please email us through the <a href="/contact">Contact Us</a> page with the following details:</p>
<ul>
  <li>Your full name</li>
  <li>Date of payment</li>
  <li>PayPal transaction ID</li>
  <li>Reason for the request</li>
</ul>

<h2>5. Processing Time</h2>
<p>We aim to respond to all refund-related queries within 5–7 business days.</p>

<h2>6. Contact</h2>
<p>For any questions regarding this Refund Policy, please contact us through the email address provided on the <a href="/contact">Contact Us</a> page (<a href="mailto:contact@faithrisingmedia.com">contact@faithrisingmedia.com</a>).</p>
`;

export default function RefundPolicyPage() {
  return (
    <LegalPageView
      title="Refund Policy"
      lastUpdated="September 2026"
      content={content}
    />
  );
}
