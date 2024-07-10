import { useState, useEffect } from "react";
import {
  discoverData,
  appDevData,
  dataCloudData,
  dataSciData,
  validateData,
  rockSolidData,
  buildData,
} from "../constants/tech";

const TechCard = ({ imgURL, Heading, tag }) => {
  const [section, setSection] = useState("products");

  useEffect(() => {
    setSection(tag);
  }, [tag]);

  const renderArray = () => {
    switch (section) {
      case "discovery":
        return discoverData;
      case "appdev":
        return appDevData;
      case "datacloud":
        return dataCloudData;

      case "datasci":
        return dataSciData;

      case "validated":
        return validateData;
      case "rocksolid":
        return rockSolidData;

      case "buildDeploy":
        return buildData;

      default:
        return [];
    }
  };

  return (
    <div className="flex p-12 flex-col bg-[#f7f8fb]">
      <img className="w-6 h-6" src={imgURL} alt="" />
      <h1 className="font-bold text-[20px]">{Heading}</h1>
      {renderArray().map((data) => (
        <div
          className="text-[16px] flex flex-col border-b-2 mb-8 pb-8"
          key={data.title}
        >
          <h1 className="mt-8 font-semibold mb-2">{data.title}</h1>
          <p>{data.details}</p>
        </div>
      ))}
    </div>
  );
};

export default TechCard;
