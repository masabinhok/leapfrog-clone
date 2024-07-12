import { fellowship, careers } from "../assets";
import NavCards from "./NavCards";

const JoinLeapfrog = () => {
  const joinLeapfrog = [
    {
      imgURL: careers,
      title: "Careers",
      description:
        "Come, be a part of the team and help us build the future of work.",
      hiring: true,
    },
    {
      imgURL: fellowship,
      title: "Fellowship",
      description:
        "Be a part of Leapfrog to experience and exciting, rewarding, and impactful career.",
      hiring: true,
    },
  ];

  return (
    <section className="w-full bg-[#f7f8fb] flex items-center justify-center p-8">
      <div className="grid grid-cols-3 max-w-[1320px] w-full  gap-6">
        {joinLeapfrog.map((join, index) => (
          <div className="bg-white flex flex-col p-8" key={index}>
            <NavCards array={join} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default JoinLeapfrog;
