import React from "react";
import HeroArrow from "../components/HeroArrow";
import { aboutsuccess } from "../assets";

const AboutSuccess = () => {
  return (
    <section className="flex items-center justify-center w-full ">
      <div className="flex max-md:flex-col justify-between max-w-[1320px] w-full py-[96px] px-5 gap-10 ">
        <div className="flex-1 flex justify-start max-md:justify-center  ">
          <img
            className="max-w-[530px] w-full object-fit max-h-[600px] rounded-br-[25%] aspect-square object-cover max-md:w-[80%] max-sm:w-[100%]"
            src={aboutsuccess}
            alt=""
          />
        </div>
        <div className="flex flex-col items-start flex-1">
          <h1 className="mb-5 font-bold text-[16px]">OUR MISSION</h1>
          <p className="text-[32px] font-bold">
            <span className="text-green-500 max-md:block">Your success</span> is
            our mission
          </p>
          <p className="mt-4 text-[20px]">
            At Leapfrog, we combine talented people with an unwavering
            commitment to the success of our customers.
          </p>
          <p className="mt-4 text-[16px] ">
            We are fanatics of how to design, build, and validate new ideas in
            better ways. We use those learnings to help our customers innovate
            faster and teams perform better. More than 90% of our business comes
            through referrals because we've proven time and again that we don't
            let customers down.
          </p>
          <div className="flex justify-start mt-10">
            <HeroArrow name="GET IN TOUCH" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSuccess;
