import { Grid, Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import '../App.css';
import { ThemeProvider } from '@material-ui/styles';
import '../animations.css'


export default function Header({ theme2 }) {
  return (
    <Container id="welcome-msg" >
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <ThemeProvider theme={theme2}>
          <Typography variant="h1" className="bigEntrance"> Hi, I'm Emily.</Typography>
        </ThemeProvider>
        <Typography variant="h5"> A full stack software engineer.</Typography>
      </Grid>
    </Container>
  )
}