import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import CollapsableDrawer from '../components/Drawer';
import Home from './Home';
import History from './History';
import Settings from './Settings';
import routes from '../routes';

export default function App() {
  return (
    <Router>
      <CssBaseline />
      <CollapsableDrawer menu={routes} title='Mon app Electron'>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/history" component={History} />
          <Route path="/settings" component={Settings} />
        </Switch>
      </CollapsableDrawer>
    </Router>
  );
}

