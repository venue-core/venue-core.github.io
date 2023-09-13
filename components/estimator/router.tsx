"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Calculator from "public/images/calculator.svg";

import DatetimeSelector from "@/components/datetime/selector";
import { Customer } from "@/components/estimator/data";
import InputsPage from "@/components/estimator/inputs";
import Intro from "@/components/estimator/intro";
import PriceQuote from "@/components/estimator/price-quote";
import Progress from "@/components/estimator/progress";
import { Inputs, View } from "@/components/estimator/types";

const CALCULATOR = (
  <Image src={Calculator} alt="calculator" className="w-6 h-6" />
);

const INVOICE = (
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

export default function Router({ customer }: { customer: Customer }) {
  const [view, setView] = useState<View>(View.Intro);
  const [inputs, setInputs] = useState<Inputs>({});
  return (
    <div className="relative flex flex-col bg-white shadow-lg rounded-xl h-[calc(100vh-14rem)]">
      <div className="relative overflow-hidden min-h-[8rem] bg-blue-600 text-center rounded-t-xl">
        <Progress
          view={view}
          setView={(p) => {
            setView(p);
            window.scrollTo({ top: 0, left: 0 });
          }}
        />
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
          {view !== View.Quote ? CALCULATOR : INVOICE}
        </span>
        {/*<!-- End Icon -->*/}
      </div>

      <div className="h-full pb-4 overflow-y-scroll">
        <PageView
          customer={customer}
          inputs={inputs}
          setInputs={setInputs}
          page={view}
          setPage={setView}
        />
      </div>
    </div>
  );
}

function PageView({
  customer,
  inputs,
  setInputs,
  page,
  setPage,
}: {
  customer: Customer;
  inputs: Inputs;
  setInputs: (i: Inputs) => void;
  page: View;
  setPage: (p: View) => void;
}) {
  const ref = useRef(null);
  let node: React.ReactNode;
  switch (page) {
    case View.Intro:
      node = (
        <Intro
          customer={customer}
          next={() => {
            (ref.current as any).scrollIntoView({ behavior: 'smooth' })
            setPage(View.Calendar);
          }}
        />
      );
      break;
    case View.Calendar:
      node = (
        <div className="md:px-16">
          <DatetimeSelector
            inputs={inputs}
            setInputs={setInputs}
            goNext={() => {
              (ref.current as any).scrollIntoView({ behavior: 'smooth' })
              setPage(View.Inputs);
            }}
          />
        </div>
      );
      break;
    case View.Inputs:
      node = (
        <div className="p-8">
          <InputsPage
            customer={customer}
            inputs={inputs}
            setInputs={setInputs}
            goNext={() => {
              (ref.current as any).scrollIntoView({ behavior: 'smooth' })
              setPage(View.Quote);
            }}
          />
        </div>
      );
      break;
    case View.Quote:
      node = (
        <PriceQuote
          customer={customer}
          inputs={inputs}
          restart={() => {
            (ref.current as any).scrollIntoView({ behavior: 'smooth' })
            setPage(View.Intro);
          }}
        />
      );
      break;
  }
  return <>
    <div ref={ref} />
    {node}
  </>
}
