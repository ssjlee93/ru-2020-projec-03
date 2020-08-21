import React from 'react';
import { Link } from 'react-router-dom';
import Button from "@material-ui/core/Button";
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import * as ROUTES from '../../constants/routes';
import "./index.css";
const Navigation = () => (
  <div className="NavBarContainer">
    
    <Box display="flex" justifyContent="flex-end">
    <ul className="NavBar">
      <li className="Title">
        <Button>
          <Typography variant="h1">PocketMoney</Typography>
        </Button>
      </li>
      <li>
      <Button color="primary" variant="outlined" component={Link} to="/home">
        {/* we can swap "to" prop for ROUTES. something  */}
      Home
    </Button>
      </li>
      <li> 
        <Button color="primary" variant="outlined" component={Link} to="/signout">
        {/* we can swap "to" prop for ROUTES. something  */}
      Signout
    </Button>
      </li>
    </ul>
    </Box>
  </div>
);
 
export default Navigation;