import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, CardActions,CardActionArea, CardMedia, CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import '../App.css';

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
