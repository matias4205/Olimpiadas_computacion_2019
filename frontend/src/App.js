import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import Layout from "./components/Layout";
import Profile from './pages/Profile/containers/Profile';
import QuickView from './pages/Dashboard/Quick/containers/QuickView'

import './assets/styles/general.css';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" render={() => (<Redirect to='/dashboard/quick'/>)}/>
          <Route exact path="/dashboard" render={() => (<Redirect to='/dashboard/quick'/>)} />
          <Route exact path="/dashboard/quick" component={QuickView} />
          <Route exact path="/profile/:userId" component={Profile} />
          <Route>404 Not Found</Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
