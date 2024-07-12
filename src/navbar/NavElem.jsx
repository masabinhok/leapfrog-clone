const NavElem = ({ navEl, navElem, setNavElem }) => {
  const handleClick = (navEl) => {
    {
      navElem === navEl ? setNavElem("home") : setNavElem(navEl);
    }
  };

  return (
    <div
      onClick={() => handleClick(navEl)}
      className="p-8 max-xl:px-3  hover:bg-gray-100"
    >
      {navEl}
    </div>
  );
};
export default NavElem;
