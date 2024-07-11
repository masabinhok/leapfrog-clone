import TechCard from "./TechCard";
import { buildicon } from "../assets";

const Practices = () => {
  return (
    <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-4 max-w-[1320px] p-5">
      <TechCard
        imgURL={buildicon}
        tag="validated"
        Heading="Validated Designs"
      />
      <TechCard tag="rocksolid" imgURL={buildicon} Heading="Rock-Solid Code" />
      <TechCard tag="buildDeploy" imgURL={buildicon} Heading="Build & Deploy" />
    </div>
  );
};

export default Practices;
