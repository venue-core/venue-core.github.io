"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Illustration from "@/public/images/pricing-illustration.svg";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Pricing() {
  return (
    <section className="relative">
      {/*<div*/}
      {/*  className="hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 -mb-24 pointer-events-none -z-10"*/}
      {/*  aria-hidden="true"*/}
      {/*>*/}
      {/*  <Image*/}
      {/*    src={Illustration}*/}
      {/*    className="max-w-none"*/}
      {/*    alt="Pricing Illustration"*/}
      {/*  />*/}
      {/*</div>*/}

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-4 pb-12 md:pt-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Pricing</h2>
            <p className="text-xl text-slate-500">
              Simple pricing, no credit card required.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 text-center">
            <div className="col-span-1 mx-auto">
              <div className="min-w-[24rem] max-w-sm p-6 bg-gray-100 rounded-lg shadow">
                <div className="uppercase font-bold text-blue-600 tracking-wider">Credit Card</div>
                <div className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                  4.0%
                </div>
                <div>per transaction</div>
              </div>
            </div>
            <div className="col-span-1 mx-auto">
              <div className="min-w-[24rem] max-w-sm p-6 bg-gray-100 rounded-lg shadow">
                <div className="uppercase font-bold text-blue-600 tracking-wider">ACH</div>
                <div className="mb-2 text-4xl font-bold tracking-tight text-gray-900">0.5%</div>
                <div>per transaction</div>
              </div>
            </div>
          </div>

          {/* Pricing tables */}
          {/*<Table />*/}
        </div>
      </div>
    </section>
  );
}

function Table() {
  const [annual, setAnnual] = useState<boolean>(true);
  return (
    <div className="grid md:grid-cols-6">
      {/* Pricing toggle */}
      <div className="flex flex-col justify-center p-4 md:px-6 bg-blue-50 md:col-span-3">
        <div className="flex justify-center md:justify-start items-center space-x-4">
          <div className="text-sm text-slate-500 font-medium min-w-[6rem] md:min-w-0 text-right">
            Monthly
          </div>
          <div className="form-switch shrink-0">
            <input
              type="checkbox"
              id="toggle"
              className="sr-only"
              checked={annual}
              onChange={() => setAnnual(!annual)}
            />
            <label className="bg-blue-900" htmlFor="toggle">
              <span className="bg-blue-50" aria-hidden="true" />
              <span className="sr-only">Pay annually</span>
            </label>
          </div>
          <div className="text-sm text-slate-500 font-medium min-w-[6rem]">
            Yearly <span className="text-emerald-500">(-20%)</span>
          </div>
        </div>
      </div>
      {/* Lite price */}
      <div className="flex flex-col justify-center p-4 md:px-6 bg-blue-50 md:border-l border-slate-300 order-1 md:order-none md:text-center mt-6 md:mt-0">
        <div className="text-lg font-bold text-blue-600 mb-0.5">Lite</div>
        <div>
          <span className="text-xl font-semibold">$</span>
          <span className="text-2xl font-semibold">
                  {annual ? "20" : "24"}
                </span>
          <span className="text-sm text-slate-500 font-medium">/mo</span>
        </div>
      </div>
      {/* Business price */}
      <div className="flex flex-col justify-center p-4 md:px-6 bg-blue-50 md:border-l border-slate-300 order-2 md:order-none md:text-center mt-6 md:mt-0">
        <div className="text-lg font-bold text-blue-600 mb-0.5">
          Business
        </div>
        <div>
          <span className="text-xl font-semibold">$</span>
          <span className="text-2xl font-semibold">
                  {annual ? "35" : "42"}
                </span>
          <span className="text-sm text-slate-500 font-medium">/mo</span>
        </div>
      </div>
      {/* Enterprise price */}
      <div className="flex flex-col justify-center p-4 md:px-6 bg-blue-50 md:border-l border-slate-300 order-3 md:order-none md:text-center mt-6 md:mt-0">
        <div className="text-lg font-bold text-blue-600 mb-0.5">
          Enterprise
        </div>
        <div>
          <span className="text-xl font-semibold">$</span>
          <span className="text-2xl font-semibold">
                  {annual ? "100" : "120"}
                </span>
          <span className="text-sm text-slate-500 font-medium">/mo</span>
        </div>
      </div>
      {/*/!* Usage label *!/*/}
      {/*<div className="hidden md:flex flex-col justify-center px-4 md:px-6 py-2 bg-blue-500 bg-opacity-25 md:col-span-3">*/}
      {/*  <span className="text-xs uppercase font-semibold text-slate-500">Usage</span>*/}
      {/*</div>*/}
      {/*<div className="flex flex-col justify-center px-4 md:px-6 py-2 bg-blue-500 bg-opacity-25 md:border-l border-slate-300 order-1 md:order-none">*/}
      {/*  <span className="md:hidden text-xs uppercase font-semibold text-slate-500">Usage</span>*/}
      {/*</div>*/}
      {/*<div className="flex flex-col justify-center px-4 md:px-6 py-2 bg-blue-500 bg-opacity-25 md:border-l border-slate-300 order-2 md:order-none">*/}
      {/*  <span className="md:hidden text-xs uppercase font-semibold text-slate-500">Usage</span>*/}
      {/*</div>*/}
      {/*<div className="flex flex-col justify-center px-4 md:px-6 py-2 bg-blue-500 bg-opacity-25 md:border-l border-slate-300 order-3 md:order-none">*/}
      {/*  <span className="md:hidden text-xs uppercase font-semibold text-slate-500">Usage</span>*/}
      {/*</div>*/}
      {/* Admins & Members */}
      {/*<div className="hidden md:flex flex-col justify-center p-4 md:px-6 bg-blue-50 md:col-span-3">*/}
      {/*  <div className="text-slate-800">Admins &amp; Members</div>*/}
      {/*</div>*/}
      {/*<div className="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-blue-50 md:border-l border-slate-300 order-1 md:order-none">*/}
      {/*  <div className="md:hidden text-slate-800">Admins &amp; Members</div>*/}
      {/*  <div className="text-sm font-medium text-slate-800 text-center">4</div>*/}
      {/*</div>*/}
      {/*<div className="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-blue-50 md:border-l border-slate-300 order-2 md:order-none">*/}
      {/*  <div className="md:hidden text-slate-800">Admins &amp; Members</div>*/}
      {/*  <div className="text-sm font-medium text-slate-800 text-center">12</div>*/}
      {/*</div>*/}
      {/*<div className="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-blue-50 md:border-l border-slate-300 order-3 md:order-none">*/}
      {/*  <div className="md:hidden text-slate-800">Admins &amp; Members</div>*/}
      {/*  <div className="text-sm font-medium text-slate-800 text-center">Unlimited</div>*/}
      {/*</div>*/}
      {/* File Storage */}
      {/*<div className="hidden md:flex flex-col justify-center p-4 md:px-6 bg-blue-50 bg-opacity-70 md:col-span-3">*/}
      {/*  <div className="text-slate-800">File Storage</div>*/}
      {/*</div>*/}
      {/*<div className="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-blue-50 bg-opacity-70 md:border-l border-slate-300 order-1 md:order-none">*/}
      {/*  <div className="md:hidden text-slate-800">File Storage</div>*/}
      {/*  <div className="text-sm font-medium text-slate-800 text-center">10GB</div>*/}
      {/*</div>*/}
      {/*<div className="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-blue-50 bg-opacity-70 md:border-l border-slate-300 order-2 md:order-none">*/}
      {/*  <div className="md:hidden text-slate-800">File Storage</div>*/}
      {/*  <div className="text-sm font-medium text-slate-800 text-center">50GB</div>*/}
      {/*</div>*/}
      {/*<div className="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-blue-50 bg-opacity-70 md:border-l border-slate-300 order-3 md:order-none">*/}
      {/*  <div className="md:hidden text-slate-800">File Storage</div>*/}
      {/*  <div className="text-sm font-medium text-slate-800 text-center">Unlimited</div>*/}
      {/*</div>*/}
      {/* Active Users */}
      {/*<div className="hidden md:flex flex-col justify-center p-4 md:px-6 bg-blue-50 md:col-span-3">*/}
      {/*  <div className="text-slate-800">Active Users</div>*/}
      {/*</div>*/}
      {/*<div className="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-blue-50 md:border-l border-slate-300 order-1 md:order-none">*/}
      {/*  <div className="md:hidden text-slate-800">Active Users</div>*/}
      {/*  <div className="text-sm font-medium text-slate-800 text-center">500</div>*/}
      {/*</div>*/}
      {/*<div className="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-blue-50 md:border-l border-slate-300 order-2 md:order-none">*/}
      {/*  <div className="md:hidden text-slate-800">Active Users</div>*/}
      {/*  <div className="text-sm font-medium text-slate-800 text-center">1500</div>*/}
      {/*</div>*/}
      {/*<div className="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-blue-50 md:border-l border-slate-300 order-3 md:order-none">*/}
      {/*  <div className="md:hidden text-slate-800">Active Users</div>*/}
      {/*  <div className="text-sm font-medium text-slate-800 text-center">Unlimited</div>*/}
      {/*</div>*/}
      {/* Features label */}
      <div className="hidden md:flex flex-col justify-center px-4 md:px-6 py-2 bg-blue-500 bg-opacity-25 md:col-span-3">
              <span className="text-xs uppercase font-semibold text-slate-500">
                Features
              </span>
      </div>
      <div className="flex flex-col justify-center px-4 md:px-6 py-2 bg-blue-500 bg-opacity-25 md:border-l border-slate-300 order-1 md:order-none">
              <span className="md:hidden text-xs uppercase font-semibold text-slate-500">
                Features
              </span>
      </div>
      <div className="flex flex-col justify-center px-4 md:px-6 py-2 bg-blue-500 bg-opacity-25 md:border-l border-slate-300 order-2 md:order-none">
              <span className="md:hidden text-xs uppercase font-semibold text-slate-500">
                Features
              </span>
      </div>
      <div className="flex flex-col justify-center px-4 md:px-6 py-2 bg-blue-500 bg-opacity-25 md:border-l border-slate-300 order-3 md:order-none">
              <span className="md:hidden text-xs uppercase font-semibold text-slate-500">
                Features
              </span>
      </div>
      {/* Configurable Cost Calculator */}
      <div className="hidden md:flex flex-col justify-center p-4 md:px-6 bg-blue-50 md:col-span-3">
        <div className="text-slate-800">Configurable Cost Calculator</div>
      </div>
      <div className="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-blue-50 md:border-l border-slate-300 order-1 md:order-none">
        <div className="md:hidden text-slate-800">
          Configurable Cost Calculator
        </div>
        <div className="text-sm font-medium text-slate-800 text-center">
          <svg
            className="inline-flex fill-emerald-400"
            width="12"
            height="9"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"
              fill="#34D399"
              fillRule="nonzero"
            />
          </svg>
        </div>
      </div>
      <div className="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-blue-50 md:border-l border-slate-300 order-2 md:order-none">
        <div className="md:hidden text-slate-800">
          Configurable Cost Calculator
        </div>
        <div className="text-sm font-medium text-slate-800 text-center">
          <svg
            className="inline-flex fill-emerald-400"
            width="12"
            height="9"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"
              fill="#34D399"
              fillRule="nonzero"
            />
          </svg>
        </div>
      </div>
      <div className="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-blue-50 md:border-l border-slate-300 order-3 md:order-none">
        <div className="md:hidden text-slate-800">
          Configurable Cost Calculator
        </div>
        <div className="text-sm font-medium text-slate-800 text-center">
          <svg
            className="inline-flex fill-emerald-400"
            width="12"
            height="9"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"
              fill="#34D399"
              fillRule="nonzero"
            />
          </svg>
        </div>
      </div>
      {/* Scheduling */}
      <div className="hidden md:flex flex-col justify-center p-4 md:px-6 bg-blue-50 bg-opacity-70 md:col-span-3">
        <div className="text-slate-800">Scheduling</div>
      </div>
      <div className="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-blue-50 bg-opacity-70 md:border-l border-slate-300 order-1 md:order-none">
        <div className="md:hidden text-slate-800">Scheduling</div>
        <div className="text-sm font-medium text-slate-800 text-center">
          <svg
            className="inline-flex fill-slate-500"
            width="14"
            height="2"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14 0v2H0V0z" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      <div className="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-blue-50 bg-opacity-70 md:border-l border-slate-300 order-2 md:order-none">
        <div className="md:hidden text-slate-800">Scheduling</div>
        <div className="text-sm font-medium text-slate-800 text-center">
          <svg
            className="inline-flex fill-emerald-400"
            width="12"
            height="9"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"
              fill="#34D399"
              fillRule="nonzero"
            />
          </svg>
        </div>
      </div>
      <div className="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-blue-50 bg-opacity-70 md:border-l border-slate-300 order-3 md:order-none">
        <div className="md:hidden text-slate-800">Scheduling</div>
        <div className="text-sm font-medium text-slate-800 text-center">
          <svg
            className="inline-flex fill-emerald-400"
            width="12"
            height="9"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"
              fill="#34D399"
              fillRule="nonzero"
            />
          </svg>
        </div>
      </div>
      {/* Invoice Creation */}
      <div className="hidden md:flex flex-col justify-center p-4 md:px-6 bg-blue-50 bg-opacity-70 md:col-span-3">
        <div className="text-slate-800">Invoice Creation</div>
      </div>
      <div className="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-blue-50 bg-opacity-70 md:border-l border-slate-300 order-1 md:order-none">
        <div className="md:hidden text-slate-800">Invoice Creation</div>
        <div className="text-sm font-medium text-slate-800 text-center">
          <svg
            className="inline-flex fill-slate-500"
            width="14"
            height="2"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14 0v2H0V0z" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      <div className="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-blue-50 bg-opacity-70 md:border-l border-slate-300 order-2 md:order-none">
        <div className="md:hidden text-slate-800">Invoice Creation</div>
        <div className="text-sm font-medium text-slate-800 text-center">
          <svg
            className="inline-flex fill-emerald-400"
            width="12"
            height="9"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"
              fill="#34D399"
              fillRule="nonzero"
            />
          </svg>
        </div>
      </div>
      <div className="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-blue-50 bg-opacity-70 md:border-l border-slate-300 order-3 md:order-none">
        <div className="md:hidden text-slate-800">Invoice Creation</div>
        <div className="text-sm font-medium text-slate-800 text-center">
          <svg
            className="inline-flex fill-emerald-400"
            width="12"
            height="9"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"
              fill="#34D399"
              fillRule="nonzero"
            />
          </svg>
        </div>
      </div>
      {/* Payment Processing (3.4%) */}
      <div className="hidden md:flex flex-col justify-center p-4 md:px-6 bg-blue-50 bg-opacity-70 md:col-span-3">
        <div className="text-slate-800">
          Payment Processing (3.4% Credit Card, 0.5% ACH)
        </div>
      </div>
      <div className="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-blue-50 bg-opacity-70 md:border-l border-slate-300 order-1 md:order-none">
        <div className="md:hidden text-slate-800">
          Payment Processing (3.4%)
        </div>
        <div className="text-sm font-medium text-slate-800 text-center">
          <svg
            className="inline-flex fill-slate-500"
            width="14"
            height="2"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14 0v2H0V0z" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      <div className="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-blue-50 bg-opacity-70 md:border-l border-slate-300 order-2 md:order-none">
        <div className="md:hidden text-slate-800">
          Payment Processing (3.4% Credit Card, 0.5% ACH)
        </div>
        <div className="text-sm font-medium text-slate-800 text-center">
          <svg
            className="inline-flex fill-emerald-400"
            width="12"
            height="9"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"
              fill="#34D399"
              fillRule="nonzero"
            />
          </svg>
        </div>
      </div>
      <div className="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-blue-50 bg-opacity-70 md:border-l border-slate-300 order-3 md:order-none">
        <div className="md:hidden text-slate-800">
          Payment Processing (3.4% Credit Card, 0.5% ACH)
        </div>
        <div className="text-sm font-medium text-slate-800 text-center">
          <svg
            className="inline-flex fill-emerald-400"
            width="12"
            height="9"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"
              fill="#34D399"
              fillRule="nonzero"
            />
          </svg>
        </div>
      </div>
      {/* Automated email and text message reminders */}
      <div className="hidden md:flex flex-col justify-center p-4 md:px-6 bg-blue-50 bg-opacity-70 md:col-span-3">
        <div className="text-slate-800">
          Automated email and text message reminders
        </div>
      </div>
      <div className="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-blue-50 bg-opacity-70 md:border-l border-slate-300 order-1 md:order-none">
        <div className="md:hidden text-slate-800">
          Automated email and text message reminders
        </div>
        <div className="text-sm font-medium text-slate-800 text-center">
          <svg
            className="inline-flex fill-slate-500"
            width="14"
            height="2"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14 0v2H0V0z" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      <div className="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-blue-50 bg-opacity-70 md:border-l border-slate-300 order-2 md:order-none">
        <div className="md:hidden text-slate-800">
          Automated email and text message reminders
        </div>
        <div className="text-sm font-medium text-slate-800 text-center">
          <svg
            className="inline-flex fill-emerald-400"
            width="12"
            height="9"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"
              fill="#34D399"
              fillRule="nonzero"
            />
          </svg>
        </div>
      </div>
      <div className="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-blue-50 bg-opacity-70 md:border-l border-slate-300 order-3 md:order-none">
        <div className="md:hidden text-slate-800">
          Automated email and text message reminders
        </div>
        <div className="text-sm font-medium text-slate-800 text-center">
          <svg
            className="inline-flex fill-emerald-400"
            width="12"
            height="9"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"
              fill="#34D399"
              fillRule="nonzero"
            />
          </svg>
        </div>
      </div>
      {/* Cash flow forecasting */}
      <div className="hidden md:flex flex-col justify-center p-4 md:px-6 bg-blue-50 md:col-span-3">
        <div className="text-slate-800">Cash flow forecasting</div>
      </div>
      <div className="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-blue-50 md:border-l border-slate-300 order-1 md:order-none">
        <div className="md:hidden text-slate-800">
          Cash flow forecasting
        </div>
        <div className="text-sm font-medium text-slate-800 text-center">
          <svg
            className="inline-flex fill-slate-500"
            width="14"
            height="2"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14 0v2H0V0z" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      <div className="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-blue-50 md:border-l border-slate-300 order-2 md:order-none">
        <div className="md:hidden text-slate-800">
          Cash flow forecasting
        </div>
        <div className="text-sm font-medium text-slate-800 text-center">
          <svg
            className="inline-flex fill-slate-500"
            width="14"
            height="2"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14 0v2H0V0z" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      <div className="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-blue-50 md:border-l border-slate-300 order-3 md:order-none">
        <div className="md:hidden text-slate-800">
          Cash flow forecasting
        </div>
        <div className="text-sm font-medium text-slate-800 text-center">
          <svg
            className="inline-flex fill-emerald-400"
            width="12"
            height="9"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"
              fill="#34D399"
              fillRule="nonzero"
            />
          </svg>
        </div>
      </div>
      {/* Onboarding support */}
      <div className="hidden md:flex flex-col justify-center p-4 md:px-6 bg-blue-50 md:col-span-3">
        <div className="text-slate-800">Onboarding support</div>
      </div>
      <div className="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-blue-50 md:border-l border-slate-300 order-1 md:order-none">
        <div className="md:hidden text-slate-800">Onboarding support</div>
        <div className="text-sm font-medium text-slate-800 text-center">
          <svg
            className="inline-flex fill-slate-500"
            width="14"
            height="2"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14 0v2H0V0z" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      <div className="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-blue-50 md:border-l border-slate-300 order-2 md:order-none">
        <div className="md:hidden text-slate-800">Onboarding support</div>
        <div className="text-sm font-medium text-slate-800 text-center">
          <svg
            className="inline-flex fill-slate-500"
            width="14"
            height="2"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14 0v2H0V0z" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      <div className="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-blue-50 md:border-l border-slate-300 order-3 md:order-none">
        <div className="md:hidden text-slate-800">Onboarding support</div>
        <div className="text-sm font-medium text-slate-800 text-center">
          <svg
            className="inline-flex fill-emerald-400"
            width="12"
            height="9"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"
              fill="#34D399"
              fillRule="nonzero"
            />
          </svg>
        </div>
      </div>
      {/* CTA row */}
      <div className="hidden md:flex flex-col justify-center px-4 md:px-6 py-2 bg-blue-500 bg-opacity-25 md:col-span-3" />
      <div className="flex flex-col justify-center p-4 bg-blue-500 bg-opacity-25 md:border-l border-slate-300 order-1 md:order-none">
        <Link
          className="btn-sm text-white bg-blue-600 hover:bg-blue-500 w-full shadow-sm group whitespace-nowrap"
          href="/waitlist"
        >
          Free Trial{" "}
          <ArrowRightIcon className="text-white hidden lg:block h-4 stroke-2 tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-2" />
        </Link>
      </div>
      <div className="flex flex-col justify-center p-4 bg-blue-500 bg-opacity-25 md:border-l border-slate-300 order-2 md:order-none">
        <Link
          className="btn-sm text-white bg-blue-600 hover:bg-blue-500 w-full shadow-sm group whitespace-nowrap"
          href="/waitlist"
        >
          Free Trial{" "}
          <ArrowRightIcon className="text-white hidden lg:block h-4 stroke-2 tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-2" />
        </Link>
      </div>
      <div className="flex flex-col justify-center p-4 bg-blue-500 bg-opacity-25 md:border-l border-slate-300 order-3 md:order-none">
        <Link
          className="btn-sm text-white bg-blue-600 hover:bg-blue-500 w-full shadow-sm group whitespace-nowrap"
          href="/waitlist"
        >
          Free Trial{" "}
          <ArrowRightIcon className="text-white hidden lg:block h-4 stroke-2 tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-2" />
        </Link>
      </div>
    </div>
  );
}