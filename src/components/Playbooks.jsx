import HeroArrow from "./HeroArrow";

const Playbooks = ({ imgURL, about }) => {
  return (
    <div className="p-12 flex flex-col ">
      <img src={imgURL} alt="" />
      <p className="text-center py-6 text-slate-500">{about}</p>
      <div className="flex items-center flex-col">
        <HeroArrow name="GET THE BOOK" />
      </div>
    </div>
  );
};

export default Playbooks;
