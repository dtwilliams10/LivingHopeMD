import React from 'react';
import Home from './pages/Home';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

export const App = () => {
    return (
      <div>
        <Switch>
          <Route exact path="/Home" component={Home} />
          <Route exact path="/">
            <Redirect to="/Home"/>
          </Route>
        </Switch>
      </div>
    );
};

export default App;
