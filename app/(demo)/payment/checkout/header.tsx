"use client";

import { useSearchParams } from "next/navigation";
import { format } from "date-fns";

export default function Header() {
  const search = useSearchParams();
  const type = search.get("type");
  const qDate = search.get("date");
  const date =
    qDate && !isNaN(Number(qDate)) ? new Date(Number(qDate)) : new Date();
  const dateStr = format(date, "E LLL d, yyy");
  let title: string;
  let content: string;
  switch ((type || "").toLowerCase()) {
    case "deposit":
      title = "Reserve & Pay";
      content = `Reserve your event date on ${dateStr} with a deposit today.`;
      break;
    case "30_days":
      title = "Confirm & Pay";
      content = `Your 30 day payment is due. Pay to confirm your event date on ${dateStr}.`;
      break;
    case "90_days":
      title = "Confirm & Pay";
      content = `Your 90 day payment is due. Pay to confirm your event date on ${dateStr}.`;
      break;
    default:
      title = "Confirm & Pay";
      content = "Unknown";
      break;
  }
  return (
    <>
      <h2 className="h2 mb-4">{title}</h2>
      <div className="text-slate-500 space-y-4 mb-8">{content}</div>
    </>
  );
}
