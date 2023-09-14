import { LineItem, Page, Variable, Venue } from "@/components/estimator/types";

export type Customer =
  | "1909"
  | "demo"
  | "padua-hills"
  | "plantenders"
  | "sherman-gardens";

export function getVenue(customer: Customer): Venue {
  const { VENUE } = require(`./${customer}`);
  return VENUE;
}

export function getLineItems(customer: Customer): LineItem[] {
  const { LINE_ITEMS } = require(`./${customer}`);
  return LINE_ITEMS || [];
}

export function getPages(customer: Customer): Page[] {
  const { PAGES } = require(`./${customer}`);
  return PAGES || [];
}

export function getAvailabilities(customer: Customer) {
  const { generateAvailabilities } = require(`./${customer}`);
  return generateAvailabilities();
}
