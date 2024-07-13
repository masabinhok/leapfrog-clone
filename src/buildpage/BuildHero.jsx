import React from "react";
import HeroArrow from "../components/HeroArrow";
import { employee } from "../assets";
import Button from "../components/Button";
import { buildicon } from "../assets";

import { useState } from "react";

const BuildInfo = ({ buildInfo }) => {
  return (
    <div className="flex flex-col items-start">
      <h1 className="text-[40px] max-md:text-[32px] font-bold text-green-500 mb-4">
        {buildInfo.title}
      </h1>
      <p className="text-[16px]">{buildInfo.descrip}</p>
      <div className="py-3 ">
        <HeroArrow name="APPLY NOW" />
      </div>
    </div>
  );
};

const EngageCard = ({ engageCard }) => {
  return (
    <div className="p-4 mb-4 flex border-2">
      <div>
        <img className="w-8 mx-4" src={engageCard.imgURL} alt="" />
      </div>
      <div>
        <h1 className="text-[16px] ">{engageCard.title}</h1>
        <p className="text-[14px] text-slate-500">{engageCard.info}</p>
      </div>
    </div>
  );
};

const BuildHero = () => {
  const [selectedServices, setSelectedServices] = useState([]);

  const handleServiceClick = (serviceTitle) => {
    if (selectedServices.includes(serviceTitle)) {
      setSelectedServices(
        selectedServices.filter((title) => title !== serviceTitle)
      );
    } else {
      setSelectedServices([...selectedServices, serviceTitle]);
    }
  };

  const engageCard = [
    {
      imgURL: buildicon,
      title: "Augment my existing team.",
      info: "Expand capacity and boost efiiciency for success!",
    },
    {
      imgURL: buildicon,
      title: "I have a new project.",
      info: "Expand capacity and boost efiiciency for success!",
    },
    {
      imgURL: buildicon,
      title: "I want a dedicated team for my project.",
      info: "Expand capacity and boost efiiciency for success!",
    },
  ];

  const serviceRequired = [
    {
      title: "Full-Stack Team",
    },

    {
      title: "Mobile App Development",
    },
    {
      title: "Product Design",
    },
    {
      title: "Data/ML/AI",
    },
    {
      title: "Others",
    },
  ];

  const buildInfo = [
    {
      title: "Looking for a job?",
      descrip:
        "There is always an exciting position open that you can apply right away. Don't worry even if there's not something that suits you immediately, we will get in touch when it becomes available!",
    },
    {
      title: "Get an internship",
      descrip:
        "Check out our internship page and ways to get in touch if you’re looking to get an internship at Leapfrog",
    },
  ];

  return (
    <section className="max-w-[1320px] mt-[96px] p-5">
      <div className="flex flex-col mb-10">
        <h1 className="mb-5  text-[16px] font-bold">CONTACT US</h1>
        <h2 className="text-[64px] max-lg:text-[40px] max-md:text-[32px] font-bold">
          Let's build <span className="text-green-500">together</span>
        </h2>
        <p className="mt-4 text-[20px]">
          Whether you're a startup trying to launch a business or an enterprise
          looking to scale up, there's definitely something we can do for you.
        </p>
      </div>
      <div className="flex max-md:flex-col gap-[100px]">
        <div className="flex-1">
          <div>
            {" "}
            <img
              className="rounded-br-[25%] max-w-[400px] max-h-[500px]"
              src={employee}
              alt=""
            />
            {buildInfo.map((info) => (
              <div className="mt-[48px]" key={info.title}>
                <BuildInfo buildInfo={info} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex-2 flex flex-col ">
          <div className="mb-6">
            <h1 className="text-[32px] font-bold">
              Simply fill out <span className="text-green-500">this form</span>
            </h1>
            <p className="text-[20px] mt-4">
              We will promptly respond to your inquiry to discuss potential
              collaboration opportunities. You can expect to hear from us within
              two business days.
            </p>
          </div>
          <div>
            <div className="pb-4 mb-6" htmlFor="fullname">
              <h1 className="mb-2 font-bold">Your Full Name</h1>
              <input
                className="w-full outline-none text-slate-500 py-4 border-b-2"
                type="text"
                placeholder="eg.Sabin Shrestha"
              />
            </div>
            <div className="pb-4 mb-6" htmlFor="email">
              <h1 className="mb-2 font-bold">Your Email Address</h1>
              <input
                className="w-full outline-none text-slate-500 py-4 border-b-2"
                type="email"
                placeholder="eg.you@example.com"
              />
              <span>We won't send you spam.</span>
            </div>
          </div>
          <div className="pb-4 mb-6">
            <h1 className="font-bold">How do you want to work with us?</h1>
            <p className="mt-2">We have more than one ways to engage.</p>
            <div>
              {engageCard.map((card) => (
                <div key={card.title}>
                  {" "}
                  <EngageCard engageCard={card} />
                </div>
              ))}
            </div>
          </div>
          {/*  */}
          <div className="mb-6 pb-4">
            <h1 className="font-bold mb-2">What service do you require?</h1>
            <p className="mb-4">Select all services you may need.</p>
            <div className="gap-3 flex flex-wrap ">
              {serviceRequired.map((service, idx) => (
                <div
                  className="border p-3 rounded-xl w-fit cursor-pointer "
                  key={idx}
                  htmlFor={service.title}
                >
                  {service.title}
                </div>
              ))}
            </div>
          </div>
          <div className="mb-6 pb-4">
            <h1 className="font-bold mb-2">What is your phone number?</h1>
            <input
              className="py-4 w-full outline-none"
              type="text"
              placeholder="eg.9841xxxxxx"
            />
          </div>
          <div className="mb-6 pb-4">
            <h1 className="font-bold mb-2">
              Tell us something about your project
            </h1>
            <textarea
              className="w-full outline-none border-none  py-4 border-b-2"
              name=""
              id=""
              placeholder="eg. I want to build a mobile app for my business"
            ></textarea>
          </div>
          <Button name="SEND A MESSAGE" />
        </div>
      </div>
    </section>
  );
};

export default BuildHero;
