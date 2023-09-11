import React from "react";

import { View } from "@/components/estimator/types";

const VIEWS = [
  { page: View.Intro, title: "Welcome" },
  { page: View.Calendar, title: "Date & Time" },
  { page: View.Inputs, title: "Details" },
  { page: View.Quote, title: "Price Quote" },
] as const;

export default function Progress({
  view,
  setView,
}: {
  view: View;
  setView: (p: View) => void;
}) {
  return (
    <div className="px-4 pt-12 pb-8 -mt-4">
      <div className="max-w-md mx-auto w-full">
        <div className="relative">
          <div
            className="absolute left-0 top-1/2 -mt-px w-full h-0.5 bg-slate-200"
            aria-hidden="true"
          ></div>
          <ul className="relative flex justify-between w-full">
            {VIEWS.map((p, i) => (
              <React.Fragment key={i}>
                <li>
                  <div
                    className={`flex items-center justify-center cursor-pointer w-8 h-8 rounded-full text-xs font-semibold ${
                      view === p.page
                        ? "bg-blue-400 text-white"
                        : "bg-slate-100 text-slate-500"
                    }`}
                    onClick={() => setView(p.page)}
                  >
                    {i + 1}
                  </div>
                </li>
                {/*<div>{p.title}</div>*/}
              </React.Fragment>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
