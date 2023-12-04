import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "@/pages/index";
import Login from "@/pages/auth/login";
import Register from "@/pages/auth/register";
import Profile from "@/pages/profile/index";
import EditProfile from "@/pages/profile/edit-profile";
import Comment from "@/pages/posting/comment";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/edit-profile",
      element: <EditProfile />,
    },
    {
      path: "/comment",
      element: <Comment />,
    },
  ]);

  return <RouterProvider router={router} />;
}
