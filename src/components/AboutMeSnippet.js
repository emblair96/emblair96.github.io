import { Typography, Icon } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import '../App.css';


export default function AboutMeSnippet({theme, title, text}) {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h5">{title}</Typography>
      <p style={{fontSize: "1.2em"}}>{text}</p>
    </ThemeProvider>
      
  )
}