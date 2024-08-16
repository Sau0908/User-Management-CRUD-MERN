import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UsersPage from "./pages/UsersPage";
import ResetUserPage from "./pages/ResetUserPage";

import EditUserRecordPage from "./pages/EditUserRecordPage";

const AllRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <UsersPage />,
    },
    {
      path: "/edit/:userId",
      element: <EditUserRecordPage />,
    },
    {
      path: "/createuser",
      element: <ResetUserPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AllRoutes;
