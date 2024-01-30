import React from "react";
import OtherHero from "../../Components/OtherHero";
import SuccessJourney from "./SuccessJourney";
import Navbar from "../../Components/Navbar/index";
import Footer from "../../Components/Footer/index";

const Story = () => {
  return (
    <>
      <Navbar />
      <OtherHero
        img="/Rectangle 3099.png"
        heading="Our Story"
        heading1="Our passion led us here"
        heading2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."
      />
      <SuccessJourney />
      <Footer />
    </>
  );
};

export default Story;
