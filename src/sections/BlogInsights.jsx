import { hackathon } from "../assets";
import InsightCard from "../components/InsightCard";

const BlogInsights = () => {
  const blog1 = [
    {
      imgURL: hackathon,
      date: "MAY 21, 2024",
      title: "Hackathon adventures: Mapping concept to code",
      description:
        "Deep dive into the exhilating experiences of the Team low-key as thye map their idea to a product, employing a fusion of thoughtful planning, technical proficiency, and a unwavering team dedication.",
    },
    {
      imgURL: hackathon,
      date: "MAY 21, 2024",
      title: "Hackathon adventures: Mapping concept to code",
      description:
        "Deep dive into the exhilating experiences of the Team low-key as thye map their idea to a product, employing a fusion of thoughtful planning, technical proficiency, and a unwavering team dedication.",
    },
  ];

  const blog2 = [
    {
      imgURL: hackathon,
      date: "MAY 21, 2024",
      title: "Hackathon adventures: Mapping concept to code",
      description:
        "Deep dive into the exhilating experiences of the Team low-key as thye map their idea to a product, employing a fusion of thoughtful planning, technical proficiency, and a unwavering team dedication.",
    },
    {
      imgURL: hackathon,
      date: "MAY 21, 2024",
      title: "Hackathon adventures: Mapping concept to code",
      description:
        "Deep dive into the exhilating experiences of the Team low-key as thye map their idea to a product, employing a fusion of thoughtful planning, technical proficiency, and a unwavering team dedication.",
    },
    {
      imgURL: hackathon,
      date: "MAY 21, 2024",
      title: "Hackathon adventures: Mapping concept to code",
      description:
        "Deep dive into the exhilating experiences of the Team low-key as thye map their idea to a product, employing a fusion of thoughtful planning, technical proficiency, and a unwavering team dedication.",
    },
    {
      imgURL: hackathon,
      date: "MAY 21, 2024",
      title: "Hackathon adventures: Mapping concept to code",
      description:
        "Deep dive into the exhilating experiences of the Team low-key as thye map their idea to a product, employing a fusion of thoughtful planning, technical proficiency, and a unwavering team dedication.",
    },
    {
      imgURL: hackathon,
      date: "MAY 21, 2024",
      title: "Hackathon adventures: Mapping concept to code",
      description:
        "Deep dive into the exhilating experiences of the Team low-key as thye map their idea to a product, employing a fusion of thoughtful planning, technical proficiency, and a unwavering team dedication.",
    },
    {
      imgURL: hackathon,
      date: "MAY 21, 2024",
      title: "Hackathon adventures: Mapping concept to code",
      description:
        "Deep dive into the exhilating experiences of the Team low-key as thye map their idea to a product, employing a fusion of thoughtful planning, technical proficiency, and a unwavering team dedication.",
    },
    {
      imgURL: hackathon,
      date: "MAY 21, 2024",
      title: "Hackathon adventures: Mapping concept to code",
      description:
        "Deep dive into the exhilating experiences of the Team low-key as thye map their idea to a product, employing a fusion of thoughtful planning, technical proficiency, and a unwavering team dedication.",
    },
    {
      imgURL: hackathon,
      date: "MAY 21, 2024",
      title: "Hackathon adventures: Mapping concept to code",
      description:
        "Deep dive into the exhilating experiences of the Team low-key as thye map their idea to a product, employing a fusion of thoughtful planning, technical proficiency, and a unwavering team dedication.",
    },
  ];
  return (
    <section className="max-w-[1320px] flex flex-col pt-[80px] p-5">
      <div>
        <h1 className="mb-9 text-[24px] font-semibold">Blog Insights</h1>
      </div>
      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-10">
        {blog1.map((blog, index) => (
          <div key={index}>
            {" "}
            <InsightCard blog={blog} />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-8 p-5">
        {blog2.map((blog, index) => (
          <div key={index}>
            {" "}
            <InsightCard blog={blog} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogInsights;
