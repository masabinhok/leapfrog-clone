import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../sections/Footer";
import Newsletter from "../sections/Newsletter";
import AboutHero from "../about/AboutHero";

const About = () => {
  return (
    <main>
      <Navbar className="" />
      <div className="flex flex-col items-center">
        <AboutHero />
        <Newsletter />
        <Footer />
      </div>
    </main>
  );
};
export default About;
