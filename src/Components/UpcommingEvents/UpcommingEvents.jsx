import React from "react";
import EventsCards from "./EventsCards";

const UpcommingEvents = ({ futureEvents }) => {
  return (
    <div className="mt-4 w-[90%] mx-auto">
      <h2 className="md:text-3xl text-2xl font-bold">Upcomming Events</h2>

      <div className="mt-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 justify-center items-center">
        {futureEvents.map((events, id) => (
          <EventsCards key={id} events={events} />
        ))}
      </div>
    </div>
  );
};

export default UpcommingEvents;
