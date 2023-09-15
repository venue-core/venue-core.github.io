import Intro from "./intro";
import Story from "./story";

export const metadata = {
  title: "About - OneVenue",
  description: "Empower venue managers to close more deals more efficiently",
};

// import Team from "./team"

export default function About() {
  return (
    <>
      <Intro />
      <Story />
      {/*<Team />*/}
    </>
  );
}
