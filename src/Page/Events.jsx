import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { useLoaderData } from "react-router";
import AllCard from "../Components/Events-page-Cards/AllCard";

const Events = () => {
  const allEvents = useLoaderData();
  return (
    <div>
      <Navbar />
      <main className="">
        <div className="header bg-cyan-100 p-5">
          <h2 className="text-3xl font-smibold">Browse Events</h2>
          <p className="text-lg mt-3 font-mono">
            Discover social service events happening in your area and join the
            movement.
          </p>
        </div>
        {/* main cards */}
        <div className="main-card w-[90%] mx-auto mt-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
          {allEvents.map((events, id) => (
            <AllCard key={id} events={events}></AllCard>
          ))}
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Events;
