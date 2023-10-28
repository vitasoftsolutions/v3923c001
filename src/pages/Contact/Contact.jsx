import AllPageBanner from "../../components/shared/AllPageBanner";
import ContactForm from "../../components/Contact/ContactForm";
import ContactInfo from "../../components/Contact/ContactInfo";
import LocationMap from "../../components/Contact/LocationMap";
import axios from "axios";
import { base_url } from "../../components/shared/Url";
import { useEffect, useState } from "react";

const Contact = () => {
  const [siteData, setSiteData] = useState([]);
  const [siteAddress, setSiteAddress] = useState([]);
  const [socialData, setSocialData] = useState([]);
  useEffect(() => {
    axios.get(`${base_url}/global-data`).then((res) => {
      //global-data
      const data = res.data[0];
      setSiteData(data);
      const address = data?.address;
      setSiteAddress(address);
      const social = data?.social;
      setSocialData(social);
    });
  }, []);
  return (
    <div className="m_b">
      <AllPageBanner pageTitle="Contact" breadcrumb="Contact" />
      <ContactInfo
        siteData={siteData}
        siteAddress={siteAddress}
        socialData={socialData}
      />
      <ContactForm />
      <LocationMap />
    </div>
  );
};

export default Contact;
