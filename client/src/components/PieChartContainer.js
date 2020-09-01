import React from "react";
import Paper from '@material-ui/core/Paper';
import Box from "@material-ui/core/Box";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Chart from "./Chart";
export default function PieChartCard(props) {
  return (
  <div>
    <Typography variant="h4">Budget Totals & Summary</Typography>
      <Chart userData={props.userData}/>
    <Grid container>
      <Grid item lg={6}>
        <ul>
        <li>Administrative</li>
        <li>Tickets</li>
        <li>Auto</li>
        <li>Lodging</li>
        <li>Food</li>
        <li>Entertainment</li>
        <li>Shopping</li>
        <li>Childcare</li>
        </ul>
      </Grid>
      <Grid item lg={6}>
      <ul>
        <li>{props.userData.administrative} USD</li>
        <li>{props.userData.tickets} USD</li>
        <li>{props.userData.auto} USD</li>
        <li>{props.userData.lodging} USD</li>
        <li>{props.userData.food} USD</li>
        <li>{props.userData.entertainment} USD</li>
        <li>{props.userData.shopping} USD</li>
        <li>{props.userData.childcare} USD</li>
        </ul>
      </Grid>
    </Grid>
  </div>
  );

}

