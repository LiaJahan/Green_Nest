import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import "./index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Planets from "./pages/Planets.jsx";
import MyProfile from "./pages/MyProfile.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import PrivateRoute from "./routes/PrivateRoute.jsx";
import PlantDetails from "./pages/PlantDetails.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage></ErrorPage>,
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
        element: <PrivateRoute>
          <MyProfile></MyProfile>
        </PrivateRoute>
      },
      {
  path: "plant/:id",
  element: (
    <PrivateRoute>
      <PlantDetails></PlantDetails>
    </PrivateRoute>
  ),
}

    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
