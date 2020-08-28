import React, {useState, useContext} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import UserContext from "../utils/UserContext";
import API from "../utils/API";

export default function CategoryCard(props) {

    return (
      <Grid item xs={3}>
        <Card variant="outlined">
          <CardContent>
            <Typography color="textSecondary">
            {props.category}
            </Typography>
            <Typography variant="body2" component="p">
              {/* Put Example of Expense here */} Restaurants, Grocery, etc.
              <br />
            </Typography>
          </CardContent>
          <CardActions>
          <form noValidate autoComplete="off">
              <TextField 
              className="CategoryBudget" 
              label="Amount (USD)" 
              placeholder="ex:) $1000"
              name={props.category.toLowerCase()} 
              onChange={props.handleInputChange}
              variant="filled" />
              <br />
              </form>
          </CardActions>
        </Card>
      </Grid>
    );
  }