import Payments from "@/app/(demo)/portal/payments";
import Timeline from "@/app/(demo)/portal/timeline";
import Welcome from "@/app/(demo)/portal/welcome";

export const metadata = {
  title: "Portal - OneVenue",
  description: "Empower venue managers to close more deals more efficiently",
};

export default function Portal() {
  return (
    <div className="mt-8 px-8 max-w-md mx-auto">
      <Welcome />
      <Tabs />
    </div>
  );
}

function Tabs() {
  return (
    <>
      <nav
        className="flex justify-center space-x-2"
        aria-label="Tabs"
        role="tablist"
      >
        <button
          type="button"
          className="flex-1 px-auto uppercase tracking-wider hs-tab-active:bg-blue-200 hs-tab-active:text-blue-600 hs-tab-active:hover:text-blue-800 py-3 gap-2 bg-transparent text-sm font-medium text-center text-gray-500 rounded-lg hover:text-blue-600 active"
          data-hs-tab="#payments-tab"
          aria-controls="payments-tab"
          role="tab"
        >
          Payments
        </button>
        <button
          type="button"
          className="flex-1 px-auto uppercase tracking-wider hs-tab-active:bg-blue-200 hs-tab-active:text-blue-600 hs-tab-active:hover:text-blue-800 py-3 gap-2 bg-transparent text-sm font-medium text-center text-gray-500 rounded-lg hover:text-blue-600"
          data-hs-tab="#timeline-tab"
          aria-controls="timeline-tab"
          role="tab"
        >
          Timeline
        </button>
      </nav>
      <div className="mt-8">
        <div
          id="payments-tab"
          role="tabpanel"
          aria-labelledby="payments-tab-item"
        >
          <Payments />
        </div>
        <div
          id="timeline-tab"
          className="hidden"
          role="tabpanel"
          aria-labelledby="timeline-tab-item"
        >
          <Timeline />
        </div>
      </div>
    </>
  );
}
