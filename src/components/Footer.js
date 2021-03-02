import { Grid, Typography, Divider, Icon } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import '../App.css';

export default function Footer() {

  return (
    <>
    <Divider />
    <Grid
      container
      spacing={1}
      direction="column"
      align="center"
      className="footer"
    >
      <Typography variant="h6">Emily Blair Copyright 2021</Typography>
      <div>
        <Icon component={LinkedInIcon} />
        <Icon component={GitHubIcon} />
        <Icon component={TwitterIcon} />
      </div>
    </Grid>
    </>
      )
}