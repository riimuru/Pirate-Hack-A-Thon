import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import {
  Header,
  Home,
  Why,
  Solutions,
  Products,
  Pricing,
  Signin,
  Register,
} from "./components/index";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/why-pirate-cloud" component={Why} />
        <Route exact path="/solutions" component={Solutions} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/pricing" component={Pricing} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </React.Fragment>
  );
};

export default App;
