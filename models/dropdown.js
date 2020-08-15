import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

import Countries from '../utils/Countries.json';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function PocketMoney() {

    const classes = useStyles();
    // useState state variable
    const [countries, setCountries] = useState("");
    const [importcountries, setImportcountries] = useState(Countries)



    const handleChange = (event) => {
        let name = event.target.value;
        setCountries(name)
    };

    

    return (
        <div>
            <p>This your selection: {countries}</p>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="age-native-simple">Countries</InputLabel>
                <Select
                    native
                    value={countries}
                    onChange={handleChange}
                >
                    <option aria-label="None" value=""/>
                    {Object.entries(importcountries).map(([key,val]) => {
                        return (
                            <option key={val} value={val}>{key}</option>
                        )
                     })}

                    
                    
                    
                </Select>
            </FormControl>
        </div>
    )
}


// Object.entries(thecountries).map(([key, value])) => (<option value={key}>{value}</option>) 
// <option  value={val}>{key}</option>
// <MenuItem key={val} value={val}>{key}</MenuItem>
