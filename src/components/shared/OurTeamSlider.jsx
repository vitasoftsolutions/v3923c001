import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import axios from "axios";
import { base_url } from "./Url";

const OurTeamSlider = () => {
  const [teamData, setTeamData] = useState([]);
  useEffect(() => {
    axios.get(`${base_url}/teams`).then((res) => {
      setTeamData(res.data);
    });
  }, []);

  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={0}
      loop={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
    >
      {teamData?.slice(0, 4).map((dt) => {
        return (
          <SwiperSlide key={dt?.id}>
            <div className="swiper-slide">
              {/* Single Team Start */}
              <div className="single-team">
                <div className="team-img">
                  <Link to={"/ourteam"}>
                    <img src={base_url + dt?.image?.image} alt="" />
                  </Link>
                </div>
                <div className="team-content">
                  <h3 className="name">
                    <Link to={"/ourteam"}>
                      {dt?.name && (
                        <span>
                          <span className="first-word">
                            {dt.name.split(" ")[0]}
                          </span>
                          {dt.name.split(" ").slice(1).join(" ")}
                        </span>
                      )}
                    </Link>
                  </h3>
                  <span className="designation">{dt?.designation}</span>
                  <div className="team-social">
                    <ul className="social">
                      {dt?.social?.map((social) => {
                        return (
                          <li key={social.id}>
                            <a href={social.link}>
                              <i className={social.icon_class}></i>
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
              {/* Single Team End */}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default OurTeamSlider;
