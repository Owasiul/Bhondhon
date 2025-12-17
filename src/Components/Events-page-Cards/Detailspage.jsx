import axios from "axios";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Share2,
  ArrowLeft,
} from "lucide-react";
import { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router";
import { AuthContext } from "../../FirebaseAuthentication/AuthContext";
const Detailspage = ({ detailsInfo }) => {
  const { user } = useContext(AuthContext);
  //   console.log(detailsInfo);
  const {
    _id,
    title,
    badge,
    location,
    meetingPoint,
    date,
    time,
    details,
    whatToBring,
    image,
    participants,
    organizationName,
  } = detailsInfo || {};
  // joined event data
  const joinEvent = () => {
    axios
      .post("http://localhost:3030/joinedevents", {
        eventId: detailsInfo.id || detailsInfo._id,
        title: detailsInfo.title,
        image: detailsInfo.image,
        email: user.email,
      })
      .then(() => {
        // console.log(data.data);
      });
    toast.success(" you have joined this event Successfully!");
  };
  return (
    <div>
      <div className="min-h-screen bg-white">
        {/* --- Event Hero Section --- */}
        <figure className="relative w-full ">
          <img
            className="h-96 overflow-hidden w-full object-cover "
            src={image}
            alt=""
          />
          <div className="absolute bottom-5 p-5 space-y-3">
            <div className="badge badge-success text-white">{badge}</div>
            <div className="heading space-y-2 text-white fot-bold">
              <h2 className="text-4xl font-bold ">{title} </h2>
              <span className="text-lg">{organizationName}</span>
            </div>
          </div>
        </figure>
        {/* --- Main Content Layout --- */}
        <div className="w-[90%] mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* --- Left Column: Event Details --- */}
          <Link
            to="/events"
            className="lg:hidden flex items-center text-green-700 hover:text-green-800 font-semibold"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Events
          </Link>
          <div className="lg:col-span-2">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">About This Event</h2>
              <p className="text-gray-600 mb-6">{details}</p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-bold mb-3">What to Bring</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                {whatToBring &&
                  whatToBring.map((item, index) => <li key={index}>{item}</li>)}
              </ul>
            </section>

            <section className="mb-10">
              <h3 className="text-xl font-bold mb-3">Meeting Point</h3>
              <p className="text-gray-600">{meetingPoint || location}</p>
            </section>

            <Link
              to="/events"
              className="lg:flex hidden items-center text-green-700 hover:text-green-800 font-semibold"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Events
            </Link>
          </div>

          {/* --- Right Column: Key Info & Actions --- */}
          <div className="lg:col-span-1">
            <div className="card shadow-lg p-6 bg-base-100">
              <div className="space-y-4">
                {/* Date */}
                <div className="flex items-start">
                  <Calendar className="w-5 h-5 text-gray-500 mt-1 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Date</p>
                    <p className="font-semibold text-gray-800">{date}</p>
                  </div>
                </div>

                {/* Time */}
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-gray-500 mt-1 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Time</p>
                    <p className="font-semibold text-gray-800">{time}</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-gray-500 mt-1 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-semibold text-gray-800">{location}</p>
                  </div>
                </div>

                {/* Participants */}
                <div className="flex items-start pb-4 border-b border-gray-200">
                  <Users className="w-5 h-5 text-gray-500 mt-1 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Participants</p>
                    <p className="font-semibold text-gray-800">
                      {participants}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 space-y-3">
                <button
                  onClick={joinEvent}
                  className="btn btn-success w-full bg-green-600 hover:bg-green-700 border-none text-white text-lg font-bold"
                >
                  Join This Event
                </button>
                <button className="btn btn-outline btn-success w-full border-green-600 text-green-600 hover:bg-green-100">
                  <Share2 className="w-5 h-5 mr-2" />
                  Share Event
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detailspage;
