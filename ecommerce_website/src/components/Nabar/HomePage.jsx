import FeaturedProducts from "../../reducerStore/FeaturedProducts";
import Trusted from "../Main/Trusted";
import Services from "../Main/Services";
import HeroSection from "../Header/HeroSection";

const HomePage = () => {
  const data = {
    name: "Shiva",
  };

  return (
    <>
      <h2> This is a home page. </h2>
      <HeroSection myData={data}></HeroSection>
      <FeaturedProducts></FeaturedProducts>
      <Services></Services>
      <Trusted></Trusted>
    </>
  );
};

export default HomePage;
