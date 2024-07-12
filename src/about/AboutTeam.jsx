import { member1, member2 } from "../assets/index";
import TeamCard from "./TeamCard";

const AboutTeam = () => {
  const teamCard = [
    {
      imgURL: member1,
      name: "Chris Sprague",
      position: "CEO",
      about:
        "Chris drives the culture, delivery, and healthcare divisions at Leapfrog. He has a vast experience spanning 23 years, from leading enterprise innovation teams at Oracle to being CEO and co-founder of a successful venture-backed startup. He graduated from Stanford University in 2002 with degrees in Symbolic Systems and Computer Science, focusing on Human-Computer Interaction.",
    },
    {
      imgURL: member2,
      name: "Himal Karmacharya",
      position: "President",
      about:
        "Himal founded Leapfrog in 2010 and leads global growth and operations. An engineer by training, Himal has over 25 years of experience spanning enterprise, healthcare, and data. Himal is an accomplished business leader and speaker. Himal has previously served in leadership roles at Verisk Health, Oracle, and Motorola. He did his bachelor’s and master's in EECS at MIT.",
    },
    {
      imgURL: member1,
      name: "Chris Sprague",
      position: "CEO",
      about:
        "Chris drives the culture, delivery, and healthcare divisions at Leapfrog. He has a vast experience spanning 23 years, from leading enterprise innovation teams at Oracle to being CEO and co-founder of a successful venture-backed startup. He graduated from Stanford University in 2002 with degrees in Symbolic Systems and Computer Science, focusing on Human-Computer Interaction.",
    },
    {
      imgURL: member2,
      name: "Himal Karmacharya",
      position: "President",
      about:
        "Himal founded Leapfrog in 2010 and leads global growth and operations. An engineer by training, Himal has over 25 years of experience spanning enterprise, healthcare, and data. Himal is an accomplished business leader and speaker. Himal has previously served in leadership roles at Verisk Health, Oracle, and Motorola. He did his bachelor’s and master's in EECS at MIT.",
    },
    {
      imgURL: member1,
      name: "Chris Sprague",
      position: "CEO",
      about:
        "Chris drives the culture, delivery, and healthcare divisions at Leapfrog. He has a vast experience spanning 23 years, from leading enterprise innovation teams at Oracle to being CEO and co-founder of a successful venture-backed startup. He graduated from Stanford University in 2002 with degrees in Symbolic Systems and Computer Science, focusing on Human-Computer Interaction.",
    },
    {
      imgURL: member2,
      name: "Himal Karmacharya",
      position: "President",
      about:
        "Himal founded Leapfrog in 2010 and leads global growth and operations. An engineer by training, Himal has over 25 years of experience spanning enterprise, healthcare, and data. Himal is an accomplished business leader and speaker. Himal has previously served in leadership roles at Verisk Health, Oracle, and Motorola. He did his bachelor’s and master's in EECS at MIT.",
    },
    {
      imgURL: member1,
      name: "Chris Sprague",
      position: "CEO",
      about:
        "Chris drives the culture, delivery, and healthcare divisions at Leapfrog. He has a vast experience spanning 23 years, from leading enterprise innovation teams at Oracle to being CEO and co-founder of a successful venture-backed startup. He graduated from Stanford University in 2002 with degrees in Symbolic Systems and Computer Science, focusing on Human-Computer Interaction.",
    },
    {
      imgURL: member2,
      name: "Himal Karmacharya",
      position: "President",
      about:
        "Himal founded Leapfrog in 2010 and leads global growth and operations. An engineer by training, Himal has over 25 years of experience spanning enterprise, healthcare, and data. Himal is an accomplished business leader and speaker. Himal has previously served in leadership roles at Verisk Health, Oracle, and Motorola. He did his bachelor’s and master's in EECS at MIT.",
    },
    {
      imgURL: member1,
      name: "Chris Sprague",
      position: "CEO",
      about:
        "Chris drives the culture, delivery, and healthcare divisions at Leapfrog. He has a vast experience spanning 23 years, from leading enterprise innovation teams at Oracle to being CEO and co-founder of a successful venture-backed startup. He graduated from Stanford University in 2002 with degrees in Symbolic Systems and Computer Science, focusing on Human-Computer Interaction.",
    },
    {
      imgURL: member2,
      name: "Himal Karmacharya",
      position: "President",
      about:
        "Himal founded Leapfrog in 2010 and leads global growth and operations. An engineer by training, Himal has over 25 years of experience spanning enterprise, healthcare, and data. Himal is an accomplished business leader and speaker. Himal has previously served in leadership roles at Verisk Health, Oracle, and Motorola. He did his bachelor’s and master's in EECS at MIT.",
    },
    {
      imgURL: member1,
      name: "Chris Sprague",
      position: "CEO",
      about:
        "Chris drives the culture, delivery, and healthcare divisions at Leapfrog. He has a vast experience spanning 23 years, from leading enterprise innovation teams at Oracle to being CEO and co-founder of a successful venture-backed startup. He graduated from Stanford University in 2002 with degrees in Symbolic Systems and Computer Science, focusing on Human-Computer Interaction.",
    },
    {
      imgURL: member2,
      name: "Himal Karmacharya",
      position: "President",
      about:
        "Himal founded Leapfrog in 2010 and leads global growth and operations. An engineer by training, Himal has over 25 years of experience spanning enterprise, healthcare, and data. Himal is an accomplished business leader and speaker. Himal has previously served in leadership roles at Verisk Health, Oracle, and Motorola. He did his bachelor’s and master's in EECS at MIT.",
    },
    {
      imgURL: member1,
      name: "Chris Sprague",
      position: "CEO",
      about:
        "Chris drives the culture, delivery, and healthcare divisions at Leapfrog. He has a vast experience spanning 23 years, from leading enterprise innovation teams at Oracle to being CEO and co-founder of a successful venture-backed startup. He graduated from Stanford University in 2002 with degrees in Symbolic Systems and Computer Science, focusing on Human-Computer Interaction.",
    },
    {
      imgURL: member2,
      name: "Himal Karmacharya",
      position: "President",
      about:
        "Himal founded Leapfrog in 2010 and leads global growth and operations. An engineer by training, Himal has over 25 years of experience spanning enterprise, healthcare, and data. Himal is an accomplished business leader and speaker. Himal has previously served in leadership roles at Verisk Health, Oracle, and Motorola. He did his bachelor’s and master's in EECS at MIT.",
    },
    {
      imgURL: member1,
      name: "Chris Sprague",
      position: "CEO",
      about:
        "Chris drives the culture, delivery, and healthcare divisions at Leapfrog. He has a vast experience spanning 23 years, from leading enterprise innovation teams at Oracle to being CEO and co-founder of a successful venture-backed startup. He graduated from Stanford University in 2002 with degrees in Symbolic Systems and Computer Science, focusing on Human-Computer Interaction.",
    },
    {
      imgURL: member2,
      name: "Himal Karmacharya",
      position: "President",
      about:
        "Himal founded Leapfrog in 2010 and leads global growth and operations. An engineer by training, Himal has over 25 years of experience spanning enterprise, healthcare, and data. Himal is an accomplished business leader and speaker. Himal has previously served in leadership roles at Verisk Health, Oracle, and Motorola. He did his bachelor’s and master's in EECS at MIT.",
    },
    {
      imgURL: member1,
      name: "Chris Sprague",
      position: "CEO",
      about:
        "Chris drives the culture, delivery, and healthcare divisions at Leapfrog. He has a vast experience spanning 23 years, from leading enterprise innovation teams at Oracle to being CEO and co-founder of a successful venture-backed startup. He graduated from Stanford University in 2002 with degrees in Symbolic Systems and Computer Science, focusing on Human-Computer Interaction.",
    },
    {
      imgURL: member2,
      name: "Himal Karmacharya",
      position: "President",
      about:
        "Himal founded Leapfrog in 2010 and leads global growth and operations. An engineer by training, Himal has over 25 years of experience spanning enterprise, healthcare, and data. Himal is an accomplished business leader and speaker. Himal has previously served in leadership roles at Verisk Health, Oracle, and Motorola. He did his bachelor’s and master's in EECS at MIT.",
    },
  ];

  return (
    <section className="max-w-[1320px] flex flex-col p-5 py-[96px] max-md:py-[64px]">
      <div className="flex flex-col mb-[48px] ">
        <h1 className="mb-4 font-bold text-[16px]">MEET THE DREAM TEAM</h1>
        <p className=" max-md:text-[32px] text-[40px] font-bold tracking-tight">
          <span className="text-green-500">World-class people, </span>
          making <br /> a dent in the universe
        </p>
      </div>
      <div className="grid grid-cols-3 max-md:grid-cols-1 gap-6">
        {teamCard.map((team, index) => (
          <div key={team.name}>
            <TeamCard teamCard={team} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutTeam;
