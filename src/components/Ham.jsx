import { ham_bar } from "../assets";
import { cross } from "../assets";
import { useState } from "react";
const Ham = () => {
  const [ham, setHam] = useState(ham_bar);
  const handleHam = () => {
    ham === ham_bar ? setHam(cross) : setHam(ham_bar);
  };
  return (
    <img
      onClick={handleHam}
      className="w-[30px] h-[30px]  max-md:block hidden"
      src={ham}
      alt="ham-menu"
    />
  );
};

export default Ham;
