import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import "./style.css";

const NavNoAuth = () => (
  <div className="NavBarContainer">
  <Box display="flex">
      <Box flexGrow={1}>
        <Typography variant="h3" className="title">Pocket Money</Typography>
      </Box>
  </Box>
</div>
);

export default NavNoAuth;