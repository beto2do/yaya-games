import React from 'react';
import Aux from '../hoc/aux';
import Container from '@material-ui/core/Container';
import Header from '../header';
import Grid from '@material-ui/core/Grid';

const layout = (props) => (
    <Aux>
        <Container disableGutters={true} maxWidth={false}>
            <Header></Header>
            <Grid container spacing={1}>{props.children}</Grid>
        </Container>
    </Aux>
);

export default layout;