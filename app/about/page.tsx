import AboutView from "@/components/views/AboutView";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Faith Rising Media",
  description: "Learn about Faith Rising Media — digital content creation services producing original inspirational video content on YouTube.",
};

export default function AboutPage() {
  return <AboutView />;
}
