import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./page/Home";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Plan from "./components/Plan";
import Feature from "./components/Feature";
import Network from "./components/Network";
import Testimonials from "./components/Testimonials";
import Subscribe from "./components/Subscribe";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Hero />} />
          <Route path="/features" element={<Feature />} />
          <Route path="/pricing" element={<Plan />} />
          <Route path="/network" element={<Network />} />
          <Route path="/testinomials" element={<Testimonials />} />
          <Route path="/subscribe" element={<Subscribe />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
