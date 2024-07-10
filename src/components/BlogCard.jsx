import HeroArrow from "./HeroArrow";

const BlogCard = ({ idx, blog }) => {
  return (
    <div className="flex flex-col bg-white   ">
      <img className="w-full h-[317px] object-cover" src={blog.imgURL} alt="" />
      <div className="flex flex-col px-10 py-5 ">
        <h1 className="font-bold py-3 text-[24px]">{blog.name}</h1>
        <h2 className="text-blue-800 max-lg:text-[16px] text-[18px] pb-3 font-semibold">
          {blog.heading}
        </h2>
        <p className="text-slate-500 text-[16px] max-lg:text-[14px]">
          {blog.article}
        </p>
        <div className="pt-10">
          <HeroArrow name="READ THE STORY" />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
