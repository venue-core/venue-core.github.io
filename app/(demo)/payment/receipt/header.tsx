"use client";

import { useSearchParams } from "next/navigation";

export default function Header() {
  const search = useSearchParams();
  const email = search.get("email") || "your email";
  return (
    <>
      <h2 className="h2 mb-4">Payment Complete</h2>
      <div className="text-slate-500 space-y-4 mb-8">
        Thank you for your payment! A confirmation email has been sent to{" "}
        {email}.
      </div>
    </>
  );
}
