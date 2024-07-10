import { product, team, devops, design, data } from "../assets";
import { useState } from "react";
import ProductCard from "../features/ProductCard";
import TeamCard from "../features/TeamCard";
import DesignCard from "../features/DesignCard";
import DataCard from "../features/DataCard";
import DevopsCard from "../features/DevopsCard";
import FeatureCard from "../features/FeatureCard";




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
export { FeatureCard };
