"use client";

import { Fragment, useContext, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

import { EventsContext } from "@/app/(demo)/portal/data";

export default function ChangeModal({
  show,
  setShow,
}: {
  show: boolean;
  setShow: (s: boolean) => void;
}) {
  const { addEvent } = useContext(EventsContext);
  const [request, setRequest] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const cancelRef = useRef(null);

  return (
    <Transition.Root show={show} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelRef}
        onClose={() => setShow(false)}
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
                  <div className="px-4 sm:px-6">
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
                      Request Change
                    </Dialog.Title>
                    {/*<div className="text-sm text-center text-gray-500">Hey there</div>*/}
                    <form className="mt-4">
                      <div>
                        <label
                          className="block text-sm font-medium mb-2 text-gray-600"
                          htmlFor="request"
                        >
                          What changes would you like to request?
                        </label>
                        <textarea
                          id="request"
                          rows={6}
                          className="form-input w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          required
                          disabled={submitting}
                          value={request}
                          onChange={(evt) => setRequest(evt.target.value)}
                        />
                      </div>
                      <div className="mt-4 flex gap-2">
                        <button
                          type="button"
                          className="btn w-full justify-center rounded-md text-blue-600 bg-white border-blue-600 px-3 py-2 text-sm font-semibold shadow-sm hover:bg-gray-50 disabled:opacity-50"
                          onClick={() => setShow(false)}
                        >
                          Close
                        </button>
                        <button
                          type="submit"
                          className="btn w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 disabled:opacity-50"
                          onClick={async () => {
                            setSubmitting(true);
                            await new Promise((r) => setTimeout(r, 1000));
                            addEvent({
                              title: "Change Requested",
                              date: new Date(),
                              user: "Katherine Wang",
                              content: (
                                <div>
                                  <div>Notes:</div>
                                  <div>{request}</div>
                                </div>
                              ),
                            });
                            setSubmitting(false);
                            setRequest("");
                            setShow(false);
                          }}
                          disabled={submitting}
                        >
                          Save
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
