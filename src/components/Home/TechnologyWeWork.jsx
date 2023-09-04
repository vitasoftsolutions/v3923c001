import { useEffect, useState } from "react";
import bgImg from "/images/bg/choose-us-bg.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import axios from "axios";
import { base_url } from "../shared/Url";

const TechnologyWeWork = () => {
  const [tech, setTech] = useState([]);
  const [filteredTech, setFilteredTech] = useState([]);
  const [category, setCategory] = useState("Frontend");

  const url = "https://vitasoftserver.onrender.com/work-technology";

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        console.log(res.data)
        setTech(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const filtered = tech?.filter((tech) => tech.category === category);
    setFilteredTech(filtered);

    console.log(filtered, "filtered")
  }, [tech, category]);

  const filterTechByCategory = (category) => {
    setCategory(category);
  };

  const bgStyles = {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    paddingBottom: "110px",
    backgroundImage: `url("${bgImg}")`,
  };
  return (
    <div
      className="section techwix-choose-us-section section-padding"
      style={bgStyles}
    >
      <div className="container">
        {/* Choose Us Wrap Start  */}
        <div className="choose-us-wrap">
          <div className="section-title text-center">
            <h2 className="title">Technology We Work With.</h2>
          </div>
          <div className="choose-us-content-wrap">
            <div className="row"></div>
            <div className="row">
              <div className="col-lg-12">
                <div className="more-choose-content text-center">
                  {/*  */}
                  <Tabs>
                    <TabList className="tab_list ">
                      <Tab
                        className={`m_tab ${
                          category === "Frontend"
                            ? "bg-white text-primary"
                            : "btn"
                        }`}
                        onClick={() => filterTechByCategory("Frontend")}
                      >
                        Frontend
                      </Tab>
                      <Tab
                        className={`m_tab ${
                          category === "Action"
                            ? "bg-white text-primary"
                            : "btn"
                        }`}
                        onClick={() => filterTechByCategory("Action")}
                      >
                        Action
                      </Tab>
                      <Tab
                        className={`m_tab ${
                          category === "Figures"
                            ? "bg-white text-primary"
                            : "btn"
                        }`}
                        onClick={() => filterTechByCategory("Figures")}
                      >
                        Figures
                      </Tab>
                    </TabList>

                    <TabPanel>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 p-4 justify-center">
                        {filteredTech?.map((tech) => (
                          <>
                            <h1>{tech.category}</h1>
                            <img src={`${base_url + tech.logo}`} alt="" />
                          </>
                        ))}
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 p-4 justify-center">
                        {filteredTech?.map((toy) => (
                          <>
                            <h1>Toy</h1>
                          </>
                        ))}
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 p-4 justify-center">
                        {filteredTech?.map((toy) => (
                          <>
                            <h1>Toy</h1>
                          </>
                        ))}
                      </div>
                    </TabPanel>
                  </Tabs>

                  {/*  */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Choose Us Wrap End */}
      </div>
    </div>
  );
};

export default TechnologyWeWork;
