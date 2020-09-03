import React from 'react';
import { Link } from 'react-router-dom';
import Button from "@material-ui/core/Button";
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import {auth} from "../../utils/firebase";

import "./index.css";


const NavNoSignIn = () => (
  <div className="NavBarContainer">
  <Box display="flex">
      <Box flexGrow={1}>
        <Typography variant="h3" className="title">Pocket Money</Typography>
      </Box>
  </Box>
</div>
);

export default NavNoSignIn;