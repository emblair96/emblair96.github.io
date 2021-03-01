import { Grid, Container, Typography } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import '../App.css';
import { theme } from '../theme';


export default function AboutMeSnippet({theme, title, text}) {
  console.log('THEME', theme)
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h5">{title}</Typography>
      <p style={{fontSize: "1.2em"}}>{text}</p>
    </ThemeProvider>
      
  )
}