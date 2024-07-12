import { calendar, group, happy, verified } from "../assets";
import StatsCard from "./StatsCard";

const AboutStats = () => {
  const stats = [
    {
      id: 1,
      imgURL: calendar,
      title: "Years of operation",
      number: "13+",
    },
    {
      id: 2,
      title: "Skilled professionals",
      number: "450+",
      imgURL: group,
    },
    {
      id: 4,
      title: "Net Promoter Score",
      imgURL: verified,
      number: "77",
    },
    {
      id: 3,
      title: "Happy Clients",
      number: "150+",
      imgURL: happy,
    },
  ];

  return (
    <section className="w-full bg-[#f7f8fb] flex items-center justify-center">
      {" "}
      <div className="grid grid-cols-4  max-md:grid-cols-1 w-full max-w-[1320px] py-[96px] justify-items-center">
        {stats.map((stat) => (
          <div key={stat.id}>
            <StatsCard stat={stat} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutStats;
