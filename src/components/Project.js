import { Container, Grid } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../App.css';
import { HowToVoteRounded } from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    backgroundColor: "#9DB5B2",
    marginBottom: 20
  },
  media: {
    height: 200
  },
});


export default function Project({title, description, img, repoLink, deployedLink}) {
  const classes = useStyles();
  return (
    // <h1>I'm a project!</h1>
    <div className="card">
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={img}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="h2">
            {title}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="large" color="#37474f" href={repoLink} target="_blank">
          GitHub Repo
        </Button>
        <Button size="large" color="#37474f" href={deployedLink} target="_blank">
          Deployed Link
        </Button>
      </CardActions>
    </Card>
    </div>
  )
}
