const Button = ({ name }) => {
  return (
    <button className="text-[16px] bg-green-600 flex py-3 px-4 gap-2 relative hover:bg-green-700 hover:shadow-lg rounded-lg w-fit my-6 text-white">
      {name} <span className="px-2">&rarr;</span>
    </button>
  );
};

export default Button;
