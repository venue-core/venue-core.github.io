import CaseStudies from "@/components/case-studies";
import Cta from "@/components/cta";
import Faqs from "@/components/faqs";
import Hero from "@/components/hero";
import HowItWorks from "@/components/how";
import News from "@/components/news";
import Problem from "@/components/problem";
import Solution from "@/components/solution";
import World from "@/components/world";

export const metadata = {
  title: "Home - Avatar",
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
      <CaseStudies />
      <World />
      <Cta />
      <Faqs />
      {/*<News />*/}
      <Cta />
    </>
  );
}
