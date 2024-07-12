import FooterLogo from "../components/FooterLogo";
import FooterSection from "../components/FooterSection";
import { copyright } from "../assets";

const Footer = () => {
  return (
    <section className="w-full flex flex-col  justify-center items-center bg-black px-3 text-white ">
      <div className="flex max-lg:flex-col items-center justify-center py-10 w-full max-w-[1000px]  p-5 ">
        <h1 className="text-[24px] max-md:text-[32px] text-green-500 font-bold whitespace-nowrap ">
          Stay in the loop
        </h1>
        <div className="flex p-5  max-md:flex-col items-center justify-center w-full gap-4">
          <input
            className="p-[10px] bg-[#222222] text-[16px] w-full max-md:w-full"
            type="text"
            placeholder="Your email address"
          />
          <button className="p-[10px] text-[16px] w-fit bg-white whitespace-nowrap">
            Subscribe for updates
          </button>
        </div>
      </div>
      <div className="max-w-[1320px] w-full grid grid-cols-4 max-lg:grid-cols-1 border-b-2 border-t-2 py-10 ">
        <div className="w-full ">
          <FooterLogo />
        </div>

        <div className="w-full ">
          <FooterSection
            title="We are Leapfrog"
            items={[
              "About Us",
              "Resources",
              "Case Studies",
              "Security and Compliance",
              "Contact Us",
              "Blog",
            ]}
          />
          <FooterSection
            title="Work With Us"
            items={["Careers", "Fellowship", "Life at Leapfrog"]}
          />
        </div>

        <div className="w-full">
          <FooterSection
            title="What We Do"
            items={[
              "Products & Technology",
              "Design",
              "Data and AI",
              "DevOps & Cloud",
            ]}
          />
          <FooterSection title="Industries" items={["Healthtech"]} />
        </div>

        <div className="w-full">
          <FooterSection
            title="Connect with Us"
            items={[
              "Podcast",
              "Facebook",
              "X",
              "Instagram",
              "LinkedIn",
              " ",
              "Leapfrog Brand",
              "Educating Mission",
              "Student Partnership",
            ]}
            icon={["🎙️"]}

            //facebook icon
          />
        </div>
      </div>

      <div className="text-white p-5 flex items-center max-md:flex-col gap-5 justify-between max-w-[1320px] w-full">
        <img className="w-[60px] h-[60px]" src={copyright} alt="" />
        <h1 className="text-[16px] font-bold">
          Copyright 2024, Leapfrog Technology Inc.
        </h1>
        <p className="text-[16px] ">Privacy Policy . Data policy</p>
      </div>
    </section>
  );
};

export default Footer;
