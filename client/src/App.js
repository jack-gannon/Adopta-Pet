import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import "./styles/global.css";
import AppContainer from "./Components/HOCs/AppContainer";
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home";
import Browse from "./Pages/Browse";
import Navbar from "./Components/Layout/Navbar";
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
            <Layout>
              <Route path="/browse">
                <Browse />
              </Route>
              <Route path="/favorites">
                <Favorites />
              </Route>
              <Route path="/pet/:id" component={Profile} />
            </Layout>
          </Switch>
        </Router>
      </AppContainer>
    </Provider>
  );
}

export default App;
