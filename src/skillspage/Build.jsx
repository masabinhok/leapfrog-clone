import SkillsBox from "./SkillsBox";
import { buildicon } from "../assets";

const Build = () => {
  return (
    <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-4 max-w-[1320px] p-5">
      <SkillsBox
        imgURL={buildicon}
        title="Software Development"
        about="Crafting tailored software solutions aligned with your vision, driving efficiency and innovation through precise coding."
      />
      <SkillsBox
        imgURL={buildicon}
        title="Software Testing & QA"
        about="Ensuring impeccable software quality through rigorous testing, assuring reliability and user satisfaction with every release."
      />
      <SkillsBox
        imgURL={buildicon}
        title="Infrastructure & DevOps"
        about="Building robust foundations and agile workflows for scalability and security while embracing continuous development methodologies."
      />
      <SkillsBox
        imgURL={buildicon}
        title="Mobile and Web Development"
        about="Creating seamless digital journeys with user-centric design, marrying aesthetics and functionality for unparalleled cross-platform experiences."
      />
      <SkillsBox
        imgURL={buildicon}
        title="Data Science and Machine Learning"
        about="Unveiling insights from complex data landscapes, empowering strategic decisions and breakthroughs through advanced analytics and machine learning."
      />
      <SkillsBox
        imgURL={buildicon}
        title="Blockchain Consulting"
        about="Guiding exploration of blockchain's secure potential, integrating transparency and trust into transformative initiatives."
      />
      <SkillsBox
        imgURL={buildicon}
        title="Big Data & BI"
        about="Transforming raw data into strategic assets, leveraging big data and business intelligence to illuminate paths for growth and success."
      />
      <SkillsBox
        imgURL={buildicon}
        title="Internet of Things"
        about="Forging interconnected smart ecosystems, reshaping industries and daily life through infused intelligence and connectivity."
      />
      <SkillsBox
        imgURL={buildicon}
        title="UX and UI Design"
        about="Envisioning and crafting intuitive user experiences, where artistic UI meets seamless functionality, elevating brand value and user engagement."
      />
    </div>
  );
};

export default Build;
