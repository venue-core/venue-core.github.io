import Image from "next/image";

import Analytics from '@/public/images/features/analytics.png'
import Invoices from '@/public/images/features/invoices.png'

export default function Features() {
  return (
    <>
      <Section1 />
      <div className="h-8 md:h-16" />
      <Section2 />
      <Section3 />
      <div className="h-8 md:h-16" />
      <Section4 />
    </>
  );
}

function Section1() {
  return (
    <section className="mt-12 md:mt-20" data-aos-id-3>
      <div className="relative max-w-7xl mx-auto">
        {/* Bg */}
        <div
          className="absolute inset-0 rounded-tl-[100px] mb-24 md:mb-0 bg-gradient-to-b from-slate-100 pointer-events-none -z-10"
          aria-hidden="true"
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pb-6 pt-12 md:pt-20">
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
                  Automate tour scheduling and gather intake data effortlessly
                </h2>
                <p
                  className="text-lg text-slate-500 mb-4"
                  data-aos="fade-up"
                  data-aos-anchor="[data-aos-id-3]"
                  data-aos-delay="200"
                >
                  • Show available tour times online and allow potential leads
                  to book a tour through your website.
                </p>
                <p
                  className="text-lg text-slate-500 mb-8"
                  data-aos="fade-up"
                  data-aos-anchor="[data-aos-id-3]"
                  data-aos-delay="300"
                >
                  • Improve lead quality by capturing essential details like
                  budget from the get-go with our customizable intake form.
                </p>
              </div>

              {/* Image */}
              <div className="w-full max-w-sm md:max-w-none md:mr-8 mt-8 md:mt-0">
                <div className="relative -mx-8 md:mx-0">
                  {/*<Image*/}
                  {/*  src={Features}*/}
                  {/*  className="md:max-w-none"*/}
                  {/*  width={496}*/}
                  {/*  height={496}*/}
                  {/*  alt="Features 03"*/}
                  {/*  data-aos="fade-up"*/}
                  {/*  data-aos-anchor="[data-aos-id-3]"*/}
                  {/*/>*/}
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
  return (
    <section>
      <div className="relative max-w-7xl mx-auto">
        {/* Bg */}
        <div
          className="absolute inset-0 rounded-tr-[100px] bg-gradient-to-tr from-blue-600 to-blue-500 pointer-events-none -z-10"
          aria-hidden="true"
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
            {/* Section content */}
            <div className="relative max-w-xl mx-auto md:max-w-none text-center md:text-left">
              {/* Section header */}
              <div className="md:max-w-3xl mb-12 md:mb-20" data-aos="fade-up">
                <h2
                  className="h2 text-white mb-4"
                  data-aos="fade-up"
                  data-aos-anchor="[data-aos-id-3]"
                  data-aos-delay="100"
                >
                  Configurable cost calculator
                </h2>
                <div
                  className="text-lg text-blue-50 mb-4"
                  data-aos="fade-up"
                  data-aos-anchor="[data-aos-id-3]"
                  data-aos-delay="200"
                >
                  • Give your customers an easy-to-use, personalized cost
                  estimator for your wedding venue. Simplify and speed up your
                  pricing process to win more deals.
                </div>
                <div
                  className="text-lg text-blue-50 mb-4"
                  data-aos="fade-up"
                  data-aos-anchor="[data-aos-id-3]"
                  data-aos-delay="300"
                >
                  • Only show tours to couples who match your venue's budget,
                  avoiding mismatches and saving time.
                </div>
                {/*  <h2 className="h2 text-white mb-4">*/}
                {/*    Configurable cost calculator:*/}
                {/*  </h2>*/}
                {/*  <p className="text-lg text-blue-200 mb-8">*/}
                {/*    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed*/}
                {/*    do eiusmod tempor incididunt ut labore et dolore magna aliqua.*/}
                {/*  </p>*/}
              </div>

              {/* Image */}
              <div
                className="flex justify-center mb-6"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="relative">
                  {/*<Image*/}
                  {/*  className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 pointer-events-none -z-10 max-w-none mix-blend-lighten"*/}
                  {/*  src={LogosIllustration}*/}
                  {/*  alt="Logos illustration"*/}
                  {/*  aria-hidden="true"*/}
                  {/*/>*/}
                  {/*<Image src={Logos} width={720} height={283} alt="Logos" />*/}
                </div>
              </div>

              {/* Items */}
              {/*<div*/}
              {/*  className="max-w-sm mx-auto grid gap-12 md:grid-cols-3 md:-mx-9 md:gap-0 items-start md:max-w-none text-left"*/}
              {/*  data-aos="fade-up"*/}
              {/*  data-aos-delay="200"*/}
              {/*>*/}
              {/*  /!* 1st item *!/*/}
              {/*  <div className="relative md:px-9 after:hidden md:after:block after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-px after:h-16 after:bg-blue-400 last:after:hidden">*/}
              {/*    <div className="mb-3">*/}
              {/*      <div className="flex items-center justify-center font-bold text-teal-600 bg-teal-200 h-11 w-11 rounded-full">*/}
              {/*        1*/}
              {/*      </div>*/}
              {/*    </div>*/}
              {/*    <h4 className="text-white text-xl font-bold mb-1">*/}
              {/*      Download the app*/}
              {/*    </h4>*/}
              {/*    <p className="text-blue-200">*/}
              {/*      Create cards that work exactly as you configured them. Make*/}
              {/*      real-time decisions on charges and spendings.*/}
              {/*    </p>*/}
              {/*  </div>*/}

              {/*  /!* 2nd item *!/*/}
              {/*  <div className="relative md:px-9 after:hidden md:after:block after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-px after:h-16 after:bg-blue-400 last:after:hidden">*/}
              {/*    <div className="mb-3">*/}
              {/*      <div className="flex items-center justify-center font-bold text-teal-600 bg-teal-200 h-11 w-11 rounded-full">*/}
              {/*        2*/}
              {/*      </div>*/}
              {/*    </div>*/}
              {/*    <h4 className="text-white text-xl font-bold mb-1">*/}
              {/*      Request your card*/}
              {/*    </h4>*/}
              {/*    <p className="text-blue-200">*/}
              {/*      Create cards that work exactly as you configured them. Make*/}
              {/*      real-time decisions on charges and spendings.*/}
              {/*    </p>*/}
              {/*  </div>*/}

              {/*  /!* 3rd item *!/*/}
              {/*  <div className="relative md:px-9 after:hidden md:after:block after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-px after:h-16 after:bg-blue-400 last:after:hidden">*/}
              {/*    <div className="mb-3">*/}
              {/*      <div className="flex items-center justify-center font-bold text-teal-600 bg-teal-200 h-11 w-11 rounded-full">*/}
              {/*        3*/}
              {/*      </div>*/}
              {/*    </div>*/}
              {/*    <h4 className="text-white text-xl font-bold mb-1">*/}
              {/*      Connect all your account*/}
              {/*    </h4>*/}
              {/*    <p className="text-blue-200">*/}
              {/*      Create cards that work exactly as you configured them. Make*/}
              {/*      real-time decisions on charges and spendings.*/}
              {/*    </p>*/}
              {/*  </div>*/}
              {/*</div>*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Section3() {
  return (
    <section className="mt-12 md:mt-20" data-aos-id-3>
      <div className="relative max-w-7xl mx-auto">
        {/* Bg */}
        <div
          className="absolute inset-0 rounded-tl-[100px] mb-24 md:mb-0 bg-gradient-to-b from-slate-100 pointer-events-none -z-10"
          aria-hidden="true"
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pb-6 pt-12 md:pt-20">
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
                  Invoice and payment management
                </h2>
                <p
                  className="text-lg text-slate-500 mb-4"
                  data-aos="fade-up"
                  data-aos-anchor="[data-aos-id-3]"
                  data-aos-delay="200"
                >
                  • Instantly craft invoices from customer choices. Input any
                  required adjustments, including discretionary discount
                  options.
                </p>
                <p
                  className="text-lg text-slate-500 mb-8"
                  data-aos="fade-up"
                  data-aos-anchor="[data-aos-id-3]"
                  data-aos-delay="300"
                >
                  • Automate email and text message reminders for timely payment
                  collections, eliminating time and energy spent chasing down
                  tardy brides and grooms.
                </p>
              </div>

              {/* Image */}
              <div className="w-full max-w-sm md:max-w-none md:mr-8 mt-8 md:mt-0">
                <div className="relative -mx-8 md:mx-0">
                  <Image
                    src={Invoices}
                    className="md:max-w-none"
                    width={496}
                    height={496}
                    alt="Invoices"
                    data-aos="fade-up"
                    data-aos-anchor="[data-aos-id-3]"
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
    <section>
      <div className="relative max-w-7xl mx-auto">
        <div
          className="absolute inset-0 rounded-tr-[100px] bg-gradient-to-tr from-blue-600 to-blue-500 pointer-events-none -z-10"
          aria-hidden="true"
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
            <div className="relative max-w-xl mx-auto md:max-w-none text-center md:text-left">
              <div className="md:max-w-3xl" data-aos="fade-up">
                <h2
                  className="h2 text-white mb-4"
                  data-aos="fade-up"
                  data-aos-anchor="[data-aos-id-3]"
                  data-aos-delay="100"
                >
                  Analytics
                </h2>
                <div
                  className="text-lg text-blue-50 mb-4"
                  data-aos="fade-up"
                  data-aos-anchor="[data-aos-id-3]"
                  data-aos-delay="200"
                >
                  • Predict cash flow from upcoming weddings and expected
                  payments.
                </div>
                <div
                  className="text-lg text-blue-50 mb-4"
                  data-aos="fade-up"
                  data-aos-anchor="[data-aos-id-3]"
                  data-aos-delay="300"
                >
                  • Quickly see top-selling packages, add-ons, and menu choices.
                  Stay updated with the latest customer preferences.
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div
            className="flex justify-center mb-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="relative">
              {/*<Image*/}
              {/*  className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 pointer-events-none -z-10 max-w-none mix-blend-lighten"*/}
              {/*  src={Analytics}*/}
              {/*  alt="Analytics"*/}
              {/*  aria-hidden="true"*/}
              {/*/>*/}
              <Image src={Analytics} width={720} height={283} alt="Analytics" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
