import { useTheme } from "@material-ui/core/styles";
import { Grid } from '@material-ui/core';
import useMediaQuery from "@material-ui/core/useMediaQuery";

import computerGraphic from '../images/computer-screen-graphic.png'

export default function ComputerGraphic() {

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  const responsiveGraphic = 
  matches 
  ? <img 
  src={computerGraphic} 
  style ={{height: '40em'}}
  />
  : <img 
  src={computerGraphic} 
  style ={{height: '18em'}}
  />

  return (
    <Grid
      container
      justify='center'
      data-aos="fade-up"
    >
    {responsiveGraphic}
    </Grid>
  )
};