import React from 'react';

import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import {AppBar, Button, Container, Grid, Toolbar} from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';


function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function Navbar(props) {
  return (
    <ThemeProvider theme={props.theme}>
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar style={{backgroundColor: "#cfd8dc"}}>
          <Container>
            <Grid
              container
              direction="row"
              justify="flex-end"
              alignItems="center"
            >
              <Toolbar>
                <Button className="btn" style={{margin: ".3em", fontSize: "1.2em"}} variant="outlined" href="#outlined-buttons">
                  Home
                </Button>
                <Button style={{margin: ".3em", fontSize: "1.2em"}} variant="outlined" href="#projects">
                  Projects
                </Button>
                <Button style={{margin: ".3em", fontSize: "1.2em"}} variant="outlined" href="#outlined-buttons">
                  Contact
                </Button>
              </Toolbar>
            </Grid>
          </Container>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
    </ThemeProvider>
  );
}