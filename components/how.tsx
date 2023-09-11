"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
// import FeaturesBg01 from "@/public/images/features-home-bg-01.png";
// import FeaturesElement01 from "@/public/images/features-home-element-01.png";
// import FeaturesElement02 from "@/public/images/features-home-element-02.png";
// import FeaturesElement03 from "@/public/images/features-home-element-03.png";
import Insights from "@/public/images/how-it-works/insights.png";
import Launch from "@/public/images/how-it-works/launch.png";
import Setup from "@/public/images/how-it-works/setup.png";
import { Transition } from "@headlessui/react";

// const DEFAULT_IMAGES = [
//   <Image
//     key="1"
//     className="md:max-w-none mx-auto rounded"
//     src={FeaturesBg01}
//     width={500}
//     height={375}
//     alt="Features bg"
//   />,
//   <Image
//     key="2"
//     className="md:max-w-none absolute w-full left-0 transform animate-float"
//     src={FeaturesElement01}
//     width={500}
//     height={147}
//     alt="Element 01"
//     style={{ top: "22%" }}
//   />,
//   <Image
//     key="3"
//     className="md:max-w-none absolute w-full left-0 transform animate-float animation-delay-500"
//     src={FeaturesElement02}
//     width={500}
//     height={158}
//     alt="Element 02"
//     style={{ top: "39%" }}
//   />,
//   <Image
//     key="4"
//     className="md:max-w-none absolute w-full left-0 bottom-0 transform animate-float animation-delay-1000"
//     src={FeaturesElement03}
//     width={500}
//     height={167}
//     alt="Element 03"
//     style={{ top: "77%" }}
//   />,
// ] as const;

const SOLUTIONS = [
  {
    id: 1,
    title: "Setup",
    description:
      "Onboard on our platform and work with our AI experts to capture your personality and define your engagement and monetization objectives.",
    icon: (
      <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
    ),
    images: [
      <Image
        key="1"
        className="md:max-w-none mx-auto rounded"
        src={Setup}
        width={500}
        height={375}
        alt="Setup"
      />,
    ],
  },
  {
    id: 2,
    title: "Launch",
    description:
      "Promote your AI assistant with a sign up link where fans can easily subscribe for monthly chat privileges.",
    icon: (
      <path
        d="M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z"
        fillRule="nonzero"
      />
    ),
    images: [
      <Image
        key="1"
        className="md:max-w-none mx-auto rounded"
        src={Launch}
        width={200}
        height={375}
        alt="Launch"
      />,
    ],
  },
  {
    id: 3,
    title: "Insights",
    description:
      "Review conversations and analytics that give you an understanding of your audience's health, interests, and revenue sources.",
    icon: (
      <path
        d="M11.334 8.06a.5.5 0 00-.421-.237 6.023 6.023 0 01-5.905-6c0-.41.042-.82.125-1.221a.5.5 0 00-.614-.586 6 6 0 106.832 8.529.5.5 0 00-.017-.485z"
        fill="#191919"
        fillRule="nonzero"
      />
    ),
    images: [
      <Image
        key="1"
        className="md:max-w-none mx-auto rounded"
        src={Insights}
        width={500}
        height={375}
        alt="Insights"
      />,
    ],
  },
] as const;

export default function How() {
  const [tab, setTab] = useState<number>(1);
  const tabs = useRef<HTMLDivElement>(null);

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement)
      tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`;
  };

  useEffect(() => {
    heightFix();
  }, []);

  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 bg-gray-100 pointer-events-none mb-16"
        aria-hidden="true"
      />
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="uppercase mb-4 text-xl font-bold text-blue-600 tracking-wider">
              How it works
            </div>
            <h2 className="h2 mb-4">Engagement and monetization made easy</h2>
            <p className="text-xl text-gray-600">
              Set up your own personal AI assistant community manager to engage
              and convert your fan base into paying customers.
            </p>
          </div>

          {/* Top image */}
          {/*<div className="pb-12 md:pb-16">*/}
          {/*  <Image src={TopImage} width={1104} alt="Features top" />*/}
          {/*</div>*/}

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">
            {/* Content */}
            <div
              // className="mx-auto md:w-full md:max-w-none max-w-xl col-span-6 col-start-4"
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-6 md:mt-6"
              data-aos="fade-right"
            >
              {/*<div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">*/}
              {/*  <h3 className="h3 mb-3">Powerful suite of tools</h3>*/}
              {/*  <p className="text-xl text-gray-600">*/}
              {/*    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa.*/}
              {/*  </p>*/}
              {/*</div>*/}
              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">
                {SOLUTIONS.map((s) => (
                  <button
                    key={s.id}
                    className={`text-left flex items-center justify-between text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 w-full ${
                      tab !== s.id
                        ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                        : "bg-gray-200 border-transparent"
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      setTab(s.id);
                    }}
                  >
                    <div>
                      <div className="font-bold leading-snug tracking-tight mb-1">
                        {s.title}
                      </div>
                      <div className="text-sm text-gray-600">
                        {s.description}
                      </div>
                    </div>
                    <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow shrink-0 ml-3">
                      <svg
                        className="w-3 h-3 fill-current"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {s.icon}
                      </svg>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Tabs items */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-6 my-8 md:mb-0 md:order-1">
              <div className="transition-all">
                <div
                  className="relative flex flex-col text-center lg:text-right"
                  data-aos="zoom-y-out"
                  ref={tabs}
                >
                  {SOLUTIONS.map((s) => (
                    <Transition
                      key={s.id}
                      show={tab === s.id}
                      className="w-full"
                      enter="transition ease-in-out duration-700 transform order-first"
                      enterFrom="opacity-0 translate-y-16"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in-out duration-300 transform absolute"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 -translate-y-16"
                      beforeEnter={() => heightFix()}
                      unmount={false}
                    >
                      <div className="relative">{s.images}</div>
                    </Transition>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
