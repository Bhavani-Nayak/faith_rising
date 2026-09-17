import SupportView from "@/components/views/SupportView";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support the Content | Faith Rising Media",
  description: "Support Faith Rising Media digital content creation services and inspirational video production on YouTube.",
};

export default function SupportPage() {
  return <SupportView />;
}
