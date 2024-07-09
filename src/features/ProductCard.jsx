import Button from "../components/Button";
import { feature1 } from "../assets";

const ProductCard = () => {
  return (
    <div className="p-[96px] flex  max-md:flex-col max-w-[1320px] gap-10 items-start justify-center">
      <div className="flex flex-col flex-1">
        <h1 className="font-[16px] text-white">PRODUCTS & TECHNOLOGY</h1>
        <p className="my-4 font-bold text-[32px] text-white">
          <span className="text-green-500 font-600">Deliver value, </span> not
          just products
        </p>
        <p className="text-[20px] text-white tracking-tighter ">
          Build digital experiences people love to use. Learn how we use
          battle-tested processes to systematically design and develop software
          that solves problems, delights users, and optimizes businesses.
        </p>
        <Button name="Explore Product Engineering" />
      </div>
      <div className="pt-10 flex-1">
        <img src={feature1} alt="" />
      </div>
    </div>
  );
};

export default ProductCard;
