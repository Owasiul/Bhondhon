import React from "react";

const JoinedEventCard = ({ userEvent }) => {
  const { title, location, date } = userEvent;
  return (
    <div>
      <div className=" w-full bg-base-100 border border-zinc-600">
        <div className=" flex justify-between p-5">
          <div className="">
            <p className="font-bold text-lg">{title}</p>
          </div>
          <div className="">
            <span className="">Location: {location}</span>
          </div>
          <div className="">
            <span className="">date: {date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinedEventCard;
