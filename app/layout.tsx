import "./css/style.css";

import { Inter } from "next/font/google";
import Script from "next/script";

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
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-324NEVCL3L" />
      <Script id="google-analytics">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-324NEVCL3L');
          `}
      </Script>
      <body
        className={`${inter.variable} font-inter antialiased bg-white text-gray-900 tracking-tight`}
      >
        <Preline />
        {children}
      </body>
    </html>
  );
}
