import React, { useRef, useEffect } from "react";
import HeroArrow from "../components/HeroArrow";
import { video01 } from "../assets"; // Adjust the path as per your project structure

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      const playPromise = videoElement.play();
    }
  }, []);

  return (
    <section className="min-h-[580px] max-h[1000px] max-w-[1320px] flex max-lg:flex-col mt-5 px-3 py-12 max-lg:py-0">
      <div className="flex-1 flex flex-col justify-center">
        <h1 className="text-[90px] tracking-tighter  max-lg:text-[64px] font-bold max-lg:leading-[70px] leading-[90px]">
          Innovate better,{" "}
          <span className="text-green-600  block">faster.</span>
        </h1>
        <p className="mt-4 text-[22px] text-slate-500 max-lg:text-[20px]">
          We help businesses imagine and create the digital experiences of
          tomorrow. We succeed together, through the fusion of startup agility,
          enterprise standards, and world-class engineering.
        </p>
        <div className="flex mt-10 justify-start gap-8 h-[42px] items-center">
          <HeroArrow name="BUILD WITH US" />
          <HeroArrow name="JOIN US" />
        </div>
      </div>
      <div className="mt-8 flex-1">
        <video
          ref={videoRef}
          className="max-w-full h-[580px] w-[580px] rounded-br-[100px] shadow-lg object-cover max-sm:h-[420px]"
          src={video01}
          autoPlay
          loop
          muted  
        ></video>
      </div>
    </section>
  );
};

export default Hero;
