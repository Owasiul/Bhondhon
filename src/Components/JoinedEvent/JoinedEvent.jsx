import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import { AuthContext } from "../../FirebaseAuthentication/AuthContext";
import JoinedEventCard from "./JoinedEventCard";

const JoinedEvent = () => {
  const { user } = useContext(AuthContext);
  const [joinedEvent, setJoinedEvent] = useState([]);
  const axiosSecure = UseAxiosSecure();
  useEffect(() => {
    if (user?.email) {
      axiosSecure.get(`/joinedevents?email=${user.email}`).then((data) => {
        setJoinedEvent(data.data);
      });
    }
  }, [setJoinedEvent, user, axiosSecure]);
  return (
    <div>
      <Navbar />
      <main className="space-y-2 my-5 w-[90%] mx-auto">
        {joinedEvent.map((userEvent) => (
          <JoinedEventCard key={userEvent._id} userEvent={userEvent} />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default JoinedEvent;
