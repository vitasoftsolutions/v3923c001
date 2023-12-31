import Banner from "../../components/Home/Banner";
import Counter from "../../components/Home/Counter";
import Industries from "../../components/Home/Industries";
import OurTeam from "../../components/Home/OurTeam";
import TechnologyWeWork from "../../components/Home/TechnologyWeWork";
import Testimonial from "../../components/Home/Testimonial";
import WhoWeAre from "../../components/Home/WhoWeAre";
import ServicesHome from "../../components/Home/ServicesHome";



const Home = () => {

  return (
    <div>
      <Banner />
      <ServicesHome />
      <WhoWeAre />
      <Counter />
      <TechnologyWeWork />
      <Industries />
      <Testimonial />
      <OurTeam />
    </div>
  );
};

export default Home;
