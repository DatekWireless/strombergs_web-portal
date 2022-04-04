import React from "react";
import { Reset } from "styled-reset";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./components/MainPage";

function App() {
  return (
    <Router>
      <Reset />
      <MainPage />
    </Router>
  );
}

export default App;
