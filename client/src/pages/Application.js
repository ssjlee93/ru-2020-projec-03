import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import UserContext from "../utils/UserContext";

import SignIn from "./SignIn";
import SignUp from "./SignUp";

import ProfilePage from "./ProfilePage";
import PasswordReset from "./PasswordReset";

import Navigation from "../components/Navigation";

function Application() {
  const user = useContext(UserContext);

  return (
        user ?
        <Router>
      <Navigation />
        <Switch>
          <Route exact path="/">
          <ProfilePage />
          </Route>
        </Switch>
        <footer>footer down</footer>
      </Router>
      :
      <Router>
      <Navigation />
        <Switch>
          <Route exact path="/signUp">
            <SignUp />
          </Route>
          <Route exact path="/">
            <SignIn />
          </Route>
          <Route exact path="/passwordReset">
            <PasswordReset />
          </Route>
        </Switch>
         <footer>footer down</footer>
      </Router>
  );
}



export default Application;