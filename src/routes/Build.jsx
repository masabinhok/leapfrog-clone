import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../sections/Footer";
import BuildHero from "../buildpage/BuildHero";

const Build = () => {
  return (
    <main>
      <Navbar className="" />
      <div className="flex flex-col items-center">
        <BuildHero />
        <Footer />
      </div>
    </main>
  );
};

export default Build;
