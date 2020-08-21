import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from '../SignOut'; 

import { AuthUserContext } from '../sessions';
import Button from "@material-ui/core/Button";
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import * as ROUTES from '../../constants/routes';
import "./index.css";

const Navigation = () => (

  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
    </div>
);

const NavigationAuth = () => (
  <div className="NavBarContainer">
    <Box display="flex">
        <Box flexGrow={1}>
          <Typography variant="h4" className="title">Pocket Money</Typography>
        </Box>
      <Box m={1}>
        <Button className="navButton" color="primary" variant="outlined" component={Link} to="/home">
          {/* we can swap "to" prop for ROUTES. something  */}
          Home
        </Button>
      </Box>
      <Box m={1}>
        <Button className="navButton" color="primary" variant="outlined" component={Link} to="/signout">
          Signout
          {/* we need to be able to read the signout button code here as a component but the styling doesn't allow that to happen */}

          {/*  <li>
               <Link to={ROUTES.ADMIN}>Admin</Link>
              </li> */}

              {/* we also need the aboe line of code but I am not sure how to implement it without screwing up marterialUI */}
        </Button>
      </Box>
    </Box>
  </div>
);
const NavigationNonAuth = () => (
  <ul>
    <li>
      <Link to={ROUTES.LANDING}>Landing</Link>
    </li>
    <li>
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </li>
  </ul>
);
 
export default Navigation;