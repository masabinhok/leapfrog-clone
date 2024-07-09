import Button from "../components/Button";
import { feature5 } from "../assets";

const DevopsCard = () => {
  return (
    <div className="p-[96px] flex  max-md:flex-col max-w-[1320px] gap-10 items-start justify-center">
      <div className="flex flex-col flex-1">
        <h1 className="font-[16px] text-white">DEVOPS & CLOUD</h1>
        <p className="my-4 font-bold text-[32px] text-white">
          Cloud infrastructure{" "}
          <span className="text-green-500 font-600">simplified.</span>
        </p>
        <p className="text-[20px] text-white tracking-tighter ">
          We enable you with the right solution in any cloud platform of your
          choice from AWS to Azure. Utilize the power of the cloud to deploy
          your applications while keeping all the resources available and
          secure.
        </p>
        <Button name="Explore DevOps & Cloud" />
      </div>
      <div className="pt-10 flex-1">
        <img src={feature5} alt="" />
      </div>
    </div>
  );
};

export default DevopsCard;
