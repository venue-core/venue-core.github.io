"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

import Logo from "./logo";
import MobileMenu from "./mobile-menu";

export default function Header() {
  const [top, setTop] = useState<boolean>(true);

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top ? "bg-white backdrop-blur-sm shadow-lg" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop menu links */}
            <ul className="flex justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  About
                </Link>
              </li>
              {/*<li>*/}
              {/*  <Link href="/pricing" className="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">Pricing</Link>*/}
              {/*</li>*/}
              {/*<li>*/}
              {/*  <Link href="/tutorials" className="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">*/}
              {/*    Tutorials*/}
              {/*  </Link>*/}
              {/*</li>*/}
              {/*<li>*/}
              {/*  <Link href="/blog" className="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">Blog</Link>*/}
              {/*</li>*/}
              {/* 1st level: hover */}
              {/*<Dropdown title="Resources">*/}
              {/*  /!* 2nd level: hover *!/*/}
              {/*  <li>*/}
              {/*    <Link href="/documentation" className="font-medium text-sm text-gray-600 hover:text-gray-900 flex py-2 px-5 leading-tight">Documentation</Link>*/}
              {/*  </li>*/}
              {/*  <li>*/}
              {/*    <Link href="/support" className="font-medium text-sm text-gray-600 hover:text-gray-900 flex py-2 px-5 leading-tight">Support center</Link>*/}
              {/*  </li>*/}
              {/*  <li>*/}
              {/*    <Link href="/404" className="font-medium text-sm text-gray-600 hover:text-gray-900 flex py-2 px-5 leading-tight">404</Link>*/}
              {/*  </li>*/}
              {/*</Dropdown>*/}
            </ul>

            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/login"
                  className="text-sm font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Log in
                </Link>
              </li>
              <li>
                <Link
                  href="/waitlist"
                  className="btn-sm text-sm text-white bg-blue-600 hover:bg-blue-700 ml-3 group"
                >
                  Request a demo
                  <ArrowRightIcon className="h-4 stroke-2 tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-2" />
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
