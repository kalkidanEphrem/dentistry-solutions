// blog/page.tsx
import React from "react";
import Layout from "../layout"; // Import the Layout component
import Blogs from "../_components/Blog"; // Your Blogs component to display all blogs

export default function Home() {
  return (
    <Layout>
      <div>
        <Blogs /> {/* Your Blogs component that lists blog entries */}
      </div>
    </Layout>
  );
}
