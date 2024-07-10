import { buildicon, industries, practices, technologies } from "../assets";
import Industries from "../skillspage/Industries";
import Build from "../skillspage/Build";
import Practices from "../skillspage/Practices";
import Technologies from "../skillspage/Technologies";
import { useState } from "react";
import SkillsCard from "../skillspage/SkillsCard";

const Skills = () => {
  const [section, setSection] = useState("build");

  const renderPage = () => {
    switch (section) {
      case "build":
        return <Build />;
      case "technologies":
        return <Technologies />;
      case "practices":
        return <Practices />;
      case "industries":
        return <Industries />;
      default:
        return null;
    }
  };

  return (
    <section className="max-w-[1320px] flex items-center justify-center p-5 flex-col">
      <div className="flex flex-col items-center min-lg:mx-[136px] mb-[40px] justify-center">
        <h1 className="font-semibold text-[32px]">
          <span className="text-green-500 ">Skills</span> at a glance
        </h1>
        <p className="text-[20px] mt-4 text-slate-500 text-center tracking-tighter">
          We support a breadth of technologies, best practices, use cases, and
          industries. Here are some of them.
        </p>
      </div>

      <nav className="flex w-full mt-4 border-b-2">
        <SkillsCard
          tag="build"
          setSection={setSection}
          section={section}
          name="What we build"
          imgURL={buildicon}
        />
        <SkillsCard
          tag="technologies"
          setSection={setSection}
          section={section}
          name="Technologies"
          imgURL={technologies}
        />
        <SkillsCard
          tag="practices"
          setSection={setSection}
          section={section}
          name="Practices"
          imgURL={practices}
        />
        <SkillsCard
          tag="industries"
          setSection={setSection}
          section={section}
          name="Industries"
          imgURL={industries}
        />
      </nav>

      <div>{renderPage()}</div>
    </section>
  );
};

export default Skills;
