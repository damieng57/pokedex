import React from 'react';
import InboxIcon from '@material-ui/icons/MoveToInbox';

const routes = [
  {
    label: 'Home',
    route: 'home',
    Icon: <InboxIcon/>,
    separator: true,
  },
  {
    label: 'History',
    route: 'history',
    Icon: <InboxIcon/>,
  },
  {
    label: 'Settings',
    route: 'settings',
    Icon: <InboxIcon/>,
  },
];

export default routes;
