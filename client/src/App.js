import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import "./styles/global.css";
import Home from "./Pages/Home";
import Browse from "./Pages/Browse";
import Navbar from "./Components/Navbar";
import Saved from "./Pages/Saved";
import Profile from "./Pages/Profile";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/browse">
            <Browse />
          </Route>
          <Route exact path="/saved">
            <Saved />
          </Route>
          <Route exact path="/pet/:id" component={Profile} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
