import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import SignIn from "./SignIn";
import SignUp from "./SignUp";

import ProfilePage from "./ProfilePage";
import PasswordReset from "./PasswordReset";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Authenticated from "../components/Authenticated";

function Application() {
  return (
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/signUp">
            <SignUp />
          </Route>
          <Route exact path="/">
            <SignIn />
          </Route>
          <Authenticated exact path="/profile" component={ProfilePage} />
          <Route exact path="/passwordReset">
            <PasswordReset />
          </Route>
        </Switch>
         <Footer/>
      </Router>
  );
}



export default Application;