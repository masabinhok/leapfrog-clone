import TechCard from "./TechCard";
import Build from "./Build";

const Technologies = () => {
  return (
    <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-4 max-w-[1320px] p-5">
      <TechCard imgURL={Build} tag="validated" Heading="Validated Designs" />
      <TechCard tag="rocksolid" imgURL={Build} Heading="Rock-Solid Code" />
      <TechCard tag="buildDeploy" imgURL={Build} Heading="Build & Deploy" />
    </div>
  );
};

export default Technologies;
