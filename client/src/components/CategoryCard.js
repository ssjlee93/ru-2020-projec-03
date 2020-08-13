import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

export default function OutlinedCard() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    
    const useStyles = makeStyles((theme) => ({
        root: {
          '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
          },
        },
      }));

    return (
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {/* Title of Category */}
          </Typography>
          <Typography variant="body2" component="p">
            {/* Put Example of Expense here */}
            <br />
          </Typography>
        </CardContent>
        <CardActions>
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="CategoryBudget" label="Category Budget" variant="filled" />
            <br />
            </form>
        </CardActions>
      </Card>
    );
  }