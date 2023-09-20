import Revenue from "@/components/analytics/revenue";

export const metadata = {
  title: "Analytics - Payments - OneVenue",
  description: "Empower venue managers to close more deals more efficiently",
};

export default function Analytics() {
  return (
    <header>
      <div className="mb-2 text-sm font-semibold text-blue-600 uppercase">
        Payments
      </div>
      <h1 className="block text-2xl font-bold text-gray-800 sm:text-3xl">
        Analytics
      </h1>
      <div className="mt-5 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
        <Revenue />
        <Revenue />
      </div>
    </header>
  );
}
