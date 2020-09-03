import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

export default function CategoryCard(props) {

    return (
      <Grid item xs={3}>
        <Card variant="outlined">
          <CardContent>
            <Typography color="textSecondary">
            {props.category}
            </Typography>
            <Typography variant="body2" component="p">
              <br />
            </Typography>
          </CardContent>
          <CardActions>
              <TextField 
              className="CategoryBudget" 
              label="Amount (USD)" 
              placeholder="ex:) $1000"
              key={props.category}
              name={props.category.toLowerCase()} 
              onChange={props.handleInputChange}
              variant="filled" />
              <br />
          </CardActions>
        </Card>
      </Grid>
    );
  }