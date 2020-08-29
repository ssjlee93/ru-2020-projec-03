import React from "react";
import Paper from '@material-ui/core/Paper';
import Box from "@material-ui/core/Box";
import Typography from '@material-ui/core/Typography';

export default function PieChartCard(props) {
  return (
    <div>
      <Typography variant="h4">Pie Chart Totals</Typography>
      <ul>
      <li>Administrative<span>{props.userData.administrative}</span></li>,
      <li>Tickets<span>{props.userData.tickets}</span></li>,
      <li>Auto<span>{props.userData.auto}</span></li>,
      <li>Lodging<span>{props.userData.lodging}</span></li>,
      <li>Food<span>{props.userData.food}</span></li>,
      <li>Entertainment<span>{props.userData.entertainment}</span></li>,
      <li>Shopping<span>{props.userData.shopping}</span></li>,
      <li>Childcare<span>{props.userData.childcare}</span></li>,
      </ul>
      </div>
  );

}

