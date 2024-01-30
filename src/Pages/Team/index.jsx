import React from "react";
import Navbar from "../../Components/Navbar/index";
import Footer from "../../Components/Footer/index";
import HeroSection from "./Components/HeroSection/HeroSection";
import Teamsection from "./Components/TeamSection/Teamsection";

const index = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Teamsection />
      <Footer />
    </>
  );
};

export default index;
