import HeroArrow from "../components/HeroArrow";

const TeamCard = ({ teamCard }) => {
  return (
    <div className="p-8 flex flex-col justify-start items-start bg-[#f7f8fb]">
      <img
        className="max-w-[160px] rounded-full aspect-square"
        src={teamCard.imgURL}
        alt=""
      />
      <h1 className="font-bold mb-2 text-[24px]">{teamCard.name}</h1>
      <p className="text-[16px]">{teamCard.position}</p>
      <p className="my-4 text-[16px]">{teamCard.about}</p>
      <div className="flex justify-start py-3">
        <HeroArrow name="Linked in" />
      </div>
    </div>
  );
};

export default TeamCard;
