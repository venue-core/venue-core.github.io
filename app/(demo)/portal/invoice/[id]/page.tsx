import React from "react";

import Invoice from "@/app/(demo)/portal/invoice/[id]/invoice";

export const metadata = {
  title: "Invoice - Portal - OneVenue",
  description: "Empower venue managers to close more deals more efficiently",
};

export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }];
}

export default function InvoicePage({ params }: { params: { id: string } }) {
  return <Invoice id={params.id} />;
}
