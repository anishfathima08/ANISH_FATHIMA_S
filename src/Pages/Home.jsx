import React from "react";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Skill from "../Components/Skill";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Project from "../Components/Project";
import Contact from "../Components/Contact";
import Education from "../Components/Education";
import Experience from "../Components/Experience";
import Certificate from "../Components/Certificate";

const Home = () => {
  return (
    <>
      <Header />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      {/* <Hero /> */}
      {/* <About /> */}
      <Skill />
      <Experience />
      <Education />
      <Project />
      {/* <Certificate /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
    </>
  );
};

export default Home;