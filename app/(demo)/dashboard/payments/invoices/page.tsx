import { PlusIcon } from "@heroicons/react/24/outline";

import DateSelect from "@/components/date-select";
import DeleteButton from "@/components/delete-button";
import FilterButton from "@/components/dropdown-filter";
import PaginationClassic from "@/components/pagination-classic";
import SearchForm from "@/components/search-form";
import { SelectedItemsProvider } from "@/app/selected-items-context";

import InvoicesTable from "./invoices-table";

export const metadata = {
  title: "Invoices - Payments - OneVenue",
  description: "Empower venue managers to close more deals more efficiently",
};

export default function Invoices() {
  return (
    <SelectedItemsProvider>
      <Content />
    </SelectedItemsProvider>
  );
}

const INVOICES = [
  {
    id: 0,
    invoice: "#123567",
    total: "$5700.00",
    status: "Overdue",
    customer: "Ava Williams",
    weddingdate: "11/25/2023",
    issueddate: "07/22/2023",
    paiddate: "-",
    type: "30 Day Out",
  },
  {
    id: 1,
    invoice: "#779912",
    total: "$13,500.00",
    status: "Paid",
    customer: "Charlotte Anderson",
    weddingdate: "07/31/2023",
    issueddate: "07/19/2023",
    paiddate: "07/20/2023",
    type: "Final Payment",
  },
  {
    id: 2,
    invoice: "#889924",
    total: "$8500.00",
    status: "Paid",
    customer: "Madison Mitchell",
    weddingdate: "01/17/2024",
    issueddate: "07/17/2023",
    paiddate: "07/19/2023",
    type: "Deposit",
  },
  {
    id: 3,
    invoice: "#897726",
    total: "$12,500.00",
    status: "Due",
    customer: "Ella Bennett",
    weddingdate: "11/07/2023",
    issueddate: "07/04/2023",
    paiddate: "-",
    type: "90 Day Out",
  },
  {
    id: 4,
    invoice: "#123567",
    total: "$10,500.00",
    status: "Due",
    customer: "Chloe Parker",
    weddingdate: "11/08/2023",
    issueddate: "07/05/2023",
    paiddate: "-",
    type: "90 Day Out",
  },
  {
    id: 5,
    invoice: "#896644",
    total: "$7,900.00",
    status: "Paid",
    customer: "Isabella Taylor",
    weddingdate: "01/04/2024",
    issueddate: "07/04/2023",
    paiddate: "07/09/2023",
    type: "Deposit",
  },
  {
    id: 6,
    invoice: "#136988",
    total: "$9000.00",
    status: "Paid",
    customer: "Harper Wilson",
    weddingdate: "02/01/2024",
    issueddate: "07/01/2023",
    paiddate: "07/01/2023",
    type: "Deposit",
  },
  {
    id: 7,
    invoice: "#442206",
    total: "$13,000.00",
    status: "Overdue",
    customer: "Dominik Lamakani",
    weddingdate: "06/22/2023",
    issueddate: "06/22/2023",
    paiddate: "-",
    type: "Final Payment",
  },
  {
    id: 8,
    invoice: "#764321",
    total: "$8,500.00",
    status: "Paid",
    customer: "Emily Hall",
    weddingdate: "02/21/2024",
    issueddate: "06/21/2023",
    paiddate: "06/29/2023",
    type: "Deposit",
  },
  {
    id: 9,
    invoice: "#908764",
    total: "$9,000.00",
    status: "Due",
    customer: "Scarlett Wright",
    weddingdate: "07/28/2023",
    issueddate: "06/17/2023",
    paiddate: "-",
    type: "30 Day Out",
  },
];

function Content() {
  return (
    <div className="pb-4 w-full max-w-[96rem] mx-auto">
      {/* Page header */}
      <div className="sm:flex sm:justify-between sm:items-center mb-5">
        {/* Left: Title */}
        <div className="mb-4 sm:mb-0">
          <div className="text-sm font-semibold text-blue-600 uppercase">
            Payments
          </div>
          <h1 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold">
            Invoices
          </h1>
        </div>

        {/* Right: Actions */}
        <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
          {/* Search form */}
          <SearchForm placeholder="Search by ID…" />
          {/* Create invoice button */}
          <button className="btn-sm bg-blue-600 hover:bg-blue-500 text-white">
            <PlusIcon className="w-4 h-4 stroke-2" />
            <span className="hidden xs:block ml-2">Create Invoice</span>
          </button>
        </div>
      </div>

      {/* More actions */}
      <div className="sm:flex sm:justify-between sm:items-center mb-5">
        {/* Left side */}
        <div className="mb-4 sm:mb-0">
          <ul className="flex flex-wrap -m-1">
            <li className="m-1">
              <button className="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-transparent shadow-sm bg-blue-600 text-white duration-150 ease-in-out">
                All <span className="ml-1 text-blue-200">67</span>
              </button>
            </li>
            <li className="m-1">
              <button className="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 shadow-sm bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 duration-150 ease-in-out">
                Paid{" "}
                <span className="ml-1 text-slate-400 dark:text-slate-500">
                  14
                </span>
              </button>
            </li>
            <li className="m-1">
              <button className="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 shadow-sm bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 duration-150 ease-in-out">
                Due{" "}
                <span className="ml-1 text-slate-400 dark:text-slate-500">
                  34
                </span>
              </button>
            </li>
            <li className="m-1">
              <button className="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 shadow-sm bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 duration-150 ease-in-out">
                Overdue{" "}
                <span className="ml-1 text-slate-400 dark:text-slate-500">
                  19
                </span>
              </button>
            </li>
          </ul>
        </div>

        {/* Right side */}
        <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
          <DeleteButton />
          <DateSelect />
          <FilterButton align="right" />
        </div>
      </div>

      {/* Table */}
      <InvoicesTable invoices={INVOICES} />

      {/* Pagination */}
      <div className="mt-8">
        <PaginationClassic />
      </div>
    </div>
  );
}
