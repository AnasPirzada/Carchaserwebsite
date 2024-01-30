import React from "react";
import OtherHero from "../../Components/OtherHero";
import VisionMission from "./VisionMission";
import Navbar from "../../Components/Navbar/index";
import Footer from "../../Components/Footer/index";

const index = () => {
  return (
    <>
      <Navbar />
      <OtherHero
        img="/Rectangle 3098.png"
        heading="Our Vision"
        heading1="Vision is the art of seeing what is invisible to others."
        // heading2 ='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.'
      />
      <VisionMission />
      <Footer />
    </>
  );
};

export default index;
