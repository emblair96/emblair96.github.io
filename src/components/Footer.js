import { Grid, Typography, Divider, Icon } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import '../App.css';

export default function Footer() {

  return (
    <>
    <Divider style={{marginTop: "6em"}} />
    <Grid
      container
      spacing={1}
      direction="column"
      align="center"
      className="footer"
    >
      <Typography variant="h6">Emily Blair Copyright 2021</Typography>
      <div>
        <a href="https://www.linkedin.com/in/emilyblair96/" target="_blank">
          <Icon component={LinkedInIcon} />
        </a>
        <a href="https://github.com/emblair96" target="_blank">
          <Icon component={GitHubIcon} />
        </a>
        <a href="https://twitter.com/algorithEm_" target="_blank">
          <Icon component={TwitterIcon} />
        </a>
      </div>
    </Grid>
    </>
      )
}