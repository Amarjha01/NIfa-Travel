import { createBrowserRouter } from "react-router-dom";
import App from "../App";  // Main layout component
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Bookings from "../pages/Bookings";
import Flights from "../pages/Flights";
import Hotels from "../pages/Hotels";
import Buses from "../pages/Buses";
import Profile from "../pages/Profile";
import AdminDashboard from "../pages/AdminDashboard"; // Fixed typo

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Ensure App contains <Outlet />
    children: [
      { path: "", element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "bookings", element: <Bookings /> },
      { path: "flights", element: <Flights /> },
      { path: "hotels", element: <Hotels /> },
      { path: "buses", element: <Buses /> },
      { path: "profile", element: <Profile /> },
      { path: "admin", element: <AdminDashboard /> }, // Fixed typo
    ],
  },
]);

export default router;
