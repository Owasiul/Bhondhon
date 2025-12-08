import React from "react";

const NewsLetter = () => {
  return (
    <div className="mt-5 bg-teal-900 p-5 text-center text-white w-full">
      <h1 className="text-5xl font-medium ">Stay Tuned</h1>
      <p className="lg:text-2xl text-xl lg:w-1/2 mx-auto mt-3">
        Subscribe to our newsletter and never miss an opportunity to make a
        difference in your community.
      </p>
      <div className="flex flex-row justify-center mt-5 mb-5">
        <input
          className="rounded-r w-96 h-12 p-3 border border-gray-300 shadow-sm focus:border-amber-600 focus:ring-2 focus:ring-amber-200 outline-none"
          type="text"
          placeholder="Enter your Email"
        />
        <button className="btn rounded-l bg-amber-600 h-12 px-6 text-white shadow-sm hover:bg-amber-700 transition">
          Subscribe Now
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
