import Link from "next/link";
import { addDays, format } from "date-fns";

import { CURRENCY_FORMAT } from "@/components/estimator/estimate/utils";
import { NEXT_PAYMENT_DAYS, TODAY } from "@/app/(demo)/portal/data";
import { Timeline } from "@/app/(demo)/portal/timeline";
import Welcome from "@/app/(demo)/portal/welcome";

export const metadata = {
  title: "Portal - OneVenue",
  description: "Empower venue managers to close more deals more efficiently",
};

export default function Portal() {
  return (
    <div className="mt-8 px-8 max-w-md mx-auto">
      <Welcome />
      <Tabs />
    </div>
  );
}

function Tabs() {
  return (
    <>
      <nav
        className="flex justify-center space-x-2"
        aria-label="Tabs"
        role="tablist"
      >
        <button
          type="button"
          className="flex-1 px-auto uppercase tracking-wider hs-tab-active:bg-blue-200 hs-tab-active:text-blue-600 hs-tab-active:hover:text-blue-800 py-3 gap-2 bg-transparent text-sm font-medium text-center text-gray-500 rounded-lg hover:text-blue-600 active"
          data-hs-tab="#payments-tab"
          aria-controls="payments-tab"
          role="tab"
        >
          Payments
        </button>
        <button
          type="button"
          className="flex-1 px-auto uppercase tracking-wider hs-tab-active:bg-blue-200 hs-tab-active:text-blue-600 hs-tab-active:hover:text-blue-800 py-3 gap-2 bg-transparent text-sm font-medium text-center text-gray-500 rounded-lg hover:text-blue-600"
          data-hs-tab="#timeline-tab"
          aria-controls="timeline-tab"
          role="tab"
        >
          Timeline
        </button>
      </nav>
      <div className="mt-8">
        <div
          id="payments-tab"
          role="tabpanel"
          aria-labelledby="payments-tab-item"
        >
          <Payment />
        </div>
        <div
          id="timeline-tab"
          className="hidden"
          role="tabpanel"
          aria-labelledby="timeline-tab-item"
        >
          <Timeline />
        </div>
      </div>
    </>
  );
}

const PAYMENTS = [
  {
    title: "Next Payment",
    amount: 8_000,
    color: "blue-600",
    subtitle: (
      <div>
        <div>{format(addDays(TODAY, NEXT_PAYMENT_DAYS), "E LLL d, yyy")}</div>
        <Link
          className="mt-1 block font-medium text-blue-500 hover:text-blue-400 group"
          href={`/payment/checkout?type=90_DAYS&amount=8000&date=${addDays(
            TODAY,
            90 + NEXT_PAYMENT_DAYS
          ).getTime()}`}
        >
          Pay now
          <span className="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
            -&gt;
          </span>
        </Link>
      </div>
    ),
  },
  { title: "Paid", color: "green-600", amount: 8_000 },
  { title: "Outstanding", color: "red-500", amount: 10_621.84 },
  { title: "Total", color: "gray-700", amount: 18_621.84 },
] as const;

function Payment() {
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
