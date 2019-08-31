import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
}from 'react-router-dom';

import Layout from "./components/Layout";
import Profile from './pages/Profile/containers/Profile';
import QuickView from './pages/Dashboard/Quick/containers/QuickView'
import Section from './pages/Sections/containers/Section';
import SignIn from './pages/Sign-In/containers/SignIn'
import SignUp from './pages/Sign-Up/containers/SignUp'

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
          <Route exact path="/dashboard" render={() => (<Redirect to='/dashboard/quick'/>)} />
          <Route exact path="/dashboard/quick" component={QuickView} />
          <Route>404 Not Found</Route>
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
