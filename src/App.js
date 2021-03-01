import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Subheader from './components/Subheader';
import AboutMe from './components/AboutMe';
import { ThemeProvider } from '@material-ui/styles';
// import { blueGrey, red } from '@material-ui/core/colors';
import {theme, theme2} from './theme';
import { Container } from '@material-ui/core';


function App() {
  return (
    <div className="App" style={{ backgroundColor: "#cfd8dc" }}>
      <Container>
          <ThemeProvider theme={theme}>
            <Navbar theme={theme} />
            <Header theme2={theme2} />
            <Subheader theme2={theme2} text="About Me" />
            <AboutMe theme={theme} />
            <Subheader theme2={theme2} text="My Developer Journey" />
            <Subheader theme2={theme2} text="My Work" />
            <Subheader theme2={theme2} text="Contact Me" />
          </ThemeProvider>
      </Container>
    </div>
  );
}

export default App;
