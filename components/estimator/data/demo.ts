import {
  VENUE as BASE_VENUE,
  generateAvailabilities,
  LINE_ITEMS,
  PAGES,
  VAR_DATE,
  VAR_DAY,
  VAR_HEADCOUNT,
  VAR_MONTH,
  VAR_TIME,
  VAR_YEAR,
} from "@/components/estimator/data/plantenders";

export {
  generateAvailabilities,
  LINE_ITEMS,
  PAGES,
  VAR_YEAR,
  VAR_MONTH,
  VAR_DATE,
  VAR_DAY,
  VAR_TIME,
  VAR_HEADCOUNT,
};

export const VENUE = {
  ...BASE_VENUE,
  name: "ACME Inc",
  minimum: 14_000,
  email: "contact@acme.com",
  phone: "+1 222 333 4444",
  depositPercentage: 0.35,
};
