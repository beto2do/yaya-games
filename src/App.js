import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/header';
import Home from './containers/Home';
import About from './containers/About';

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path="/about">
          <About /> 
        </Route>
        <Route path="/">
          <Home /> 
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
