import React from "react";
import Footer from "../components/Footer";
import Game from "../components/Game";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Roadmap from "../components/Roadmap";
import Story from "../components/Story";
import Team from "../components/Team";
// import Mint from "./components/Mint";

const Home = () => {
  return (
    <div className="Home">
      <div>
        <Header />
        <HeroSection />
        <Story />
        <Game />
        <Roadmap />
        <Team />
        {/* <Mint /> */}
        <Footer />
      </div>
    </div>
  );
};

export default Home;
