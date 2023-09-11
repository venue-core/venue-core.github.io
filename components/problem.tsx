"use client";

const PROBLEMS = [] as const;

export default function Problem() {
  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 bg-gray-100 pointer-events-none mb-16"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        <div className="pt-12 md:pt-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="uppercase mb-4 text-xl font-bold text-blue-600 tracking-wider">
              Problem
            </div>
            <h2 className="h2 mb-4">
              Stop losing time and customers with poor communication
            </h2>
            <p className="text-xl text-gray-600">
              You started to create amazing experiences for customer, but now you spend your time
              emailing customers back and forth answering questions about mundane logistics like venue price changes.
            </p>
          </div>
        </div>
        <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
          {/*{PROBLEMS.map((p) => (*/}
          {/*  <div*/}
          {/*    key={p.id}*/}
          {/*    className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl h-64"*/}
          {/*  >*/}
          {/*    <svg*/}
          {/*      className="w-16 h-16 p-1 -mt-1 mb-2"*/}
          {/*      viewBox="0 0 64 64"*/}
          {/*      xmlns="http://www.w3.org/2000/svg"*/}
          {/*    >*/}
          {/*      {p.icon}*/}
          {/*    </svg>*/}
          {/*    <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">*/}
          {/*      {p.title}*/}
          {/*    </h4>*/}
          {/*    <p className="text-gray-600 text-center">{p.description}</p>*/}
          {/*  </div>*/}
          {/*))}*/}
        </div>
      </div>
    </section>
  );
}
