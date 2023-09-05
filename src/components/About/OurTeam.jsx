import OurTeamSlider from "../shared/OurTeamSlider"

const OurTeam = () => {
  return (
    <div
      className="section techwix-team-section techwix-team-section-02 section-padding"
      style={{ backgroundImage: "url('/images/bg/team-bg1.jpg')" }}
    >
      <div className="container">
        {/* Team Wrap Start */}
        <div className="team-wrap">
          <div className="section-title text-center">
            <h3 className="sub-title">Our expert team </h3>
            <h2 className="title white"> We have world expert team</h2>
          </div>
          {/* Team Content Wrap Start */}
          <div className="team-content-wrap">
            <div className="swiper-container team-active">
             
             <OurTeamSlider />
            </div>
          </div>
          {/* Team Content Wrap End */}
        </div>
        {/* Team Wrap End */}
      </div>
    </div>
  );
};

export default OurTeam;
