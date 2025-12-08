import React from "react";
import Hero from "../Components/Hero/Hero";
import UpcommingEvents from "../Components/UpcommingEvents/UpcommingEvents";
import { useLoaderData } from "react-router";
import Gallery from "../Components/Gallery/Gallery";
import NewsLetter from "../Components/Newsletter/NewsLetter";

const Home = () => {
  const futureEvents = useLoaderData();
  
  return (
    <div className="space-y-5 w-full">
      {/* hero */}
      <Hero />
      {/* upcomming events */}
      <UpcommingEvents futureEvents={futureEvents} />
      {/* gallery */}
      <Gallery />
      {/* Newsletter */}
      <NewsLetter/>
    </div>
  );
};

export default Home;
