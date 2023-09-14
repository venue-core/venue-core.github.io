import Calendar from "@/components/datetime/calendar";
import { AvailabilitiesProvider } from "@/components/datetime/context/availabilities";
import { SelectedDateProvider } from "@/components/datetime/context/selected-date";
import Time from "@/components/datetime/time";
import Timezone from "@/components/datetime/timezone";
import { Customer, getVenue } from "@/components/estimator/data";
import {
  VAR_DATE,
  VAR_DAY,
  VAR_MONTH,
  VAR_TIME,
  VAR_YEAR,
} from "@/components/estimator/data/demo";
import { Inputs } from "@/components/estimator/types";

export default function DatetimeSelector({
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
    <SelectedDateProvider>
      <AvailabilitiesProvider>
        <div className="mx-auto grid h-full max-w-lg grid-rows-[auto,1fr] gap-8">
          <div className="mt-4 px-4 sm:px-8 xl:px-10">
            <h1 className="text-center text-2xl font-bold">
              Select a Date & Time
            </h1>
          </div>
          <div className="grid min-h-0">
            <div>
              <div className="px-6 sm:px-8 xl:px-10">
                <Calendar />
              </div>
              <div className="p-4 sm:p-8 xl:p-10">
                <Timezone venue={venue} />
              </div>
            </div>
            <div>
              <Time
                setAvailability={(a) => {
                  const start = new Date(a.startTime);
                  const end = new Date(a.endTime);
                  const year = start.getFullYear();
                  const month = start.getMonth() + 1;
                  const date = start.getDate();
                  const day = start.getDay();
                  setInputs({
                    ...inputs,
                    [VAR_YEAR.id]: year,
                    [VAR_MONTH.id]: month,
                    [VAR_DATE.id]: date,
                    [VAR_DAY.id]: day,
                    [VAR_TIME.id]: { start, end },
                  });
                  nextPage();
                }}
              />
            </div>
          </div>
        </div>
      </AvailabilitiesProvider>
    </SelectedDateProvider>
  );
}
