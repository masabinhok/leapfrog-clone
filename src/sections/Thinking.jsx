import { playbooks } from "../constants/playbook";
import Playbooks from "../components/Playbooks";

const Thinking = () => {
  return (
    <section className="max-w-[1320px] flex flex-col items-center justify-center py-[96px] p-5 mx-[136px] max-lg:mx-4">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="font-bold text-[40px] max-md:text-[32px]">
          See what <span className="text-green-500">we are thinking</span>
        </h1>
        <p className="text-[22px] max-md:text-[20px] mt-4">
          We're not just doers, we're tinkerers and thinkers obsessed with
          building new things in better ways. Read some of
          <a href="/">our insights,</a>
          <a href="/">download our playbooks</a>
        </p>
      </div>
      <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1">
        {playbooks.map((book) => (
          <div key={book.about}>
            <Playbooks imgURL={book.imgURL} about={book.about} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Thinking;
