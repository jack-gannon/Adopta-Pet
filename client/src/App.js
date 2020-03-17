import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import "./styles/global.css";
import AppContainer from "./Components/AppContainer";
import Home from "./Pages/Home";
import Browse from "./Pages/Browse";
import Navbar from "./Components/Navbar";
import Favorites from "./Pages/Favorites";
import Profile from "./Pages/Profile";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <AppContainer>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/browse">
              <Browse />
            </Route>
            <Route exact path="/favorites">
              <Favorites />
            </Route>
            <Route exact path="/pet/:id" component={Profile} />
          </Switch>
        </Router>
      </AppContainer>
    </Provider>
  );
}

export default App;
