import React from "react";
import Contact from "../Contact/Contact";
import Education from "../Education/Education";
import HoverNavBar from "../HoverNavBar/HoverNavBar";
import MyNavBar from "../Navbar/MyNavBar";
import Project from "../Project/Project";
import Skills from "../Skills/Skills";
import TopBanner from "../Top-Banner/TopBanner";

const Header = () => {
  return (
    <div>
      <MyNavBar></MyNavBar>
      {/* <HoverNavBar></HoverNavBar> */}
      <TopBanner></TopBanner>
      <Skills></Skills>
      <Project></Project>
      <Education></Education>
      <Contact></Contact>
    </div>
  );
};

export default Header;
