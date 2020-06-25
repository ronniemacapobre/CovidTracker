import React from 'react';

import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';

import './App.scss';

function App() {
  return (
    <div className='app'>
      <Navigation />
      <Dashboard />
    </div>
  );
}

export default App;
