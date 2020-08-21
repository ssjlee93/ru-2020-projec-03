import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from '../Navigation';
import Landing from '../pages/Landing';
import Main from '../pages/Main';
import Home from '../pages/Home';
// import SignUpPage from '../SignUp';
// import SignInPage from '../SignIn';
// import PasswordForgetPage from '../PasswordForget';

//do we need routes for the above components or with these be nested within other routes?
import AccountPage from '../Account';

import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../sessions';
import { AuthUserContext } from '../sessions';
import withAuthentication from './withAuthentication';
 
export { AuthUserContext, withAuthentication };

const App = () => (
  <Router>
    <div>
      <Navigation />

      <hr />

      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route
        path={ROUTES.PASSWORD_FORGET}
        component={PasswordForgetPage}
      />
      <Route path={ROUTES.HOME} component={HomePage} />
      {/* <Route path={ROUTES.ACCOUNT} component={AccountPage} /> */}
      {/* <Route path={ROUTES.ADMIN} component={AdminPage} /> */}
    </div>
  </Router>
);




export default withAuthentication(App);
