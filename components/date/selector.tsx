import parse from "html-react-parser";

import Calendar from "@/components/date/calendar";
import Timezone from "@/components/date/timezone";
import { getVenue } from "@/components/estimator/data";
import {
  VAR_DATE,
  VAR_DAY,
  VAR_MONTH,
  VAR_YEAR,
} from "@/components/estimator/data/demo";
import { Customer, Inputs, Page } from "@/components/estimator/types";

export default function DateSelector({
  customer,
  page,
  inputs,
  setInputs,
  nextPage,
}: {
  customer: Customer;
  page: Page;
  inputs: Inputs;
  setInputs: (i: Inputs) => void;
  nextPage: () => void;
}) {
  const venue = getVenue(customer);

  return (
    <div className="mx-auto grid h-full max-w-lg grid-rows-[auto,1fr] gap-4">
      <h1 className="text-center text-2xl font-bold mb-0">Select a Date</h1>
      <div
        className="px-6 sm:px-8 xl:px-10"
        onClick={(evt) => evt.stopPropagation()}
      >
        {page.description && (
          <div className="text-sm mb-4">{parse(page.description)}</div>
        )}
        <Calendar
          customer={customer}
          selectDate={(selected) => {
            const s = selected.toDate(venue.timezone);
            const year = s.getFullYear();
            const month = s.getMonth() + 1;
            const date = s.getDate();
            const day = s.getDay();
            setInputs({
              ...inputs,
              [VAR_YEAR.id]: year,
              [VAR_MONTH.id]: month,
              [VAR_DATE.id]: date,
              [VAR_DAY.id]: day,
            });
            nextPage();
          }}
        />
      </div>
      <div className="p-4 sm:p-8 xl:p-10">
        <Timezone venue={venue} />
      </div>
    </div>
  );
}
