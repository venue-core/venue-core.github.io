import Cta from "@/components/cta";
import Hero from "@/components/hero";
import Problem from "@/components/problem";
import Solution from "@/components/solution";

export const metadata = {
  title: "Home - Venue",
  description: "Empower venue managers to close more deals more efficiently",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Solution />
      <Cta />
    </>
  );
}
