import LoginView from "@/components/views/LoginView";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In / Sign Up",
  description: "Sign in or create your Faith Rising Media account.",
};

export default function LoginPage() {
  return <LoginView />;
}


