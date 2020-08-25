import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Countries from '../utils/Countries.json';

export default function Dropdown() {
    // useState state variable
    const [countries, setCountries] = useState("");
    const [importcountries, setImportcountries] = useState(Countries)

    const fetchCountryInfo = (country) => {
        fetch("https://www.quandl.com/api/v3/datasets/ECONOMIST/BIGMAC_" + country + "?api_key=x1vEiGNCDZ7dN85mViLU&column_index=3")
            .then(response => {
                // network failure, request prevented
                if (response.status >= 200 && response.status < 300) {
                    return Promise.resolve(response);
                }
                return Promise.reject(new Error(response.statusText));
            })
            .then(response => {
                return response.json();
            })
            .then(result => {
                console.log(result)
                return result
            })
            .catch(error => {
                // common error
                return null;
            });
    }

    const handleChange = (event) => {
        let name = event.target.value;
        setCountries(name);
        fetchCountryInfo(name);
    };

    return (


            <Grid item xs={12}>
                <Grid container spacing={2}>
                    <Grid item xs={9}>
                        <Typography variant="h5">Country of Destination: {countries}</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <FormControl>
                            <InputLabel htmlFor="age-native-simple">Countries</InputLabel>
                            <Select
                                native
                                value={countries}
                                onChange={handleChange}
                            >
                                <option aria-label="None" value=""/>
                                {Object.entries(importcountries).map(([key,val]) => {
                                    return (
                                        <option key={key} value={val}>{key}</option>
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
