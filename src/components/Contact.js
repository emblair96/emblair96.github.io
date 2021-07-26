import React from "react";
import { Button, Container, Grid, TextField } from '@material-ui/core';
import './Contact.css';

export default function Contact() {

  return (
    <Container>
      <Grid
        container
        align="center"
        justify="center"
        data-aos="fade-left"
      >
        <p>Denver, CO</p>
        <p><a href="mailto:emilyblair96@gmail.com" style={{ textDecoration: "none", color: "#37474F" }}>emilyblair96@gmail.com</a></p>
        <p>636.288.8821</p>
      </Grid>
      <form noValidate autoComplete="off" action="https://getform.io/f/307f232d-a51b-4229-9ac7-526019627510" method="POST">
        <Grid
          align="center"
          justify="center"
        >
          <TextField
            id="filled-basic"
            label="Name"
            variant="filled"
            type="text"
            name="name"
            style={{ margin: ".2em" }}
          />
          <TextField
            id="filled-basic"
            label="Email"
            variant="filled"
            type="email"
            name="email"
            style={{ margin: ".2em" }}
          />
        </Grid>
        <Grid
          align="center"
        >
          <TextField
            id="filled-multiline-static"
            label="Message"
            multiline
            rows={4}
            variant="filled"
            type="text"
            name="message"
            style={{ width: "60%" }}
          />
        </Grid>
        <Grid
          align="center"
        >
          <Button
            type="submit"
            variant="contained"
            style={{ marginTop: "1em" }}
          >
            Connect with Emily
          </Button>
        </Grid>
      </form>
    </Container>
  )
};