import React from "react";
import _ from "lodash";

import {
  CONDITIONS,
  DATE,
  LINE_ITEMS,
  MONTH,
  VENUE,
  YEAR,
} from "@/components/estimator/data";
import {
  Category,
  Condition,
  ConditionType,
  Inputs,
  LineItem,
  Term,
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
  inputs,
  restart,
}: {
  inputs: Inputs;
  restart: () => void;
}) {
  const costs = LINE_ITEMS.map((li) => {
    const matched = li.options.find((term) => matches(term, inputs));
    const minimum = Math.max(matched?.minimum || 0, li.minimum || 0);
    if (matched) {
      const price = getLineItemPrice(li, inputs);
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
  }).filter(isTruthy);
  return (
    <div className="py-4 px-8 sm:py-8 sm:p-12">
      {/*<!-- Col -->*/}
      <div className="overflow-y-auto">
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-slate-800">
            {VENUE.name}
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
              {formatTotal(costs)}
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
        <LineItems costs={costs} />
      </div>

      {/*<!-- End Buttons -->*/}
      <div className="mt-5">
        <p className="text-sm text-slate-500">
          If you have any questions, please contact us at{" "}
          <a
            className="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium"
            href="#"
          >
            example@site.com
          </a>{" "}
          or call{" "}
          <a
            className="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium"
            href="tel:+1222334444"
          >
            +1 222-333-4444
          </a>
        </p>
      </div>

      {/*<!-- Buttons -->*/}
      <div className="mt-5 flex justify-end gap-x-2">
        <button
          className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm"
          onClick={() => restart()}
        >
          Restart
        </button>
      </div>
    </div>
  );
}

function isTruthy<T>(value: T | null | undefined | false): value is T {
  return Boolean(value);
}

function LineItems({ costs }: { costs: Cost[] }) {
  const costsByCategory = _.groupBy(costs, "category");
  return (
    <div className="mt-5 sm:mt-10">
      <h4 className="text-sm font-semibold uppercase text-slate-800">
        Summary
      </h4>
      <ul className="mt-3 flex flex-col">
        {Object.entries(costsByCategory).map(([category, costs]) => {
          return (
            <React.Fragment key={category}>
              <li
                key={category}
                className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-semibold bg-gray-50 border text-slate-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg"
              >
                {_.startCase(_.lowerCase(category))}
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
                        <div className="text-xs text-slate-400">
                          {c.subtitle}
                        </div>
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
                          <div>
                            Minimum: {CURRENCY_FORMAT.format(c.minimum)}
                          </div>
                          <div>Current: {CURRENCY_FORMAT.format(c.price)}</div>
                        </div>
                      )}
                    </span>
                  </div>
                </li>
              ))}
            </React.Fragment>
          );
        })}
        <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-semibold bg-gray-50 border text-slate-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
          <div className="flex items-center justify-between w-full">
            <span>Total</span>
            <span className="text-right">
              {formatTotal(costs)}
              {VENUE.minimum !== undefined &&
                VENUE.minimum > calcTotal(costs) && (
                  <div className="text-xs font-normal text-red-400">
                    Minimum: {CURRENCY_FORMAT.format(VENUE.minimum)} | Current:{" "}
                    {CURRENCY_FORMAT.format(calcTotal(costs))}
                  </div>
                )}
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
}

function calcTotal(costs: Cost[]) {
  return costs.reduce((acc, c) => acc + c.final, 0);
}

function formatTotal(costs: Cost[]) {
  if (isValid(costs)) {
    return (
      <div>
        {CURRENCY_FORMAT.format(Math.max(calcTotal(costs), VENUE.minimum || 0))}
      </div>
    );
  } else {
    return <div className="text-red-500">Invalid Selections</div>;
  }
}

function isValid(costs: Cost[]) {
  return costs.every((c) => !c.missing);
}

function matches(option: Term, inputs: Inputs): boolean {
  const debug = false;
  return option.conditions.some((group) => {
    if (debug) console.log(group);
    return group
      .map((cId) => CONDITIONS[cId])
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
  li: LineItem,
  inputs: Inputs,
  level = 0,
  final = false
) {
  if (level >= MAX_LEVEL) {
    console.error("RECURSIVE STACK OVERFLOW calculating list item price");
    return 0;
  }
  const matched = li.options.find((term) => matches(term, inputs));
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
      base = LINE_ITEMS.filter((li) => {
        const targets = matched.targets || [];
        const categories = targets
          .filter((t) => t.type === "CATEGORY")
          .map((t) => t.value);
        const tags = targets
          .filter((t) => t.type === "TAG")
          .map((t) => t.value);
        if (categories.includes(li.category)) return true;
        return _.intersection(tags, li.tags || []).length > 0;
      }).reduce(
        (acc, li) => acc + getLineItemPrice(li, inputs, level + 1, true),
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
