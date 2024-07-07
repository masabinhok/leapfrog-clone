import React from "react";
import { lf_logo } from "../assets";
import Button from "./Button";
import Ham from "./Ham";
import NavElem from "./NavElem";

const Navbar = () => {
  return (
    <nav className="flex min-w-full h-[88px] items-center justify-between gap-2 px-6 max-md:h-[68px] max-lg:px-4 max-lg:justify-between ">
      <div className="flex w-[195px] max-lg:w-[126px] gap-6 items-center ">
        <Ham />
        <img
          className="w-[195px] h-[37px] max-lg:w-[126px] max-lg:h-[24px] "
          src={lf_logo}
          alt="lf-logo"
        />
      </div>
      <div className="flex flex-1 justify-start max-md:hidden">
        <div className="flex px-8 max-lg:px-3">
          <NavElem navEl="Home" />
          <NavElem navEl="Services" />
          <NavElem navEl="Join Leapfrog" />
          <NavElem navEl="Blog" />
          <NavElem navEl="About us" />
        </div>
      </div>
      <Button name="BUILD" />
    </nav>
  );
};

export default Navbar;
