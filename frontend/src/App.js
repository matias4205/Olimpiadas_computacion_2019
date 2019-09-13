import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import Layout from "./components/Layout";
import Profile from './pages/Profile/containers/Profile';
import QuickView from './pages/Dashboard/Quick/containers/QuickView'
import Section from './pages/Sections/containers/Section';
import SignIn from './pages/Sign-In/containers/SignIn'
import SignUp from './pages/Sign-Up/containers/SignUp'
import Users from './pages/Users/containers/Users';

/* ADMIN-LTE */
import 'admin-lte/bower_components/bootstrap/dist/css/bootstrap.min.css'
import 'admin-lte/dist/css/AdminLTE.min.css';
import 'admin-lte/dist/css/skins/_all-skins.min.css';
import 'admin-lte/bower_components/Ionicons/css/ionicons.min.css'

import 'admin-lte/bower_components/jquery-slimscroll/jquery.slimscroll.min.js';
import 'admin-lte/dist/js/adminlte.min.js'
import 'admin-lte/bower_components/bootstrap/dist/js/bootstrap.min.js';


import './assets/styles/general.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/sign-in" component={SignIn} />
        <Route exact path="/sign-up" component={SignUp} />
        <Layout>
          <Route exact path="/" render={() => (<Redirect to='/dashboard/quick'/>)}/>
          <Route exact path="/sections" component={Section}/>
          <Route exact path="/profile/:userId" component={Profile} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/dashboard" render={() => (<Redirect to='/dashboard/quick'/>)} />
          <Route exact path="/dashboard/quick" component={QuickView} />
          <Route exact path="/users" component={Users} />
          <Route component={ () => 'Not found' } />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
