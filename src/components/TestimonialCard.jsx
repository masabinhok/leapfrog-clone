import React from "react";
import { double_quote } from "../assets";

const TestimonialCard = ({ name, company, post, ceo, say }) => {
  return (
    <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden p-6 mx-2">
      <div className="flex-shrink-0 mb-4 md:mb-0">
        <img className="w-48 h-48 object-cover rounded-full" src={ceo} alt={name} />
      </div>
      <div className="md:ml-6">
        <img className="my-4 w-10 h-8 object-contain" src={double_quote} alt="quote" />
        <p className="text-lg text-gray-600">{say}</p>
        <div className="flex items-center justify-between mt-4">
          <div>
            <h1 className="text-xl font-bold text-green-600">{name}</h1>
            <p className="text-gray-500">{post}</p>
          </div>
          <div className="flex-shrink-0">
            <img className="h-12" src={company} alt="Company Logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
