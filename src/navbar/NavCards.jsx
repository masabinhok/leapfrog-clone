const NavCards = ({ array }) => {
  return (
    <div>
      <img className="w-10 h-10" src={array.imgURL} alt={array.title} />
      <h2 className="text-xl font-bold mt-4 mb-2">{array.title}</h2>
      <p className="text-[#6b7280] text-[16px] mt-2">{array.description}</p>
    </div>
  );
};

export default NavCards;
