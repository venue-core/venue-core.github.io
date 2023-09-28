import React from "react";
import cx from "classnames";
import { addDays, format } from "date-fns";
import _ from "lodash";

import { CURRENCY_FORMAT } from "@/components/estimator/estimate/utils";
import {
  ADMIN_FEE_RATE,
  INVOICE1,
  INVOICE2,
  TAX_RATE,
  USER,
  VENUE,
} from "@/app/(demo)/portal/data";

export const metadata = {
  title: "Invoice - Portal - OneVenue",
  description: "Empower venue managers to close more deals more efficiently",
};

export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }];
}

export default function Invoice({ params }: { params: { id: string } }) {
  const invoice = params.id === "1" ? INVOICE1 : INVOICE2;
  const date = invoice.date;

  return (
    <div className="bg-gray-50">
      <div className="max-w-[85rem] px-2 sm:px-6 lg:px-8 mx-auto my-4 sm:my-10">
        <div className="sm:w-11/12 lg:w-3/4 mx-auto">
          <div className="flex flex-col p-4 sm:p-10 bg-white shadow-md rounded-xl">
            <div className="flex justify-between">
              <div>
                <h1 className="mt-2 text-2xl md:text-3xl font-semibold text-gray-800">
                  {VENUE.name} Inc.
                </h1>
              </div>

              <div className="text-right">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
                  Invoice #
                </h2>
                <span className="mt-1 block text-gray-500">3682303</span>

                <div className="mt-4 not-italic text-gray-800">
                  {VENUE.address.street}
                  <br />
                  {VENUE.address.city}, {VENUE.address.state}{" "}
                  {VENUE.address.zipcode}
                  <br />
                  United States
                  <br />
                </div>
              </div>
            </div>

            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Bill to:
                </h3>
                <h3 className="text-lg font-semibold text-gray-800">
                  {[USER.firstName, USER.lastName].join(" ")}
                </h3>
                <div className="mt-2 not-italic text-gray-500">
                  {USER.address.street}
                  <br />
                  {USER.address.city}, {USER.address.state}{" "}
                  {USER.address.zipcode}
                  <br />
                  United States
                  <br />
                </div>
              </div>

              <div className="sm:text-right space-y-2">
                <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2">
                  <dl className="grid sm:grid-cols-5 gap-x-3">
                    <dt className="col-span-3 font-semibold text-gray-800">
                      Invoice date:
                    </dt>
                    <dd className="col-span-2 text-gray-500">
                      {format(date, "MM/dd/yyyy")}
                    </dd>
                  </dl>
                  <dl className="grid sm:grid-cols-5 gap-x-3">
                    <dt className="col-span-3 font-semibold text-gray-800">
                      Due date:
                    </dt>
                    <dd className="col-span-2 text-gray-500">
                      {format(addDays(date, 14), "MM/dd/yyyy")}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <div className="border border-gray-200 p-4 rounded-lg space-y-4">
                <div className="grid grid-cols-2">
                  <div className="text-xs font-medium text-gray-500 uppercase">
                    Item
                  </div>
                  <div className="text-right text-xs font-medium text-gray-500 uppercase">
                    Amount
                  </div>
                </div>

                {invoice.items.map((item) => {
                  const subitems = _.groupBy(item.subitems, "category");
                  return (
                    <React.Fragment key={item.item}>
                      <div className="block border-b border-gray-200"></div>
                      <div
                        className="grid grid-cols-2 text-gray-800"
                        key={item.item}
                      >
                        <div className="font-medium">{item.item}</div>
                        <div className="text-right">
                          {item.amount === 0
                            ? "Included"
                            : CURRENCY_FORMAT.format(item.amount)}
                        </div>
                      </div>
                      {Object.entries(subitems).map(([category, subitems]) => {
                        const hasCategory = category !== "undefined";
                        return (
                          <div
                            key={category}
                            className="text-sm text-slate-600"
                          >
                            {hasCategory && (
                              <div className="ml-4 mb-2 font-semibold">
                                {category}
                              </div>
                            )}
                            <div className="grid grid-cols-2">
                              {subitems.map((item) => (
                                <React.Fragment key={item.item}>
                                  <div
                                    className={cx(
                                      "mb-1",
                                      hasCategory ? "ml-8" : "ml-4"
                                    )}
                                  >
                                    {item.item}
                                  </div>
                                  <div className="text-right mb-1">
                                    {item.amount === 0
                                      ? "Included"
                                      : CURRENCY_FORMAT.format(item.amount)}
                                  </div>
                                </React.Fragment>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                      <div className="hidden border-b border-gray-200"></div>
                    </React.Fragment>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 flex sm:justify-end">
              <div className="w-full max-w-2xl sm:text-right space-y-2">
                <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2">
                  <dl className="grid sm:grid-cols-5 gap-x-3">
                    <dt className="col-span-3 font-semibold text-gray-800">
                      Subtotal:
                    </dt>
                    <dd className="col-span-2 text-gray-500">
                      {CURRENCY_FORMAT.format(invoice.subtotal)}
                    </dd>
                  </dl>

                  <dl className="grid sm:grid-cols-5 gap-x-3">
                    <dt className="col-span-3 font-semibold text-gray-800">
                      Admin Fee ({ADMIN_FEE_RATE * 100}%*):
                    </dt>
                    <dd className="col-span-2 text-gray-500">
                      {CURRENCY_FORMAT.format(invoice.admin)}
                    </dd>
                  </dl>

                  <dl className="grid sm:grid-cols-5 gap-x-3">
                    <dt className="col-span-3 font-semibold text-gray-800">
                      Tax ({TAX_RATE * 100}%):
                    </dt>
                    <dd className="col-span-2 text-gray-500">
                      {CURRENCY_FORMAT.format(invoice.tax)}
                    </dd>
                  </dl>

                  <dl className="grid sm:grid-cols-5 gap-x-3">
                    <dt className="col-span-3 font-semibold text-gray-800">
                      Total:
                    </dt>
                    <dd className="col-span-2 text-gray-500">
                      {CURRENCY_FORMAT.format(invoice.total)}
                    </dd>
                  </dl>

                  <dl className="grid sm:grid-cols-5 gap-x-3">
                    <dt className="col-span-3 font-semibold text-gray-800">
                      Amount paid:
                    </dt>
                    <dd className="col-span-2 text-gray-500">
                      {CURRENCY_FORMAT.format(invoice.paid)}
                    </dd>
                  </dl>

                  <dl className="grid sm:grid-cols-5 gap-x-3">
                    <dt className="col-span-3 font-semibold text-gray-800">
                      Amount outstanding:
                    </dt>
                    <dd className="col-span-2 text-gray-500">
                      {CURRENCY_FORMAT.format(invoice.total - invoice.paid)}
                    </dd>
                  </dl>

                  <dl className="grid sm:grid-cols-5 gap-x-3">
                    <dt className="col-span-3 font-semibold text-gray-800">
                      <div>Amount due:</div>
                      <div className="text-xs text-gray-500">{format(addDays(date, 14), "MM/dd/yyyy")}</div>
                    </dt>
                    <dd className="col-span-2 text-gray-500">
                      {CURRENCY_FORMAT.format(invoice.due)}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>

            <div className="mt-8 sm:mt-12">
              <h4 className="text-lg font-semibold text-gray-800">
                Thank you!
              </h4>
              <p className="mt-2 text-gray-500">
                * Please note that the admin fee is NOT gratuity. We suggest a 15% gratuity to show appreciation for staff.
              </p>
              <p className="mt-2 text-gray-500">
                If you have any questions concerning this invoice, use the
                following contact information:
              </p>
              <div className="mt-2 space-y-2">
                <a
                  className="block text-sm font-medium text-gray-800 hover:underline"
                  href={`mailto:${VENUE.email}`}
                >
                  {VENUE.email}
                </a>
                <a
                  className="block text-sm font-medium text-gray-800 hover:underline"
                  href={`tel:${VENUE.phone.replace(/ /g, "").replace("ext", ",")}`}
                >
                  {VENUE.phone}
                </a>

              </div>
            </div>
          </div>

          {/*<div className="mt-6 flex justify-end gap-x-3">*/}
          {/*  <a*/}
          {/*    className="inline-flex justify-center items-center gap-x-3 text-sm text-center border hover:border-gray-300 shadow-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:border-gray-800 dark:hover:border-gray-600 dark:shadow-slate-700/[.7] dark:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"*/}
          {/*    href="#">*/}
          {/*    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"*/}
          {/*         viewBox="0 0 16 16">*/}
          {/*      <path*/}
          {/*        d="M8.5 6.5a.5.5 0 0 0-1 0v3.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293V6.5z"/>*/}
          {/*      <path*/}
          {/*        d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/>*/}
          {/*    </svg>*/}
          {/*    PDF*/}
          {/*  </a>*/}
          {/*  <a*/}
          {/*    className="inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-sm text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"*/}
          {/*    href="#">*/}
          {/*    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"*/}
          {/*         viewBox="0 0 16 16">*/}
          {/*      <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/>*/}
          {/*      <path*/}
          {/*        d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z"/>*/}
          {/*    </svg>*/}
          {/*    Print details*/}
          {/*  </a>*/}
          {/*</div>*/}
        </div>
      </div>
    </div>
  );
}
