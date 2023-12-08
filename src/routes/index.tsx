import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";

import Home from "@/pages/index";
import Login from "@/pages/auth/login";
import Register from "@/pages/auth/register";
import Profile from "@/pages/profile/index";
import EditProfile from "@/pages/profile/edit-profile";
import Comment from "@/pages/posting/comment";
import ProtectedRoutes from "./protected-routes";

export default function Router() {
  const router = createBrowserRouter([
    {
      element: <ProtectedRoutes />,
      children: [
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
          path: "/user/:user_id/profile",
          element: <Profile />,
        },
        {
          path: "/user/:user_id",
          element: <EditProfile />,
        },
        {
          path: "/posting/:posting_id",
          element: <Comment />,
        },
        {
          path: "*",
          element: (
            <div className="min-h-screen w-full flex flex-col justify-center items-center gap-5">
              <p className="text-9xl font-bold tracking-wide">Oops!</p>
              <p className="text-xl font-bold">404-PAGE NOT FOUND</p>
              <div className="flex flex-col items-center">
                <p>The page you are looking for might have been removed</p>
                <p>had it's name changed or is temporary unavailable.</p>
              </div>
              <button className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-300 hover:text-black hover:border hover:border-gray-300">
                <Link to="/">GO TO HOMEPAGE</Link>
              </button>
            </div>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
