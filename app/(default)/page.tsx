import Cta from "@/components/cta";
import Hero from "@/components/hero";
import HowItWorks from "@/components/how";
import Problem from "@/components/problem";
import Solution from "@/components/solution";

export const metadata = {
  title: "Home - Venue",
  description: "Engage your audience intelligently",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Solution />
      <Cta />
      <HowItWorks />
      <Cta />
    </>
  );
}