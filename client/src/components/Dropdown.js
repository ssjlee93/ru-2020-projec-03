import React, { useState, useEffect } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

export default function Dropdown(props) {

    return (
            <Grid item xs={12}>
                <Grid container spacing={2}>
                    <Grid item xs={9}>
                        <Typography variant="h5">Country of Destination: {props.country}</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <FormControl>
                            <InputLabel htmlFor="age-native-simple">Countries</InputLabel>
                            <Select
                                native
                                value={props.code}
                                onChange={props.handleDropdownChange}
                            >
                                <option aria-label="None" value=""/>
                                {Object.entries(props.countries).map(([key,val]) => {
                                    return (
                                        <option name={key} key={key} value={key+":"+val}>{key}</option>
                                    )
                                })}
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </Grid>

    )
}


// Object.entries(thecountries).map(([key, value])) => (<option value={key}>{value}</option>) 
// <option  value={val}>{key}</option>
// <MenuItem key={val} value={val}>{key}</MenuItem>
