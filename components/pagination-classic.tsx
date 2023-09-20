import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

export default function PaginationClassic() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
      <nav
        className="mb-4 sm:mb-0 sm:order-1"
        role="navigation"
        aria-label="Navigation"
      >
        <ul className="flex justify-center">
          <li className="ml-3 first:ml-0">
            <span className="btn-sm bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-300 dark:text-slate-600">
              <ArrowLeftIcon className="h-4 stroke-2 mr-1" />
              Previous
            </span>
          </li>
          <li className="ml-3 first:ml-0">
            <a
              className="btn-sm bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-blue-600"
              href="#0"
            >
              Next
              <ArrowRightIcon className="h-4 stroke-2 ml-1" />
            </a>
          </li>
        </ul>
      </nav>
      <div className="text-sm text-slate-500 dark:text-slate-400 text-center sm:text-left">
        Showing{" "}
        <span className="font-medium text-slate-600 dark:text-slate-300">
          1
        </span>{" "}
        to{" "}
        <span className="font-medium text-slate-600 dark:text-slate-300">
          10
        </span>{" "}
        of{" "}
        <span className="font-medium text-slate-600 dark:text-slate-300">
          67
        </span>{" "}
        results
      </div>
    </div>
  );
}
