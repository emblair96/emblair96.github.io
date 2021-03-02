import React from 'react'
import { Grid, Container } from '@material-ui/core';
import AboutMeSnippet from './AboutMeSnippet';
import Animation from './Animation';
import '../App.css';
import Icon from '@material-ui/core/Icon';

import emilyPhoto from '../images/emily-photo.jpeg';

export default function AboutMe({ theme }) {

  return (
    <div>
    <Container>

      <Grid
        container
        spacing={10}
        direction="row"
        justify="center"
      >
        <Grid item xs={12} lg={5} >
          <img className="profile-photo" alt="Emily Blair on beach" src={emilyPhoto}/>
          <Animation />
        </Grid>

        <Grid item xs={12} lg={7}>
        <AboutMeSnippet
            theme={theme}
            title="Background"
            text="I am leveraging my creative thinking and problem-solving abilities to build innovative software. I am currently a student and will graduate with a certificate in Full Stack Web Development from Northwestern in March 2021."
          />
        <AboutMeSnippet
            theme={theme}
            title="Why Software Development"
            text="After finishing my undergraduate degree & starting a position in higher education (a field I thought I wanted to pursue long-term), I was left rarely feeling challenged and uncertain on next steps. After completing some free software development courses, I knew I wanted to pursue this as a career. Coding connects my love of puzzles, desire to be challenged, and creative-thinking capacity in one space. While I wish I would have discovered this sooner, I'm excited to see myself grow as a software engineer."
          />
        <AboutMeSnippet
            theme={theme}
            title="Women in Tech"
            text="I have always had a passion for helping women develop a sense of confidence. My Boot Camp instructor, Lori Culberson, has been an amazing female role-model. As I grow as a developer, I also hope to be a mentor for women entering the field."
          />
        </Grid>

      </Grid>
      </Container>
      </div>
  )
}

