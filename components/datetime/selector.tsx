"use client";

import { useEffect } from "react";

import Calendar from "@/components/datetime/calendar";
import { AvailabilitiesProvider } from "@/components/datetime/context/availabilities";
import { SelectedDateProvider } from "@/components/datetime/context/selected-date";
import Time from "@/components/datetime/time";
import Timezone from "@/components/datetime/timezone";
import { DATE, DAY, MONTH, TIME, YEAR } from "@/components/estimator/data";
import { Inputs } from "@/components/estimator/types";

export default function DatetimeSelector({
  inputs,
  setInputs,
  goNext,
}: {
  inputs: Inputs;
  setInputs: (i: Inputs) => void;
  goNext: () => void;
}) {
  // TODO: if input has MONTH, DAY, DATE, YEAR, TIME set, then set default value inside provider
  useEffect(() => {}, []);
  return (
    <SelectedDateProvider>
      <AvailabilitiesProvider>
        <div className="mx-auto grid h-full max-w-lg grid-rows-[auto,1fr] gap-8 md:max-w-none">
          <div className="mt-4 px-4 sm:px-8 xl:px-10">
            <h1 className="text-center text-2xl font-bold md:text-left">
              Select a Date & Time
            </h1>
          </div>
          <div className="grid min-h-0">
            <div>
              <div className="px-6 sm:px-8 xl:px-10">
                <Calendar />
              </div>
              <div className="p-4 sm:p-8 xl:p-10">
                <Timezone />
              </div>
            </div>
            <div>
              <Time
                goNext={goNext}
                setAvailability={(a) => {
                  const start = new Date(a.startTime);
                  const end = new Date(a.endTime);
                  const year = start.getFullYear();
                  const month = start.getMonth() + 1;
                  const date = start.getDate();
                  const day = start.getDay();
                  setInputs({
                    ...inputs,
                    [YEAR.id]: year,
                    [MONTH.id]: month,
                    [DATE.id]: date,
                    [DAY.id]: day,
                    [TIME.id]: { start, end },
                  });
                }}
              />
            </div>
          </div>
        </div>
      </AvailabilitiesProvider>
    </SelectedDateProvider>
  );
}
