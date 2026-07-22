import Feature from "../components/Feature";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Network from "../components/Network";

import Plan from "../components/Plan";
import Subscribe from "../components/Subscribe";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div>
      <Navbar />
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
