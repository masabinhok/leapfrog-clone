import FooterCard from "../components/FooterCard";
import { footerCard } from "../constants/footercard";
import { rocket, boating } from "../assets";

const Newsletter = () => {
  return (
    <section className="flex w-full flex-col bg-black items-center justify-center pt-[96px] p-5 ">
      <div className="flex flex-col mb-4 max-w-[1320px]">
        <div>
          {" "}
          <h1 className="text-green-500 text-[40px] max-md:text-[32px] font-bold text-center">
            Ready to get started?
          </h1>
        </div>
        <div className="grid grid-cols-2 max-lg:grid-cols-1 justify-items-center items-center gap-8 mt-8">
          {footerCard.map((card) => (
            <div
              className={`p-12   ${
                card.bgImg === rocket ? "rounded-tr-[30%]" : "rounded-tl-[30%]"
              } relative aspect-square w-full`}
              style={{
                backgroundImage: `url(${card.bgImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              key={card.title}
            >
              <FooterCard
                bgImg={card.bgImg}
                title={card.title}
                para1={card.para1}
                para2={card.para2}
                buttonName={card.buttonName}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
