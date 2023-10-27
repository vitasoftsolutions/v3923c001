import { useState, useEffect } from "react";
import axios from "axios";
import { base_url } from "../shared/Url";

const WhoWeAre = () => {
  const [testimonialData, setTestimonialData] = useState([]);
  const [siteData, setSiteData] = useState([]);

  useEffect(() => {
    axios.get(`${base_url}/who-we-are`).then((res) => {
      setTestimonialData(res?.data[0]);
    });
  }, []);

  useEffect(() => {
    axios.get(`${base_url}/global-data`).then((res) => {
      //global-data
      const data = res?.data[0];
      setSiteData(data);
    });
  }, []);

  return (
    <div className="section techwix-about-section-04 section-padding">
      <div className="shape-1"></div>
      <div className="container">
        {/* About Wrapper Start */}
        <div className="about-wrap">
          <div className="row">
            <div className="col-lg-6">
              {/* About Content Wrap Start */}
              <div className="about-content-wrap">
                <div className="section-title">
                  <h3 className="sub-title">Who we are</h3>
                  <h2 className="title">{testimonialData?.title}</h2>
                </div>
                <p className="text">{testimonialData?.desscription}</p>
                {/* About Author Info Wrap Start */}
                <div className="about-author-info-wrap">
                  <div className="about-author">
                    <img src="assets/images/sign.png" alt="" />
                    <h3 className="name">{siteData?.ceo_name ? siteData?.ceo_name : "SEO Name"}</h3>
                    <span className="designation">CEO, {siteData?.company_name}</span>
                  </div>
                  <div className="about-info">
                    <p>Call to ask any question </p>
                    <h3 className="number">{siteData?.company_number}</h3>
                  </div>
                </div>
                {/* About Author Info Wrap End */}
              </div>
              {/* About Content Wrap End */}
            </div>
            <div className="col-lg-6">
              {/* About Image Wrap Start */}
              <div className="about-img-wrap">
                <div className="play-btn-02">
                  <a
                    className="popup-video"
                    href={testimonialData?.video}
                  >
                    <i className="fas fa-play"></i>
                  </a>
                </div>
                <div className="about-img about-img-big">
                <img src={base_url + testimonialData?.image_vertical} alt="" />
                </div>
                <div className="about-img about-img-sm">
                  <img src={base_url + testimonialData?.image_horizontal} alt="" />
                </div>
              </div>
              {/* About Image Wrap End */}
            </div>
          </div>
        </div>
        {/* About Wrapper End */}
      </div>
    </div>
  );
};

export default WhoWeAre;
