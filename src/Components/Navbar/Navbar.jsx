import { Link, Navigate, NavLink, useNavigate } from "react-router";
import logo from "../../assets/logo.png";
import "./Navbar.css";
import { AuthContext } from "../../FirebaseAuthentication/AuthContext";
import { useContext } from "react";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleJoinedEvent = () => {
    navigate("/joinedevent");
  };
  const handleManageEvent = () => {
    navigate("/manageevent");
  };
  const handleCreateEvent = () => {
    navigate("/createevent");
  };
  const navlink = (
    <div className="flex lg:flex-row flex-col lg:space-x-3">
      <li className="text-lg font-medium hover:text-green-400">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="text-lg font-medium hover:text-green-400">
        <NavLink to="/events">Upcomming Events</NavLink>
      </li>
    </div>
  );
  return (
    <nav className="shadow-sm">
      <div className="navbar md:px-5 px-3 w-full">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-y-3"
            >
              {navlink}
            </ul>
          </div>
          <a className="logo">
            <img className="object-contain w-24 md:w-32" src={logo} alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navlink}</ul>
        </div>
        <div className="navbar-end flex space-x-3">
          {user ? (
            <details className="dropdown dropdown-end">
              <summary className="m-1 btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL} alt="User" />
                </div>
              </summary>
              <ul className="menu dropdown-content mt-3 z-1 p-2 shadow-md bg-gray-200 rounded-box w-52 space-y-1.5">
                {/* create event */}
                <li>
                  <button
                    onClick={handleCreateEvent}
                    className="btn btn-sm bg-linear-to-r from-green-700 to-emerald-500 text-white"
                  >
                    Create Event
                  </button>
                </li>
                {/* joined event */}
                <li>
                  <button
                    onClick={handleJoinedEvent}
                    className="btn btn-sm bg-linear-to-r from-green-700 to-emerald-500 text-white"
                  >
                    Joined event
                  </button>
                </li>
                {/* manage event */}
                <li>
                  <button
                    onClick={handleManageEvent}
                    className="btn btn-sm bg-linear-to-r from-green-700 to-emerald-500 text-white"
                  >
                    Manage Event
                  </button>
                </li>

                {/* log out */}
                <li>
                  <button
                    onClick={logOut}
                    className="btn btn-sm bg-linear-to-r from-rose-700 to-red-500 text-white"
                  >
                    Sign Out
                  </button>
                </li>
              </ul>
            </details>
          ) : (
            <div className="sm:space-x-3 space-x-0 space-y-3 sm:space-y-0 flex sm:flex-row flex-col items-center justify-center ">
              <Link
                to="/auth/login"
                className="btn md:w-28 w-20 px-4 py-2  bg-white border-green-500 font-semibold text-[16px]"
              >
                Login
              </Link>
              <Link
                to="/auth/register"
                className="btn md:w-28 w-20 px-4 py-2  bg-white border-green-500 font-semibold text-[16px]"
              >
                Register
              </Link>{" "}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
