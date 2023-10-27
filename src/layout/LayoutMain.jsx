import { useEffect } from 'react';
import { Outlet, useLocation  } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Nav_bar from "../components/shared/Nav_bar";
import "../App.css"

const LayoutMain = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  return (
    <div className="main-wrapper">
      <Nav_bar />
      <div className="outlet_height">
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};

export default LayoutMain;
