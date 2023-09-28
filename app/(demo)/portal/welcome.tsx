"use client";

import { useState } from "react";
import Link from "next/link";
import { format } from "date-fns";

import { USER, VENUE } from "@/app/(demo)/portal/data";
import ChangeModal from "@/app/(demo)/portal/modal";

export default function Welcome() {
  const [show, setShow] = useState(false);

  return (
    <div className="mb-4 text-center">
      <ChangeModal show={show} setShow={setShow} />
      <div className="mb-2 text-base tracking-wide font-semibold text-blue-600 uppercase">
        {VENUE.name}
      </div>
      <div className="block text-2xl font-bold text-gray-800 sm:text-3xl">
        Welcome back {USER.firstName}!
      </div>
      <div className="mt-2 text-gray-500">
        {USER.event}, {format(USER.date, "MMMM d, YYY")}
      </div>
      <div className="mt-4">
        <Link
          className="btn text-blue-600 bg-white border-blue-600 w-full group disabled:opacity-50"
          href="/portal/invoice/2"
        >
          View Invoice
          <span className="tracking-normal text-blue-600 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
            -&gt;
          </span>
        </Link>
      </div>
      <div className="my-4">
        <div
          className="cursor-pointer btn text-white bg-blue-600 hover:bg-blue-700 w-full group disabled:opacity-50"
          onClick={(evt) => setShow(true)}
        >
          Request Changes{" "}
          <span className="tracking-normal text-white group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
            -&gt;
          </span>
        </div>
      </div>
    </div>
  );
}
