import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://www.paulinacocina.net/wp-content/uploads/2015/08/strata-de-pollo-400x250.png"
          title="Tarta de pollo: 2 recetas increíbles"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Tarta de pollo: 2 recetas increíbles
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          La mejor receta de tarta de pollo que hayas visto en tu vida
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <a href="https://www.paulinacocina.net/tarta-de-pollo-2-recetas/6994">Preparar receta</a>
        </Button>
        <Button size="small" color="primary">
          Contanos que te pareció
        </Button>
      </CardActions>
    </Card>
  );
}

