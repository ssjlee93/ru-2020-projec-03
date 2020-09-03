import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ProfilePage from "./ProfilePage";
import PasswordReset from "./PasswordReset";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation/index";
import NavNoSignIn from "../components/Navigation/NavNoSignIn";
import UserContext from "../utils/UserContext";

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
          <Route exact path="/signup">
          <Redirect to="/" />
          </Route>
        </Switch>
        <Footer />
      </Router>
      :
      <Router>
      <NavNoSignIn />
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
        <Footer />
      </Router>
  );
}



export default Application;