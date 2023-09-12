import {Condition, LineItem, Variable, Venue} from "@/components/estimator/types";

export type Customer = '1909' | 'demo' | 'padua-hills' | 'sherman-gardens';

export function getVenue(customer: Customer): Venue {
  const { VENUE } = require(`./${customer}`);
  return VENUE;
}

export function getVariables(customer: Customer): Variable[] {
  const { VARIABLES } = require(`./${customer}`);
  return VARIABLES || [];
}

export function getLineItems(customer: Customer): LineItem[] {
  const { LINE_ITEMS } = require(`./${customer}`);
  return LINE_ITEMS || [];
}
