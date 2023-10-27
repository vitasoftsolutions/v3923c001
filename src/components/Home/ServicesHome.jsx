import axios from "axios";
import { useState, useEffect } from "react";
import { base_url } from "../shared/Url";
import { Link } from "react-router-dom";

const ServicesHome = () => {
  const [servicesData, setServicesData] = useState([]);
  useEffect(() => {
    axios.get(`${base_url}/services`).then((res) => {
      setServicesData(res.data);
    });
  }, []);

  return (
    <div
      className="section techwix-service-section-03"
      style={{
        backgroundImage:
          "url(https://github.com/iftesamulohy/vitasofttemplate/blob/master/assets/images/bg/service-bg3.jpg?raw=true)",
      }}
    >
      <div className="container">
        <div className="service-wrap-03">
          <div className="row">
            {servicesData?.map((dt) => {
              return (
                <div key={dt.id} className="col-xl-3 col-md-6">
                  <div className="service-item-03">
                    <div className="service-img">
                      <img src={base_url + dt?.image?.image} alt="" />
                    </div>
                    <div className="service-content">
                      <h3 className="title">
                        <Link to={"/services"}>{dt?.title}</Link>
                      </h3>
                      <p>{dt?.text}</p>
                      <div className="read-more">
                        <a href="service.html">
                          <i className={dt?.icon}></i> Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesHome;
