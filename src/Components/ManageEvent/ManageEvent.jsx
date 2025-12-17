import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { AuthContext } from "../../FirebaseAuthentication/AuthContext";
import axios from "axios";

const ManageEvent = () => {
  const { user } = useContext(AuthContext);
  const [ManageEvent, setManageEvent] = useState([]);
  useEffect(() => {
  if (user?.email) {
    axios
      .get("http://localhost:3030/manageevent", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => {
        setManageEvent(res.data);
        console.log(res.data);
      })
  }
}, [user]);

  return (
    <div>
      <Navbar />
      <main>Hello from manage Event . here you can Manage Your Event</main>
      <Footer />
    </div>
  );
};

export default ManageEvent;
