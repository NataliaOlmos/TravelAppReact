import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Pages/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  } from "react-router-dom";

function App() {
  return (
    <div className= "App">
      <Router>
      <Navbar />

      <Switch>
          <Route exact path="/" component={Home}>
          </Route>
          
        </Switch>
    </Router>
    </div>
  );
}

export default App;
