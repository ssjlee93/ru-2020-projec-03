import React from "react";
import Dropdown from "../components/Dropdown";
import Box from "@material-ui/core/Box";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const DropdownSection = (props) => (
    <Box my={2}>
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h4">Country Select</Typography>
            <Dropdown getIndex= {props.getIndex}/>
      </CardContent>
    </Card>
  </Box>
)

export default DropdownSection