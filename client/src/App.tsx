import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import SocialInteractionPage from './pages/SocialInteractionPage';
import VisitedPlacesPage from './pages/VisitedPlacesPage';

import './App.scss';

const App: React.FC = () => {
  return (
    <div className='admin'>
      <Header />
      <Navigation />
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/social-interaction' component={SocialInteractionPage} />
        <Route path='/visited-places' component={VisitedPlacesPage} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
