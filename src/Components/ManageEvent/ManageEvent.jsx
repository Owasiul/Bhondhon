import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { AuthContext } from "../../FirebaseAuthentication/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const ManageEvent = () => {
  const { user } = useContext(AuthContext);
  const [ManageEvent, setManageEvent] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (user?.email) {
      axios
        .get("https://bondhon-server.vercel.app/manageevent", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
        .then((res) => {
          // console.log(res.data);
          setManageEvent(res.data);
        });
    }
  }, [user]);
  const handleDeleteEvent = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          axios
            .delete("https://bondhon-server.vercel.app/events", {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              },
            })
            .then(toast.success("Your event is deleteed successfully"));
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            icon: "error",
          });
        }
      });
  };
  const handleViewEvent = (_id) => {
    navigate(`https://bondhon-server.vercel.app/events/${_id}`);
  };
  return (
    <div>
      <Navbar />
      <main className="w-[90%] mx-auto my-5">
        {ManageEvent.map((event) => (
          <div key={event._id || event.id} className="overflow-x-auto">
            <table className="table table-zebra">
              {/* head */}
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Title</th>
                  <th>Manage Event</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <td className="font-semibold text-lg">{event.date}</td>
                  <td className="font-bold text-lg">{event.title}</td>
                  <td>
                    <div
                      onClick={() => handleViewEvent(event._id)}
                      className="flex lg:flex-row flex-col items-center gap-5"
                    >
                      <button className="btn btn-outline btn-success text-success font-medium hover:text-white ">
                        View Event
                      </button>
                      <button
                        onClick={() => handleDeleteEvent(event._id)}
                        className="btn btn-outline btn-error text-error font-medium hover:text-white"
                      >
                        Delete Event
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default ManageEvent;
