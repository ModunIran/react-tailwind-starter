import { Navigate, Outlet } from "react-router-dom";
import Home from "../views/home/home";
import NotFound from "../views/404/404";

const routes = [
  {
    path: "/",
    element: <Outlet />,
    children: [
      { index: true, element: <Navigate replace to="/home" /> },
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
