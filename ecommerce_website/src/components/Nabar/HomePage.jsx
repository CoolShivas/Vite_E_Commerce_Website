import HeroSection from "../Header/HeroSection";

const HomePage = () => {
  const data = {
    name: "Shiva",
  };

  return (
    <>
      <h2> This is a home page. </h2>
      <HeroSection myData={data}></HeroSection>
    </>
  );
};

export default HomePage;
