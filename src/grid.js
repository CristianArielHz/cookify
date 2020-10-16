import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardList from './cardlist.js' 

let recetas = [
    {
      "titulo": "Tarta de pollo: 2 recetas increíbles",
      "imagen": "https://www.paulinacocina.net/wp-content/uploads/2015/08/strata-de-pollo-400x250.png",
      "link": "https://www.paulinacocina.net/tarta-de-pollo-2-recetas/6994"
    },
    {
      "titulo": "Tarta de choclo fácil: Receta en 5 pasos",
      "imagen": "https://www.paulinacocina.net/wp-content/uploads/2020/03/choclo-sin-huevo-3-scaled-1-400x250.jpg",
      "link": "https://www.paulinacocina.net/tarta-de-choclo-cremosa/21363"
    },
    {
      "titulo": "Tarta de Zapallitos: Receta en 5 pasos sencillos",
      "imagen": "https://www.paulinacocina.net/wp-content/uploads/2020/02/whatsapp-image-2020-02-26-at-17.47.02-1-400x250.jpeg",
      "link": "https://www.paulinacocina.net/tarta-de-zapallitos/21322"
    },
    {
      "titulo": "Receta de tarta de espinaca y hongos secos – en forma de estrella",
      "imagen": "https://www.paulinacocina.net/wp-content/uploads/2019/06/oklk-400x250.jpg",
      "link": "https://www.paulinacocina.net/receta-de-tarta-de-espinaca-y-hongos-secos-en-forma-de-estrella/14066"
    },
    {
      "titulo": "Receta de Tarta de Ricota y zucchini en Rollitos",
      "imagen": "https://www.paulinacocina.net/wp-content/uploads/2019/06/okki-400x250.jpg",
      "link": "https://www.paulinacocina.net/receta-de-tarta-de-ricota-y-zuccini-en-forma-de-rollitos-y-amor/14057"
    },
    {
      "titulo": "¡Tarta de pera y provolone! – Agridulce como todo lo bueno en este mundo",
      "imagen": "https://www.paulinacocina.net/wp-content/uploads/2019/06/ookk-scaled-400x250.jpg",
      "link": "https://www.paulinacocina.net/tarta-de-pera-y-provolone-agridulce-como-todo-lo-bueno-en-este-mundo/14050"
    },
    {
      "titulo": "Tarta de jamón y queso (Con canción)",
      "imagen": "https://www.paulinacocina.net/wp-content/uploads/2019/01/tarta-de-jamon-y-queso2-400x250.jpg",
      "link": "https://www.paulinacocina.net/tarta-de-jamon-queso-4-pasos/13573"
    },
    {
      "titulo": "Masa de tarta dulce en 5 pasos!",
      "imagen": "https://www.paulinacocina.net/wp-content/uploads/2018/09/masa-de-tarta-400x250.png",
      "link": "https://www.paulinacocina.net/masa-de-tarta-dulce/8504"
    },
    {
      "titulo": "Tarta de frutillas",
      "imagen": "https://www.paulinacocina.net/wp-content/uploads/2018/09/tarta-de-frutillas-400x250.png",
      "link": "https://www.paulinacocina.net/tarta-de-frutillas/12108"
    },
    {
      "titulo": "Tarta sin harina con base de calabaza #SinGluten",
      "imagen": "https://www.paulinacocina.net/wp-content/uploads/2018/08/tarta-base-de-calabaza2-400x250.png",
      "link": "https://www.paulinacocina.net/tarta-sin-harina-base-calabaza-singluten/12002"
    },
    {
      "titulo": "Tarta de frutas ¡Sin azúcar!",
      "imagen": "https://www.paulinacocina.net/wp-content/uploads/2018/07/tarta-de-frutas2-400x250.png",
      "link": "https://www.paulinacocina.net/tarta-de-frutas-sin-azucar/11882"
    },
    {
      "titulo": "Masa de Tarta Integral",
      "imagen": "https://www.paulinacocina.net/wp-content/uploads/2015/03/masa-de-tarta-integral-400x250.png",
      "link": "https://www.paulinacocina.net/masa-de-tarta-integral-2/6341"
    },
    {
      "titulo": "Tarta de espinaca con base de papas y sin gluten!!",
      "imagen": "https://www.paulinacocina.net/wp-content/uploads/2018/05/tarta-espinanca2-400x250.png",
      "link": "https://www.paulinacocina.net/tarta-de-espinaca-con-base-de-papa/11721"
    },
    {
      "titulo": "Tarta de Avena y Chocolate",
      "imagen": "https://www.paulinacocina.net/wp-content/uploads/2015/08/tarta-de-avena-y-chocolate-400x250.png",
      "link": "https://www.paulinacocina.net/tarta-avena-chocolate/7025"
    },
    {
      "titulo": "Tarta de peras en 5 pasos!",
      "imagen": "https://www.paulinacocina.net/wp-content/uploads/2018/01/tarta-de-peras-400x250.png",
      "link": "https://www.paulinacocina.net/receta-tarta-de-peras-facil/11348"
    }
  ]
  
  

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 500,
    width: 100,
  },
  control: {
    padding: theme.spacing(4),
  },
}));

export default function SpacingGrid() {
  const classes = useStyles();
  return (
    <React.Fragment>
            <CardList recetas={recetas}></CardList>
     </React.Fragment>
      
  );
}

