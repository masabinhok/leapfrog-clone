import Companies from "../components/Companies";
import {
  microsoft,
  keller,
  laudio,
  macmillan,
  memora,
  ping,
  ucsf,
  phil,
} from "../assets";

const Trusted = () => {
  return (
    <section className="p-5 max-w-[1320px] flex flex-col py-[96px] tracking-tighter items-center ">
      <div>
        <h1 className="max-w-[1024px] text-[40px] font-[700] text-center max-lg:text-[32px]">
          Trusted by 150 <span className="text-green-600">+</span> enterprises,
          scale-ups and startups.
        </h1>
        <p className="max-w-[1024px] mt-4 text-[22px] max-lg:text-[20px] text-slate-500 text-center tracking-tighter">
          At Leapfrog, we have had the privilege of partnering with some of the
          most innovative and forward-thinking companies in the tech industry.
          From big companies to startups that hope to be big one day, they trust
          us with the expertise and support they need to bring their ideas to
          life.
        </p>
      </div>

      <div className=" max-w-[1320px] w-full grid max-md:grid-cols-2 grid-cols-4 mt-10">
        <Companies company={microsoft} />
        <Companies company={laudio} />
        <Companies company={keller} />
        <Companies company={memora} />
        <Companies company={ping} />
        <Companies company={ucsf} />
        <Companies company={phil} />
        <Companies company={macmillan} />
      </div>
    </section>
  );
};

export default Trusted;
