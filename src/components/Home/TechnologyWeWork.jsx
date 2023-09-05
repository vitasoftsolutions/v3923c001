import { useEffect, useState } from "react";
import bgImg from "/images/bg/choose-us-bg.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import axios from "axios";
import { base_url } from "../shared/Url";

const TechnologyWeWork = () => {
  const [tech, setTech] = useState([]);
  const [categories, setCategories] = useState(["All Category"]);
  const [selectedCategory, setSelectedCategory] = useState("All Category");
  const [showMore, setShowMore] = useState({});

  const url = "https://vitasoftserver.onrender.com/work-technology";

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        const technology = res.data;
        console.log(technology, "______technology");
        setTech(technology);
        const allCategories = [
          ...new Set(technology.map((item) => item.category)),
        ];
        setCategories(["All Category", ...allCategories]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    setShowMore({});
  }, [selectedCategory]);

  const filterTechByCategory = (category) => {
    setSelectedCategory(category);
  };

  const toggleShowMore = (category) => {
    setShowMore((prevShowMore) => ({
      ...prevShowMore,
      [category]: !prevShowMore[category],
    }));
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
        {/* Choose Us Wrap Start */}
        <div className="choose-us-wrap">
          <div className="section-title text-center">
            <h2 className="title">Technology We Work With.</h2>
          </div>
          <div className="choose-us-content-wrap">
            <div className="row">
              <div className="col-lg-12">
                <div className="more-choose-content text-center">
                  <Tabs>
                    <TabList className="tab_list">
                      {categories.map((category) => (
                        <Tab
                          key={category}
                          className={`m_tab ${
                            selectedCategory === category
                              ? "bg-white text-primary"
                              : "btn"
                          }`}
                          onClick={() => filterTechByCategory(category)}
                        >
                          {category}
                        </Tab>
                      ))}
                    </TabList>

                    {categories.map((category) => (
                      <TabPanel key={category}>
                        <div className="category">
                          {tech
                            .filter((techItem) =>
                              selectedCategory === "All Category"
                                ? true
                                : techItem.category === selectedCategory
                            )
                            .slice(0, showMore[category] ? tech.length : 10)
                            .map((techItem) => (
                              <div key={techItem.id} className="techItem">
                                <img
                                  src={base_url + techItem.logo}
                                  alt={techItem.title}
                                />
                                <b>{techItem.title}</b>
                              </div>
                            ))}
                          {tech.filter((techItem) =>
                            selectedCategory === "All Category"
                              ? true
                              : techItem.category === selectedCategory
                          ).length > 10 && (
                            <div style={{ width: "100%" }}>
                              <button
                                className="see_btn"
                                onClick={() => toggleShowMore(category)}
                              >
                                {showMore[category] ? (
                                  <>
                                    See Less <i className="fas fa-arrow-left" />
                                  </>
                                ) : (
                                  <>
                                    See More{" "}
                                    <i className="fas fa-arrow-right" />
                                  </>
                                )}
                              </button>
                            </div>
                          )}
                        </div>
                      </TabPanel>
                    ))}
                  </Tabs>
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
