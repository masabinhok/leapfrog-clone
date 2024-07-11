import React from "react";
import Button from "./Button";

const FooterCard = ({ title, para1, para2, buttonName }) => {
  return (
    <div className="flex flex-col text-white bg-transparent opacity-1 p-12 inset-0 z-10   ">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p className="text-lg mb-4">{para1}</p>
      <p className="text-lg mb-4">{para2}</p>
      <Button name={buttonName} />
    </div>
  );
};

export default FooterCard;
