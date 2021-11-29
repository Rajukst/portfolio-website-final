import React from "react";
import Contact from "../Contact/Contact";
import Education from "../Education/Education";
import MyNavBar from "../Navbar/MyNavBar";
import Project from "../Project/Project";
import Skills from "../Skills/Skills";
import TopBanner from "../Top-Banner/TopBanner";

const Header = () => {
  return (
    <div>
      <MyNavBar></MyNavBar>
      <TopBanner></TopBanner>
      <Skills></Skills>
      <Project></Project>
      <Education></Education>
      <Contact></Contact>
    </div>
  );
};

export default Header;
