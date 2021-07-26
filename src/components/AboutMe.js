import { Grid, Container } from '@material-ui/core';
import './AboutMe.css'

export default function AboutMe() {

  return (
    <Container>
      <Grid
        container
        justify="center"
        style={{ maxWidth: '100%' }}
      >
        <Grid item xs={12} align="center">
          <p data-aos="fade-left">
            Hi, I'm Emily. I'm a software engineer with a certificate in full stack web development from northwestern university.  I believe in responsive, intuitive, and innovative app design.  I approach my work with an agile perspective reevaluating and adapting as I build.
          </p>
        </Grid>
      </Grid>
    </Container>
  )
};