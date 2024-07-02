import NavBar from "../_components/NavBar";
import AboutHero from "../_components/about/AboutHero";
import AboutInfo from "../_components/about/AboutInfo";
import Goals from "../_components/about/Goals";
import MyStory from "../_components/about/MyStory";

const page = () => {
  return (
    <main>
      <NavBar />

      <AboutHero />

      <MyStory />

      <Goals />

      <AboutInfo />
    </main>
  );
};

export default page;
