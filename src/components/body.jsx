import React from "react";
import Login from "./login";

import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Browse from "./browse";

const Body = () => {
  return (
    <RouterProvider router={appRouter}>
      <Outlet />
    </RouterProvider>
  );
};

export default Body;

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
]);
