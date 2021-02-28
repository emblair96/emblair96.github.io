import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import {Container, Grid} from '@material-ui/core';
import '../App.css';

export default function Subheaer({theme2, text}) {
  return (
    <ThemeProvider theme={theme2}>
    <Container class="subheader">
    <Typography variant="h4">{text}</Typography>
    </Container>
    </ThemeProvider>
  )
}