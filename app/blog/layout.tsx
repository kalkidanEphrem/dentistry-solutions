import React from "react";
import NavBar from "../_components/NavBar";
import { ReactNode } from "react";
import Footer from "../_components/(Footer)/Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
