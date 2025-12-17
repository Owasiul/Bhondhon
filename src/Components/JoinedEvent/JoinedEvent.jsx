import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import axios from "axios";
import { AuthContext } from "../../FirebaseAuthentication/AuthContext";
import JoinedEventCard from "./JoinedEventCard";

const JoinedEvent = () => {
  const { user } = useContext(AuthContext);
  const [joinedEvent, setJoinedEvent] = useState([]);
  useEffect(() => {
    if (user?.email) {
      axios
        .get(`http://localhost:3030/joinedevents?email=${user.email}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
        .then((data) => {
          setJoinedEvent(data.data);
        });
    }
  }, [setJoinedEvent, user]);
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
