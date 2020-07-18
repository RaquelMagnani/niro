import React from "react";
import Home from "./Pages/Home/Home";
import Colabore from "./Pages/Colabore/Colabore"
import { Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={props => <Home {...props} />} />
        <Route path="/colabore" render={props => <Colabore {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
