import React, {useEffect} from 'react'
import { Grid, Container } from '@material-ui/core';
import AboutMeSnippet from './AboutMeSnippet';
import '../App.css';
import Icon from '@material-ui/core/Icon';
import Typed from 'typed.js';


import emilyPhoto from '../images/emily-photo.jpeg';

export default function AboutMe({ theme }) {

  var text = ["I am compassionate.", "I am determined.", "I am empathetic.", "I am creative.", "I am hardworking.", "I am bold.", "I am an effective communicator.", "I am dynamic."]

  useEffect(() => {

    // Options for the Typed object
    const options = {
        strings: text,
        typeSpeed: 70,  
        backDelay: 700,
        backSpeed:40,
        showCursor: true,

    };

    // New Typed instance
    const typed = new Typed('#adjectives', options);

    // Destroy Typed instance on unmounting the component to prevent memory leaks
    return () => {
        typed.destroy();
    };
}, [text]);

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
          <br/>
          <h1 style={{display: "inline", fontSize: "3em"}} id='adjectives'></h1>
        <h1 >Who is Emily?</h1>
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

