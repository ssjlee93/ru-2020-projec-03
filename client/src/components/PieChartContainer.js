import React, {useState, useEffect} from "react";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Chart from "./Chart";
import { Pie } from 'react-chartjs-2';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export default function PieChartCard(props) {
  console.log("Test admin value: " + props.userData.administrative);
  const [propData, setPropData] = useState([
        props.userData.administrative,
        props.userData.tickets,
        props.userData.auto,
        props.userData.lodging,
        props.userData.food,
        props.userData.entertainment,
        props.userData.shopping,
        props.userData.childcare
  ])
  const [ chartData, setChartData] = useState({
    labels: ["Administrative", "Tickets", "Auto", "Lodging", "Food", "Entertainment", "Shopping", "Childcare"],
    datasets: [
      {
        label: "Budget",
        data: [
          props.userData.administrative,
          props.userData.tickets,
          props.userData.auto,
          props.userData.lodging,
          props.userData.food,
          props.userData.entertainment,
          props.userData.shopping,
          props.userData.childcare
        ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(255, 99, 132, 0.6)'
        ]
      }
    ]
  }
)

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

  return (
  <div>
    <Typography variant="h4">Budget Totals & Summary</Typography>
      <Chart userData={props.userData}/>
      <div className="chart">
        <Pie
          data={chartData}
          options={{
            title: {
              display: true,
              text: 'Budget Allocation Summary',
              fontSize: 25
            },
            legend: {
              display: true,
              position: "right"
            }
          }}
        />
      </div>
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

    <TableContainer component={Paper}>
      <Table className="Table" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

  </div>

  );

}

