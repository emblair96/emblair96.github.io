import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { AppBar, Button, Container, Grid, Toolbar } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import {Link} from 'react-scroll';

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


export default function Navbar(props, ref) {

  return (
    <ThemeProvider theme={props.theme}>
      <React.Fragment>
        <CssBaseline />
        <ElevationScroll {...props}>
          <AppBar style={{ backgroundColor: "#cfd8dc" }}>
            <Container>

              <Grid
                container
                direction="row"
                justify="flex-end"
                alignItems="center"
              >

                <Toolbar>
                  
                  <Link to="home">
                    <Button className="btn" style={{ margin: ".3em", fontSize: "1.2em" }} variant="outlined" to="#home"> 
                      Home
                    </Button>
                  </Link>
                  <Link to="projects">
                    <Button style={{ margin: ".3em", fontSize: "1.2em" }} variant="outlined" href="#projects">
                      Projects
                    </Button>
                  </Link>
                  <Link to="contact">
                    <Button style={{ margin: ".3em", fontSize: "1.2em" }} variant="outlined" href="#contact">
                      Contact
                    </Button>
                  </Link>
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