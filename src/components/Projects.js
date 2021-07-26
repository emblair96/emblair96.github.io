import { Grid, Container } from '@material-ui/core';
import ProjectHighlight from './ProjectHighlight';
import presentsPhoto from '../images/presents.png';
import friendsPhoto from '../images/friends.png';
import foodPhoto from '../images/food-medley.png';

export default function Projects() {

  return (
    <Container>
      <Grid
        container
        spacing={3}
        direction="row"
        justify="space-around"
        align="center"
      >
        <Grid item>
          <ProjectHighlight
            title="IMOK"
            description="An app that makes you feel safer. IMOK (I am okay) let’s you keep your friends and family updated on upcoming events and quickly alert them on if you are feeling unsafe using the Twilio SMS API.  "
            img={friendsPhoto}
            repoLink="https://github.com/emblair96/coffee-and-llamas"
            deployedLink="https://imok-squad.herokuapp.com/"
          />
        </Grid>
        <Grid item>
          <ProjectHighlight
            title="Keep on Giftin'"
            description="Created with a group of amazing women, this app helps organize your relationships.Originally intended to help keep track of gift-giving events and holidays, this app has professional value making it manageable to keep track of your network."
            img={presentsPhoto}
            repoLink="https://github.com/girl-power-5/ubiquitous-giggle"
            deployedLink="https://keep-on-giftin.herokuapp.com/"
          />
        </Grid>
        <Grid item>
          <ProjectHighlight
            title="Eats & Beats"
            description="Where food meets music. Developed in a group project, this app generates a recipe and playlist based on user input to create an immersive experience, that engages all senses, without leaving the confines of your kitchen."
            img={foodPhoto}
            repoLink="https://github.com/emblair96/eats-and-beats-app"
            deployedLink="https://eats-and-beats.herokuapp.com/"
          />
        </Grid>
      </Grid>
    </Container>
  )
};

