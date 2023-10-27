import Cta from "../../components/Services/Cta";
import Testimonial from "../../components/Services/Testimonial";
import WhyUs from "../../components/Services/WhyUs";
import AllPageBanner from "../../components/shared/AllPageBanner";
import axios from "axios";
import { useState, useEffect } from "react";
import { base_url } from "../../components/shared/Url";

const Services = () => {
  const [servicesData, setServicesData] = useState([]);
   const [siteData, setSiteData] = useState([]);

  useEffect(() => {
    axios.get(`${base_url}/services`).then((res) => {
      setServicesData(res.data);
    });

     axios.get(`${base_url}/global-data`).then((res) => {
      //global-data
      const data = res?.data[0];
      setSiteData(data);
    });
  }, []);
  return (
    <div>
      <AllPageBanner pageTitle="Our Services" breadcrumb="Services" />
      <WhyUs servicesData={servicesData}/>
      <Cta siteData={siteData} />
      <Testimonial />
    </div>
  );
};

export default Services;
