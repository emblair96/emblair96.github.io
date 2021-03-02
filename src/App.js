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
import {theme, theme2} from './theme';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App" style={{ backgroundColor: "#cfd8dc" }}>
      <Container>
          <ThemeProvider theme={theme}>
            <Navbar theme={theme} />
            <Header theme2={theme2}/>
            <Subheader theme2={theme2} text="About Me" />
              <AboutMe theme={theme} />
            <Subheader theme2={theme2} text="My Developer Journey" />
              <DeveloperJourney />
            <Subheader theme2={theme2} text="My Work" id="project" />
              <MyWork />
            <Subheader theme2={theme2} text="Contact Me" />
              <Contact theme2={theme2} />
            <Footer />
          </ThemeProvider>
      </Container>
    </div>
    </Router>
  );
}

export default App;
