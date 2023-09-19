"use client";

import { useSearchParams } from "next/navigation";
import { format } from "date-fns";

import { CURRENCY_FORMAT } from "@/components/estimator/estimate/utils";

const RANDOM_NUM = Math.floor(10000000 + Math.random() * 90000000);

export default function Details() {
  const search = useSearchParams();
  const amountNum = Number(search.get("amount"));
  const amount = isNaN(amountNum)
    ? "$10,000.00"
    : CURRENCY_FORMAT.format(amountNum);
  const paymentType = search.get("payment") || "Credit Card";
  return (
    <>
      <div className="font-semibold">Order Details</div>
      <hr className="my-4" />
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="font-semibold">Reference #</span>
          <span>{RANDOM_NUM}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Amount</span>
          <span>{amount}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Payment Date</span>
          <span>{format(new Date(), "MMMM dd, yyyy")}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Payment Type</span>
          <span>{paymentType}</span>
        </div>
      </div>
    </>
  );
}
