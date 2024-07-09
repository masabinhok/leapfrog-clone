import { product, team, devops, design, data } from "../assets";
import { useState } from "react";
import ProductCard from "../features/ProductCard";
import TeamCard from "../features/TeamCard";
import DesignCard from "../features/DesignCard";
import DataCard from "../features/DataCard";
import DevopsCard from "../features/DevopsCard";
import { render } from "react-dom";

const FeatureCard = ({ imgUrl, name, tag, setSection, section }) => {
  const isActive = section === tag;

  const handleClick = () => {
    setSection(tag);
  };

  return (
    <div
      onClick={handleClick}
      className={`flex-1 p-6 max-lg:p-3 flex max-lg:flex-col text-center justify-center items-center gap-3 cursor-pointer ${
        isActive ? "bg-black text-white" : ""
      }`}
    >
      <img
        className={`w-5 h-5 ${isActive ? "invert" : ""}`}
        src={imgUrl}
        alt=""
      />
      <span className="text-lg max-lg:text-[10px] leading-normal">{name}</span>
    </div>
  );
};

const Features = () => {
  const [section, setSection] = useState("products");

  const renderCard = () => {
    switch (section) {
      case "products":
        return <ProductCard />;
      case "team":
        return <TeamCard />;
      case "design":
        return <DesignCard />;
      case "data":
        return <DataCard />;
      case "devops":
        return <DevopsCard />;
      default:
        return null;
    }
  };

  return (
    <section className="min-w-full flex flex-col">
      <nav className="min-w-full flex items-center justify-center flex-1">
        <FeatureCard
          section={section}
          name="Products & Technology"
          tag="products"
          imgUrl={product}
          setSection={setSection}
        />
        <FeatureCard
          section={section}
          name="Team Augmentation"
          tag="team"
          imgUrl={team}
          setSection={setSection}
        />
        <FeatureCard
          section={section}
          name="Design"
          tag="design"
          imgUrl={design}
          setSection={setSection}
        />
        <FeatureCard
          section={section}
          name="Data & AI"
          tag="data"
          imgUrl={data}
          setSection={setSection}
        />
        <FeatureCard
          section={section}
          name="DevOps & Cloud"
          tag="devops"
          imgUrl={devops}
          setSection={setSection}
        />
      </nav>

      <div className="bg-black flex items-center justify-center">
        {renderCard()}
      </div>
    </section>
  );
};

export default Features;
