import Button from "../components/Button";
import { feature3 } from "../assets";

const DesignCard = () => {
  return (
    <div className="p-[96px] flex  max-md:flex-col max-w-[1320px] gap-10 items-start justify-center">
      <div className="flex flex-col flex-1">
        <h1 className="font-[16px] text-white">DESIGN</h1>
        <p className="my-4 font-bold text-[32px] text-white">
          Go from
          <span className="text-green-500 font-600">idea </span> to
          <span className="text-green-500 font-600"> reality</span>
          just products
        </p>
        <p className="text-[20px] text-white tracking-tighter ">
          Realize your vision with our comprehensive and professional approach
          with Leapfrog’s design team. Our passion for what we do drives us to
          excel. We are not just pixel-pushers but thinkers and innovators.
        </p>
        <Button name="Explore Design" />
      </div>
      <div className="pt-10 flex-1">
        <img src={feature3} alt="" />
      </div>
    </div>
  );
};

export default DesignCard;
