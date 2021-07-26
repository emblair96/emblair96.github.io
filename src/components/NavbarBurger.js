import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { AppBar, Container, Grid, Toolbar } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { Link } from "react-scroll";
import { HashLink } from "react-router-hash-link";
import { createMuiTheme } from "@material-ui/core";
import './NavbarBurger.css';


const useStyles = makeStyles({
  list: {
    width: 250,
    color: "#37474F"
  },
  fullList: {
    width: "auto",
    background: "#cfd8dc"
  }
});

function ElevationScroll(props) {
  const theme = createMuiTheme({
    props: {
      // Name of the component ⚛️
      AppBar: {
        // The default props to change
        disableFixeds: true // No more ripple, on the whole application 💣!
      }
    }
  });
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
};

export default function SwipeableTemporaryDrawer(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom"
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Home", "Projects", "Contact"].map((text) => (
          // <Link to={text} smooth="true" duration="100">
          <HashLink smooth to={'#'+text}>
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          </HashLink>
        ))}
      </List>
    </div>
  );

  return (
    <ThemeProvider>
      {/* <React.Fragment> */}
      <CssBaseline />
      {/* <ElevationScroll {...props}> */}
      <AppBar style={{ backgroundColor: "#cfd8dc", boxShadow: "0px 0px 5px grey", height: '100px' }}>
        <Container classes={{ label: "MuiAppBar-positionRelative" }}>
          <Grid
            container
            spacing={0}
            direction="row"
            justify="flex-end"
            alignItems="center"
          >
            <div>
              {["top"].map((anchor) => (
                <React.Fragment key={anchor}>
                  <Button onClick={toggleDrawer(anchor, true)}><MenuIcon style={{ fontSize: "3.5em", color: "#37474F" }} /></Button>
                  <SwipeableDrawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                    onOpen={toggleDrawer(anchor, true)}
                  >
                    {list(anchor)}
                  </SwipeableDrawer>
                </React.Fragment>
              ))}
            </div>
          </Grid>
        </Container>
      </AppBar>
      {/* </ElevationScroll> */}
      {/* <Toolbar /> */}
      {/* </React.Fragment> */}
    </ThemeProvider>
  );
}
