import React from 'react';
import Layout from './components/Layout'
import MainContent from './components/main-content';
import SideContent from './components/side-content';
import Grid from '@material-ui/core/Grid';

function App() {
  return (
    <Layout>
          <Grid item xs={12} sm={9}>
            <MainContent></MainContent>
          </Grid>
          <Grid item xs={12} sm={3}>
            <SideContent></SideContent>
          </Grid>
    </Layout>
  );
}

export default App;
