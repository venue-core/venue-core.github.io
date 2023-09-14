import Calendar from "@/components/date/calendar";
import Timezone from "@/components/date/timezone";
import { Customer, getVenue } from "@/components/estimator/data";
import { DATE, DAY, MONTH, YEAR } from "@/components/estimator/data/demo";
import { Inputs } from "@/components/estimator/types";

export default function DateSelector({
  customer,
  inputs,
  setInputs,
  nextPage,
}: {
  customer: Customer;
  inputs: Inputs;
  setInputs: (i: Inputs) => void;
  nextPage: () => void;
}) {
  const venue = getVenue(customer);
  return (
    <div className="mx-auto grid h-full max-w-lg grid-rows-[auto,1fr] gap-8">
      <h1 className="text-center text-2xl font-bold">Select a Date</h1>
      <div
        className="px-6 sm:px-8 xl:px-10"
        onClick={(evt) => evt.stopPropagation()}
      >
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
              [YEAR.id]: year,
              [MONTH.id]: month,
              [DATE.id]: date,
              [DAY.id]: day,
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
