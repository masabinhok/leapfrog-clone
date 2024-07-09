import Button from "../components/Button";
import { feature2 } from "../assets";

const TeamCard = () => {
  return (
    <div className="p-[96px] flex  max-md:flex-col max-w-[1320px] gap-10 items-start justify-center">
      <div className="flex flex-col flex-1">
        <h1 className="font-[16px] text-white">TEAM AUGMENTATION</h1>
        <p className="my-4 font-bold text-[32px] text-white">
          <span className="text-green-500 font-600">Dream teams, </span>not just
          all-stars
        </p>
        <p className="text-[20px] text-white tracking-tighter ">
          Move fast without breaking things with agile teams purpose-built to
          your needs. Discover how we combine talented people with fanatical
          training on how to work together to form higher-performing teams.
        </p>
        <Button name="Scale Your Team" />
      </div>
      <div className="pt-10 flex-1">
        <img src={feature2} alt="" />
      </div>
    </div>
  );
};

export default TeamCard;
