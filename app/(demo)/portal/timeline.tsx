"use client";

import { useContext } from "react";
import { format } from "date-fns";

import { EventsContext } from "@/app/(demo)/portal/data";

export default function Timeline() {
  const { events } = useContext(EventsContext);
  return (
    <ol className="relative border-l border-gray-300">
      {events.map((e) => (
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
  );
}
