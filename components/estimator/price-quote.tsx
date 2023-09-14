import React from "react";
import _ from "lodash";

import { Customer, getLineItems, getVenue } from "@/components/estimator/data";
import { DATE, MONTH, YEAR } from "@/components/estimator/data/demo";
import {
  Category,
  Condition,
  ConditionType,
  Inputs,
  LineItem,
  Venue,
} from "@/components/estimator/types";

const CURRENCY_FORMAT = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

interface ItemPrice {
  title: string;
  subtitle?: string;
  items?: ItemPrice[];
  price: number;
  minimum: number;
  final: number;
  category: Category;
  missing: boolean;
}

export default function PriceQuote({
  customer,
  inputs,
  restart,
}: {
  customer: Customer;
  inputs: Inputs;
  restart: () => void;
}) {
  const lineItems = getLineItems(customer);
  const prices = lineItems
    .map((li) => lineItemToPrice(li, inputs, customer))
    .filter(isTruthy);
  const venue = getVenue(customer);
  return (
    <div>
      {/*<!-- Col -->*/}
      <div className="overflow-y-auto">
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-slate-800">
            {venue.name}
          </h3>
          <p className="text-sm text-slate-500">Price Quote #3682303</p>
        </div>

        {/*<!-- Grid -->*/}
        <div className="mt-5 sm:mt-10 grid grid-cols-2 gap-5">
          <div>
            <span className="block text-xs uppercase text-slate-500">
              Amount Due:
            </span>
            <span className="block text-md font-medium text-slate-800">
              {formatTotal(prices, venue)}
            </span>
          </div>
          {/*<!-- End Col -->*/}

          <div className="text-right">
            <span className="block text-xs uppercase text-slate-500">
              Date Due:
            </span>
            <span className="block text-md font-medium text-slate-800">
              {getDateDue(inputs)}
            </span>
          </div>
          {/*<!-- End Col -->*/}
        </div>
        {/*<!-- End Grid -->*/}
        <LineItems venue={venue} prices={prices} />
      </div>

      <div className="mt-4 px-4">
        <p className="text-sm text-slate-600">
          Place a deposit today to reserve your event date's availability.
        </p>
        <p className="mt-1 text-sm text-slate-500">
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

function isTruthy<T>(value: T | null | undefined | false): value is T {
  return Boolean(value);
}

const POST_SUBTOTAL_CATEGORIES = new Set<string>([
  Category.Fees,
  Category.Taxes,
]);

function LineItems({ venue, prices }: { venue: Venue; prices: ItemPrice[] }) {
  const pricesByCategory = _.groupBy(prices, "category");
  return (
    <div className="mt-4 sm:mt-8">
      <h4 className="text-sm font-semibold uppercase text-slate-800">
        Summary
      </h4>
      <ul className="mt-2 flex flex-col">
        {Object.entries(pricesByCategory)
          .filter(([category]) => !POST_SUBTOTAL_CATEGORIES.has(category))
          .map(([category, prices]) => (
            <CategoryGroup key={category} category={category} prices={prices} />
          ))}
        <Subtotal venue={venue} prices={prices} />
        {Object.entries(pricesByCategory)
          .filter(([category]) => POST_SUBTOTAL_CATEGORIES.has(category))
          .map(([category, prices]) => (
            <CategoryGroup key={category} category={category} prices={prices} />
          ))}
        <Total venue={venue} prices={prices} />
      </ul>
    </div>
  );
}

function CategoryGroup({
  category,
  prices,
}: {
  category: string;
  prices: ItemPrice[];
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
          className="py-3 px-4 text-sm border text-slate-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg"
        >
          <div className="flex items-center justify-between w-full">
            <Item item={item} />
            <Price item={item} />
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

function Subtotal({ venue, prices }: { venue: Venue; prices: ItemPrice[] }) {
  const filtered = prices.filter(
    (p) => !POST_SUBTOTAL_CATEGORIES.has(p.category)
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

function Total({ venue, prices }: { venue: Venue; prices: ItemPrice[] }) {
  return (
    <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-semibold bg-gray-50 border text-slate-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
      <div className="flex items-center justify-between w-full">
        <span>Total</span>
        <span className="text-right">
          {formatTotal(prices, venue)}
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

function Item({ item }: { item: ItemPrice }) {
  return (
    <span>
      <div>{item.title}</div>
      {item.subtitle && (
        <div className="text-xs text-slate-400">{item.subtitle}</div>
      )}
    </span>
  );
}

function Price({ item }: { item: ItemPrice }) {
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

function calcTotal(prices: ItemPrice[], venue: Venue, withMinimum = false) {
  const total = prices.reduce((acc, c) => acc + c.final, 0);
  const min = venue.minimum || 0;
  return withMinimum ? Math.max(total, min) : total;
}

function formatTotal(prices: ItemPrice[], venue: Venue) {
  if (isValid(prices)) {
    return <div>{CURRENCY_FORMAT.format(calcTotal(prices, venue, true))}</div>;
  } else {
    return <div className="text-red-500">Invalid Selections</div>;
  }
}

function isValid(prices: ItemPrice[]) {
  return prices.every((c) => !c.missing);
}

function meetsConditions(item: LineItem, inputs: Inputs): boolean {
  const debug = false;
  if (!item.conditions) return true;
  return item.conditions.some((group) =>
    group.every((c) => evaluateCondition(c, inputs, debug))
  );
}

export function evaluateCondition(
  c: Condition,
  inputs: Inputs,
  debug: boolean
) {
  const { variableId } = c;
  const value = inputs[variableId];
  switch (c.type) {
    case ConditionType.Inclusive:
      if (Array.isArray(c.condition)) {
        return c.condition.includes(value as any);
      } else {
        return false;
      }
    case ConditionType.Exclusive:
      if (Array.isArray(c.condition)) {
        return !c.condition.includes(value as any);
      } else {
        return false;
      }
    case ConditionType.Equal:
      return value === c.condition;
    case ConditionType.GTE:
      return value >= c.condition;
    case ConditionType.LTE:
      return value <= c.condition;
    default:
      console.error(`Unknown condition type: ${c.type}`);
      return false;
  }
}

function lineItemToPrice(
  li: LineItem,
  inputs: Inputs,
  customer: Customer
): ItemPrice | undefined {
  if (!meetsConditions(li, inputs) && !li.required) return;
  // sum of sub line items
  if (li.items) {
    const minimum = li.minimum || 0;
    const price = li.items.reduce(
      (acc, item) => acc + getItemPrice(customer, item, inputs, 0, true),
      0
    );
    const final = Math.max(price, minimum);
    if (!li.required && final === 0) return;
    return {
      title: li.name,
      subtitle: li.subtext,
      items: li.items
        .map((item) => lineItemToPrice(item, inputs, customer))
        .filter(isTruthy),
      price,
      minimum,
      final,
      category: li.category,
      missing: false,
    };
  }
  if (li.options) {
    // selection of a single item
    const option = li.options.find((o) => meetsConditions(o, inputs));
    const minimum = Math.max(option?.minimum || 0, li.minimum || 0);
    if (option) {
      const price = getItemPrice(customer, li, inputs);
      return {
        title: li.name,
        subtitle: option.name !== li.name ? option.name : li.subtext,
        price,
        minimum,
        final: Math.max(price, minimum),
        category: li.category,
        missing: false,
      };
    } else if (li.required) {
      return {
        title: li.name,
        subtitle: li.subtext,
        price: 0,
        minimum,
        final: minimum,
        category: li.category,
        missing: true,
      };
    }
  }
  const minimum = li.minimum || 0;
  const price = getItemPrice(customer, li, inputs);
  const final = Math.max(price, minimum);
  if (final === 0 && !li.required) return;
  return {
    title: li.name,
    subtitle: li.subtext,
    price,
    minimum,
    final,
    category: li.category,
    missing: li.required && final === 0,
  };
}

const MAX_LEVEL = 5;
function getItemPrice(
  customer: Customer,
  li: LineItem,
  inputs: Inputs,
  level = 0,
  final = false
) {
  if (level >= MAX_LEVEL) {
    console.error(
      `RECURSIVE STACK OVERFLOW calculating list item price: ${li.name}`
    );
    return 0;
  }
  const debug = false;
  if (!meetsConditions(li, inputs)) return 0;
  let sum = 0;
  if (li.items) {
    sum += li.items.reduce(
      (acc, item) =>
        acc + getItemPrice(customer, item, inputs, level + 1, true),
      0
    );
  }
  if (li.options) {
    const option = li.options.find((item) => meetsConditions(item, inputs));
    if (option) {
      sum += getItemPrice(customer, option, inputs, level + 1, true);
    }
  }
  let multiple: number;
  if (li.multiple !== undefined) {
    multiple = li.multiple;
  } else if (li.multipleVariableId !== undefined) {
    const value = inputs[li.multipleVariableId];
    multiple = isNaN(Number(value)) ? 0 : Number(value);
  } else {
    multiple = 1;
  }
  const { basePrice, targets } = li;
  let base: number;
  if (basePrice !== undefined) {
    base = basePrice;
  } else if (Array.isArray(targets)) {
    base = getLineItems(customer)
      .filter((item) => (li.targets || []).includes(item.category))
      .reduce(
        (acc, item) =>
          acc + getItemPrice(customer, item, inputs, level + 1, true),
        0
      );
  } else {
    base = 0;
  }
  sum += multiple * base;
  return final ? Math.max(sum, li.minimum || 0) : sum;
}

function getDateDue(inputs: Inputs) {
  const year = inputs[YEAR.id] as number;
  const month = (inputs[MONTH.id] as number) - 1;
  const date = inputs[DATE.id] as number;
  return new Date(year, month, date).toDateString();
}
