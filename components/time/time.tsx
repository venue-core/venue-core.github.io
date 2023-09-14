import { useState } from "react";
import {
  getLocalTimeZone,
  isSameDay,
  parseDateTime,
} from "@internationalized/date";
import cx from "classnames";
import { useDateFormatter } from "react-aria";

import { Availability } from "@/components/datetime/context/data";
import { Inputs, Venue } from "@/components/estimator/types";

export default function Time({
  venue,
  inputs,
  setAvailability,
}: {
  venue: Venue;
  inputs: Inputs;
  setAvailability: (a: Availability) => void;
}) {
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const formatter = useDateFormatter({ dateStyle: "full" });
  const hasAvailability = true;
  return (
    <div className="relative grid h-full grid-rows-[auto,1fr] overflow-hidden px-4">
      {/* Scroll mask */}
      <div className="pointer-events-none absolute inset-x-8 bottom-0 z-10 hidden h-40 bg-gradient-to-t from-white"></div>

      <div className="flex h-12 items-center justify-center">
        <h2 className="text-lg font-semibold">
          {/*{formatter.format(selectedDate.toDate(venue.timezone))}*/}
          {/*TODO: get the date from the previous calendar screen*/}
        </h2>
      </div>
      <div className="-mx-4 mt-4 overflow-y-auto px-4">
        <div className="relative">
          {/* Blur mask for days without availability */}
          <div
            className={cx(
              "absolute -inset-x-4 -inset-y-1 blur-sm backdrop-saturate-0 transition",
              hasAvailability
                ? "pointer-events-none z-0 opacity-0 duration-300 ease-out"
                : "z-10 opacity-100 ease-in"
            )}
          />

          {hasAvailability ? (
            <ul className="space-y-2 pt-2 sm:pb-8 md:pb-24">
              {/*{availabilities.map((availability) => (*/}
              {/*  <TimeSlot*/}
              {/*    key={availability.startTime}*/}
              {/*    selectedTime={selectedTime}*/}
              {/*    setSelectedTime={setSelectedTime}*/}
              {/*    availability={availability}*/}
              {/*    setAvailability={setAvailability}*/}
              {/*  />*/}
              {/*))}*/}
            </ul>
          ) : (
            // Empty list placeholder (faks list)
            <ul className="space-y-2 py-2" aria-hidden="true">
              {["8:00 AM", "9:00 AM"].map((time) => {
                return (
                  <li
                    key={time}
                    className="rounded-lg bg-blue-100 px-5 py-3 text-center font-semibold text-blue-700 opacity-50
                    [@supports_not_(backdrop-filter:blur(0))]:line-through [@supports_not_(backdrop-filter:blur(0))]:opacity-30"
                  >
                    {time}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
        {!hasAvailability && (
          <p className="mt-2 pb-4 text-center text-sm text-slate-500 sm:pb-8">
            No availabilities on this day.
          </p>
        )}
      </div>
    </div>
  );
}

// ------------------------------
// Implementation components
// ------------------------------

function TimeSlot({
  availability,
  setAvailability,
  selectedTime,
  setSelectedTime,
}: {
  availability: Availability;
  setAvailability: (a: Availability) => void;
  selectedTime: string | null;
  setSelectedTime: (time: string | null) => void;
}) {
  const timeFormatter = useDateFormatter({ timeStyle: "short" });
  const isSelected = selectedTime === availability.startTime;
  return (
    <li
      className={cx(
        "flex items-center gap-1 overflow-hidden rounded",
        isSelected ? "bg-blue-600 bg-stripes" : "bg-blue-100 text-blue-700"
      )}
      onClick={() =>
        isSelected
          ? setSelectedTime(null)
          : setSelectedTime(availability.startTime)
      }
    >
      <div
        className={cx(
          "shrink-0 transition-all",
          isSelected ? "basis-1/2 text-white ease-out" : "basis-full"
        )}
      >
        <button
          disabled={isSelected}
          className={cx(
            "w-full focus:ring-inset focus:ring-offset-0 active:translate-y-0",
            isSelected && "text-white disabled:opacity-100"
          )}
        >
          {isSelected
            ? timeFormatter.format(new Date(availability.startTime))
            : timeFormatter.format(new Date(availability.startTime)) +
              " - " +
              timeFormatter.format(new Date(availability.endTime))}
        </button>
      </div>
      <div className="m-2 basis-1/2">
        <button
          tabIndex={isSelected ? 0 : -1}
          className="btn-sm w-full focus-visible:ring-inset focus-visible:ring-offset-0 bg-blue-100 text-blue-700 hover:bg-blue-200 focus-visible:ring-blue-500"
          onClick={(evt) => {
            evt.stopPropagation();
            setAvailability(availability);
          }}
        >
          Confirm
        </button>
      </div>
    </li>
  );
}
