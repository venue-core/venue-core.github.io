"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import Calculator from "public/images/calculator.svg";

import DateSelector from "@/components/date/selector";
import DatetimeSelector from "@/components/datetime/selector";
import { Customer, getPages } from "@/components/estimator/data";
import Estimate from "@/components/estimator/estimate";
import Form from "@/components/estimator/form";
import Intro from "@/components/estimator/intro";
import { Inputs, Page, PageType } from "@/components/estimator/types";
import TimeSelector from "@/components/time/selector";

const CALCULATOR = (
  <Image src={Calculator} alt="calculator" className="w-6 h-6" />
);

const PRICE_QUOTE = (
  <span className="mx-auto flex justify-center items-center w-[62px] h-[62px] rounded-full border border-gray-200 bg-white text-slate-700 shadow-sm">
    <svg
      className="w-6 h-6"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z" />
      <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z" />
    </svg>
  </span>
);

export default function Router({ customer = 'demo' }: { customer?: Customer }) {
  const pages = getPages(customer);
  const router = useRouter();
  const search = useSearchParams();
  const ref = useRef(null);
  const initial = search.get("page");
  const [pageIndex, setPageIndex] = useState<number>(
    initial && !isNaN(Number(initial)) ? Number(initial) - 1 : 0
  );
  const [inputs, setInputs] = useState<Inputs>({});

  useEffect(() => {
    const url = new URL(window.location.href);
    url.searchParams.set("page", (pageIndex + 1).toString());
    router.push(url.toString());
  }, [pageIndex]);

  useEffect(() => {
    const p = search.get("page");
    setPageIndex(p ? Number(p) - 1 : 0);
  }, [search.get("page")]);

  return (
    <section className="grow bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-20 pb-12">
    <div className="relative flex flex-col bg-white shadow-lg rounded-xl h-[calc(100vh-8rem)]">
      <div className="relative overflow-hidden min-h-[8rem] bg-blue-600 text-center rounded-t-xl">
        {pageIndex > 0 && (
          <ChevronLeftIcon
            className="text-white h-8 w-8 mt-4 ml-2 cursor-pointer"
            onClick={() => {
              setPageIndex((prev) => (prev === 0 ? prev : prev - 1));
              (ref.current as any).scrollIntoView({ behavior: "smooth" });
            }}
          />
        )}
        {/*<Progress view={page} />*/}
        {/*<!-- SVG Background Element -->*/}
        <figure className="absolute inset-x-0 bottom-0">
          <svg
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 1920 100.1"
          >
            <path
              fill="currentColor"
              className="fill-white"
              d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
            ></path>
          </svg>
        </figure>
        {/*<!-- End SVG Background Element -->*/}
      </div>

      <div className="relative z-10 -mt-12">
        {/*<!-- Icon -->*/}
        <span className="mx-auto flex justify-center items-center w-[62px] h-[62px] rounded-full border border-gray-200 bg-white text-slate-700 shadow-sm">
          {pages[pageIndex]?.type === PageType.Estimate
            ? PRICE_QUOTE
            : CALCULATOR}
        </span>
        {/*<!-- End Icon -->*/}
      </div>

      <div className="h-full pb-4 overflow-y-scroll">
        <div ref={ref} />
        {pages.map((page, i) => (
          <FormPage
            key={page.id}
            active={pageIndex === i}
            customer={customer}
            inputs={inputs}
            setInputs={setInputs}
            page={page}
            reset={() => {
              setInputs({});
              setPageIndex(0);
              (ref.current as any).scrollIntoView({ behavior: "smooth" });
            }}
            nextPage={() => {
              setPageIndex((prev) =>
                prev === pages.length - 1 ? prev : prev + 1
              );
              (ref.current as any).scrollIntoView({ behavior: "smooth" });
            }}
          />
        ))}
      </div>
    </div>
      </div>
    </section>
  );
}

function FormPage({
  active,
  customer,
  inputs,
  setInputs,
  page,
  reset,
  nextPage,
}: {
  active: boolean;
  customer: Customer;
  inputs: Inputs;
  setInputs: (i: Inputs) => void;
  page: Page;
  reset: () => void;
  nextPage: () => void;
}) {
  if (!active) return null;
  switch (page.type) {
    case PageType.Form:
      return (
        <div className="mt-4 px-8 md:px-24">
          <Form
            page={page}
            inputs={inputs}
            setInputs={setInputs}
            fields={page.fields}
            nextPage={nextPage}
          />
        </div>
      );
    case PageType.Intro:
      return <Intro customer={customer} nextPage={nextPage} />;
    case PageType.Calendar:
      return (
        <div className="mt-4 px-4 sm:px-8 xl:px-10 md:px-24">
          <DateSelector
            customer={customer}
            page={page}
            inputs={inputs}
            setInputs={setInputs}
            nextPage={nextPage}
          />
        </div>
      );
    case PageType.CalendarTime:
      return (
        <div className="mt-4 px-4 sm:px-8 xl:px-10 md:px-24">
          <DatetimeSelector
            customer={customer}
            inputs={inputs}
            setInputs={setInputs}
            nextPage={nextPage}
          />
        </div>
      );
    case PageType.Estimate:
      return (
        <div className="p-4 sm:py-8 sm:p-12">
          <Estimate
            customer={customer}
            inputs={inputs}
            setInputs={setInputs}
            restart={reset}
          />
        </div>
      );
    case PageType.Time:
      return (
        <div className="mt-4 px-4 sm:px-8 xl:px-10 md:px-24">
          <TimeSelector
            customer={customer}
            inputs={inputs}
            setInputs={setInputs}
            nextPage={nextPage}
          />
        </div>
      );
    default:
      return null;
  }
}
