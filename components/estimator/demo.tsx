"use client";

import { Customer } from "@/components/estimator/data";
import Router from "@/components/estimator/router";

export default function Demo({ customer = "demo" }: { customer?: Customer }) {
  return (
    <section className="grow bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-20 pb-12">
        <Router customer={customer} />
      </div>
    </section>
  );
}
