import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Pages/Home'
import Services from './components/Pages/Services'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  } from "react-router-dom";
import Products from './components/Pages/Products';
import SignUp from './components/Pages/SignUp';

function App() {
  return (
    <div className= "App">
      <Router>
      <Navbar />

      <Switch>
          <Route exact path="/" component={Home}>
          </Route>
          <Route exact path="/services" component={Services}>
          </Route>
          <Route exact path="/products" component={Products}>
          </Route>
          <Route exact path="/sign-up" component={SignUp}>
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
