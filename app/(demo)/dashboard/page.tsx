import * as constants from "constants";
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/24/outline";

import { CURRENCY_FORMAT } from "@/components/estimator/estimate/utils";

export const metadata = {
  title: "Dashboard - OneVenue",
  description: "Empower venue managers to close more deals more efficiently",
};

export default function Home() {
  return (
    <div>
      <div className="mb-2 text-sm font-semibold text-blue-600 uppercase">
        Home
      </div>
      <h1 className="block text-2xl font-bold text-gray-800 sm:text-3xl">
        Welcome back Katherine!
      </h1>
      <div className="mt-4">
        <Statistics1 />
        <Statistics2 />
      </div>
    </div>
  );
}

const STATISTICS1 = [
  {
    title: "Total Events",
    color: "gray",
    count: 150,
    change: 1.3,
    last: { count: 2, unit: "week" },
  },
  {
    title: "Total Revenue",
    color: "green",
    count: "$5,263,008",
    change: 1.4,
    last: { count: "$75,356", unit: "week" },
  },
  {
    title: "Late Payments",
    color: "red",
    count: "$632,520",
    change: -0.6,
    last: { count: "$5,356", unit: "week" },
  },
] as const;

function Statistics1() {
  return (
    <div className="my-8 max-w-[85rem]">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6">
        {STATISTICS1.map((s) => (
          <div
            key={s.title}
            className="flex flex-col gap-y-3 lg:gap-y-5 p-4 md:p-5 bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-800"
          >
            <div className="inline-flex justify-center items-center">
              <span className={`w-2 h-2 inline-block bg-${s.color}-500 rounded-full mr-2`} />
              <span className="text-xs font-semibold uppercase text-gray-600 dark:text-gray-400">
                {s.title}
              </span>
            </div>

            <div className="text-center">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800 dark:text-gray-200">
                {s.count}
              </h3>
            </div>

            <dl className="flex justify-center items-center divide-x divide-gray-200 dark:divide-gray-700">
              <dt className="pr-3">
                <span
                  className={`text-${
                    s.change > 0 ? "green" : s.change < 0 ? "red" : "gray"
                  }-600`}
                >
                  <svg
                    className="inline-block w-5 h-5 self-center"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    {s.change > 0 ? (
                      <path
                        fillRule="evenodd"
                        d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"
                      />
                    ) : (
                      <path
                        fillRule="evenodd"
                        d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
                      />
                    )}
                  </svg>
                  <span className="inline-block text-sm">{s.change}%</span>
                </span>
                <span className="block text-sm text-gray-500">change</span>
              </dt>
              <dd className="text-left pl-3">
                <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                  {s.last.count}
                </span>
                <span className="block text-sm text-gray-500">
                  last {s.last.unit}
                </span>
              </dd>
            </dl>
          </div>
        ))}
      </div>
    </div>
  );
}

const STATISTICS2 = [
  { title: "Occupancy Total", rate: 25.8, change: 22.5 },
  { title: "Occupancy Weekends", rate: 65.2, change: -9.2 },
  { title: "Occupancy Weekdays", rate: 15.4, change: 42.1 },
] as const;

function Statistics2() {
  return (
    <div className="my-8 max-w-[85rem]">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6">
        {STATISTICS2.map(s => {
          const color = s.change >= 0 ? 'green' : 'red';
          return <div key={s.title} className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-800">
          <div className="p-4 md:p-5 flex gap-x-4">
            <div className="flex-shrink-0 flex justify-center items-center w-[46px] h-[46px] bg-gray-100 rounded-md dark:bg-gray-800">
              <svg
                className="w-4 h-4 text-gray-600 dark:text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
              </svg>
            </div>

            <div className="grow">
              <div className="flex items-center gap-x-2">
                <p className="text-xs uppercase tracking-wide text-gray-500">
                  {s.title}
                </p>
                {/*<div className="hs-tooltip">*/}
                {/*  <div className="hs-tooltip-toggle">*/}
                {/*    <svg*/}
                {/*      className="w-3.5 h-3.5 text-gray-500"*/}
                {/*      xmlns="http://www.w3.org/2000/svg"*/}
                {/*      width="16"*/}
                {/*      height="16"*/}
                {/*      fill="currentColor"*/}
                {/*      viewBox="0 0 16 16"*/}
                {/*    >*/}
                {/*      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />*/}
                {/*      <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />*/}
                {/*    </svg>*/}
                {/*    <span*/}
                {/*      className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700"*/}
                {/*      role="tooltip"*/}
                {/*    >*/}
                {/*      The number of daily users*/}
                {/*    </span>*/}
                {/*  </div>*/}
                {/*</div>*/}
              </div>
              <div className="mt-1 flex items-center gap-x-2">
                <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-gray-200">
                  {s.rate}%
                </h3>
                <span className={`inline-flex items-center gap-0.5 py-0.5 px-2 rounded-full bg-${color}-100 text-${color}-900`}>
                  <svg
                    className="-ml-1 inline-block w-5 h-5 self-center"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
 {s.change > 0 ? (
   <path
     fillRule="evenodd"
     d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"
   />
 ) : (
   <path
     fillRule="evenodd"
     d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
   />
 )}
                  </svg>
                  <span className="inline-block text-xs font-medium">
                    {s.change}%
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>})}
      </div>
    </div>
  );
}
