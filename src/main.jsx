import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS library


AOS.init(); // Initialize AOS
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Index from './components/Index/Index.jsx';
import Services from './components/Services/Services.jsx';
import Career from './components/Career/Career.jsx';
import Contact from './components/Contact/Contact.jsx';
const apiUrl = import.meta.env.VITE_API_URL;
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <div>404 error me</div>,

    children: [
      {
        path: '/',
        element: <IndexWrapper />,
        loader: () => fetch(`${apiUrl}/global-data`),
      },
      {
        path: "/",
        element: <Index></Index>,
        loader: () => fetch(`${apiUrl}/global-data`),
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
]);
function IndexWrapper() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`${apiUrl}/global-data`)
      .then(response => response.json())
      .then(data => {
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

  return <Index data={data} />;
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
