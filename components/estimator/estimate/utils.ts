import { format, isValid } from "date-fns";

import { Customer, getLineItems } from "@/components/estimator/data";
import {
  VAR_DATE,
  VAR_HEADCOUNT,
  VAR_MONTH,
  VAR_YEAR,
} from "@/components/estimator/data/plantenders";
import {
  Condition,
  ConditionType,
  Inputs,
  ItemPrice,
  LineItem,
  Venue,
} from "@/components/estimator/types";

export function calcTotal(
  prices: ItemPrice[],
  venue: Venue,
  withMinimum = false
) {
  const total = prices.reduce((acc, c) => acc + c.final, 0);
  const min = venue.minimum || 0;
  return withMinimum ? Math.max(total, min) : total;
}

export function isPriceValid(prices: ItemPrice[]) {
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
    case ConditionType.AtLeastN:
      if (Array.isArray(value) && typeof c.condition === "number") {
        return value.length >= c.condition;
      } else {
        return false;
      }
    default:
      console.error(`Unknown condition type: ${c.type}`);
      return false;
  }
}

export function lineItemToPrice(
  li: LineItem,
  inputs: Inputs,
  customer: Customer
): ItemPrice | undefined {
  const debug = false;
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
  const debug = li.name === "Light Passed Appetizers";
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
  } else if (li.multipleVariableIds !== undefined) {
    multiple = li.multipleVariableIds.reduce((acc, varId) => {
      const value = inputs[varId];
      let multiplier: number;
      if (typeof value === "number") {
        multiplier = value;
      } else if (Array.isArray(value)) {
        multiplier = value.length;
      } else if (typeof value === "string" && !isNaN(Number(value))) {
        multiplier = Number(value);
      } else {
        multiplier = 0;
      }
      return acc * multiplier;
    }, 1);
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

function getEventDate(inputs: Inputs) {
  const year = inputs[VAR_YEAR.id] as number;
  const month = (inputs[VAR_MONTH.id] as number) - 1;
  const date = inputs[VAR_DATE.id] as number;
  return new Date(year, month, date);
}

export function getDateDue(inputs: Inputs) {
  const date = getEventDate(inputs);
  if (!isValid(date)) return "Unknown";
  return format(date, "E LLL d, yyy");
}

export function getGuests(inputs: Inputs) {
  return (inputs[VAR_HEADCOUNT.id] as number) || "Unknown";
}

export function isTruthy<T>(value: T | null | undefined | false): value is T {
  return Boolean(value);
}
