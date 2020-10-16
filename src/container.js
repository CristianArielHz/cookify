import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import ButtonAppBar from './appbar.js'

  
export default function SimpleContainer() {
     

    return (
    <React.Fragment>
     
      <CssBaseline />
      <Container >
      <ButtonAppBar></ButtonAppBar>
      </Container>
    </React.Fragment>
  );
}
