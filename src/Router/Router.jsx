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
const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    HydrateFallback: Loading,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("/futureEvents.json"),
      },
    ],
  },
  {
    path: "/events",
    HydrateFallback: Loading,
    Component: Events,
    loader: () => fetch("/events.json"),
  },
  {
    path: "/events/:id",
    HydrateFallback: Loading,
    Component: SingleCardDetails,
    loader: () => fetch("/events.json"),
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
    element: <JoinedEvent></JoinedEvent>,
  },
  {
    path: "/manageevent",
    Component: ManageEvent,
  },
]);
export default router;
