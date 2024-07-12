
import TeamCard from "./TeamCard";
import { teamCard } from "../constants/teamCard";

const AboutTeam = () => {
  return (
    <section className="max-w-[1320px] flex flex-col p-5 py-[96px] max-md:py-[64px]">
      <div className="flex flex-col mb-[48px] ">
        <h1 className="mb-4 font-bold text-[16px]">MEET THE DREAM TEAM</h1>
        <p className=" max-md:text-[32px] text-[40px] font-bold tracking-tight">
          <span className="text-green-500">World-class people, </span>
          making <br /> a dent in the universe
        </p>
      </div>
      <div className="grid grid-cols-3 max-md:grid-cols-1 gap-6">
        {teamCard.map((team, index) => (
          <div key={team.name}>
            <TeamCard teamCard={team} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutTeam;
