"use client";

import Router from "@/components/estimator/router";

export default function Demo({
  customer = "demo",
}: {
  customer?: "1909" | "demo" | "padua-hills" | "sherman-gardens";
}) {
  return (
    <section className="bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-24 pb-12">
        <Router customer={customer} />
      </div>
    </section>
  );
}
