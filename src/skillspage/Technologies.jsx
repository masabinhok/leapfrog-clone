import TechCard from "./TechCard";
import { buildicon } from "../assets";

const Technologies = () => {
  return (
    <div className="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 gap-4 max-w-[1320px] p-5 max-md:w-screen max-md:px-10">
      <TechCard
        imgURL={buildicon}
        tag="discovery"
        Heading="Discovery & Design"
      />
      <TechCard tag="appdev" imgURL={buildicon} Heading="App Dev" />
      <TechCard tag="datacloud" imgURL={buildicon} Heading="Data & Cloud" />
      <TechCard tag="datasci" imgURL={buildicon} Heading="Data Sciences" />
    </div>
  );
};

export default Technologies;
