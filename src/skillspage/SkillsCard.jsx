const SkillsCard = ({ imgURL, name, setSection, tag, section }) => {
  const isActive = section === tag;

  const handleClick = () => {
    setSection(tag);
  };

  return (
    <div
      onClick={handleClick}
      className={`flex-1 p-6 max-lg:p-3 flex max-lg:flex-col text-center justify-center items-center gap-3 cursor-pointer hover:bg-slate-100 ${
        isActive ? "bg-slate-200" : ""
      } `}
    >
      <img className={`w-5 h-5`} src={imgURL} alt="" />
      <span className="text-lg max-lg:text-[10px] leading-normal">{name}</span>
    </div>
  );
};

export default SkillsCard;
