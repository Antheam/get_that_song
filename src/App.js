import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

import Home from "./components/Home/Home.jsx";

import UserProfile from "./components/UserProfile/UserProfile.jsx";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={UserProfile} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
