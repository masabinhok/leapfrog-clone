import React from "react";
import { lf_logo } from "../assets";
import BuildButton from "../components/BuildButton";
import Ham from "../components/Ham";
import NavElem from "../navbar/NavElem";
import Services from "./Services";
import { useState } from "react";
import JoinLeapfrog from "./JoinLeapfrog";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navElem, setNavElem] = useState("Home");
  return (
    <>
      <nav className="flex min-w-full h-[88px] items-center justify-between gap-2 px-6 max-md:h-[68px] max-lg:px-4 fixed top-0 left-0 w-full bg-white z-50 max-lg:justify-between ">
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
            <Link to="/">
              {" "}
              <NavElem setNavElem={setNavElem} navElem={navElem} navEl="Home" />
            </Link>{" "}
            <NavElem
              setNavElem={setNavElem}
              navElem={navElem}
              navEl="Services"
            />
            <NavElem
              setNavElem={setNavElem}
              navElem={navElem}
              navEl="Join Leapfrog"
            />
            <Link to="/blog">
              <NavElem setNavElem={setNavElem} navElem={navElem} navEl="Blog" />
            </Link>
            <Link to="/about">
              <NavElem
                setNavElem={setNavElem}
                navElem={navElem}
                navEl="About us"
              />
            </Link>
          </div>
        </div>
        <BuildButton name="BUILD" />
      </nav>
      <div className="mt-[88px] max-md:mt-[68px] max-md:hidden visible">
        {navElem === "Services" && <Services />}
        {navElem === "Join Leapfrog" && <JoinLeapfrog />}
      </div>
    </>
  );
};

export default Navbar;
