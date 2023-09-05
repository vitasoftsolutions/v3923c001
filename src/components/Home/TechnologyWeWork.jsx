import { useEffect, useState } from "react";
import bgImg from "/images/bg/choose-us-bg.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import axios from "axios";
// import { base_url } from "../shared/Url";

const technology = [
  {
    id: 1,
    category: "Frontend",
    title: "React",
    logo: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
  },
  {
    id: 1,
    category: "Frontend",
    title: "React",
    logo: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
  },
  {
    id: 1,
    category: "Frontend",
    title: "React",
    logo: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
  },
  {
    id: 1,
    category: "Frontend",
    title: "React",
    logo: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
  },
  {
    id: 1,
    category: "Frontend",
    title: "React",
    logo: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
  },
  {
    id: 1,
    category: "Frontend",
    title: "React",
    logo: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
  },
  {
    id: 1,
    category: "Frontend",
    title: "React",
    logo: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
  },
  {
    id: 1,
    category: "Frontend",
    title: "Vue js",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/888px-Vue.js_Logo_2.svg.png",
  },
  {
    id: 1,
    category: "Frontend",
    title: "Vue js",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/888px-Vue.js_Logo_2.svg.png",
  },
  {
    id: 1,
    category: "Frontend",
    title: "Vue js",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/888px-Vue.js_Logo_2.svg.png",
  },
  {
    id: 1,
    category: "Frontend",
    title: "Vue js",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/888px-Vue.js_Logo_2.svg.png",
  },
  {
    id: 2,
    category: "Backend",
    title: "Django",
    logo: "/upload/upload/django-logo.png",
  },
  {
    id: 3,
    category: "Database",
    title: "Mysql",
    logo: "/upload/upload/mysql.png",
  },
  {
    id: 4,
    category: "Mobile Application",
    title: "Flutter",
    logo: "/upload/upload/flutter.png",
  },
];

const TechnologyWeWork = () => {
  const [tech, setTech] = useState([]);
  const [filteredTech, setFilteredTech] = useState([]);
  const [categories, setCategories] = useState(["All Category"]);
  const [selectedCategory, setSelectedCategory] = useState("All Category");

  // const url = "https://vitasoftserver.onrender.com/work-technology";

  useEffect(() => {
    // axios
    //   .get(url)
    //   .then((res) => {
    // const techData = res.data;
    // setTech(techData);
    // const allCategories = [...new Set(techData.map((item) => item.category))];
    //     setCategories(allCategories);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    setTech(technology);
    const allCategories = [...new Set(technology.map((item) => item.category))];
    setCategories(["All Category", ...allCategories]);
  }, []);

  useEffect(() => {
    const filtered =
      selectedCategory === "All Category"
        ? tech
        : tech.filter((techItem) => techItem.category === selectedCategory);
    setFilteredTech(filtered);
  }, [tech, selectedCategory]);

  const filterTechByCategory = (category) => {
    setSelectedCategory(category);
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
                          {category === "All Category"
                            ? tech.map((techItem) => (
                                <div key={techItem.id} className="techItem">
                                  <img
                                    src={techItem.logo}
                                    alt={techItem.title}
                                  />
                                  <b>{techItem.title}</b>
                                </div>
                              ))
                            : filteredTech
                                .filter(
                                  (techItem) => techItem.category === category
                                )
                                .map((techItem) => (
                                  <div key={techItem.id} className="techItem">
                                    <img
                                      src={techItem.logo}
                                      alt={techItem.title}
                                    />
                                    <b>{techItem.title}</b>
                                  </div>
                                ))}
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
