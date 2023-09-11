import Image from "next/image";
import Illustration from "@/public/images/auth-illustration.svg";

import Form from "./form";

export const metadata = {
  title: "Reset Password - Venue",
  description: "Empower venue managers to close more deals more efficiently",
};

export default function ResetPassword() {
  return (
    <>
      <div
        className="hidden md:block absolute left-1/2 -translate-x-1/2 pointer-events-none -z-10"
        aria-hidden="true"
      >
        <Image
          src={Illustration}
          className="max-w-none"
          priority
          alt="Page Illustration"
        />
      </div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-24 pb-12 md:pt-40 md:pb-20">
          <div className="lg:flex lg:space-x-20">
            <div className="relative w-full max-w-md mx-auto">
              <div
                className="absolute inset-0 opacity-40 md:bg-gradient-to-t md:from-transparent md:to-slate-300 -z-10"
                aria-hidden="true"
              />
              <Form />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
