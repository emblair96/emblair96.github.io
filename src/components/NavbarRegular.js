import React from 'react';
import {
  AppBar,
  Button,
  Toolbar,
  CssBaseline,
  useScrollTrigger,
  Slide,
  Grid
} from '@material-ui/core';
import { Link } from 'react-scroll';
import './Navbar.css';

function HideOnScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function HideAppBar(props) {
  return (
    <div>
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar style= {{ background: 'transparent' }}>
          <Grid
            container
            direction="row"
            justify="flex-end"
          >
          <Toolbar>
            <Link to="Home" smooth="true">
              <Button className="btn" style={{ margin: ".3em", fontSize: "1.1em", color: "#37474F" }} variant="outlined" href="#home">
                Home
              </Button>
            </Link>
            <Link to="Projects" smooth="true" duration="100">
              <Button style={{ margin: ".3em", fontSize: "1.1em", color: "#37474F" }} variant="outlined" href="#projects">
                Projects
              </Button>
            </Link>
            <Link to="Contact" smooth="true" duration="100">
              <Button style={{ margin: ".3em", fontSize: "1.1em", color: "#37474F" }} variant="outlined" href="#contact">
                Contact
              </Button>
            </Link>
          </Toolbar>
          </Grid>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
    </div>
  )
};