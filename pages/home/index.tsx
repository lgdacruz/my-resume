import About from "./about";
import Education from "./education";
import Experiences from "./experiences";
import Footer from "./footer";
import Goals from "./goals";
import ComponentHead from "./head";
import Personal from "./personal";
import Skills from "./skills";
import Social from "./social";

import { Container, Main } from "./style";

export default function Home() {
  return (
    <Container align="flex-start">
      <ComponentHead />
      <Main>
        <Personal />
        <Social />
        <About />
        <Skills />
        <Experiences />
        <Goals />
        <Education />
      </Main>
      <Footer />
    </Container>
  );
}
