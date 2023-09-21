import "./css/style.css";

import { Inter } from "next/font/google";

import GoogleAnalytics from "@/components/google-analytics";
import Preline from "@/components/preline";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Home - OneVenue",
  description: "Empower venue managers to close more deals more efficiently",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.svg" />
      <GoogleAnalytics tagId="G-ZQC9VQJMG9" />
      <body
        className={`${inter.variable} font-inter antialiased bg-white text-gray-900 tracking-tight`}
      >
        <Preline />
        {children}
      </body>
    </html>
  );
}
