"use client";

import { use, useState } from "react";
import { useEbookDetailViewModel } from "@/viewmodels/useEbookDetailViewModel";
import EbookDetailView from "@/components/views/EbookDetailView";
import PayPalCheckoutButton from "@/components/paypal/PayPalCheckoutButton";

export default function EbookDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const vm = useEbookDetailViewModel(slug);
  const [customAmount, setCustomAmount] = useState<string>("");

  const displayPrice = vm.ebook?.isPayWhatYouWant
    ? customAmount.trim() === ""
      ? "0.00"
      : !isNaN(Number(customAmount))
      ? customAmount
      : "0.00"
    : vm.ebook
    ? (vm.ebook.price / 100).toFixed(2)
    : "0.00";

  const checkoutSlot = vm.ebook ? (
    <div className="space-y-4">
      {vm.ebook.isPayWhatYouWant && !vm.ebook.paypalDirectLink && (
        <div className="space-y-2 text-left">
          <label className="text-xs font-bold text-[#1a1d20] uppercase tracking-wider block">
            Enter your desired price:
          </label>
          <div className="flex items-center border-2 border-[#c5a059] rounded-xl overflow-hidden bg-white shadow-sm">
            <span className="px-3.5 text-base font-bold text-[#1a1d20] bg-[#FAF5E8] py-3 border-r border-[#c5a059]/30">
              $
            </span>
            <input
              type="number"
              min="1"
              step="0.01"
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
              placeholder="Enter amount (e.g. 10.00)"
              className="w-full px-3.5 py-3 text-base font-bold text-[#1a1d20] outline-none placeholder:text-slate-400"
            />
            <span className="px-3 text-xs font-bold text-[var(--color-text-muted)] uppercase tracking-wider">
              USD
            </span>
          </div>
        </div>
      )}

      {vm.ebook.paypalDirectLink ? (
        <div className="space-y-3">
          <a
            href={vm.ebook.paypalDirectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-4 px-6 rounded-full font-bold text-white text-base shadow-lg transition-all duration-200 hover:opacity-90 hover:shadow-xl active:scale-[0.98]"
            style={{ background: "linear-gradient(135deg, #8a703e 0%, #9e8655 50%, #8a703e 100%)" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            Buy Now — {vm.ebook.isPayWhatYouWant ? "Pay What You Want" : `$${(vm.ebook.price / 100).toFixed(2)}`}
          </a>
          <p className="text-[11px] text-[var(--color-text-muted)] text-center">
            🔒 Instant eBook delivery via PayPal.
          </p>
        </div>
      ) : (
        <PayPalCheckoutButton
          productId={vm.ebook.id}
          productSlug={vm.ebook.slug}
          amount={vm.ebook.price}
          isPayWhatYouWant={vm.ebook.isPayWhatYouWant}
          customAmount={customAmount}
        />
      )}
    </div>
  ) : null;

  return (
    <EbookDetailView
      {...vm}
      checkoutSlot={checkoutSlot}
      customPriceDisplay={`$${displayPrice}`}
    />
  );
}



