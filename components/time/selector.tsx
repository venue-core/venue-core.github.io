import { Customer, getVenue } from "@/components/estimator/data";
import { TIME } from "@/components/estimator/data/demo";
import { Inputs } from "@/components/estimator/types";
import Time from "@/components/time/time";

export default function TimeSelector({
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
      <h1 className="text-center text-2xl font-bold">Select a Time</h1>
      <div className="">
        <Time
          venue={venue}
          inputs={inputs}
          setAvailability={(a) => {
            const start = new Date(a.startTime);
            const end = new Date(a.endTime);
            setInputs({ ...inputs, [TIME.id]: { start, end } });
            nextPage();
          }}
        />
      </div>
    </div>
  );
}
