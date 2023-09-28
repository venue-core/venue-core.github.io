"use client";

import { CURRENCY_FORMAT } from "@/components/estimator/estimate/utils";
import { PAYMENTS } from "@/app/(demo)/portal/data";

export default function Payments() {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 sm:gap-12 text-center">
      {PAYMENTS.map((p) => (
        <div key={p.title}>
          <h4 className="text-lg sm:text-xl font-bold text-gray-800">
            {p.title}
          </h4>
          <div
            className={`mt-2 sm:mt-3 text-2xl sm:text-3xl font-bold text-${p.color}`}
          >
            {CURRENCY_FORMAT.format(p.amount)}
          </div>
          {"subtitle" in p && p.subtitle && (
            <div className="mt-1 text-gray-600">{p.subtitle}</div>
          )}
        </div>
      ))}
    </div>
  );
}
