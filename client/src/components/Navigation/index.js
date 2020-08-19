import React from 'react';
import { Link } from 'react-router-dom';
import Button from "@material-ui/core/Button";
import * as ROUTES from '../../constants/routes';
 
const Navigation = () => (
  <div>
    <ul>
      <li>
      <Button color="primary" component={Link} to="/home">
        {/* we can swap "to" prop for ROUTES. something  */}
      Signup
    </Button>
      </li>
      <li> 
        <Link to={ROUTES.LANDING}>Landing</Link>
      </li>
      <li>
        <Link to={ROUTES.HOME}>Home</Link>
      </li>
    </ul>
  </div>
);
 
export default Navigation;