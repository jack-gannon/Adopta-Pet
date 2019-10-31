import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import "./styles/global.css";
import Home from "./Pages/Home";
import Browse from "./Pages/Browse";
import Navbar from "./Components/Navbar";
import Saved from "./Pages/Saved";
import Profile from "./Pages/Profile";
import { Router } from "@reach/router";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Router>
        <Home path="/" />
        <Browse path="/browse" />
        <Saved path="/saved" />
        <Profile path="/pet/:id" />
      </Router>
    </Provider>
  );
}

export default App;
