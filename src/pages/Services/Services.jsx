
import Cta from "../../components/Services/Cta";
import Testimonial from "../../components/Services/Testimonial";
import WhyUs from "../../components/Services/WhyUs";
import AllPageBanner from "../../components/shared/AllPageBanner";



const Services = () => {
    return (
        <div>
            <AllPageBanner pageTitle="Our Services" breadcrumb="Services" />
            <WhyUs />
            <Cta />
            <Testimonial />
        </div>
    );
};

export default Services;