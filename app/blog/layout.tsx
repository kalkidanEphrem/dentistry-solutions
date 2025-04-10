// blog/layout.tsx
import React from "react";
import NavBar from "../_components/NavBar"; // Import NavBar
import { ReactNode } from "react";
import Footer from "../_components/(Footer)/Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <NavBar /> {/* This will be the navbar with conditional styles */}
      <main>{children}</main> {/* Render the child components here */}
      <Footer />
    </div>
  );
};

export default Layout;
