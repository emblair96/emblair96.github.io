import { Container, Grid } from '@material-ui/core';
// import LocationOnIcon from '@material-ui/icons/LocationOn';
// import EmailIcon from '@material-ui/icons/Email';
// import SmartphoneIcon from '@material-ui/icons/Smartphone';
import { ThemeProvider } from '@material-ui/styles';
import Form from './Form';
import '../App.css';


export default function Contact({ theme2 }) {
  return (
    <ThemeProvider theme={theme2}>
      
      <Container
        className="contact-section"

      >
        <Grid
          justify="center"
          className="contact-section"
        >
          <div className="contact-options">
            <p>Chicago, IL</p>
            {/* <Icon component={LocationOnIcon} /> */}
          </div>
          <div className="contact-options">
            
            <p><a href="mailto:emilyblair96@gmail.com">emilyblair96@gmail.com</a></p>
            
            {/* <Icon component={EmailIcon} /> */}
          </div>
          <div className="contact-options">
          <p>636.288.8821</p>
          {/* <Icon component={SmartphoneIcon} /> */}
          </div>
        </Grid>
        <Form />
     
      </Container>

    </ThemeProvider>
  )
}