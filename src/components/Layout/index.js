import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import SideContent from '../../components/side-content';

const layout = (props) => (
    <Container disableGutters={true} maxWidth={false}>
        <Grid container spacing={1}>
            <Grid item xs={12} sm={9}>
                {props.children}
            </Grid>
            <Grid item xs={12} sm={3}>
                <SideContent></SideContent>
            </Grid>
        </Grid>
    </Container>
);

export default layout;