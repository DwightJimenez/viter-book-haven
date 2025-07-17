import Faq from "./faq/Faq";
import Featured from "./featured/Featured";
import Hero from "./hero/Hero";
import Testimonials from "./testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      <Featured />
      <Testimonials />
      <Faq />
    </>
  );
};

export default Home;
