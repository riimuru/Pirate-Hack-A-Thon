import React, {useState, useEffect} from "react";
import { Switch, Route, Link } from "react-router-dom";

import {
  Header,
  Home,
  Why,
  Solutions,
  Pricing,
  Signin,
  Register,
  DashBoard
} from "./components/index";
import SignUp from "./Intormation-Validaitor/SignUp";
import { authentication } from "./db/firebase";

const App = () => {
  const [user, setUser] = useState('')

  const authListener = () => {
    authentication.onAuthStateChanged((user) => {
      if (user) {
        setUser(user)
      } else {
        setUser('')
      }
    })
  }
  useEffect(() => {
    authListener()
  }, [])
  
  return (
    <React.Fragment>
      <Header />
      {
          <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/why-pirate-cloud" component={Why} />
          <Route exact path="/solutions" component={Solutions} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/pricing" component={Pricing} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/register" component={SignUp} />
        </Switch>
      }
    </React.Fragment>
  );
};

export default App;
