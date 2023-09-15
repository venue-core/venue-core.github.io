"use client";

import Image from "next/image";
import Avatar01 from "@/public/images/avatar-01.jpg";
import Avatar02 from "@/public/images/avatar-02.jpg";
import Avatar03 from "@/public/images/avatar-03.jpg";
import Avatar04 from "@/public/images/avatar-04.jpg";

export default function Auth() {
  return (
    <div className="hidden lg:block grow lg:mt-20 mb-12 lg:mb-0 flex flex-col items-center">
      {/* Avatars */}
      <div className="flex -space-x-3 -ml-0.5 mb-6">
        {AVATARS.map((avatar, i) => (
          <Image
            key={i}
            className="rounded-full border-2 border-slate-900 box-content"
            src={avatar}
            width={40}
            height={40}
            alt={`Avatar ${i}`}
          />
        ))}
      </div>
      {/* Headline */}
      <h2 className="h2 mb-8 text-center lg:text-left">
        Pricing and payments built for{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
          event venues
        </span>
      </h2>
      {/* List */}
      <ul className="inline-flex flex-col text-lg text-slate-500 space-y-3">
        {BULLETS.map((value, i) => (
          <li className="flex items-center" key={i}>
            <svg
              className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
              viewBox="0 0 12 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
            </svg>
            <span>{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const AVATARS = [Avatar01, Avatar02, Avatar03, Avatar04] as const;

const BULLETS = [
  "Automated scheduling and intake",
  "Configurable cost calculator",
  "Invoice and payment management",
  "Cash flow and service analytics",
] as const;
