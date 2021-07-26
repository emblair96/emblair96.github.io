import React from 'react';
import { Divider } from '@material-ui/core';
import Navbar from './Navbar';
import Header from './Header';
import Subheader from './Subheader';
import ComputerGraphic from './ComputerGraphic';
import AboutMe from './AboutMe';
import DeveloperJourney from './DeveloperJourney';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

export default function Home() {

  return (
    <>
      <Navbar />
      <div id="Home" />
      <Header />
      <Subheader text="SOFTWARE ENGINEER" />
      <ComputerGraphic />
      <Divider style={{ margin: "2em" }} />
      <Subheader text="ABOUT ME." />
      <AboutMe />
      <DeveloperJourney />
      <Divider style={{ margin: "2em" }} />
      <div id="Projects" />
      <Subheader text="MY WORK" />
      <Projects />
      <Divider style={{ margin: "2em" }} />
      <div id="Contact" />
      <Subheader text="CONTACT" />
      <Contact />
      <Divider style={{ margin: "4em" }} />
      <Footer />
    </>
  )
};