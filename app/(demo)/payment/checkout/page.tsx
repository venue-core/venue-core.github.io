import Header from "@/app/(demo)/payment/checkout/header";

import PayForm from "./form";

export const metadata = {
  title: "Checkout - OneVenue",
  description: "Empower venue managers to close more deals more efficiently",
};

export default function Checkout() {
  return (
    <div className="grow w-full max-w-xl mx-auto px-4 sm:px-6 py-12 lg:pt-24 lg:pb-20">
      <Header />
      <PayForm />
    </div>
  );
}
