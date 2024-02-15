import NavBar from "../_components/NavBar";
import AboutHero from "../_components/about/AboutHero";
import AboutInfo from "../_components/about/AboutInfo";
import MyStory from "../_components/about/MyStory";


const page = () => {
  return (
    <main>
      <NavBar />

      <AboutHero />

      <MyStory />

      <AboutInfo />
    </main>
  );
};

export default page;
