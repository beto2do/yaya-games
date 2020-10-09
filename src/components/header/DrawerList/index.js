import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Aux from '../../hoc/aux';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
  }));

const DrawerList = (props) => {
    const classes = useStyles();
    const theme = useTheme();

    return (
    <Aux>
        <div className={classes.drawerHeader}>
            <IconButton onClick={() => props.onClick()}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
        </div>
        <Divider />
        <List>
            <ListItem button key="games">
                <ListItemText>
                    <Link to="/">Games</Link>
                </ListItemText>
            </ListItem>
            <ListItem button key="about">
                <ListItemText>
                    <Link to="/about">About</Link>
                </ListItemText>
            </ListItem>
            <ListItem button key="sendFeedback">
                <ListItemText primary="Send Feedback"></ListItemText>
            </ListItem>            
        </List>
    </Aux>
    );
}

export default DrawerList;