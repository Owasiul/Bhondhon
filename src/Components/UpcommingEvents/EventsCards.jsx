
import { Calendar, MapPin, Users } from "lucide-react";
import React from "react";

const EventsCards = ({ events }) => {
  const { image, title, badge , location, date, participants} = events;
  return (
    <div>
      <div className="card md:w-96 w-full h-96 bg-lime-50 shadow-lg ">
        <figure className="relative">
          <img
            src={image}
            alt={title}
            className="h-56 w-full object-cover"
          />
          <div className="absolute right-3 top-3">
            <span className="badge badge-success badge-lg text-white">{badge}</span>
          </div>
        </figure>

        <div className="card-body p-5 space-y-4">
          <h2 className="card-title text-xl">
           {title}
          </h2>

          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-green-600"><MapPin/></span>
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600"><Calendar/></span>
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600"><Users/></span>
              <span>{participants} participants</span>
            </div>
          </div>

          <div className="card-actions justify-end mt-4">
            <button className="btn w-full rounded-xl text-lg bg-green-700 text-white hover:bg-green-900">Join Event</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsCards;
