import { Grid, Container } from '@material-ui/core';
import '../App.css';
import '../animations.css'
import AnimationTest from './AnimationTest';

export default function Header() {

  return (
    <div className="test">
      <Container id="welcome-msg">
        <Grid
          container
          // spacing={0}
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
          xs={12} lg={7}
        // alignItems="center"
        >
          <AnimationTest />

          <div style={{ fontSize: "2em" }}>A <span className="full-stack">full stack </span>software engineer.</div>
        </Grid>
        </Grid>
      </Container>
    </div>
  )
}