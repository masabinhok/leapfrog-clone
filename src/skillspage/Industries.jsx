import { buildicon } from "../assets";
import SkillsBox from "../skillspage/SkillsBox";

const Industries = () => {
  return (
    <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-4 max-w-[1320px] p-5">
      <SkillsBox
        imgURL={buildicon}
        title="Healthcare"
        about="Advancing patient care through innovative tech solutions, enhancing medical processes, patient engagement, and data-driven insights for optimal health outcomes."
      />
      <SkillsBox
        imgURL={buildicon}
        title="Technology"
        about="Pioneering the digital frontier with cutting-edge solutions, transforming businesses, and shaping industries through seamless integration of technology into operations."
      />
      <SkillsBox
        imgURL={buildicon}
        title="Ed-Tech"
        about="Revolutionizing education with immersive learning tools, connecting educators and learners, and fostering personalized growth for a globally accessible knowledge landscape."
      />
      <SkillsBox
        imgURL={buildicon}
        title="Fintech"
        about="Redefining financial services through technology, offering secure, efficient, and inclusive solutions that empower businesses and individuals in an ever-evolving economic landscape."
      />
      <SkillsBox
        imgURL={buildicon}
        title="Consumer & Retail"
        about="Enhancing online experiences, empowering businesses with data-driven insights, and shaping the future of e-commerce through innovative digital strategies."
      />
    </div>
  );
};

export default Industries;
