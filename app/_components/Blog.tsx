import BlogHeroSection from "./blog/BlogHeroSection";
import BlogPage from "./blog/BlogPage";

const Blogs = () => {
  return (
    <div>
      {/* Hero Section for the Blog */}
      <BlogHeroSection />
      
      {/* All blogs container */}
      <div className="max-w-8xl mx-auto">
        <BlogPage />
      </div>
    </div>
  );
};

export default Blogs;
