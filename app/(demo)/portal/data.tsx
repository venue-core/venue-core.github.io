import Link from "next/link";

import { CURRENCY_FORMAT } from "@/components/estimator/estimate/utils";

export const VENUE = {
  name: "Padua Hills",
  email: "jennifer@paduaweddings.com",
  address: {
    street: "4467 Padua Ave.",
    city: "Claremont",
    state: "CA",
    zipcode: "91711",
  },
};
export const USER = {
  firstName: "Katherine",
  lastName: "Wang",
  address: {
    street: "2726 Noriega St.",
    city: "San Francisco",
    state: "CA",
    zipcode: "94122",
  },
};

export const TODAY = new Date();
export const INVOICE_1_DATE = new Date(2023, 6, 20, 9);
export const INVOICE_2_DATE = new Date(2023, 8, 26, 15, 45);
export const NEXT_PAYMENT_DAYS = 7;

export const EVENTS = [
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
];
