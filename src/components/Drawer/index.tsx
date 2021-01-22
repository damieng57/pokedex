import React from 'react';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link, useLocation } from 'react-router-dom';
import useStyles from './style';

const CollapsableDrawer = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Header 
        title={props.title}
        classes={classes}
        handleDrawerOpen={handleDrawerOpen}
        open={open}
      />
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {props.menu.map((item, index) => (
            <Item key={index} index={index} label={item.label} Icon={item.Icon} route={item.route} separator={item.separator} />
          ))}
        </List>
      </Drawer>
      <main>
        <div className={classes.toolbar} />
        { props.children }
      </main>
    </div>
  );
}

const Header = (props) => {
  return <AppBar
  position="fixed"
  className={clsx(props.classes.appBar, {
    [props.classes.appBarShift]: props.open,
  })}
>
  <Toolbar>
    <IconButton
      color="inherit"
      aria-label="open drawer"
      onClick={props.handleDrawerOpen}
      edge="start"
      className={clsx(props.classes.menuButton, {
        [props.classes.hide]: props.open,
      })}
    >
      <MenuIcon />
    </IconButton>
    <Typography variant="h6" noWrap>
      {props.title}
    </Typography>
  </Toolbar>
</AppBar>
}

const Item = ({ label, route, Icon, separator }) => {
  const location = useLocation();
  const active = location.pathname === `/${route}`;

  return <>
      <ListItem button key={label} component={Link} to={route} selected={active}>
        <ListItemIcon>{Icon || null}</ListItemIcon>
        <ListItemText primary={label} />
      </ListItem>
      {separator && <Divider />}
    </>
}

export default CollapsableDrawer;
