"use client";

import Link from "next/link";
import { addDays } from "date-fns";

import {
  NEXT_PAYMENT_DAYS,
  TODAY,
  USER,
  VENUE,
} from "@/app/(demo)/portal/data";

export default function Welcome() {
  return (
    <div className="mb-4 text-center">
      <div className="mb-2 text-base tracking-wide font-semibold text-blue-600 uppercase">
        Portal - {VENUE.name}
      </div>
      <div className="block text-2xl font-bold text-gray-800 sm:text-3xl">
        Welcome back {USER.firstName}!
      </div>
      <div className="mt-4">
        <Link
          className="btn text-blue-600 bg-white border-blue-600 w-full group disabled:opacity-50"
          href={`/payment/checkout?type=90_DAYS&date=${addDays(
            TODAY,
            90 + NEXT_PAYMENT_DAYS
          ).getTime()}`}
        >
          Pay Next Payment
          <span className="tracking-normal text-blue-600 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
            -&gt;
          </span>
        </Link>
      </div>
      <div className="my-4">
        <a
          className="btn text-white bg-blue-600 hover:bg-blue-700 w-full group disabled:opacity-50"
          onClick={(evt) => {
            evt.preventDefault();
            alert(
              "A message has been sent to the venue director to change your current event plan."
            );
          }}
        >
          Request Changes{" "}
          <span className="tracking-normal text-white group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
            -&gt;
          </span>
        </a>
      </div>
    </div>
  );
}
