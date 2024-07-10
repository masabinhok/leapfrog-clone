import BlogCard from "../components/BlogCard";
import { signeticBlog, laudioBlog } from "../assets";

const Blog = () => {
  const blogDetails = [
    {
      imgURL: laudioBlog,
      name: "laudio",
      heading:
        "We are leveraging AI and ML to help solve staff burnout at 10+ large hospitals",
      article:
        "We build a staff relationship management platform to achieve the vision to help frontline managers influence stronger staff engagement, satisfaction, and retention.",
    },
    {
      imgURL: signeticBlog,
      name: "SIGNETIC",
      heading:
        "We helped City of Seattle administer 1 million COVID closed to reach 70% full vaccination",
      article:
        "We beat Salesforce and Microsoft to be selected by the City of Seattle as the end-toend vaccination solution that made Seattle become the 1st large US city to reach 70% full vaccinations. This made up King County's 82% closes.",
    },
  ];
  return (
    <section className="flex items-center justify-center min-w-full bg-[#F7F8FB] max-lg:py-[64px] py-[96px] max-w-[1320px]">
      <div className="flex flex-col px-5 items-center justify-center">
        <div className="flex max-w-[1024px] text-center flex-col justify-center ">
          <h1 className="leading-normal tracking-tighter text-[32px] font-semibold">
            We have
            <span className=" tracking-tighter text-green-500">
              {" "}
              a proven track record
            </span>{" "}
            of ambitious products in complex environments.
          </h1>
          <p className="leading-normal tracking-tighter text-[20px] mt-4 text-slate-500">
            Since 2010, we've had over 100 fast-growing companies build apps,
            data-driven products, and cloud solutions that make an impact.
          </p>
        </div>

        <div className="grid max-md:grid-cols-1 grid-cols-2 max-w-[1320px] gap-5 min-lg:mx-[96px] mt-[48px] px-[120px] max-lg:px-3">
          {blogDetails.map((blog, idx) => (
            <BlogCard key={idx} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
