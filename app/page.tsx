import AboutMe from "./_components/AboutMe";
import Cards from "./_components/Cards";
import DentalWorks from "./_components/(DentalWorks)/DentalWorks";
import Hero from "./_components/Hero";
import Signup from "./_components/Signup";
import NavBar from "./_components/NavBar";

export default function Home() {
  return (
    <main>
      <div className="bg-[url(/images/istockphoto-1311511363-612x612.jpg)] bg-no-repeat bg-cover min-h-screen">
        <NavBar />

        <Hero />
      </div>

      <Cards />

      <AboutMe />

      <DentalWorks />

      <Signup />
    </main>
  );
}
