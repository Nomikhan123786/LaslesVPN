import Feature from "../components/Feature";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Network from "../components/Network";

import Plan from "../components/Plan";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Feature />
      <Plan />
      <Network />
    </div>
  );
};

export default Home;
