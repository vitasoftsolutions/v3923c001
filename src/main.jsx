import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos"; // Import AOS library
import { router } from "./routes/Routes";

// Initialize AOS
AOS.init();
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
