import React from 'react'
import { Grid, Container, Typography, Paper } from '@material-ui/core';
import AboutMeSnippet from './AboutMeSnippet'
import '../App.css';
import { ThemeProvider } from '@material-ui/styles';
import emilyPhoto from '../images/emily-photo.jpeg';

export default function AboutMe({ theme }) {

  return (
      <Grid
        container
        spacing={10}
        direction="row"
      >

        <Grid item xs={12} sm={4} >
          <img className="profile-photo" alt="Emily Blair on beach" src={emilyPhoto}/>
          <h4>Insert animation w/ adjectives describing myself.</h4>
        </Grid>
        <Grid item xs={12} sm={8}>
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
            text="I have always had a passion for helping women develop a sense of confidence. My Boot Camp instructor, Lori Culberson, has been an amazing female role-model in this aspect. As I learn and grow as a developer, I hope that one day I can be a mentor for women entering the field as Lori has been for me."
          />
        </Grid>

      </Grid>
  )
}

