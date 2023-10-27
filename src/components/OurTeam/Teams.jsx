import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { base_url } from "../shared/Url";

const Teams = () => {
  const [teamData, setTeamData] = useState([]);
  useEffect(() => {
    axios.get(`${base_url}/teams`).then((res) => {
      setTeamData(res.data);
    });
  }, []);

  return (
    <div className="section techwix-team-section techwix-team-section-03 section-padding">
      <div className="container">
        {/* Team Wrap Start */}
        <div className="team-wrap">
          <div className="row">
            {teamData?.slice(0, 8).map((dt) => {
              return (
                <div key={dt.id} className="col-lg-3 col-sm-6">
                  {/* Single Team Start */}
                  <div className="single-team">
                    <div className="team-img">
                      <Link>
                        <img src={base_url + dt?.image?.image} alt="" />
                      </Link>
                    </div>
                    <div className="team-content">
                      <h3 className="name">
                        <Link>
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
              );
            })}
          </div>
        </div>
        {/* Team Wrap End */}
      </div>
    </div>
  );
};

export default Teams;
