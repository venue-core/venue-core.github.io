"use client";

const PROBLEMS = [
  {
    id: 1,
    title: "Engage",
    description:
      "With a growing fan base, you need to deliver personalized content, but time is tight.",
    icon: (
      <g fill="none" fillRule="evenodd">
        <rect
          className="fill-current text-blue-600"
          width="64"
          height="64"
          rx="32"
        />
        <g strokeWidth="2">
          <path
            className="stroke-current text-white"
            d="M32 37.714A5.714 5.714 0 0037.714 32a5.714 5.714 0 005.715 5.714"
          />
          <path
            className="stroke-current text-white"
            d="M32 37.714a5.714 5.714 0 015.714 5.715 5.714 5.714 0 015.715-5.715M20.571 26.286a5.714 5.714 0 005.715-5.715A5.714 5.714 0 0032 26.286"
          />
          <path
            className="stroke-current text-white"
            d="M20.571 26.286A5.714 5.714 0 0126.286 32 5.714 5.714 0 0132 26.286"
          />
          <path
            className="stroke-current text-blue-300"
            d="M21.714 40h4.572M24 37.714v4.572M37.714 24h4.572M40 21.714v4.572"
            strokeLinecap="square"
          />
        </g>
      </g>
    ),
  },
  {
    id: 2,
    title: "Retain",
    description:
      "Maintaining fan attention amidst fierce competition among creators is tough.",
    icon: (
      <g fill="none" fillRule="evenodd">
        <rect
          className="fill-current text-blue-600"
          width="64"
          height="64"
          rx="32"
        />
        <g strokeWidth="2" transform="translate(19.429 20.571)">
          <circle
            className="stroke-current text-white"
            strokeLinecap="square"
            cx="12.571"
            cy="12.571"
            r="1.143"
          />
          <path
            className="stroke-current text-white"
            d="M19.153 23.267c3.59-2.213 5.99-6.169 5.99-10.696C25.143 5.63 19.514 0 12.57 0 5.63 0 0 5.629 0 12.571c0 4.527 2.4 8.483 5.99 10.696"
          />
          <path
            className="stroke-current text-blue-300"
            d="M16.161 18.406a6.848 6.848 0 003.268-5.835 6.857 6.857 0 00-6.858-6.857 6.857 6.857 0 00-6.857 6.857 6.848 6.848 0 003.268 5.835"
          />
        </g>
      </g>
    ),
  },
  {
    id: 3,
    title: "Monetize",
    description:
      "Balancing fan engagement with monetization is crucial. No one wants to push sales, but it's essential for a healthy business.",
    icon: (
      <g fill="none" fillRule="evenodd">
        <rect
          className="fill-current text-blue-600"
          width="64"
          height="64"
          rx="32"
        />
        <g strokeWidth="2">
          <path
            className="stroke-current text-blue-300"
            d="M34.743 29.714L36.57 32 27.43 43.429H24M24 20.571h3.429l1.828 2.286"
          />
          <path
            className="stroke-current text-white"
            strokeLinecap="square"
            d="M34.743 41.143l1.828 2.286H40M40 20.571h-3.429L27.43 32l1.828 2.286"
          />
          <path className="stroke-current text-blue-300" d="M36.571 32H40" />
          <path
            className="stroke-current text-white"
            d="M24 32h3.429"
            strokeLinecap="square"
          />
        </g>
      </g>
    ),
  },
] as const;

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
            <h2 className="h2 mb-4">Growing as a creator is challenging</h2>
            <p className="text-xl text-gray-600">
              You started creating to share your passion, but now you're
              juggling business tasks, leaving less time for content creation.
            </p>
          </div>
        </div>
        <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
          {PROBLEMS.map((p) => (
            <div
              key={p.id}
              className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl h-64"
            >
              <svg
                className="w-16 h-16 p-1 -mt-1 mb-2"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                {p.icon}
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                {p.title}
              </h4>
              <p className="text-gray-600 text-center">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
