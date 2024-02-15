import AboutMe from "./_components/home/AboutMe";
import InfoCards from "./_components/home/InfoCards";
import DentalWorks from "./_components/home/(DentalWorks)/DentalWorks";
import Hero from "./_components/home/Hero";
import Signup from "./_components/home/Signup";
import NavBar from "./_components/NavBar";

const Home = () => {
  return (
    <main>
      <div className="bg-[url(/images/istockphoto-1311511363-612x612.jpg)] bg-no-repeat bg-cover min-h-screen">
        <NavBar />

        <Hero />
      </div>

      <InfoCards />

      <AboutMe />

      <DentalWorks />

      <Signup />
    </main>
  );
};

export default Home;
