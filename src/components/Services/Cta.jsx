import React from "react";

const Cta = ({ siteData }) => {
  return (
    <div className="section techwix-cta-section-04 techwix-cta-section-06 techwix-cta-section-07">
      <div className="container">
        <div
          className="cta-wrap"
          style={{ backgroundImage: "url('/images/bg/cta-bg5.jpg')" }}
        >
          <div className="row align-items-center">
            <div className="col-lg-7">
              {/* Cta Left Start */}
              <div className="cta-left">
                <div className="section-title">
                  <h2 className="title white">
                    To make requests for further information, contact us{" "}
                  </h2>
                </div>
              </div>
              {/* Cta Left End */}
            </div>
            <div className="col-lg-5">
              {/* Cta Right Start */}
              <div className="cta-info text-center">
                <div className="cta-icon">
                  <img src="assets/images/cta-icon2.png" alt="" />
                </div>
                <div className="cta-text">
                  <p>Call Us For Any inquiry</p>
                  <h3 className="number">{siteData?.company_number}</h3>
                </div>
              </div>
              {/* Cta Right End */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
