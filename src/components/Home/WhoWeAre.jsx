import { useState, useEffect } from "react";
import axios from "axios";
import { base_url } from "../shared/Url";
import { Link } from "react-router-dom";

const WhoWeAre = () => {
  const [testimonialData, setTestimonialData] = useState([]);
  const [siteData, setSiteData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    axios.get(`${base_url}/who-we-are`).then((res) => {
      setTestimonialData(res?.data[0]);
    });
  }, []);

  useEffect(() => {
    axios.get(`${base_url}/global-data`).then((res) => {
      const data = res?.data[0];
      setSiteData(data);
    });
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="section techwix-about-section-04 section-padding">
      <div className="shape-1"></div>
      <div className="container">
        <div className="about-wrap">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-content-wrap">
                <div className="section-title">
                  <h3 className="sub-title">Who we are</h3>
                  <h2 className="title">{testimonialData?.title}</h2>
                </div>
                <p className="text">{testimonialData?.description}</p>
                <div className="about-author-info-wrap">
                  <div className="about-author">
                    <img src="assets/images/sign.png" alt="" />
                    <h3 className="name">
                      {siteData?.ceo_name ? siteData?.ceo_name : "CEO Name"}
                    </h3>
                    <span className="designation">
                      CEO, {siteData?.company_name}
                    </span>
                  </div>
                  <div className="about-info">
                    <p>Call to ask any question</p>
                    <h3 className="number">{siteData?.company_number}</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-img-wrap">
                <div className="play-btn-02">
                  <a className="popup-video" onClick={openModal}>
                    <i className="fas fa-play"></i>
                  </a>
                </div>
                <div className="about-img about-img-big">
                  <img
                    src={base_url + testimonialData?.image_vertical}
                    alt=""
                  />
                </div>
                <div className="about-img about-img-sm">
                  <img
                    src={base_url + testimonialData?.image_horizontal}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="custom-modal">
          <div className="modal-content">
            <button className="close-modal" onClick={closeModal}>
              X
            </button>
            <iframe
              src={testimonialData?.video}
              title="Embedded YouTube Video"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhoWeAre;
