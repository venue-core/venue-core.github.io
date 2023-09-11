import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import _ from "lodash";

import {
  Customer,
  getConditions,
  getLineItems,
  getVenue,
} from "@/components/estimator/data";
import { DATE, MONTH, YEAR } from "@/components/estimator/data/demo";
import {
  Category,
  Condition,
  ConditionType,
  Inputs,
  LineItem,
  Term,
  Venue,
} from "@/components/estimator/types";

const CURRENCY_FORMAT = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

interface Cost {
  title: string;
  subtitle?: string;
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
  const costs = lineItems
    .map((li) => {
      const matched = li.options.find((term) =>
        matches(term, inputs, customer)
      );
      const minimum = Math.max(matched?.minimum || 0, li.minimum || 0);
      if (matched) {
        const price = getLineItemPrice(customer, li, inputs);
        return {
          title: li.name,
          subtitle: matched.name !== li.name ? matched.name : undefined,
          price,
          minimum,
          final: Math.max(price, minimum),
          category: li.category,
          missing: false,
        };
      } else if (li.required) {
        return {
          title: li.name,
          price: 0,
          minimum,
          final: minimum,
          category: li.category,
          missing: true,
        };
      }
    })
    .filter(isTruthy);
  const venue = getVenue(customer);
  return (
    <div className="py-4 px-8 sm:py-8 sm:p-12">
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
              {formatTotal(costs, venue)}
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
        <LineItems venue={venue} costs={costs} />
      </div>
      <div className="mt-4 px-4">
        <p className="text-sm text-slate-500">
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

      {venue.depositPercentage && (
        <div className="px-4 mt-4">
          <div className="text-xs uppercase font-semibold">Due Today:</div>
          <div className="text-md flex">
            <span>
              {CURRENCY_FORMAT.format(
                calcTotal(costs, venue, true) * venue.depositPercentage
              )}
            </span>
          </div>
          <div className="text-sm text-slate-500">
            Reserve your event date today to ensure availability.
          </div>
          <button className="btn-sm text-sm mt-2 text-white bg-blue-600 hover:bg-blue-700 group">
            <span>Reserve</span>
            <span className="tracking-normal text-white group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
              -&gt;
            </span>
          </button>
        </div>
      )}

      {/*<!-- Buttons -->*/}
      <div className="mt-8 flex justify-end gap-x-2">
        <button
          className="btn-sm text-sm text-white bg-blue-600 hover:bg-blue-700 group"
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

function LineItems({ venue, costs }: { venue: Venue; costs: Cost[] }) {
  const costsByCategory = _.groupBy(costs, "category");
  return (
    <div className="mt-4 sm:mt-8">
      <h4 className="text-sm font-semibold uppercase text-slate-800">
        Summary
      </h4>
      <ul className="mt-2 flex flex-col">
        {Object.entries(costsByCategory).map(([category, costs]) => (
          <React.Fragment key={category}>
            <li
              key={category}
              className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-semibold bg-gray-50 border text-slate-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg"
            >
              {category}
            </li>
            {costs.map((c) => (
              <li
                key={c.title}
                className="inline-flex items-center gap-x-2 py-3 px-4 text-sm border text-slate-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg"
              >
                <div className="flex items-center justify-between w-full">
                  <span>
                    <div>{c.title}</div>
                    {c.subtitle && (
                      <div className="text-xs text-slate-400">{c.subtitle}</div>
                    )}
                  </span>
                  <span className="text-right">
                    {c.missing ? (
                      <div className="text-sm text-red-500 font-semibold">
                        Required
                      </div>
                    ) : (
                      <div>
                        {CURRENCY_FORMAT.format(
                          Math.max(c.price, c.minimum || 0)
                        )}
                      </div>
                    )}
                    {!c.missing && c.minimum > c.price && (
                      <div className="text-xs text-orange-400">
                        <div>Minimum: {CURRENCY_FORMAT.format(c.minimum)}</div>
                        <div>Current: {CURRENCY_FORMAT.format(c.price)}</div>
                      </div>
                    )}
                  </span>
                </div>
              </li>
            ))}
          </React.Fragment>
        ))}
        <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-semibold bg-gray-50 border text-slate-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
          <div className="flex items-center justify-between w-full">
            <span>Total</span>
            <span className="text-right">
              {formatTotal(costs, venue)}
              {venue.minimum !== undefined &&
                venue.minimum > calcTotal(costs, venue) && (
                  <div className="text-xs font-normal text-orange-400">
                    <div>Minimum: {CURRENCY_FORMAT.format(venue.minimum)}</div>
                    <div>
                      Current: {CURRENCY_FORMAT.format(calcTotal(costs, venue))}
                    </div>
                  </div>
                )}
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
}

function calcTotal(costs: Cost[], venue: Venue, withMinimum = false) {
  const total = costs.reduce((acc, c) => acc + c.final, 0);
  const min = venue.minimum || 0;
  return withMinimum ? Math.max(total, min) : total;
}

function formatTotal(costs: Cost[], venue: Venue) {
  if (isValid(costs)) {
    return <div>{CURRENCY_FORMAT.format(calcTotal(costs, venue, true))}</div>;
  } else {
    return <div className="text-red-500">Invalid Selections</div>;
  }
}

function isValid(costs: Cost[]) {
  return costs.every((c) => !c.missing);
}

function matches(option: Term, inputs: Inputs, customer: Customer): boolean {
  const conditions = getConditions(customer);
  const debug = false;
  return option.conditions.some((group) => {
    if (debug) console.log(group);
    return group
      .map((cId) => conditions[cId])
      .filter(Boolean)
      .every((c) => evaluateCondition(c, inputs, debug));
  });
}

function evaluateCondition(c: Condition, inputs: Inputs, debug: boolean) {
  const { variableId } = c;
  const value = inputs[variableId];
  if (debug) console.log(value);
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

const MAX_LEVEL = 5;
function getLineItemPrice(
  customer: Customer,
  li: LineItem,
  inputs: Inputs,
  level = 0,
  final = false
) {
  if (level >= MAX_LEVEL) {
    console.error("RECURSIVE STACK OVERFLOW calculating list item price");
    return 0;
  }
  const matched = li.options.find((term) => matches(term, inputs, customer));
  const minimum = Math.max(matched?.minimum || 0, li.minimum || 0);
  let multiple: number;
  if (matched) {
    if (matched.multiple !== undefined) {
      multiple = matched.multiple;
    } else if (matched.multipleVariableId !== undefined) {
      const value = inputs[matched.multipleVariableId];
      multiple = isNaN(Number(value)) ? 1 : Number(value);
    } else {
      multiple = 1;
    }
  } else {
    multiple = 0;
  }
  if (matched) {
    const { basePrice, targets } = matched;
    let base: number;
    if (basePrice !== undefined) {
      base = basePrice;
    } else if (Array.isArray(targets)) {
      base = getLineItems(customer)
        .filter((li) => {
          const targets = matched.targets || [];
          const categories = targets
            .filter((t) => t.type === "CATEGORY")
            .map((t) => t.value);
          const tags = targets
            .filter((t) => t.type === "TAG")
            .map((t) => t.value);
          if (categories.includes(li.category)) return true;
          return _.intersection(tags, li.tags || []).length > 0;
        })
        .reduce(
          (acc, li) =>
            acc + getLineItemPrice(customer, li, inputs, level + 1, true),
          0
        );
    } else {
      console.error(`No base price for line-item: ${li.name}`);
      base = 0;
    }
    const price = multiple * base;
    return final ? Math.max(price, minimum) : price;
  } else {
    return 0;
  }
}

function getDateDue(inputs: Inputs) {
  const year = inputs[YEAR.id] as number;
  const month = (inputs[MONTH.id] as number) - 1;
  const date = inputs[DATE.id] as number;
  return new Date(year, month, date).toDateString();
}
