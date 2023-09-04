import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Nav_bar from "../components/shared/Nav_bar";
import "../App.css"

const LayoutMain = () => {
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
