import React from "react";

const Hero = () => {
  return (
    <div className="bg-linear-to-br from-green-50 to-blue-50 py-20 px-4 sm:px-6 lg:px-8 flex flex-col justify-center text-center lg:space-y-10 space-y-5">
      {/* text header */}
      <div className="header lg:space-y-7 space-y-4">
        <h1 className="text-5xl font-bold">
          Make a Difference in Your{" "}
          <span className="text-green-700">Community</span>
        </h1>
        <p className="text-neutral-600 font-medium text-lg md:w-[50%] w-full mx-auto mt-3">
          Join local social service events, environmental initiatives, and
          volunteer activities. Connect with like-minded people and create
          positive change together.
        </p>
      </div>
      {/* events btn */}
      <div className="flex justify-center mt-4 gap-5">
        <button className="btn text-white rounded-xl border-0 text-lg  bg-linear-to-r from-green-600 to-green-700 h-12">
          Brouse Events
        </button>
        <button className="btn rounded-xl border-2 border-green-800 text-lg h-12">
          Create Event
        </button>
      </div>
      {/* search bar */}
      <label className="input mx-auto md:w-xl md:h-14 w-full mt-3 shadow-md">
        <input type="search" required placeholder="Search events based on location or name" />
        <div className="bg-green-600 p-2 rounded">
          <svg
          className="h-[1em] opacity-50 text-white object-contain"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        </div>
      </label>
    </div>
  );
};

export default Hero;
