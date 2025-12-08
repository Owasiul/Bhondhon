import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Page/Home";
import Events from "../Page/Events";
import SingleCardDetails from "../Components/Events-page-Cards/SingleCardDetails";
import Auth from "../Components/Login/Auth";
import Login from "../Components/Login/Login";
import Register from "../Components/Login/Register";
const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
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
    Component: Events,
    loader: () => fetch("/events.json"),
  },
  {
    path: "/events/:id",
    Component: SingleCardDetails,
    loader: () => fetch("/events.json"),
  },
  {
    path: "/auth",
    Component: Auth,
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
]);
export default router;
