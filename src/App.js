import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Home from './components/Home';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

function App() {
  AOS.init({
    once: true
  });
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
