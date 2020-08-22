import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from '../Navigation';
import Landing from '../pages/Landing';
import Main from '../pages/Main';
import Home from '../pages/Home';
import SignUp from '../SignUp';
import SignIn from '../SignIn';
import PasswordForget from '../PasswordForget';

//do we need routes for the above components or with these be nested within other routes?
import AccountPage from '../Account';

import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Sessions';
import { AuthUserContext } from '../Sessions';
 
export { AuthUserContext, withAuthentication };

const App = () => (
  <Router>
    <div>
      <Navigation />

      <hr />

      <Route exact path={ROUTES.LANDING} component={Landing} />
      <Route path={ROUTES.SIGN_UP} component={SignUp} />
      <Route path={ROUTES.SIGN_IN} component={SignIn} />
      <Route
        path={ROUTES.PASSWORD_FORGET}
        component={PasswordForget}
      />
      <Route path={ROUTES.HOME} component={Home} />
      {/* <Route path={ROUTES.ACCOUNT} component={AccountPage} /> */}
      {/* <Route path={ROUTES.ADMIN} component={AdminPage} /> */}
    </div>
  </Router>
);




export default withAuthentication(App);
