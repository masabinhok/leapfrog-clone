import React from "react";

const SkillsBox = ({ imgURL, title, about }) => {
  return (
    <div className="bg-[#f7f8fb] p-12 flex flex-col gap-3">
      <img className="w-6 h-6" src={imgURL} alt="" />
      <h1 className="font-bold text-[20px] ">{title}</h1>
      <p className="text-[16px]">{about}</p>
    </div>
  );
};

export default SkillsBox;
