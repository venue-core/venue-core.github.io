import React, { useState } from "react";
import _ from "lodash";

import { Customer, getLineItems, getVenue } from "@/components/estimator/data";
import ItemDetail from "@/components/estimator/estimate/item-detail";
import {
  calcTotal,
  CURRENCY_FORMAT,
  getDateDue,
  getGuests,
  isPriceValid,
  isTruthy,
  lineItemToPrice,
} from "@/components/estimator/estimate/utils";
import {
  Category,
  Inputs,
  ItemPrice,
  Venue,
} from "@/components/estimator/types";

const RANDOM_NUM = Math.floor(1000000 + Math.random() * 9000000);

export default function Estimate({
  customer,
  inputs,
  setInputs,
  restart,
}: {
  customer: Customer;
  inputs: Inputs;
  setInputs: (i: Inputs) => void;
  restart: () => void;
}) {
  const venue = getVenue(customer);
  const lineItems = getLineItems(customer);
  const [item, setItem] = useState<ItemPrice | null>(null);
  const prices = lineItems
    .map((li) => lineItemToPrice(li, inputs, customer))
    .filter(isTruthy);
  return (
    <div>
      <ItemDetail item={item} setItem={setItem} setInputs={setInputs} />

      <div className="overflow-y-auto">
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-slate-800">
            Your wedding at {venue.name}
          </h3>
          <p className="text-sm text-slate-500">Price Estimate #{RANDOM_NUM}</p>
        </div>

        <div className="mt-5 sm:mt-10 grid grid-cols-2 sm:grid-cols-3 gap-5">
          <div>
            <span className="block text-xs uppercase text-slate-500">
              Estimate:
            </span>
            <span className="block text-md font-medium text-slate-800">
              <TotalCost prices={prices} venue={venue} />
            </span>
          </div>

          <div className="sm:text-center">
            <span className="block text-xs uppercase text-slate-500">
              Guests:
            </span>
            <span className="block text-md font-medium text-slate-800">
              {getGuests(inputs)}
            </span>
          </div>

          <div className="sm:text-right">
            <span className="block text-xs uppercase text-slate-500">
              Wedding Date:
            </span>
            <span className="block text-md font-medium text-slate-800">
              {getDateDue(inputs)}
            </span>
          </div>
        </div>

        <Summary venue={venue} prices={prices} setItem={setItem} />
      </div>

      <div className="mt-4 px-4">
        {venue.depositPercentage && (
          <p className="text-sm text-slate-600">
            Place a {venue.depositPercentage * 100}% deposit today to reserve
            your date.
          </p>
        )}
        <p className="mt-2 text-sm text-slate-500">
          If you have any questions, please contact us at{" "}
          <a
            className="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium"
            href="#"
          >
            {venue.email}
          </a>{" "}
          or call{" "}
          <a
            className="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium"
            href={`tel:${venue.phone.replace(/ /g, "").replace("ext", ",")}`}
          >
            {venue.phone}
          </a>
        </p>
      </div>

      {venue.depositPercentage && (
        <div className="px-4 mt-4 flex justify-between">
          <div>
            <div className="text-xs uppercase font-semibold">Due Today:</div>
            <div className="text-md flex">
              <span>
                {CURRENCY_FORMAT.format(
                  calcTotal(prices, venue, true) * venue.depositPercentage
                )}
              </span>
            </div>
          </div>
          <div>
            <button className="btn-sm text-sm text-white bg-blue-600 hover:bg-blue-700 group">
              <span>Reserve</span>
              <span className="tracking-normal text-white group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                -&gt;
              </span>
            </button>
          </div>
        </div>
      )}

      {venue.notes && (
        <div className="mt-4 px-4">
          <div className="text-sm font-semibold">Notes:</div>
          <ul>
            {venue.notes.map((note) => (
              <li key={note} className="text-sm text-slate-800">
                • {note}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/*<!-- Buttons -->*/}
      <div className="mt-8 px-4 flex justify-start gap-x-2">
        <button
          className="block w-full btn-sm text-sm text-white bg-blue-600 hover:bg-blue-700 group"
          onClick={() => restart()}
        >
          <span>Restart</span>
          <span className="tracking-normal text-white group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
            -&gt;
          </span>
        </button>
      </div>
    </div>
  );
}

const POST_SUBTOTAL_CATEGORIES = new Set<string>([
  Category.Fees,
  Category.Taxes,
]);

function Summary({
  venue,
  prices,
  setItem,
}: {
  venue: Venue;
  prices: ItemPrice[];
  setItem: (item: ItemPrice) => void;
}) {
  const pricesByCategory = _.groupBy(prices, "item.category");
  return (
    <div className="mt-4 sm:mt-8">
      <h4 className="text-sm font-semibold uppercase text-slate-800">
        Summary
      </h4>
      <ul className="mt-2 flex flex-col">
        {Object.entries(pricesByCategory)
          .filter(([category]) => !POST_SUBTOTAL_CATEGORIES.has(category))
          .map(([category, prices]) => (
            <CategoryGroup
              key={category}
              category={category}
              prices={prices}
              setItem={setItem}
            />
          ))}
        <LineSubtotal venue={venue} prices={prices} />
        {Object.entries(pricesByCategory)
          .filter(([category]) => POST_SUBTOTAL_CATEGORIES.has(category))
          .map(([category, prices]) => (
            <CategoryGroup
              key={category}
              category={category}
              prices={prices}
              setItem={setItem}
            />
          ))}
        <LineTotal venue={venue} prices={prices} />
      </ul>
    </div>
  );
}

function CategoryGroup({
  category,
  prices,
  setItem,
}: {
  category: string;
  prices: ItemPrice[];
  setItem: (item: ItemPrice) => void;
}) {
  return (
    <React.Fragment key={category}>
      <li
        key={category}
        className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-semibold bg-gray-50 border text-slate-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg"
      >
        {category}
      </li>
      {prices.map((item) => (
        <li
          key={item.title}
          className="py-3 px-4 text-sm border text-slate-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg cursor-pointer"
          onClick={() => setItem(item)}
        >
          <div className="flex items-center justify-between w-full">
            <ItemName item={item} />
            <ItemCost item={item} />
          </div>
          {item.items &&
            item.items.map((item) => (
              <div
                key={item.title}
                className="mt-1 ml-4 text-xs text-slate-400 flex justify-between"
              >
                <span>{item.title}</span>
                <span>{CURRENCY_FORMAT.format(item.final)}</span>
              </div>
            ))}
        </li>
      ))}
    </React.Fragment>
  );
}

function LineSubtotal({
  venue,
  prices,
}: {
  venue: Venue;
  prices: ItemPrice[];
}) {
  const filtered = prices.filter(
    (p) => !POST_SUBTOTAL_CATEGORIES.has(p.item.category)
  );
  return (
    <li
      key="subtotal-title"
      className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-semibold bg-gray-50 border text-slate-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg"
    >
      <div className="flex items-center justify-between w-full">
        <span>Subtotal</span>
        <span className="text-right">
          {CURRENCY_FORMAT.format(calcTotal(filtered, venue, true))}
        </span>
      </div>
    </li>
  );
}

function LineTotal({ venue, prices }: { venue: Venue; prices: ItemPrice[] }) {
  return (
    <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-semibold bg-gray-50 border text-slate-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
      <div className="flex items-center justify-between w-full">
        <span>Total</span>
        <span className="text-right">
          <TotalCost prices={prices} venue={venue} />
          {venue.minimum !== undefined &&
            venue.minimum > calcTotal(prices, venue) && (
              <div className="text-xs font-normal text-orange-400">
                <div>Minimum: {CURRENCY_FORMAT.format(venue.minimum)}</div>
                <div>
                  Current: {CURRENCY_FORMAT.format(calcTotal(prices, venue))}
                </div>
              </div>
            )}
        </span>
      </div>
    </li>
  );
}

function ItemName({ item }: { item: ItemPrice }) {
  return (
    <span>
      <div>{item.title}</div>
      {item.subtitle && (
        <div className="text-xs text-slate-400">{item.subtitle}</div>
      )}
    </span>
  );
}

function ItemCost({ item }: { item: ItemPrice }) {
  return (
    <span className="text-right">
      {item.missing ? (
        <div className="text-sm text-red-500 font-semibold">Required</div>
      ) : (
        <div>{CURRENCY_FORMAT.format(item.final)}</div>
      )}
      {!item.missing && item.minimum > item.price && (
        <div className="text-xs text-orange-400">
          <div>Minimum: {CURRENCY_FORMAT.format(item.minimum)}</div>
          <div>Current: {CURRENCY_FORMAT.format(item.price)}</div>
        </div>
      )}
    </span>
  );
}

function TotalCost({ prices, venue }: { prices: ItemPrice[]; venue: Venue }) {
  if (isPriceValid(prices)) {
    return <div>{CURRENCY_FORMAT.format(calcTotal(prices, venue, true))}</div>;
  } else {
    return <div className="text-red-500">Invalid Selections</div>;
  }
}
