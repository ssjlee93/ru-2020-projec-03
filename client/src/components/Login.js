// some kind of form for sign up. 
// This component will go inside Landing page 
// It will be conditionally rendered with Sign In . js 

import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

export default function Login(props) {

  return (
    <Grid container spacing={1} alignContent="center">
        <Grid item lg={12}>
            <form noValidate autoComplete="off">
            <TextField id={props.id} label={props.name} variant="filled" name={props.name} value={props.value} placeholder={props.placeholder} onChange={props.onChange}/>
            <br />
           
            </form>
        </Grid>
    </Grid>
  );
}