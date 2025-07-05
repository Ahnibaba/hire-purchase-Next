
import { AuthHero } from "@/components/AuthHero";
import { SignUpForm } from "@/components/SignUpForm";

import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Signup", // Becomes "Signup | Hire Purchase"
};

export default function SignupPage() {

   return (
    <>
      <section className="w-full flex flex-row justify-between">
         <AuthHero />
         <SignUpForm />
      </section>
    </>
   )
}