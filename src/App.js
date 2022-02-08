import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CarPage from "./Pages/CarPage";
import HomePage from "./Pages/HomePage";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/cars/:carId" component={CarPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
