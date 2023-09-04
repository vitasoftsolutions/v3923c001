import image_in_video_sec2 from "/images/about-big2.jpg";
import image_in_video_sec3 from "/images/about-sm2.jpg";

const WhoWeAre = () => {
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
                  <h2 className="title">
                    Highly Tailored IT Design, Management & Support Services.
                  </h2>
                </div>
                <p className="text">
                  Accelerate innovation with world-className tech teams We’ll
                  match you to an entire remote team of incredible freelance
                  talent for all your software development needs.
                </p>
                {/* About Author Info Wrap Start */}
                <div className="about-author-info-wrap">
                  <div className="about-author">
                    <img src="assets/images/sign.png" alt="" />
                    <h3 className="name">Alen Morno sin</h3>
                    <span className="designation">CEO, Techmax</span>
                  </div>
                  <div className="about-info">
                    <p>Call to ask any question </p>
                    <h3 className="number">0123-456-7890</h3>
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
                    href="https://www.youtube.com/watch?time_continue=3&amp;v=_X0eYtY8T_U"
                  >
                    <i className="fas fa-play"></i>
                  </a>
                </div>
                <div className="about-img about-img-big">
                  <img src={image_in_video_sec2} alt="" />
                </div>
                <div className="about-img about-img-sm">
                  <img src={image_in_video_sec3} alt="" />
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
