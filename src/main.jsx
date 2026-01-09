import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import "./index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Planets from "./pages/Planets.jsx";
import MyProfile from "./pages/MyProfile.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Layout
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "planet",
        element: <Planets></Planets>,
      },
      {
        path: "myprofile",
        element: <MyProfile></MyProfile>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
