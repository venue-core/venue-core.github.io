"use client";

import Router from "@/components/estimator/router";

export default function Demo() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-24 pb-12">
        {/*<div className="max-w-3xl mx-auto text-center pb-12">*/}
        {/*<h2 className="h2 mb-4" data-aos="zoom-y-out">*/}
        {/*  Demo Price Estimator*/}
        {/*</h2>*/}
        {/*</div>*/}
        <Router />
      </div>
    </section>
  );
}
