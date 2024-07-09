import Button from "../components/Button";
import { feature4} from "../assets";

const DataCard = () => {
  return (
    <div className="p-[96px] flex  max-md:flex-col max-w-[1320px] gap-10 items-start justify-center">
      <div className="flex flex-col flex-1">
        <h1 className="font-[16px] text-white">DATA & AI</h1>
        <p className="my-4 font-bold text-[32px] text-white">
          Let data
          <span className="text-green-500 font-600">drive your decisions </span>
        </p>
        <p className="text-[20px] text-white tracking-tighter ">
          Harness potential of data and artificial intelligence to drive
          innovation, insights, and growth. With our expert team and
          comprehensive services, including data engineering, advanced
          analytics, and AI/ML solutions, we unlock the hidden value in your
          data.
        </p>
        <Button name="Explore Data & AI" />
      </div>
      <div className="pt-10 flex-1">
        <img src={feature4} alt="" />
      </div>
    </div>
  );
};

export default DataCard;
