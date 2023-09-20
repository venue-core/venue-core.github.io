"use client";

import { usePathname } from "next/navigation";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import cn from "classnames";
import _ from "lodash";

export default function MobileNav() {
  return (
    <div className="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 lg:hidden dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-center py-4">
        <Hamburger />
        <Breadcrumbs />
      </div>
    </div>
  );
}

function Hamburger() {
  return (
    <button
      type="button"
      className="text-gray-500 hover:text-gray-600"
      data-hs-overlay="#application-sidebar"
      aria-controls="application-sidebar"
      aria-label="Toggle navigation"
    >
      <span className="sr-only">Toggle Navigation</span>
      <svg
        className="w-5 h-5"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
        />
      </svg>
    </button>
  );
}

function Breadcrumbs() {
  const path = usePathname();
  const components = path.split("/").filter(Boolean);

  return (
    <ol
      className="ml-3 flex items-center whitespace-nowrap min-w-0"
      aria-label="Breadcrumb"
    >
      {components.map((c, i) => {
        const last = i === components.length - 1;
        return (
          <li
            key={i}
            className={cn(
              "text-sm text-gray-800 dark:text-gray-400",
              last ? "font-semibold truncate" : "flex items-center"
            )}
          >
            {_.startCase(c)}
            {!last && (
              <ChevronRightIcon className="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-gray-400 dark:text-gray-600 stroke-2" />
            )}
          </li>
        );
      })}
    </ol>
  );
}
