import React from 'react';
import './header.css';
import { makeStyles } from '@material-ui/core/styles';
import Aux from '../hoc/aux';
import Drawer from '@material-ui/core/Drawer';
import DrawerList from './DrawerList';
import Bar from './Bar';

const drawerWidth = 240;
const useStyles = makeStyles(() => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
}));

function Header() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
      setOpen(true);
    };

    const handleDrawerClose = () => {
      setOpen(false);
    };

    return (
      <Aux>
        <Bar open={open} onClick={handleDrawerOpen}/>
        <Drawer className={classes.drawer} variant="persistent" anchor="left" open={open} classes={{ paper: classes.drawerPaper }}>
          <DrawerList onClick={handleDrawerClose}/>
        </Drawer>
      </Aux>
    );
}

export default Header;