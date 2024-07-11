import Button from "../components/Button";
import { shakehands } from "../assets";

const TechnologyPartner = () => {
  return (
    <section className="flex justify-center w-full bg-[#f7f8fb]">
      <div className="grid grid-cols-7 gap-2 max-w-[1320px] mx-[136px] max-md:mx-5 max-md:grid-cols-1">
        <div className="col-span-3 flex items-center justify-center max-md:w-full">
          <img
            src={shakehands}
            alt="Shake Hands"
            className="max-w-[700px] max-h-[700px] max-md:rotate-90"
          />
        </div>
        <div className="col-span-4 flex flex-col my-12 max-md:my-4 pl-6 max-md:py-4 tracking-tighter leading-normal justify-center">
          <label className="text-[16px] mb-4 font-bold">
            THE LEAPFROG DIFFERENCE
          </label>
          <h2 className="text-[40px] max-md:text-[32px] font-bold">
            We strive to be a{" "}
            <span className="text-green-500">better technology partner.</span>
          </h2>
          <p className="text-[22px] max-md:text-[20px] text-slate-500 my-4">
            At our core, we are 450 people obsessed with innovating with
            technology in the right ways
          </p>
          <p className="text-slate-500 text-[16px]">
            We are 100% oriented around solving your problems and making you
            successful. If you need skilled people, we make sure they have the
            talent and nature to plug right into your team. When you have a job
            for us, we move mountains to make sure it's done well and on time.
            We pride ourselves on earning your trust, providing demonstrable
            value, and being great at what we do - together.
          </p>
          <Button name="Learn more" />
        </div>
      </div>
    </section>
  );
};

export default TechnologyPartner;
