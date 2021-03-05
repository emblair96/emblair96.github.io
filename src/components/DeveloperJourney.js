import React from 'react';
import { Container, Grid, LinearProgress } from '@material-ui/core';
import '../App.css';


export default function DeveloperJourney() {
  return (
      <Grid
        container
        spacing={10}
        direction="row"
        justify="center"
      >

        <Grid item xs={10} sm={5}>
          <h2 className="progress-categories">Browser-based technologies</h2>
          <h3>React</h3>
          <LinearProgress
            className="progress-bar"
            variant="determinate"
            value={30}
          />
          <h3>CSS 3</h3>
          <LinearProgress
            className="progress-bar"
            variant="determinate"
            value={60}
          />
          <h3>HTML 5</h3>
          <LinearProgress
            className="progress-bar"
            variant="determinate"
            value={75}
          />
          <h3>JavaScript</h3>
          <LinearProgress
            className="progress-bar"
            variant="determinate"
            value={80}
          />
        </Grid>

        <Grid item xs={10} sm={5}>
          <h2 className="progress-categories">Server-side technologies</h2>
          <h3>MongoDB & Mongoose</h3>
          <LinearProgress
            className="progress-bar"
            variant="determinate"
            value={40}
          />
          <h3>Node</h3>
          <LinearProgress
            className="progress-bar"
            variant="determinate"
            value={50}
          />
          <h3>Express</h3>
          <LinearProgress
            className="progress-bar"
            variant="determinate"
            value={50}
          />
          <h3>mySQL & Sequelize</h3>
          <LinearProgress
            className="progress-bar"
            variant="determinate"
            value={60}
          />

        </Grid>
           <Grid style={{marginBottom: "3em"}} item xs={10} sm={10}>
          <h3>Other Technologies: Bootstrap / jQuery / Git / Heroku / Handlebars / Security and Session Storage / User Authentication / Responsive Design</h3>
           </Grid>
        <Container style={{marginBottom: "3em"}}>
        </Container>

      </Grid>

  )
}