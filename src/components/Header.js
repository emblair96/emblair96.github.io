import { Grid, Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import '../App.css';
import { ThemeProvider } from '@material-ui/styles';
import '../animations.css'
import AnimationTest from './AnimationTest';
import emilyPhoto from '../images/emily-photo.jpeg';
import { createMuiTheme, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Avatar from '@material-ui/core/Avatar';


export default function Header({ theme2 }) {

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));


  return (
    <>
      <Container id="welcome-msg" >
        <Grid
          container
          spacing={10}
        >
        {/* <Grid
          item
          // xs={8} lg={5}
          container
          direction="column"
          justify="center"
          // alignSelf="end"
        >

          <img className="profile-photo" alt="Emily Blair on beach" src={emilyPhoto} />
        </Grid> */}
        <Grid
          item
          container
          // display="flex"
          direction="column"
          justify="center"
          xs={6} lg={7}
        // alignItems="center"
        >
          <AnimationTest />

          <div style={{ fontSize: "2em" }}>A <span className="full-stack">full stack </span>software engineer.</div>
        </Grid>
        </Grid>
      </Container>
    </>
  )
}