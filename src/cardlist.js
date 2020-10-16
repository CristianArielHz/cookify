import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    media: {
        height: 190,
      },
    control: {
      padding: theme.spacing(4),
    },
  }));

export default function CardList(props) {
    const classes = useStyles();
    const recetas = props.recetas;
    const busqueda = props.busqueda;
    let elements = recetas.filter(element => element.titulo.includes(busqueda)).map((element) => {
      
    return (

        <React.Fragment>
            <Grid item xs={4}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={element.imagen}
            title={element.titulo}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            {element.titulo}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Las mejores recetas las vas a encontrar acá
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            <a href={element.link}>Preparar receta</a>
          </Button>
          <Button size="small" color="primary">
            Contanos que te pareció
          </Button>
        </CardActions>
      </Card>
      </Grid>
      </React.Fragment>
    );
});
return <Grid container className={classes.root} spacing={4}>
    {elements}
    </Grid>
}
    