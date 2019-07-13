import React from 'react';
import Home from './pages/HomePage/Home';
import God from './pages/God/God';
import {Route, Switch} from 'react-router-dom';
import './App.css';

export const App = () => {
    return (
      <div >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/God" component={God} />
        </Switch>
      </div>
    );
};

export default App;
