import React from "react";

const StatsCard = ({ stat }) => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <img className="mb-4 w-9 h-auto object-cover" src={stat.imgURL} alt="" />
      <p className="text-green-500 text-[48px] font-bold">{stat.number}</p>
      <p className="text-[16px]">{stat.title}</p>
    </div>
  );
};

export default StatsCard;
