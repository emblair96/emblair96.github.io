import { Grid, Icon } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

export default function Footer() {

  return (
    <>
      <Grid
        container
        direction="column"
        align="center"
      >
        <p>Emily Blair &#169; 2021</p>
        <div>
          <a href="https://www.linkedin.com/in/emilyblair96/" target="_blank">
            <Icon component={LinkedInIcon} style={{ color: "#37474F" }} />
          </a>
          <a href="https://github.com/emblair96" target="_blank">
            <Icon component={GitHubIcon} style={{ color: "#37474F" }} />
          </a>
          <a href="https://twitter.com/algorithEm_" target="_blank">
            <Icon component={TwitterIcon} style={{ color: "#37474F" }} />
          </a>
        </div>
      </Grid>
    </>
  )
};