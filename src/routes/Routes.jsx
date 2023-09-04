import { createBrowserRouter } from "react-router-dom";

import Main from "../layout/LayoutMain";
import { useEffect, useState } from "react";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import Career from "../pages/Career/Career";
import Contact from "../pages/Contact/Contact";
import { base_url } from "../components/shared/Url";

function IndexWrapper() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`${base_url}/global-data`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    // Return a loading indicator while fetching data
    return (
      <div id="preloader">
        <div className="preloader">
          <span></span>
          <span></span>
        </div>
      </div>
    );
  }

  return <Home data={data} />;
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <div>404 error</div>,
    children: [
      {
        path: "/",
        element: <Home />,
        // loader: () => fetch(`${base_url}/global-data`),
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
