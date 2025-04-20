import AboutMe from "./_components/home/AboutMe";
import InfoCards from "./_components/home/InfoCards";
import DentalWorks from "./_components/home/(DentalWorks)/DentalWorks";
import Hero from "./_components/home/Hero";
import Signup from "./_components/home/Signup";
import NavBar from "./_components/NavBar";

const Home = () => {
  return (
    <main>
        <NavBar />

        <Hero />

      <InfoCards />
      <DentalWorks />
      <AboutMe />
      <Signup />
    </main>
  );
};

export default Home;
