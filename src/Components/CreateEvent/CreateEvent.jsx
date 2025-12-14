import React, { useContext, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { AuthContext } from "../../FirebaseAuthentication/AuthContext";
import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import axios from "axios";
import toast from "react-hot-toast";

const CreateEvent = () => {
  const { user } = useContext(AuthContext);
  const [startDate, setStartDate] = useState(new Date());
  const handleCreateEvent = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const badge = event.target.category.value;
    const image = event.target.imageURL.value;
    const organizationName = event.target.userName.value;
    const organizationEmail = event.target.userEmail.value;
    const location = event.target.location.value;
    const date = event.target.date.value;
    const time = event.target.time.value;
    const details = event.target.description.value;
    const newEvent = {
      title,
      badge,
      image,
      organizationName,
      organizationEmail,
      location,
      date,
      time,
      details,
    };
    axios.post("http://localhost:3030/events", newEvent).then((data) => {
      if (data.data.insertedId) {
        toast.success("Your Event is created Successfull 💖");
        event.target.reset();
      }
    });
  };
  return (
    <div>
      <Navbar />
      <main>
        {/* Back Button - Desktop */}
        <Link
          to="/"
          className="flex ml-5 my-3 items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-6 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to home</span>
        </Link>
        <div className="header">
          <h1 className="text-center md:text-4xl text-3xl font-bold">
            Create{" "}
            <span className="bg-linear-to-r from-green-700 to-emerald-500 bg-clip-text text-transparent">
              An Event
            </span>
          </h1>
        </div>
        <form className="form" onSubmit={handleCreateEvent}>
          <div className="min-h-screen">
            <div className="max-w-4xl mx-auto">
              <div className=" rounded-xl shadow-xl p-6 md:p-8 space-y-6">
                {/* Title & Category */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="label">
                      <span className="label-text font-medium">
                        Event Title
                      </span>
                    </label>
                    <input
                      type="text"
                      name="title"
                      placeholder="e.g. Tree Plantation Drive"
                      className="input input-bordered w-full"
                      required
                    />
                  </div>

                  <div>
                    <label className="label">
                      <span className="label-text font-medium">Category</span>
                    </label>
                    <select
                      name="category"
                      className="select select-bordered w-full"
                      required
                    >
                      <option value="">Select a Category</option>
                      <option value="cleanup">Cleanup</option>
                      <option value="plantation">Plantation</option>
                      <option value="donation">Donation</option>
                      <option value="sports">Sports</option>
                    </select>
                  </div>
                </div>

                {/* Event Image */}
                <div>
                  <label className="label">
                    <span className="label-text font-medium">
                      Event Cover Image URL
                    </span>
                  </label>
                  <input
                    type="url"
                    name="imageURL"
                    placeholder="https://example.com/image.jpg"
                    className="input input-bordered w-full"
                  />
                </div>

                {/* Organizer Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="label">
                      <span className="label-text font-medium">
                        User / Organization Name
                      </span>
                    </label>
                    <input
                      type="text"
                      name="userName"
                      readOnly
                      defaultValue={user.displayName}
                      className="input input-bordered w-full"
                    />
                  </div>

                  <div>
                    <label className="label">
                      <span className="label-text font-medium">
                        User / Organization Email
                      </span>
                    </label>
                    <input
                      type="email"
                      name="userEmail"
                      readOnly
                      defaultValue={user.email}
                      className="input input-bordered w-full"
                    />
                  </div>
                </div>

                {/* Location, Date & Time */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div>
                    <label className="label">
                      <span className="label-text font-medium">Location</span>
                    </label>
                    <input
                      type="text"
                      name="location"
                      placeholder="City, Area"
                      className="input input-bordered w-full"
                      required
                    />
                  </div>

                  <div className="flex flex-col justify-center">
                    <label className="label">
                      <span className="label-text font-medium">Event Date</span>
                    </label>
                    <div className="border p-2 rounded">
                      <DatePicker
                        className=""
                        name="date"
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        minDate={new Date()}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="label">
                      <span className="label-text font-medium">Event Time</span>
                    </label>
                    <input
                      type="time"
                      name="time"
                      className="input input-bordered w-full"
                      required
                    />
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label className="label">
                    <span className="label-text font-medium">
                      Event Description
                    </span>
                  </label>
                  <textarea
                    name="description"
                    placeholder="Describe your event, activities, and expectations..."
                    className="textarea textarea-bordered h-32 w-full"
                    required
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="btn btn-primary w-full text-white text-lg"
                  >
                    Create Event
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default CreateEvent;
