// some kind of form for sign up. 
// This component will go inside Landing page 
// It will be conditionally rendered with Sign In . js 

import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

export default function SignUpField() {

  return (
    <Grid container spacing={2}>
        <Grid item xs={4}>
            <form noValidate autoComplete="off">
            <TextField id="Username" label="Username" variant="filled" />
            <br />
            <TextField id="Password" label="Password" variant="filled" />
            <br />
            <Button variant="outlined" color="primary">
            Create Account
            </Button>
            </form>
        </Grid>
    </Grid>
  );
}