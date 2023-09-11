import React from 'react';
import { Page } from "@/components/estimator/types";

const PAGES = [
  { page: Page.Intro, title: 'Welcome' },
  { page: Page.Calendar, title: 'Date & Time' },
  { page: Page.Inputs, title: 'Details' },
  { page: Page.Quote, title: 'Price Quote' },
] as const;

export default function Progress({
  page,
  setPage,
}: {
  page: Page;
  setPage: (p: Page) => void;
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
            {PAGES.map((p, i) => (
              <React.Fragment key={i}>
                <li>
                  <div
                    className={`flex items-center justify-center cursor-pointer w-8 h-8 rounded-full text-xs font-semibold ${
                      page === p.page
                        ? "bg-blue-400 text-white"
                        : "bg-slate-100 text-slate-500"
                    }`}
                    onClick={() => {
                      window.scrollTo({ top: 0, left: 0 });
                      setPage(p.page);
                    }}
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
