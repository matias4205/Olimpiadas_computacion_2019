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

import './assets/styles/general.css';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" render={() => (<Redirect to='/dashboard/quick'/>)}/>
          <Route exact path="/sections" component={Section}/>
          <Route exact path="/profile/:userId" component={Profile} />
          <Route exact path="/dashboard" render={() => (<Redirect to='/dashboard/quick'/>)} />
          <Route exact path="/dashboard/quick" component={QuickView} />
          <Route>404 Not Found</Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
