import { Grid } from '@material-ui/core';
import Project from './Project';
import '../App.css';

export default function MyWork() {
  return (
    <Grid
      container
      spacing={3}
      direction="row"
      justify="space-around"
      align="center"
    >
      <Grid item>
        <Project 
        title="IMOK"
        description="An app that makes you feel safer. IMOK (I am okay) let’s you keep your friends and family updated on upcoming events and quickly alert them on if you are feeling unsafe using the Twilio SMS API.  "
        img="https://images.unsplash.com/photo-1544365712-91cd4904cd07?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2252&q=80"
        repoLink="https://github.com/emblair96/coffee-and-llamas"
        deployedLink="https://imok-squad.herokuapp.com/"
      />
      </Grid>
      <Grid item>
        <Project 
        title="Keep on Giftin'"
        description="Created with a group of amazing women, this app helps organize your relationships.Originally intended to help keep track of gift-giving events and holidays, this app has professional value making it manageable to keep track of your network."
        img="https://images.unsplash.com/photo-1574279606130-09958dc756f7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
        repoLink="https://github.com/girl-power-5/ubiquitous-giggle"
        deployedLink="https://keep-on-giftin.herokuapp.com/"
      />
      </Grid>
      <Grid item>
      <Project 
        title="Eats & Beats"
        description="Where food meets music. Developed in a group project, this app generates a recipe and playlist based on user input to create an immersive experience, that engages all senses, without leaving the confines of your kitchen."
        img="https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1400&q=80"
        repoLink="https://github.com/emblair96/eats-and-beats-app"
        deployedLink="https://emblair96.github.io/eats-and-beats-app/"
      />
      </Grid>
    </Grid>
  )
}