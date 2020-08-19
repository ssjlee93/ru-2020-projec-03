import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

export default function CategoryCard() {

    return (
      <Grid item xs={3}>
        <Card variant="outlined">
          <CardContent>
            <Typography color="textSecondary">
              {/* Title of Category */} Food
            </Typography>
            <Typography variant="body2" component="p">
              {/* Put Example of Expense here */} Restaurants, Grocery, etc.
              <br />
            </Typography>
          </CardContent>
          <CardActions>
          <form noValidate autoComplete="off">
              <TextField id="CategoryBudget" label="Budget" variant="filled" />
              <br />
              </form>
          </CardActions>
        </Card>
      </Grid>
    );
  }