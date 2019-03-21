import React from 'react';
import Home from './pages/HomePage/Home';
import { Route, Switch} from 'react-router-dom';
import './App.css';

export const App = () => {
    return (
      <div >
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    );
};

export default App;
