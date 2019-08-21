import React from 'react';

import Dashboard from './pages/Dashboard/containers'
import SideBar from './components/SideBar'
import Header from './components/Header';
import Content from './components/Content';

import './assets/styles/general.css';

function App() {
  return (
    <div>
      <Header />
      <SideBar />
      <Content />
    </div>
  );
}

export default App;
