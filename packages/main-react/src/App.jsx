import React from 'react';
import Gnb from '@/layout/Gnb';
import Section from '@/layout/Section';

import { Container, Grid } from '@mui/material';

const App = () => {
  return (
    <Container
      component="main"
      disableGutters={true}
      maxWidth={false}
      sx={{ height: '100vh' }}
    >
      <Grid
        component="section"
        container={true}
        direction="row"
        sx={{ height: '100%' }}
      >
        <Gnb />
        <Section />
      </Grid>
    </Container>
  )
};

export default App;