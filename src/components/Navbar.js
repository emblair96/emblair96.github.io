import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import {AppBar, Button, Container, Grid, Toolbar} from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';


function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}


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