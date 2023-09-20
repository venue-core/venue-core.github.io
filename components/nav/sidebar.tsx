"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import cn from "classnames";

import Logo from "@/components/nav/logo";
import { Path, PATHS } from "@/components/nav/paths";

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
            return (
              <li
                key={path.title}
                className={cn(hasChildren && "hs-accordion")}
              >
                <Panel path={path} />
                <Subpaths path={path} />
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

function Panel({ path }: { path: Path }) {
  const current = usePathname();
  const hasChildren = path.paths && path.paths.length > 0;
  const linkClasses = cn(
    "flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-200 dark:bg-gray-900 dark:text-white",
    path.url === current && "bg-gray-200",
    hasChildren &&
      "hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent dark:hs-accordion-active:text-white"
  );
  const panel = (
    <>
      {path.icon}
      {path.title}
      {hasChildren && <Toggle />}
    </>
  );
  return path.url ? (
    <Link href={path.url} className={linkClasses}>
      {panel}
    </Link>
  ) : (
    <a href="#" className={linkClasses}>
      {panel}
    </a>
  );
}

function Subpaths({ path }: { path: Path }) {
  if (!path.paths || path.paths.length === 0) return null;
  return (
    <div className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden">
      <ul className="pt-1 pl-4">
        {(path.paths || []).map((path) => (
          <li key={path.title}>
            <Panel path={path} />
            <Subpaths path={path} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function Toggle() {
  return (
    <>
      <ChevronUpIcon
        key="up"
        className="hs-accordion-active:block ml-auto hidden stroke-2 w-4 h-4 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
      />
      <ChevronDownIcon
        key="down"
        className="hs-accordion-active:hidden ml-auto block stroke-2 w-4 h-4 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
      />
    </>
  );
}
