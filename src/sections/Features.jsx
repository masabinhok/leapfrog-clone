import { product } from "../assets";
import { useState } from "react";
import { team, devops, design, data } from "../assets";
import Button from "../components/Button";
import { features } from "../assets";

const FeatureCard = ({ imgUrl, name, tag, changeBg }) => {
  return (
    <>
      <div className="flex-1 p-6 max-lg:p-3 flex max-lg:flex-col text-center justify-center items-center gap-3 products cursor-pointer">
        <img className="w-5 h-5" src={imgUrl} alt="" />
        <span className="text-lg max-lg:text-[10px] leading-normal ">{name}</span>
      </div>
    </>
  );
};

const Features = () => {
  const changeBg = (section) => {
    setSection(`${section}`);
    let testItem = document.querySelector(`.${section}`);
    testItem.classList.contains("bg-black")
      ? testItem.classList.remove("bg-black")
      : testItem.classList.add("bg-black");
    testItem.classList.contains("text-white")
      ? testItem.classList.remove("text-white")
      : testItem.classList.add("text-white");
    testItem.classList.contains("invert")
      ? testItem.classList.remove("invert")
      : testItem.classList.add("invert");
  };

  const [section, setSection] = useState("products");
  return (
    <section className="min-w-full flex flex-col  ">
      <nav className="min-w-full flex items-center justify-center flex-1  ">
        <FeatureCard
          onClick={() => changeBg(`products`)}
          name="Products & Technology"
          tag="products"
          imgUrl={product}
        />
        <FeatureCard name="Team Augmentation" tag="team" imgUrl={team} />
        <FeatureCard name="Design" tag="design" imgUrl={design} />
        <FeatureCard name="Data & AI" tag="data" imgUrl={data} />
        <FeatureCard name="DevOps & Cloud" tag="devops" imgUrl={devops} />
      </nav>

      <div className="bg-black flex items-center justify-center  ">
        <div className="p-[96px] flex  max-md:flex-col max-w-[1320px] gap-10 items-start justify-center">
          <div className="flex flex-col flex-1">
            <h1 className="font-[16px] text-white">PRODUCTS & TECHNOLOGY</h1>
            <p className="my-4 font-bold text-[32px] text-white">
              <span className="text-green-500 font-600">Deliver value, </span>{" "}
              not just products
            </p>
            <p className="text-[20px] text-white tracking-tighter ">
              Build digital experiences people love to use. Learn how we use
              battle-tested processes to systematically design and develop
              software that solves problems, delights users, and optimizes
              businesses.
            </p>
            <Button name="Explore Product Engineering" />
          </div>
          <div className="pt-10 flex-1">
            <img src={features} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
