import AboutMe from "./_components/AboutMe";
import Cards from "./_components/Cards";
import DentalWorks from "./_components/(DentalWorks)/DentalWorks";
import Hero from "./_components/Hero";
import Signup from "./_components/Signup";

export default function Home() {
  return (
    <main>
      <Hero />
      <Cards />
      <AboutMe />
      <DentalWorks />
      <Signup />
    </main>
  );
}
