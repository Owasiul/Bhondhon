import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Page/Home";
import Events from "../Page/Events";
import SingleCardDetails from "../Components/Events-page-Cards/SingleCardDetails";
import Auth from "../Components/Login/Auth";
import Login from "../Components/Login/Login";
import Register from "../Components/Login/Register";
import Loading from "../Components/Loading/Loading";
import PrivateRoute from "../FirebaseAuthentication/PrivateRoute";
import JoinedEvent from "../Components/JoinedEvent/JoinedEvent";
import ManageEvent from "../Components/ManageEvent/ManageEvent";
import CreateEvent from "../Components/CreateEvent/CreateEvent";
const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    HydrateFallback: Loading,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("https://bondhon-server.vercel.app/futureevents"),
      },
    ],
  },
  {
    path: "/events",
    HydrateFallback: Loading,
    Component: Events,
    loader: () => fetch("https://bondhon-server.vercel.app/events"),
  },
  {
    path: "/events/:id",
    HydrateFallback: Loading,
    Component: SingleCardDetails,
    loader: () => fetch("https://bondhon-server.vercel.app/events"),
  },
  {
    path: "/auth",
    Component: Auth,
    HydrateFallback: Loading,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
    ],
  },
  {
    path: "/joinedevent",
    element: (
      <PrivateRoute>
        {" "}
        <JoinedEvent></JoinedEvent>
      </PrivateRoute>
    ),
  },
  {
    path: "/manageevent",
    element: (
      <PrivateRoute>
        <ManageEvent></ManageEvent>{" "}
      </PrivateRoute>
    ),
  },
  {
    path: "/createevent",
    element: (
      <PrivateRoute>
        <CreateEvent />
      </PrivateRoute>
    ),
  },
]);
export default router;
