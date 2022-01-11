import React from 'react';
import "./App.css";
import Home from "./pages/Home";
import Mint from "./pages/Mint";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Mint" component={Mint} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
