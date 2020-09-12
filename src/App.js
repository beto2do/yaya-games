import React from 'react';
import './App.css';
import Header from './components/header';
import MainContent from './components/main-content';
import SideContent from './components/side-content';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

function App() {
  return (
    <Container disableGutters={true} maxWidth={false}>
      <Header></Header>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={9}>
          <MainContent></MainContent>
        </Grid>
        <Grid item xs={12} sm={3}>
          <SideContent></SideContent>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
