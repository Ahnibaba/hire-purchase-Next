import { AuthHero } from "@/components/AuthHero";
import { LoginForm } from "@/components/LoginForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login", // Becomes "Login | Hire Purchase"
};

export default function LoginPage() {
    return (
      <section className="w-full flex flex-row justify-between">
         <AuthHero height={900} />
         <LoginForm />
      </section>
    )
}