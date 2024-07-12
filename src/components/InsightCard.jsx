import HeroArrow from "./HeroArrow";

const InsightCard = ({ blog }) => {
  return (
    <div className="bg-[#f7f8fb]">
      <img src={blog.imgURL} alt="" />
      <div className="p-8">
        <p className="mb-2">{blog.date}</p>
        <h1 className="font-bold mb-3 text-[20px]">{blog.title}</h1>
        <p className="text-[16px] text-slate-500 mb-4">{blog.description}</p>
        <HeroArrow name="Read more" />
      </div>
    </div>
  );
};

export default InsightCard;
