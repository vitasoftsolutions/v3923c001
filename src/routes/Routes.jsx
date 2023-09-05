import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/LayoutMain";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import Career from "../pages/Career/Career";
import Contact from "../pages/Contact/Contact";
import OurTeam from "../pages/OurTeam/OurTeam";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "ourteam",
        element: <OurTeam />,
      },
      {
        path: "career",
        element: <Career />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
  //   {
  //     path: "*",
  //     element: <ErrorPage />,
  //   },
]);
