import Image from "next/image";
import Illustration from "@/public/images/auth-illustration.svg";

import Auth from "@/components/auth";

import Form from "./form";

export const metadata = {
  title: "Waitlist - Venue",
  description: "Empower venue managers to close more deals more efficiently",
};

export default function Waitlist() {
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
            {/* Left side */}
            <Auth />
            {/* Right side */}
            <div className="relative w-full max-w-md mx-auto">
              {/* Bg gradient */}
              <div
                className="absolute inset-0 opacity-40 md:bg-gradient-to-t md:from-transparent md:to-slate-300 -z-10"
                aria-hidden="true"
              />
              <div className="p-6 md:p-8">
                <div className="text-xl font-bold mb-6">Request a demo</div>
                <Form />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
