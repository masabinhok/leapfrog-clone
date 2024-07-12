import React from "react";
import HeroArrow from "../components/HeroArrow";
import { abouthero, aboutsuccess } from "../assets";

const AboutHero = () => {
  return (
    <section className="flex items-center justify-center w-full ">
      <div className="flex max-md:flex-col justify-between max-w-[1320px] w-full py-[96px] px-5 max-md:py-[120px]">
        <div className="flex flex-col items-start flex-1">
          <h1 className="mb-5 font-bold text-[16px]">ABOUT US</h1>
          <p className="text-[32px] font-bold">
            <span className="text-green-500 max-md:block">Innovation</span> is
            in our DNA.
          </p>
          <p className="mt-4 text-[20px]">
            We stand as an experienced and trustworthy technology ally, ready to
            help with your next venture.We stand as an experienced and
            trustworthy technology ally, ready to help with your next venture.
          </p>
          <p className="mt-4 text-[16px] ">
            Leapfrog, formed by a team of seasoned founders, CTOs, product
            designers, and engineers, has grown to a workforce of 450 strong.
            Over the past decade, we've been instrumental in delivering over a
            100 new products. We've forged partnerships with a wide variety of
            innovative startups and enterprises, building solutions that needed
            to blend a user-friendly interface with the intricate aspects of
            data, cloud, and security.
          </p>
          <div className="flex justify-start mt-10">
            <HeroArrow name="GET IN TOUCH" />
          </div>
        </div>
        <div className="flex-1 flex justify-end  ">
          <img
            className="max-w-[530px] w-full object-fit max-h-[600px] rounded-br-[25%] max-md:w-"
            src={abouthero}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
