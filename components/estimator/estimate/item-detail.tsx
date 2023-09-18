import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

import {
  CURRENCY_FORMAT,
  getBasePrice,
  getMultiple,
  getMultipleForVariable,
} from "@/components/estimator/estimate/utils";
import { Customer, Inputs, ItemPrice } from "@/components/estimator/types";

export default function ItemDetail({
  customer,
  inputs,
  item,
  setItem,
}: {
  customer: Customer;
  inputs: Inputs;
  item: ItemPrice | null;
  setItem: (i: ItemPrice | null) => void;
  setInputs: (i: Inputs) => void;
}) {
  const cancelRef = useRef(null);

  return (
    <Transition.Root show={Boolean(item)} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelRef}
        onClose={() => setItem(null)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-full sm:my-8 sm:max-w-lg">
                <div className="bg-white px-4 py-4 sm:p-6">
                  {item && (
                    <Item
                      customer={customer}
                      inputs={inputs}
                      item={item}
                      setItem={setItem}
                    />
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

// enum Tab {
//   Description = "Description",
//   Itemization = "Itemization",
// }

function Item({
  customer,
  inputs,
  item,
  setItem,
}: {
  customer: Customer;
  inputs: Inputs;
  item: ItemPrice;
  setItem: (i: ItemPrice | null) => void;
}) {
  // const [tab, setTab] = useState<Tab>(Tab.Description);
  return (
    <div className="px-4 sm:px-6">
      {/*<Header selected={tab} setTab={setTab} item={item} />*/}
      <div className="flex justify-center">
        <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
          <InformationCircleIcon
            className="h-6 w-6 text-blue-600"
            aria-hidden="true"
          />
        </div>
      </div>
      <Dialog.Title
        as="h3"
        className="mt-2 text-center text-base font-semibold leading-6 text-gray-900"
      >
        {item.item.name}
      </Dialog.Title>
      <div className="text-sm text-center text-gray-500">{item.subtitle}</div>
      <Price item={item} customer={customer} inputs={inputs} />
      {item.item.subtext && item.subtitle !== item.item.subtext && (
        <div className="mt-2">
          <div className="text-sm font-semibold">Details:</div>
          <p className="text-sm text-gray-500">{item.item.subtext}</p>
        </div>
      )}
      {item.item.description && (
        <div className="mt-2">
          <div className="text-sm font-semibold">Description:</div>
          <p className="text-sm text-gray-500">{item.item.description}</p>
        </div>
      )}
      {item.item.instructions && (
        <div className="mt-2">
          <div className="text-sm font-semibold">Instructions:</div>
          <p className="text-sm text-gray-500">{item.item.instructions}</p>
        </div>
      )}
      <div className="mt-4">
        <button
          type="button"
          className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
          onClick={() => setItem(null)}
        >
          Close
        </button>
      </div>
    </div>
  );
}

function Price(props: { item: ItemPrice; customer: Customer; inputs: Inputs }) {
  const { inputs, customer } = props;
  const item = props.item.option || props.item.item;
  const components = [];
  const basePrice = getBasePrice(item, inputs, customer);
  if (basePrice) {
    components.push(CURRENCY_FORMAT.format(basePrice));
    const multiples = [];
    if (item.multipleVariableIds && item.multipleVariableIds.length > 1) {
      for (const varId of item.multipleVariableIds) {
        multiples.push(getMultipleForVariable(varId, inputs));
      }
    } else {
      const multiple = getMultiple(item, inputs);
      if (multiple !== 1) {
        multiples.push(multiple);
      }
    }
    if (multiples.length) {
      components.push("x");
      components.push(
        ...intersperse(
          multiples.map((m) => (m < 1 ? `${m * 100}%` : m.toString())),
          "x"
        )
      );
    }
  }
  if (components.length) {
    return (
      <div className="mt-2">
        <div className="text-sm font-semibold">Price:</div>
        <p className="text-sm text-gray-500">{components.join(" ")}</p>
      </div>
    );
  }
  return null;
}

function intersperse<T>(arr: T[], sep: T) {
  return arr.reduce<T[]>((a, v) => [...a, v, sep], []).slice(0, -1);
}
