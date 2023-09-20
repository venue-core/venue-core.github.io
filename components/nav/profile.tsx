import Link from "next/link";
import {
  ArrowLeftOnRectangleIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

export default function Profile() {
  const ACTIONS = [
    {
      title: "Settings",
      url: "/dashboard/settings",
      icon: <Cog6ToothIcon className="w-4 h-4 flex-none" />,
    },
    {
      title: "Logout",
      url: "/",
      icon: <ArrowLeftOnRectangleIcon className="w-4 h-4 flex-none" />,
    },
  ];
  return (
    <div className="ml-2 hs-dropdown relative inline-flex [--placement:bottom-right]">
      <button
        id="hs-dropdown-with-header"
        type="button"
        className="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.25rem] w-[2.25rem] rounded-full font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-xs dark:bg-gray-800 dark:hover:bg-slate-800 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
      >
        <img
          className="inline-block h-[2.25rem] w-[2.25rem] rounded-full ring-2 ring-white dark:ring-gray-800"
          src="https://media.licdn.com/dms/image/D5603AQHt-R3WFRBCyw/profile-displayphoto-shrink_800_800/0/1683661725720?e=1700697600&v=beta&t=3CvZnHv2h7UYcVO3rC40lejbPVKop3-s-Ddd5nOS0i8"
          alt="Kitty Kat"
        />
      </button>

      <div
        className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[15rem] bg-white shadow-md rounded-lg p-2 dark:bg-gray-800 dark:border dark:border-gray-700"
        aria-labelledby="hs-dropdown-with-header"
      >
        <div className="py-3 px-5 -m-2 bg-gray-100 rounded-t-lg dark:bg-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Signed in as
          </p>
          <p className="text-sm font-medium text-gray-800 dark:text-gray-300">
            katherine
          </p>
        </div>
        <div className="mt-2 py-2 first:pt-0 last:pb-0">
          {ACTIONS.map((a, i) => (
            <Link
              key={i}
              href={a.url}
              className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
            >
              {a.icon}
              {a.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
