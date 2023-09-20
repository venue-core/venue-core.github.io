import { ArrowRightIcon } from "@heroicons/react/24/outline";

import { getVenue } from "@/components/estimator/data";
import { Customer } from "@/components/estimator/types";

export default function Intro({
  customer,
  nextPage,
}: {
  customer: Customer;
  nextPage: () => void;
}) {
  return (
    <div className="p-8 h-full text-center flex items-center justify-center">
      <div>
        <h4 className="h4 font-blue-600">
          Welcome to {getVenue(customer).name}!
        </h4>
        <div className="text-lg font-light mt-2">
          Start your custom price estimate
        </div>
        <button
          className="mt-8 btn-sm flex items-center text-white mx-auto text-sm font-medium py-2 px-4 m-2 bg-blue-600 group transition duration-500"
          onClick={() => nextPage()}
        >
          Start
          <ArrowRightIcon className="h-3 stroke-2 tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1" />
        </button>
      </div>
    </div>
  );
}
