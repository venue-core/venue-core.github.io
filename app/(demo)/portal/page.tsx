import Link from "next/link";
import { addDays, format } from "date-fns";

import { CURRENCY_FORMAT } from "@/components/estimator/estimate/utils";
import {
  INVOICE_1_DATE,
  INVOICE_2_DATE,
  NEXT_PAYMENT_DAYS,
  TODAY,
} from "@/app/(demo)/portal/data";
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
      {/*<select id="tab-select"*/}
      {/*        className="hidden py-3 px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"*/}
      {/*        aria-label="Tabs" role="tablist">*/}
      {/*  <option value="#hs-tab-to-select-1">Tab 1</option>*/}
      {/*  <option value="#hs-tab-to-select-2">Tab 2</option>*/}
      {/*  <option value="#hs-tab-to-select-3">Tab 3</option>*/}
      {/*</select>*/}
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
          href={`/payment/checkout?type=90_DAYS&date=${addDays(
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
  { title: "Paid", color: "green-500", amount: 8_000 },
  { title: "Outstanding", color: "red-500", amount: 38_780 },
  { title: "Total", color: "gray-800", amount: 46_780 },
] as const;

function Payment() {
  return (
    <div>
      {/*<div className="mb-4 text-base tracking-wide font-semibold text-blue-600 uppercase">*/}
      {/*  Payments*/}
      {/*</div>*/}
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
    </div>
  );
}

const EVENTS = [
  {
    title: "Invoice Updated",
    date: INVOICE_2_DATE,
    user: "Jennifer Wile",
    content: (
      <div>
        <Link
          className="block text-sm font-medium text-blue-500 hover:text-blue-400 group"
          href="/portal/invoice/2"
        >
          View Invoice
        </Link>
      </div>
    ),
  },
  {
    title: "Change Requested",
    date: new Date(2023, 8, 26, 8, 32),
    user: "Katherine Wang",
  },
  {
    title: "Deposit Paid",
    date: new Date(2023, 6, 21, 8, 24),
    user: "Katherine Wang",
    content: <div>{CURRENCY_FORMAT.format(8000)} paid by ACH</div>,
  },
  {
    title: "Invoice Generated",
    date: INVOICE_1_DATE,
    user: "Jennifer Wile",
    content: (
      <div>
        <Link
          className="block text-sm font-medium text-blue-500 hover:text-blue-400 group"
          href="/portal/invoice/1"
        >
          View Invoice
        </Link>
      </div>
    ),
  },
  {
    title: "Tour Completed",
    date: new Date(2023, 6, 15, 10, 0),
    user: "Stan Liu",
    content: (
      <div>
        <div>Notes:</div>
        <div>
          Interested. Follow up with emailing katherinewang2012@gmail.com with
          info packet and cost calculator.
        </div>
      </div>
    ),
  },
  {
    title: "Tour Scheduled",
    date: new Date(2023, 5, 31, 9, 5),
    user: "Katherine Wang",
    content: <div>Scheduled tour for Jul 15th, 2023 10:00AM</div>,
  },
] as const;

function Timeline() {
  return (
    <div>
      {/*<div className="mb-4 text-base tracking-wider font-semibold text-blue-600 uppercase">*/}
      {/*  Timeline*/}
      {/*</div>*/}
      <div>
        <ol className="relative border-l border-gray-300">
          {EVENTS.map((e) => (
            <li key={e.title} className="mb-10 ml-4">
              <div className="absolute w-4 h-4 bg-gray-400 rounded-full mt-1.5 -left-2 border border-white" />
              <div className="mb-2 text-lg font-semibold text-gray-900">
                {e.title}
              </div>
              <div className="mb-2 block text-sm font-normal leading-none text-gray-500">
                <div className="flex justify-between">
                  <span>{format(e.date, "LLL d, yyy hh:mma")}</span>
                  <span>{e.user}</span>
                </div>
              </div>
              {"content" in e && e.content && (
                <div className="mb-2 text-sm font-normal text-gray-500">
                  {e.content}
                </div>
              )}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
