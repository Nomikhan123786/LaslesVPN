import Feature from "../components/Feature";
import Hero from "../components/Hero";

import Network from "../components/Network";

import Plan from "../components/Plan";
import Subscribe from "../components/Subscribe";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div>
      <Hero />
      <Feature />
      <Plan />
      <Network />
      <Testimonials />
      <Subscribe />
    </div>
  );
};

export default Home;
