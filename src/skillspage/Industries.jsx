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
        title="What we build"
        about="We build apps, data-driven products, and cloud solutions that make an impact."
      />
      <SkillsBox
        imgURL={buildicon}
        title="What we build"
        about="We build apps, data-driven products, and cloud solutions that make an impact."
      />
      <SkillsBox
        imgURL={buildicon}
        title="What we build"
        about="We build apps, data-driven products, and cloud solutions that make an impact."
      />
      <SkillsBox
        imgURL={buildicon}
        title="What we build"
        about="We build apps, data-driven products, and cloud solutions that make an impact."
      />
    </div>
  );
};

export default Industries;
