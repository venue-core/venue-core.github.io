"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Analytics from "@/public/images/features/analytics.png";
import Calculator from "@/public/images/features/calculator.png";
import Invoices from "@/public/images/features/invoices.png";
import Scheduling from "@/public/images/features/scheduling.png";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

import { CustomerType, getCustomerType } from "@/components/utils/customer";

export default function Features() {
  return (
    <>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </>
  );
}

function Section1() {
  const search = useSearchParams();
  const customerType = getCustomerType(search);
  return (
    <section>
      <div className="relative max-w-7xl mx-auto">
        {/* Bg */}
        <div
          className="absolute inset-0 rounded-tr-[100px] bg-gradient-to-tr from-blue-600 to-blue-500 pointer-events-none -z-10"
          aria-hidden="true"
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-20">
            {/* Section content */}
            <div className="relative max-w-xl mx-auto md:max-w-none text-center md:text-left flex flex-col md:flex-row items-center justify-between">
              {/* Section header */}
              <div
                className="md:max-w-xl mb-12 md:mb-20 shrink-0 md:order-0"
                data-aos="fade-up"
              >
                <h2
                  className="h2 text-white mb-4"
                  data-aos="fade-up"
                  data-aos-anchor="[data-aos-id-3]"
                  data-aos-delay="100"
                >
                  Automated scheduling and intake
                </h2>
                <div
                  className="text-lg text-blue-50 mb-4"
                  data-aos="fade-up"
                  data-aos-anchor="[data-aos-id-3]"
                  data-aos-delay="200"
                >
                  •{" "}
                  {customerType === CustomerType.Wedding
                    ? "Show available tour times online and allow potential leads to book a tour through your website."
                    : "Connect interested clients with your sales team via our self-serve booking functionality"}
                </div>
                <div
                  className="text-lg text-blue-50 mb-4"
                  data-aos="fade-up"
                  data-aos-anchor="[data-aos-id-3]"
                  data-aos-delay="300"
                >
                  • Improve lead quality by capturing essential details like
                  budget from the get-go with our customizable intake form.
                </div>
              </div>

              {/* Image */}
              <div
                className="flex justify-center mb-6"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="relative">
                  <Image src={Scheduling} width={400} alt="Scheduling" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Section2() {
  const search = useSearchParams();
  const customerType = getCustomerType(search);
  return (
    <section data-aos-id-2>
      <div className="relative max-w-7xl mx-auto">
        {/* Bg */}
        <div
          className="absolute inset-0 rounded-tl-[100px] mb-24 md:mb-0 bg-gradient-to-b from-slate-100 pointer-events-none -z-10"
          aria-hidden="true"
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-20">
            {/* Section content */}
            <div className="relative max-w-xl mx-auto md:max-w-none text-center md:text-left flex flex-col md:flex-row items-center justify-end">
              {/* Content */}
              <div className="w-[512px] max-w-full shrink-0 md:order-1">
                {/* Copy */}
                <h2
                  className="h2 mb-4"
                  data-aos="fade-up"
                  data-aos-anchor="[data-aos-id-3]"
                  data-aos-delay="100"
                >
                  Configurable cost calculator
                </h2>
                <div
                  className="text-lg text-slate-500 mb-4"
                  data-aos="fade-up"
                  data-aos-anchor="[data-aos-id-3]"
                  data-aos-delay="200"
                >
                  • Give your customers an easy-to-use, personalized cost
                  estimator for{" "}
                  {customerType === CustomerType.Wedding
                    ? "your event venue"
                    : "their event"}
                  . Simplify and speed up your pricing process to win more
                  deals.
                </div>
                <div
                  className="text-lg text-slate-500 mb-8"
                  data-aos="fade-up"
                  data-aos-anchor="[data-aos-id-3]"
                  data-aos-delay="300"
                >
                  •{" "}
                  {customerType === CustomerType.Wedding
                    ? "Only show tours to couples who match your venue's budget, avoiding mismatches and saving time."
                    : "Avoid costly consultations for clients with budgets who do not match your business's services."}
                </div>
                <div
                  className="max-w-xs mx-auto sm:max-w-none mb-8"
                  data-aos="fade-up"
                  data-aos-anchor="[data-aos-id-2]"
                  data-aos-delay="300"
                >
                  <Link
                    className="btn-sm inline-flex items-center text-blue-50 bg-blue-600 hover:bg-blue-500 group shadow-sm"
                    href="/demo"
                  >
                    View Demo
                    <ArrowRightIcon className="h-4 stroke-2 tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-2" />
                  </Link>
                </div>
              </div>

              {/* Image */}
              <div className="w-full max-w-sm md:max-w-none md:mr-8 mt-8 md:mt-0">
                <div className="relative mx-auto mb-12">
                  <Image
                    src={Calculator}
                    className="md:max-w-none"
                    height={696}
                    alt="Calculator"
                    data-aos="fade-up"
                    data-aos-anchor="[data-aos-id-2]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Section3() {
  const search = useSearchParams();
  const customerType = getCustomerType(search);
  return (
    <section>
      <div className="relative max-w-7xl mx-auto">
        <div
          className="absolute inset-0 rounded-tr-[100px] bg-gradient-to-tr from-blue-600 to-blue-500 pointer-events-none -z-10"
          aria-hidden="true"
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-20">
            {/* Section content */}
            <div className="relative max-w-xl mx-auto md:max-w-none text-center md:text-left flex flex-col md:flex-row items-center justify-between">
              {/* Section header */}
              <div
                className="md:max-w-xl mb-12 md:mb-20 shrink-0 md:order-0"
                data-aos="fade-up"
              >
                <h2
                  className="h2 text-white mb-4"
                  data-aos="fade-up"
                  data-aos-anchor="[data-aos-id-3]"
                  data-aos-delay="100"
                >
                  Invoice and payment management
                </h2>
                <div
                  className="text-lg text-blue-50 mb-4"
                  data-aos="fade-up"
                  data-aos-anchor="[data-aos-id-3]"
                  data-aos-delay="200"
                >
                  • Instantly craft invoices from customer choices. Input any
                  required adjustments, including discretionary discount
                  options.
                </div>
                <div
                  className="text-lg text-blue-50 mb-4"
                  data-aos="fade-up"
                  data-aos-anchor="[data-aos-id-3]"
                  data-aos-delay="300"
                >
                  • Automate email and text message reminders for timely payment
                  collections, eliminating time and energy spent chasing down
                  {customerType === CustomerType.Wedding
                    ? "tardy brides and grooms"
                    : "late payments"}
                  .
                </div>
              </div>

              {/* Image */}
              <div
                className="flex justify-center mb-6"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="relative">
                  <Image
                    src={Invoices}
                    width={500}
                    height={283}
                    alt="Invoices"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Section4() {
  return (
    <section data-aos-id-4>
      <div className="relative max-w-7xl mx-auto">
        {/* Bg */}
        <div
          className="absolute inset-0 rounded-tl-[100px] mb-24 md:mb-0 bg-gradient-to-b from-slate-100 pointer-events-none -z-10"
          aria-hidden="true"
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-20">
            {/* Section content */}
            <div className="relative max-w-xl mx-auto md:max-w-none text-center md:text-left flex flex-col md:flex-row items-center justify-end">
              {/* Content */}
              <div className="w-[512px] max-w-full shrink-0 md:order-1">
                {/* Copy */}
                <h2
                  className="h2 mb-4"
                  data-aos="fade-up"
                  data-aos-anchor="[data-aos-id-3]"
                  data-aos-delay="100"
                >
                  Analytics
                </h2>
                <div
                  className="text-lg text-slate-500 mb-4"
                  data-aos="fade-up"
                  data-aos-anchor="[data-aos-id-3]"
                  data-aos-delay="200"
                >
                  • Predict cash flow from upcoming events and expected
                  payments.
                </div>
                <div
                  className="text-lg text-slate-500 mb-8"
                  data-aos="fade-up"
                  data-aos-anchor="[data-aos-id-3]"
                  data-aos-delay="300"
                >
                  • Quickly see top-selling packages, add-ons, and menu choices.
                  Stay updated with the latest customer preferences.
                </div>
              </div>

              {/* Image */}
              <div className="w-full max-w-sm md:max-w-none md:mr-8 mt-8 md:mt-0">
                <div className="relative -mx-8 md:mx-0 pb-8">
                  <Image
                    src={Analytics}
                    className="md:max-w-none"
                    width={496}
                    height={496}
                    alt="Analytics"
                    data-aos="fade-up"
                    data-aos-anchor="[data-aos-id-4]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
