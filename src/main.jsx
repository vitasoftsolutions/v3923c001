import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos"; // Import AOS library
import { router } from "./routes/Routes";

AOS.init(); // Initialize AOS

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);