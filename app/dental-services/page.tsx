import NavBar from "../_components/NavBar";
import Hero from "../_components/dental-services/Hero";
import Services from "../_components/dental-services/Services";
import Signup from "../_components/dental-services/Signup";

const page = () => {
  return (
    <main>
      <NavBar />

      <Hero />

      <Services />

      <Signup />
    </main>
  );
};

export default page;
