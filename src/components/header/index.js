import React from 'react';
import './header.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from '../logo';
import Aux from '../hoc/aux';
import UserMenu from '../users/UserMenu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  grow: {
    flexGrow: 1,
  },
}));

function Header() {
    const classes = useStyles();
    return (
      <Aux>
        <AppBar position="static">
            <Toolbar variant="dense">
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                  <MenuIcon />
              </IconButton>
              <Logo></Logo>
              <Typography variant="h6" color="inherit">
                  Yaya Games
              </Typography>
              <div className={classes.grow} />
              <UserMenu/>
            </Toolbar>
        </AppBar>
      </Aux>
    );
}

export default Header;