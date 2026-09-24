import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Stats from "./components/Stats";
import Properties from "./components/Properties";
import Team from "./components/Team.jsx";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Headers from "./components/Headers.jsx";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <>
      <BrowserRouter>
        <Headers />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/About" element={<About  title="ABOUT US"/>} />
          <Route path="/Features" element={<Features  title="Features ."/>} />
          <Route path="/Stats" element = {<Stats title = "Statistics"/> }/>
        </Routes>
        <Footer />
      </BrowserRouter>

      {/* 
      
      <Features />
      <Stats />
      <Team />
      <Properties />
      <Testimonials />
      */}
    </>
  );
}

export default App;