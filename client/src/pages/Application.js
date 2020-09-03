import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SingUp";
import ProfilePage from "./ProfilePage";
import PasswordReset from "./PasswordReset";
import Footer from "../components/Footer";
import NavAuth from "../components/NavAuth";
import NavNoAuth from "../components/NavNoAuth";
import UserContext from "../utils/UserContext";

function Application() {
  const user = useContext(UserContext);
  return (
    user ?
      <Router>
        <NavAuth />
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
      <NavNoAuth />
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