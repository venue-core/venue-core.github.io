import {
  VENUE as BASE_VENUE,
  generateAvailabilities,
  LINE_ITEMS,
  PAGES,
} from "@/components/estimator/data/plantenders";

export { generateAvailabilities, LINE_ITEMS, PAGES };

export const VENUE = {
  ...BASE_VENUE,
  name: "Perfect Venue 1",
  email: "contact@tryonevenue.com",
  phone: "+1 760 583 5578",
};
