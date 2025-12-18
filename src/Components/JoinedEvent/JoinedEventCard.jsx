import React from "react";
import { useNavigate } from "react-router";

const JoinedEventCard = ({ userEvent }) => {
  const { title, date } = userEvent;
  const navigate = useNavigate();
  const handleViewEvent = (_id) => {
    navigate(`https://bondhon-server.vercel.app/events/${_id}`);
  };
  return (
    <div>
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
            <td className="font-semibold text-lg">{date}</td>
            <td className="font-bold text-lg">{title}</td>
            <td>
              <div
                onClick={() => handleViewEvent(userEvent._id)}
                className="flex lg:flex-row flex-col items-center gap-5"
              >
                <button className="btn btn-outline btn-success text-success font-medium hover:text-white ">
                  View Event
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default JoinedEventCard;
