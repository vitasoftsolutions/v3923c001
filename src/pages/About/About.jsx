import axios from "axios";
import { useState, useEffect } from "react";
import Counter from "../../components/About/Counter";
import OurTeam from "../../components/About/OurTeam";
import Testimonial from "../../components/About/Testimonial";
import WhoWeAre from "../../components/About/WhoWeAre";
import WhyUs from "../../components/About/WhyUs";
import AllPageBanner from "../../components/shared/AllPageBanner";
import { base_url } from "../../components/shared/Url";

const About = () => {
  const [whoWeAre, setWhoWeAre] = useState([]);
  const [siteData, setSiteData] = useState([]);
  const [servicesData, setServicesData] = useState([]);

  useEffect(() => {
    axios.get(`${base_url}/who-we-are`).then((res) => {
      setWhoWeAre(res?.data[0]);
    });

    axios.get(`${base_url}/global-data`).then((res) => {
      //global-data
      const data = res?.data[0];
      setSiteData(data);
    });

    axios.get(`${base_url}/services`).then((res) => {
      setServicesData(res.data);
    });
  }, []);

  return (
    <div>
      <AllPageBanner pageTitle="About Us" breadcrumb="About Us" />
      <WhoWeAre whoWeAre={whoWeAre} siteData={siteData} />
      <Counter />
      <WhyUs servicesData={servicesData} />
      <OurTeam />
      <Testimonial />
    </div>
  );
};

export default About;
