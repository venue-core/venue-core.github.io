import Link from "next/link";

import Header from "@/app/(demo)/payment/receipt/header";

import Details from "./details";

export const metadata = {
  title: "Payment Receipt - OneVenue",
  description: "Empower venue managers to close more deals more efficiently",
};

export default function Receipt() {
  return (
    <div className="grow w-full max-w-xl mx-auto px-4 sm:px-6 py-12 lg:pt-24 lg:pb-20">
      <Header />
      <Details />
      <Link
        href="/"
        className="mt-8 block w-full btn text-sm text-white bg-blue-600 hover:bg-blue-700 group text-center"
      >
        Back
      </Link>
    </div>
  );
}
