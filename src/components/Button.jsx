import { build_with_us } from "../assets";
import {  useState } from "react";

const Button = ({ name }) => {
  
  const [width, setWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
  })


  return (
    <button className="bg-green-600 flex py-3 px-4 gap-2 relative hover:bg-green-700 hover:shadow-lg rounded-lg">
    <img src={build_with_us} alt="build-with-us" />
    <p className="absolute text-white top-50 left-5 blink">-</p>
    <p className="text-white text-[14px] font-bold ">
      {width < 1024 ? name : name + " WITH US"}
    </p>
  </button>
  
  );
};

export default Button;
