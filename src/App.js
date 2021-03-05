import React, { useEffect, useState, refs, useRef } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/Navbar';
import Header from './components/Header';
import Subheader from './components/Subheader';
import AboutMe from './components/AboutMe';
import MyWork from './components/MyWork';
import DeveloperJourney from './components/DeveloperJourney';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Container } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { theme, theme2 } from './theme';
import './App.css';

function App() {
  const [selected, setSelected] = useState()
  const selectedBtn = useRef(null);
  const handleBtnClick = (href) => {
    setSelected(href)
    refs.selected.scrollIntoView()
  }

  useEffect(() => {
    if (selected && selectedBtn.current) {
      selectedBtn.current.scrollIntoView();
      setSelected(false);
    }
  }, [selected, selectedBtn.current]);


  useEffect(() => console.log('selected', selected))

  return (
    <Router>
      <div className="App" style={{ backgroundColor: "#cfd8dc" }}>
        <Container>
          <ThemeProvider theme={theme}>
            <Link to={selected}>
              <Navbar theme={theme} onClickContact={() => setSelected(true)} btnRef={selectedBtn} />
            </Link>
            <div id="home"></div>
            <Header id="home" theme2={theme2} />
            <Subheader theme2={theme2} text="About Me" />
            <AboutMe theme={theme} />
            <Subheader theme2={theme2} text="My Developer Journey" />
            <DeveloperJourney />
            <div id="projects"></div>
            <Subheader theme2={theme2} text="My Work" id="project" />
            <MyWork />
            <div id="contact"></div>
            <Subheader theme2={theme2} text="Contact Me"  />
            <Contact theme2={theme2} />

            <Footer />
          </ThemeProvider>
        </Container>
      </div>
    </Router>
  );
}

export default App;
