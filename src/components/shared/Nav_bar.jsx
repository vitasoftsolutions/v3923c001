import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { base_url } from "./Url";

const Nav_bar = () => {
  const [site_logo, setSite_logo] = useState([]);
  useEffect(() => {
    axios.get(`${base_url}/global-data`).then((res) => {
      //global-data
      const logo = res?.data[0]?.logo;
      setSite_logo(logo);
    });
  }, []);

  return (
    <nav>
      <div id="header" className="section header-section">
        <div className="container">
          <div className="header-wrap">
            <div className="header-logo">
              <Link to={"/"}>
                <img src={base_url + site_logo} alt="Vitasoft Logo" height={60} />
              </Link>
            </div>

            <div className="header-menu d-none d-lg-block">
              <ul className="main-menu">
                <li className="active-menu">
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/ourteam">OurTeam</Link>
                </li>

                <li>
                  <Link to="/career">Career</Link>
                </li>
              </ul>
            </div>
            {/* Contact Us Button */}
            <div className="header-meta">
              <div className="header-btn d-none d-xl-block">
                <Link className="btn" to="/contact">
                  Contact Us
                </Link>
              </div>
            </div>
            {/*  */}
            <div className="header-toggle d-lg-none">
              <button
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasExample"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
            {/*  */}

            {/* Offcanvas Start */}
            <div className="offcanvas offcanvas-start" id="offcanvasExample">
              <div className="offcanvas-header">
                {/* Offcanvas Logo Start  */}
                <div className="offcanvas-logo">
                  <Link to={"/"}>
                    <img src={base_url + site_logo} alt="Vitasoft Logo" />
                  </Link>
                </div>
                {/* Offcanvas Logo End  */}
                <button
                  type="button"
                  className="close-btn"
                  data-bs-dismiss="offcanvas"
                >
                  <i className="flaticon-close"></i>
                </button>
              </div>

              {/* Offcanvas Body Start  */}
              <div className="offcanvas-body">
                <div className="offcanvas-menu">
                  <ul className="main-menu">
                    <li className="active-menu close-btn">
                      <Link to="/">Home</Link>
                    </li>
                    <li data-bs-dismiss="offcanvas">
                      <Link to="/about">About Us</Link>
                    </li>
                    <li data-bs-dismiss="offcanvas">
                      <Link to="/services">Services</Link>
                    </li>
                    <li data-bs-dismiss="offcanvas">
                      <Link to="/ourteam">OurTeam</Link>
                    </li>
                    <li data-bs-dismiss="offcanvas">
                      <Link to="/career">Career</Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Offcanvas Body End  */}
            </div>
            {/* Offcanvas End */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav_bar;
