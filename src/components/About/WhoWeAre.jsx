const WhoWeAre = ({ whoWeAre, siteData }) => {
  return (
    <div className="section techwix-about-section-07 section-padding">
      <div className="shape-1"></div>
      <div className="container">
        {/* About Wrapper Start */}
        <div className="about-wrap">
          <div className="row">
            <div className="col-lg-6">
              {/* About Image Wrap Start */}
              <div className="about-img-wrap">
                <img
                  className="shape-1"
                  src="/images/shape/about-shape2.png"
                  alt=""
                />
                <div className="about-img">
                  <img src="/images/about-3.jpg" alt="" />
                </div>
                <div className="about-img about-img-2">
                  <img src="/images/about-4.jpg" alt="" />
                </div>
              </div>
              {/* About Image Wrap End */}
            </div>
            <div className="col-lg-6">
              {/* About Content Wrap Start */}
              <div className="about-content-wrap">
                <div className="section-title">
                  <h3 className="sub-title">Who we are</h3>
                  <h2 className="title">{whoWeAre?.title}</h2>
                </div>
                <p className="text">{whoWeAre.desscription}</p>
                {/* About List Start */}
                <div className="about-list-03">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="about-list-item-03">
                        <h3 className="title">Our Mission</h3>
                        <p>
                          Accelerate innovation with world-class tech teams. We
                          help businesses elevate their value.
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="about-list-item-03">
                        <h3 className="title">Custom Code</h3>
                        <p>
                          Accelerate innovation with world-class tech teams. We
                          help businesses elevate their value.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* About List End */}
              </div>
              {/* About Content Wrap End */}
            </div>
          </div>
        </div>
        {/* About Wrapper End */}
      </div>
    </div>
  );
};

export default WhoWeAre;
