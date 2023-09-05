import Counter from "../../components/About/Counter";
import OurTeam from "../../components/About/OurTeam";
import Testimonial from "../../components/About/Testimonial";
import WhoWeAre from "../../components/About/WhoWeAre";
import WhyUs from "../../components/About/WhyUs";
import AllPageBanner from "../../components/shared/AllPageBanner";


const About = () => {
    return (
        <div>
            <AllPageBanner pageTitle="About Us" breadcrumb="About Us" />
            <WhoWeAre />
            <Counter />
            <WhyUs />
            <OurTeam />
            <Testimonial />
            <h1>About coming..</h1>
        </div>
    );
};

export default About;