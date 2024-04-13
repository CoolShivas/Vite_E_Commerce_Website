import HeroSection from "../Header/HeroSection";

const AboutPage = () => {
  const data = {
    name: "Chouhan",
  };
  return (
    <>
      <h2> This is an about page. </h2>
      <HeroSection myData={data}></HeroSection>
    </>
  );
};

export default AboutPage;
