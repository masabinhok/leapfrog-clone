import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../sections/Footer";
import Newsletter from "../sections/Newsletter";
import AboutHero from "../about/AboutHero";
import AboutSuccess from "../about/AboutSuccess";
import AboutStats from "../about/AboutStats";
import AboutTeam from "../about/AboutTeam";

const About = () => {
  return (
    <main>
      <Navbar className="" />
      <div className="flex flex-col items-center">
        <AboutHero />
        <AboutSuccess />
        <AboutStats />
        <AboutTeam />
        <Newsletter />
        <Footer />
      </div>
    </main>
  );
};
export default About;
