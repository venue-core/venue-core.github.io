import Cta from "@/components/cta";
import Faq from "@/components/faq";
import Features from "@/components/features";
import Hero from "@/components/hero";
import Pricing from "@/components/pricing";

export const metadata = {
  title: "Home - Venue",
  description: "Empower venue managers to close more deals more efficiently",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Pricing />
      <Cta />
      <Faq />
    </>
  );
}
