import React from "react";
import { Button, Container, Grid, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';
import '../App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function Form(props) {
  const classes = useStyles();

  let messageField = <div/>;

  if (isWidthDown('sm', props.width)) {
    messageField = <TextField
    id="filled-multiline-static"
    label="Message"
    multiline
    rows={4}
    variant="filled"
    type="text"
    name="message"
    style={{width: "60%"}}
  />
  } else {
    messageField = <TextField
                id="filled-multiline-static"
                label="Message"
                multiline
                rows={4}
                variant="filled"
                type="text"
                name="message"
                style={{width: "22%"}}
              />
  }

  return (
    <Container>
      <div style={{ display: "flex" }}>
        <Grid
          container
          spacing={10}
          direction="row"
          justify="center"
          align="center"
        >

          <form className={classes.root} noValidate autoComplete="off" action="https://getform.io/f/307f232d-a51b-4229-9ac7-526019627510" method="POST">
            <div 
              style={{ display: "flex", justifyContent: "center", flexDirection: "row", width: "90vw" }} 
              className="contact-fields"
            >
              <TextField 
                id="filled-basic" 
                label="Email" 
                variant="filled" 
                type="email" 
                name="email" 
                style={{ marginRight: "1em" }} 
              />
              <TextField 
                id="filled-basic" 
                label="Name" 
                variant="filled" 
                type="text" 
                name="name" 
                style={{ marginLeft: "1em" }} 
              />

            </div>
            <div 
              style={{ display: "flex", alignItems: "center", flexDirection: "column", width: "150vw" }}
            >
              {messageField}

            <Button 
              type="submit" 
              variant="contained"
              style={{marginTop: "1em"}}
            >
              Connect with Emily
            </Button>
            </div>
          </form>
        </Grid>

      </div>
    </Container>
  );
}

export default withWidth()(Form);
