import { product, team, data, devops, design } from "../assets";
import NavCards from "./NavCards";

const Services = () => {
  const services = [
    {
      imgURL: product,
      title: "Products & Technology",
      description:
        "From concept to completion, the design and delivery of technology and products",
    },
    {
      imgURL: team,
      title: "Team Augmentation",
      description:
        "A custom-built group of developers and designers to help you scale your team",
    },
    {
      imgURL: design,
      title: "Design",
      description:
        "Bring your product vision to life with UI/UX design, prototypes and videos.",
    },
    {
      imgURL: data,
      title: "Data & AI",
      description:
        "Smarter apps and better decisions with data engineering, analytics, ML and LLM ",
    },
    {
      imgURL: devops,
      title: "DevOps & Cloud",
      description:
        "Cloud-based solutions for world-class security, scalability and cost-effectiveness",
    },
  ];

  return (
    <section className="w-full bg-[#f7f8fb] flex items-center justify-center p-8">
      <div className="grid grid-cols-3 max-w-[1320px] w-full  gap-6">
        {services.map((service, index) => (
          <div className="bg-white flex flex-col p-8" key={index}>
            <NavCards array={service} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
