import { Container, Grid, Typography, Divider, Icon } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import SmartphoneIcon from '@material-ui/icons/Smartphone';
import { ThemeProvider } from '@material-ui/styles';
import '../App.css';


export default function Contact({ theme2 }) {
  return (
    <ThemeProvider theme={theme2}>ß
      <Container
        className="contact-section"

      >
        <Grid
          justify="center"
          className="contact-section"
        >
          <div className="contact-options">
            <Icon fontSize="large" component={LocationOnIcon} />
            <Typography variant="h6">Chicago, IL</Typography>
          </div>
          <div className="contact-options">
            <Icon fontSize="large" component={EmailIcon} />
            <Typography variant="h6">emilyblair96@gmail.com</Typography>
          </div>
          <div className="contact-options">
          <Icon fontSize="large" component={SmartphoneIcon} />
          <Typography variant="h6">636.288.8821</Typography>
          </div>
        </Grid>
      </Container>

    </ThemeProvider>
  )
}