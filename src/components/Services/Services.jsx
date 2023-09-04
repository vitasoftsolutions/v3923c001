import image1 from "/images/ser-icon9.png";
import image2 from "/images/ser-icon10.png";
import image3 from "/images/ser-icon11.png";
import image4 from "/images/ser-icon12.png";
import { Link } from "react-router-dom";

const ServicesHomeData = [
  {
    services_name: "Web Development",
    services_image: image1,
    services_descriptions:
      "Accelerate innovation with world-class tech teams We’ll match you to an entire remote team of incredible freelance talent.",
  },
  {
    services_name: "ERP Software",
    services_image: image2,
    services_descriptions:
      "Accelerate innovation with world-class tech teams We’ll match you to an entire remote team of incredible freelance talent.",
  },
  {
    services_name: "Custom Software",
    services_image: image3,
    services_descriptions:
      "Accelerate innovation with world-class tech teams We’ll match you to an entire remote team of incredible freelance talent.",
  },
  {
    services_name: "App Development",
    services_image: image4,
    services_descriptions:
      "Accelerate innovation with world-class tech teams We’ll match you to an entire remote team of incredible freelance talent.",
  },
];

const Services = () => {
  const styles = {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    paddingBottom: "110px",
    backgroundImage:
      "url(https://github.com/iftesamulohy/vitasofttemplate/blob/master/assets/images/bg/service-bg3.jpg?raw=true)",
  };
  return (
    <div className="section techwix-service-section-03" style={styles}>
      <div className="container">
        <div className="service-wrap-03">
          {/* Service Cards */}
          <div className="row">
            {ServicesHomeData.map((service, index) => {
              return (
                <div key={index} className="col-xl-3 col-md-6">
                  <div className="service-item-03">
                    <div className="service-img">
                      <img
                        src={service.services_image}
                        alt={service.services_name}
                      />
                    </div>
                    <div className="service-content">
                      <h3 className="title">
                        <a href="service.html">{service.services_name}</a>
                      </h3>
                      <p>{service.services_descriptions}</p>
                      <div className="read-more">
                        <Link to={"/services"}>
                          <i className="fas fa-plus"></i> Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
