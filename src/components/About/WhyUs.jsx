import React from "react";
import { Link } from "react-router-dom";
import { base_url } from "../shared/Url";

const WhyUs = ({ servicesData }) => {
  return (
    <div
      className="section techwix-choose-us-section section-padding"
      style={{ backgroundImage: "url('/images/bg/choose-us-bg3.jpg')" }}
    >
      <div className="container">
        {/* Choose Us Wrap Start */}
        <div className="choose-us-wrap">
          <div className="section-title text-center">
            <h3 className="sub-title">REASON TO CHOOSE US</h3>
            <h2 className="title">We provide truly prominent IT solutions.</h2>
          </div>
          <div className="choose-us-content-wrap">
            <div className="row">
              {servicesData.slice(0, 8).map((dt) => {
                return (
                  <div key={dt.id} className="col-xl-3 col-lg-4 col-md-6">
                    {/* Choose Us Item Start */}
                    <div className="choose-us-item-02">
                      <div className="choose-us-img">
                        <img src={base_url + dt?.image?.image} alt="" />
                      </div>
                      <div className="choose-us-content">
                        <h3 className="title">
                          <Link>
                            {dt?.title && (
                              <span>
                                <span className="first-word">
                                  {dt.title.split(" ")[0]}
                                </span>
                                {dt.title.split(" ").slice(1).join(" ")}
                              </span>
                            )}
                          </Link>
                        </h3>
                        <p>
                          {dt?.text}
                        </p>
                      </div>
                    </div>
                    {/* Choose Us Item End */}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* Choose Us Wrap End */}
      </div>
    </div>
  );
};

export default WhyUs;
