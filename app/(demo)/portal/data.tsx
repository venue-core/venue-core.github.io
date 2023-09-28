"use client";

import { createContext, useState } from "react";
import Link from "next/link";
import { addDays, format } from "date-fns";

import { CURRENCY_FORMAT } from "@/components/estimator/estimate/utils";

export const VENUE = {
  name: "Padua Hills",
  email: "jennifer@paduaweddings.com",
  phone: "+1 909 624 8628",
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
  event: "Katherine and Itachi's",
  date: new Date(2024, 4, 25),
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

type Event = {
  title: string;
  date: Date;
  user: string;
  content?: React.ReactNode;
};
interface Context {
  events: Event[];
  addEvent: (event: Event) => void;
}

export const EventsContext = createContext<Context>({} as unknown as Context);

export const EventsProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [events, setEvents] = useState<Context["events"]>(EVENTS);
  return (
    <EventsContext.Provider
      value={{ events, addEvent: (e) => setEvents([e, ...events]) }}
    >
      {children}
    </EventsContext.Provider>
  );
};

export const ADMIN_FEE_RATE = 0.22;
export const TAX_RATE = 0.095;

const _INVOICE1 = {
  date: INVOICE_1_DATE,
  paid: 8_000,
  due: 8_000,
  items: [
    {
      item: "Venue",
      subitems: [
        {
          item: "Venue - Included with $30,000 minimum",
          amount: 0,
          min: 30_000,
        },
        { item: "Parking Attendant", amount: 500 },
      ],
    },
    {
      item: "Catering Services",
      subitems: [
        {
          category: "Appetizers",
          item: "Beef Satay with Peanut Sauce",
          amount: 1050,
        },
        { category: "Appetizers", item: "Wagyu Beef Sliders", amount: 1100 },
        {
          category: "Appetizers",
          item: "Shrimp Tempura with Dripping Sauce",
          amount: 1100,
        },
        {
          category: "Appetizers",
          item: "Endive with Blue Cheese & Bacon",
          amount: 900,
        },
        { category: "Appetizers", item: "Mini Ceviche Tostadas", amount: 1050 },
        { category: "Appetizers", item: "Charcuterie Board", amount: 2000 },

        {
          category: "Buffet",
          item: "Braised Short Ribs (100 person min)",
          amount: 0,
        },
        {
          category: "Buffet",
          item: "Swordfish (market price, estimate)",
          amount: 10000,
        },
        { category: "Buffet", item: "Roast Leg of Lamb", amount: 0 },

        { category: "Side Dishes", item: "Twice Baked Potatoes", amount: 0 },
        { category: "Side Dishes", item: "Grilled Asparagus", amount: 0 },
        {
          category: "Side Dishes",
          item: "Fresh Wilted Spinach Salad with Warm Pancetta Dressing",
          amount: 0,
        },
        { category: "Side Dishes", item: "Marinated Mushrooms", amount: 0 },

        { category: "Dessert", item: "Cake fee", amount: 300 },
      ],
    },
    {
      item: "Bar Services",
      subitems: [
        { item: "6 hours - Superior Brands", amount: 5300 },
        { item: "Setup Fee", amount: 750 },
      ],
    },
    {
      item: "Rental Services",
      subitems: [{ item: "Stand Up 8ft Heaters (5 heaters)", amount: 500 }],
    },
  ],
} as const;

const _INVOICE2 = {
  date: INVOICE_2_DATE,
  paid: 8_000,
  due: 8_000,
  items: [
    {
      item: "Venue",
      subitems: [
        {
          item: "Venue - Included with $30,000 minimum",
          amount: 0,
          min: 30_000,
        },
        { item: "Parking Attendant", amount: 500 },
      ],
    },
    {
      item: "Catering Services",
      subitems: [
        {
          category: "Appetizers",
          item: "Beef Satay with Peanut Sauce",
          amount: 1050,
        },
        { category: "Appetizers", item: "Wagyu Beef Sliders", amount: 1100 },
        {
          category: "Appetizers",
          item: "Shrimp Tempura with Dripping Sauce",
          amount: 1100,
        },
        {
          category: "Appetizers",
          item: "Endive with Blue Cheese & Bacon",
          amount: 900,
        },
        { category: "Appetizers", item: "Mini Ceviche Tostadas", amount: 1050 },
        { category: "Appetizers", item: "Charcuterie Board", amount: 2000 },

        {
          category: "Buffet",
          item: "Braised Short Ribs (100 person min)",
          amount: 0,
        },
        {
          category: "Buffet",
          item: "Swordfish (market price, estimate)",
          amount: 10000,
        },
        { category: "Buffet", item: "Roast Leg of Lamb", amount: 0 },

        { category: "Side Dishes", item: "Twice Baked Potatoes", amount: 0 },
        { category: "Side Dishes", item: "Grilled Asparagus", amount: 0 },
        {
          category: "Side Dishes",
          item: "Fresh Wilted Spinach Salad with Warm Pancetta Dressing",
          amount: 0,
        },
        { category: "Side Dishes", item: "Marinated Mushrooms", amount: 0 },

        { category: "Dessert", item: "Cake fee", amount: 300 },
      ],
    },
    {
      item: "Bar Services",
      subitems: [
        { item: "6 hours - Superior Brands", amount: 5300 },
        { item: "Setup Fee", amount: 750 },
      ],
    },
    {
      item: "Rental Services",
      subitems: [{ item: "Stand Up 8ft Heaters (5 heaters)", amount: 500 }],
    },
  ],
} as const;

function generateInvoice(invoice: typeof _INVOICE1 | typeof _INVOICE2) {
  const items: readonly any[] = invoice.items.map((item) => ({
    ...item,
    amount: (item.subitems as readonly any[]).reduce<number>(
      (acc, item) => acc + item.amount,
      0
    ),
  }));
  const subtotal = items.reduce((acc, item) => acc + item.amount, 0);
  const admin = subtotal * ADMIN_FEE_RATE;
  const subtotal2 = subtotal + admin;
  const tax = subtotal2 * TAX_RATE;
  const total = subtotal + admin + tax;
  return { ...invoice, items, subtotal, admin, tax, total };
}

export const INVOICE1 = generateInvoice(_INVOICE1);
export const INVOICE2 = generateInvoice(_INVOICE2);

export const PAYMENTS = [
  {
    title: "Next Payment",
    amount: 8_000,
    color: "blue-500",
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
  { title: "Paid", color: "green-600", amount: INVOICE2.paid },
  {
    title: "Outstanding",
    color: "red-500",
    amount: INVOICE2.total - INVOICE2.paid,
  },
  { title: "Total", color: "gray-700", amount: INVOICE2.total },
] as const;
