import TechCard from "./TechCard";
import Build from "./Build";

const Technologies = () => {
  return (
    <div className="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 gap-4 max-w-[1320px] p-5">
      <TechCard imgURL={Build} tag="discovery" Heading="Discovery & Design" />
      <TechCard tag="appdev" imgURL={Build} Heading="App Dev" />
      <TechCard tag="datacloud" imgURL={Build} Heading="Data & Cloud" />
      <TechCard tag="datasci" imgURL={Build} Heading="Data Sciences" />
    </div>
  );
};

export default Technologies;
