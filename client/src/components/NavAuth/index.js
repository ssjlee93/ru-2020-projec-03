import React from 'react';
import Button from "@material-ui/core/Button";
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import {auth} from "../../utils/firebase";

import "./style.css";

const NavAuth = () => (
  <div className="NavBarContainer">
  <Box display="flex">
      <Box flexGrow={1}>
        <Typography variant="h3" className="title">Pocket Money</Typography>
      </Box>
    <Box m={1}>
      <Button className="navButton" color="primary" variant="outlined" onClick = {() => {auth.signOut()}}>
        Signout
      </Button>
    </Box>
  </Box>
</div>
);
 
export default NavAuth;