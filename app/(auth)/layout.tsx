"use client";

import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
      <Header />
      <main className="grow">{children}</main>
      <Footer />
    </div>
  );
}
