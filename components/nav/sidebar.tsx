"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import cn from "classnames";

import Logo from "@/components/nav/logo";
import { PATHS } from "@/components/nav/paths";

export default function Sidebar() {
  const current = usePathname();

  return (
    <div
      id="application-sidebar"
      className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 left-0 bottom-0 z-[60] w-64 bg-white border-r border-gray-200 pt-7 pb-10 overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:right-auto lg:bottom-0 dark:scrollbar-y dark:bg-gray-800 dark:border-gray-700"
    >
      <div className="px-6">
        <Logo />
      </div>

      <nav className="hs-accordion-group p-6 w-full flex flex-col flex-wrap">
        <ul className="space-y-1.5">
          {PATHS.map((path) => {
            const hasChildren = path.paths && path.paths.length > 0;
            const components = [
              path.icon,
              path.title,
              ...(hasChildren
                ? [
                    <ChevronUpIcon
                      key="up"
                      className="hs-accordion-active:block ml-auto hidden stroke-2 w-4 h-4 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                    />,
                    <ChevronDownIcon
                      key="down"
                      className="hs-accordion-active:hidden ml-auto block stroke-2 w-4 h-4 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                    />,
                  ]
                : []),
            ];
            return (
              <li key={path.title}>
                {/*// className={cn(hasChildren && "hs-accordion")}>*/}
                <Link
                  href={path.url || "/dashboard"}
                  className={cn(
                    "flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-200 dark:bg-gray-900 dark:text-white",
                    path.url === current && "bg-gray-200",
                    hasChildren &&
                      "hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent dark:hs-accordion-active:text-white"
                  )}
                >
                  {components}
                </Link>
              </li>
            );
          })}

          {/*<li className="hs-accordion" id="bu-users-accordion">*/}
          {/*  <a*/}
          {/*    className={"flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300" +*/}
          {/*      " hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent dark:hs-accordion-active:text-white"}*/}
          {/*    href="#"*/}
          {/*  >*/}
          {/*    <svg*/}
          {/*      className="w-3.5 h-3.5"*/}
          {/*      xmlns="http://www.w3.org/2000/svg"*/}
          {/*      width="16"*/}
          {/*      height="16"*/}
          {/*      fill="currentColor"*/}
          {/*      viewBox="0 0 16 16"*/}
          {/*    >*/}
          {/*      <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path>*/}
          {/*    </svg>*/}
          {/*    Users*/}
          {/*    <svg*/}
          {/*      className="hs-accordion-active:block ml-auto hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"*/}
          {/*      width="16"*/}
          {/*      height="16"*/}
          {/*      viewBox="0 0 16 16"*/}
          {/*      fill="none"*/}
          {/*      xmlns="http://www.w3.org/2000/svg"*/}
          {/*    >*/}
          {/*      <path*/}
          {/*        d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"*/}
          {/*        stroke="currentColor"*/}
          {/*        strokeWidth="2"*/}
          {/*        strokeLinecap="round"*/}
          {/*      ></path>*/}
          {/*    </svg>*/}
          {/*    <svg*/}
          {/*      className="hs-accordion-active:hidden ml-auto block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"*/}
          {/*      width="16"*/}
          {/*      height="16"*/}
          {/*      viewBox="0 0 16 16"*/}
          {/*      fill="none"*/}
          {/*      xmlns="http://www.w3.org/2000/svg"*/}
          {/*    >*/}
          {/*      <path*/}
          {/*        d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"*/}
          {/*        stroke="currentColor"*/}
          {/*        strokeWidth="2"*/}
          {/*        strokeLinecap="round"*/}
          {/*      ></path>*/}
          {/*    </svg>*/}
          {/*  </a>*/}

          {/*  <div*/}
          {/*    id="bu-users-accordion"*/}
          {/*    className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"*/}
          {/*  >*/}
          {/*    <ul className="hs-accordion-group pl-3 pt-2">*/}
          {/*      <li className="hs-accordion" id="bu-users-accordion-sub-1">*/}
          {/*        <a*/}
          {/*          className="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white"*/}
          {/*          href="#"*/}
          {/*        >*/}
          {/*          Sub Menu 1*/}
          {/*          <svg*/}
          {/*            className="hs-accordion-active:block ml-auto hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"*/}
          {/*            width="16"*/}
          {/*            height="16"*/}
          {/*            viewBox="0 0 16 16"*/}
          {/*            fill="none"*/}
          {/*            xmlns="http://www.w3.org/2000/svg"*/}
          {/*          >*/}
          {/*            <path*/}
          {/*              d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"*/}
          {/*              stroke="currentColor"*/}
          {/*              strokeWidth="2"*/}
          {/*              strokeLinecap="round"*/}
          {/*            ></path>*/}
          {/*          </svg>*/}
          {/*          <svg*/}
          {/*            className="hs-accordion-active:hidden ml-auto block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"*/}
          {/*            width="16"*/}
          {/*            height="16"*/}
          {/*            viewBox="0 0 16 16"*/}
          {/*            fill="none"*/}
          {/*            xmlns="http://www.w3.org/2000/svg"*/}
          {/*          >*/}
          {/*            <path*/}
          {/*              d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"*/}
          {/*              stroke="currentColor"*/}
          {/*              strokeWidth="2"*/}
          {/*              strokeLinecap="round"*/}
          {/*            ></path>*/}
          {/*          </svg>*/}
          {/*        </a>*/}

          {/*        <div*/}
          {/*          id="bu-users-accordion-sub-1"*/}
          {/*          className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"*/}
          {/*        >*/}
          {/*          <ul className="pt-2 pl-2">*/}
          {/*            <li>*/}
          {/*              <a*/}
          {/*                className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"*/}
          {/*                href="#"*/}
          {/*              >*/}
          {/*                Link 1*/}
          {/*              </a>*/}
          {/*            </li>*/}
          {/*            <li>*/}
          {/*              <a*/}
          {/*                className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"*/}
          {/*                href="#"*/}
          {/*              >*/}
          {/*                Link 2*/}
          {/*              </a>*/}
          {/*            </li>*/}
          {/*            <li>*/}
          {/*              <a*/}
          {/*                className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"*/}
          {/*                href="#"*/}
          {/*              >*/}
          {/*                Link 3*/}
          {/*              </a>*/}
          {/*            </li>*/}
          {/*          </ul>*/}
          {/*        </div>*/}
          {/*      </li>*/}
          {/*      <li className="hs-accordion" id="bu-users-accordion-sub-2">*/}
          {/*        <a*/}
          {/*          className="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white"*/}
          {/*          href="#"*/}
          {/*        >*/}
          {/*          Sub Menu 2*/}
          {/*          <svg*/}
          {/*            className="hs-accordion-active:block ml-auto hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"*/}
          {/*            width="16"*/}
          {/*            height="16"*/}
          {/*            viewBox="0 0 16 16"*/}
          {/*            fill="none"*/}
          {/*            xmlns="http://www.w3.org/2000/svg"*/}
          {/*          >*/}
          {/*            <path*/}
          {/*              d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"*/}
          {/*              stroke="currentColor"*/}
          {/*              strokeWidth="2"*/}
          {/*              strokeLinecap="round"*/}
          {/*            ></path>*/}
          {/*          </svg>*/}
          {/*          <svg*/}
          {/*            className="hs-accordion-active:hidden ml-auto block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"*/}
          {/*            width="16"*/}
          {/*            height="16"*/}
          {/*            viewBox="0 0 16 16"*/}
          {/*            fill="none"*/}
          {/*            xmlns="http://www.w3.org/2000/svg"*/}
          {/*          >*/}
          {/*            <path*/}
          {/*              d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"*/}
          {/*              stroke="currentColor"*/}
          {/*              strokeWidth="2"*/}
          {/*              strokeLinecap="round"*/}
          {/*            ></path>*/}
          {/*          </svg>*/}
          {/*        </a>*/}

          {/*        <div*/}
          {/*          id="bu-users-accordion-sub-2"*/}
          {/*          className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden pl-2"*/}
          {/*        >*/}
          {/*          <ul className="pt-2 pl-2">*/}
          {/*            <li>*/}
          {/*              <a*/}
          {/*                className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"*/}
          {/*                href="#"*/}
          {/*              >*/}
          {/*                Link 1*/}
          {/*              </a>*/}
          {/*            </li>*/}
          {/*            <li>*/}
          {/*              <a*/}
          {/*                className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"*/}
          {/*                href="#"*/}
          {/*              >*/}
          {/*                Link 2*/}
          {/*              </a>*/}
          {/*            </li>*/}
          {/*            <li>*/}
          {/*              <a*/}
          {/*                className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"*/}
          {/*                href="#"*/}
          {/*              >*/}
          {/*                Link 3*/}
          {/*              </a>*/}
          {/*            </li>*/}
          {/*          </ul>*/}
          {/*        </div>*/}
          {/*      </li>*/}
          {/*    </ul>*/}
          {/*  </div>*/}
          {/*</li>*/}

          {/*<li className="hs-accordion" id="bu-account-accordion">*/}
          {/*  <a*/}
          {/*    className="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white"*/}
          {/*    href="#"*/}
          {/*  >*/}
          {/*    <svg*/}
          {/*      className="w-3.5 h-3.5"*/}
          {/*      xmlns="http://www.w3.org/2000/svg"*/}
          {/*      width="16"*/}
          {/*      height="16"*/}
          {/*      fill="currentColor"*/}
          {/*      viewBox="0 0 16 16"*/}
          {/*    >*/}
          {/*      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />*/}
          {/*      <path*/}
          {/*        fillRule="evenodd"*/}
          {/*        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"*/}
          {/*      />*/}
          {/*    </svg>*/}
          {/*    Account*/}
          {/*    <svg*/}
          {/*      className="hs-accordion-active:block ml-auto hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"*/}
          {/*      width="16"*/}
          {/*      height="16"*/}
          {/*      viewBox="0 0 16 16"*/}
          {/*      fill="none"*/}
          {/*      xmlns="http://www.w3.org/2000/svg"*/}
          {/*    >*/}
          {/*      <path*/}
          {/*        d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"*/}
          {/*        stroke="currentColor"*/}
          {/*        strokeWidth="2"*/}
          {/*        strokeLinecap="round"*/}
          {/*      ></path>*/}
          {/*    </svg>*/}
          {/*    <svg*/}
          {/*      className="hs-accordion-active:hidden ml-auto block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"*/}
          {/*      width="16"*/}
          {/*      height="16"*/}
          {/*      viewBox="0 0 16 16"*/}
          {/*      fill="none"*/}
          {/*      xmlns="http://www.w3.org/2000/svg"*/}
          {/*    >*/}
          {/*      <path*/}
          {/*        d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"*/}
          {/*        stroke="currentColor"*/}
          {/*        strokeWidth="2"*/}
          {/*        strokeLinecap="round"*/}
          {/*      ></path>*/}
          {/*    </svg>*/}
          {/*  </a>*/}

          {/*  <div*/}
          {/*    id="bu-account-accordion"*/}
          {/*    className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"*/}
          {/*  >*/}
          {/*    <ul className="pt-2 pl-2">*/}
          {/*      <li>*/}
          {/*        <a*/}
          {/*          className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"*/}
          {/*          href="#"*/}
          {/*        >*/}
          {/*          Link 1*/}
          {/*        </a>*/}
          {/*      </li>*/}
          {/*      <li>*/}
          {/*        <a*/}
          {/*          className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"*/}
          {/*          href="#"*/}
          {/*        >*/}
          {/*          Link 2*/}
          {/*        </a>*/}
          {/*      </li>*/}
          {/*      <li>*/}
          {/*        <a*/}
          {/*          className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"*/}
          {/*          href="#"*/}
          {/*        >*/}
          {/*          Link 3*/}
          {/*        </a>*/}
          {/*      </li>*/}
          {/*    </ul>*/}
          {/*  </div>*/}
          {/*</li>*/}
        </ul>
      </nav>
    </div>
  );
}
