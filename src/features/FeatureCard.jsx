
const FeatureCard = ({ imgUrl, name, tag, setSection, section }) => {
  const isActive = section === tag;

  const handleClick = () => {
    setSection(tag);
  };

  return (
    <div
      onClick={handleClick}
      className={`flex-1 p-6 max-lg:p-3 flex max-lg:flex-col text-center justify-center items-center gap-3 cursor-pointer ${
        isActive ? "bg-black text-white" : ""
      }`}
    >
      <img
        className={`w-5 h-5 ${isActive ? "invert" : ""}`}
        src={imgUrl}
        alt=""
      />
      <span className="text-lg max-lg:text-[10px] leading-normal">{name}</span>
    </div>
  );
};

export default FeatureCard;
