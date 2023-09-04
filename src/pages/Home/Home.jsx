import Banner from "../../components/Home/Banner";
import Counter from "../../components/Home/Counter";
import TechnologyWeWork from "../../components/Home/TechnologyWeWork";
import WhoWeAre from "../../components/Home/WhoWeAre";
import Services from "../../components/Services/Services";



const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <WhoWeAre />
      <Counter />
      <TechnologyWeWork />
    </div>
  );
};

export default Home;
