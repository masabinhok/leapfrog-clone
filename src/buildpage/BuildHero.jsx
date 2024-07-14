import React from "react";
import HeroArrow from "../components/HeroArrow";
import { cities, employee } from "../assets";
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

  const cityInfo = [
    {
      imgURL: cities,
      city: "Seattle",
      address: "1335 N Northlake Way Seattle WA 98103",
    },
    {
      imgURL: cities,
      city: "Kathmandu",
      address: "Charkhal Rd, Dillibazar Kathmandu, Nepal 44660",
    },
    {
      imgURL: cities,
      city: "Austin",
      address: "12600 Hill Country Blvd Austin TX 78738",
    },
    {
      imgURL: cities,
      city: "Geneva",
      address: "Impact Hub Geneva Rue Fendt 1, 1201 Geneva Switzerland",
    },
    {
      imgURL: cities,
      city: "Pune",
      address:
        "Office No: 03-110, WeWorkEleven West, Pan Card Club Road Baner, Pune 411045",
    },
  ];

  return (
    <section className="w-full flex flex-col items-center justify-center mt-[96px] p-5">
      <div className="flex flex-col mb-10 max-w-[1320px]">
        <h1 className="mb-5  text-[16px] font-bold">CONTACT US</h1>
        <h2 className="text-[64px] max-lg:text-[40px] max-md:text-[32px] font-bold">
          Let's build <span className="text-green-500">together</span>
        </h2>
        <p className="mt-4 text-[20px]">
          Whether you're a startup trying to launch a business or an enterprise
          looking to scale up, there's definitely something we can do for you.
        </p>
      </div>
      <div className="flex max-md:flex-col gap-[100px] max-w-[1320px]">
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
            <p className="my-4">We have more than one ways to engage.</p>
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
              className="py-4 w-full outline-none border-b-2"
              type="text"
              placeholder="eg.9841xxxxxx"
            />
          </div>
          <div className="mb-6 pb-4">
            <h1 className="font-bold mb-2">
              Tell us something about your project
            </h1>
            <textarea
              className="w-full outline-none  resize-none py-4 border-b-2"
              name=""
              id=""
              placeholder="eg. I want to build a mobile app for my business"
            ></textarea>
          </div>
          <Button name="SEND A MESSAGE" />
        </div>
      </div>
      <div className="flex flex-col items-center bg-[#f7f8fb] py-[96px] w-full ">
        <div className="flex items-center justify-center flex-col max-w-[1320px] w-full">
          <h1 className="font-bold text-[32px] w-full">
            We're happy to{" "}
            <span className="text-green-500">chat in person </span>
            if your're close to one of our <span>office locations.</span>
          </h1>
          <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-5">
            {cityInfo.map((city) => (
              <div
                className="flex flex-col items-start pt-8 px-5  bg-white "
                key={city.city}
              >
                <img src={city.imgURL} alt="" />
                <div className="flex flex-col items-start max-md:p-8 p-12">
                  <h1 className="text-[24px] mb-3 font-bold">{city.city}</h1>
                  <p className="text-[16px] text-slate-500">{city.address}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildHero;
