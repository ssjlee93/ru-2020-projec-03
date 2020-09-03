import React, {useState, useEffect} from "react";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Chart from "./Chart";
import { Pie } from 'react-chartjs-2';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export default function PieChartCard(props) {
  // console.log("Test admin value: " + props.userData.administrative);
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
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#B6EFD4",
    minWidth: "100%"
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);
function createData(category, homeBudget, awayBudget) {
  return { category, homeBudget, awayBudget};
}

const rows = [
  createData('Administrative', props.userData.administrative, ((props.userData.administrative *props.economistThere[1]) /props.economistHere[1]).toFixed(2)),
  createData('Tickets', props.userData.tickets, ((props.userData.tickets *props.economistThere[1]) /props.economistHere[1]).toFixed(2)),
  createData('Auto', props.userData.auto, ((props.userData.auto *props.economistThere[1]) /props.economistHere[1]).toFixed(2)),
  createData('Lodging', props.userData.lodging, ((props.userData.lodging *props.economistThere[1]) /props.economistHere[1]).toFixed(2)),
  createData('Food', props.userData.food, ((props.userData.food *props.economistThere[1]) /props.economistHere[1]).toFixed(2)),
  createData('Entertainment', props.userData.entertainment, ((props.userData.entertainment *props.economistThere[1]) /props.economistHere[1]).toFixed(2)),
  createData('Shopping', props.userData.shopping, ((props.userData.shopping *props.economistThere[1]) /props.economistHere[1]).toFixed(2)),
  createData('Childcare', props.userData.childcare, ((props.userData.childcare *props.economistThere[1]) /props.economistHere[1]).toFixed(2)),
];
  return (
  <div>
    {/* <Typography variant="h4">Budget Totals & Summary</Typography>
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
      </div> */}
    <Typography variant="h4">Total Budget</Typography>
    <Typography>Date updated: {props.economistHere[0]}</Typography>
    <Typography>Index of The United States: {props.economistHere[1]}</Typography>
    <Typography>Total Orignal Budget (USD): {props.userData.administrative + 
      props.userData.tickets + props.userData.auto + 
      props.userData.lodging + props.userData.food + 
      props.userData.entertainment + 
      props.userData.shopping + 
      props.userData.childcare}
    </Typography>
    <Typography>Total Indexed Budget (USD): {(((props.userData.administrative *props.economistThere[1]) /props.economistHere[1]) + 
      ((props.userData.tickets *props.economistThere[1]) /props.economistHere[1]) + 
      ((props.userData.auto *props.economistThere[1]) /props.economistHere[1]) + 
      ((props.userData.lodging *props.economistThere[1]) /props.economistHere[1]) + 
      ((props.userData.food *props.economistThere[1]) /props.economistHere[1]) + 
      ((props.userData.entertainment *props.economistThere[1]) /props.economistHere[1]) + 
      ((props.userData.shopping *props.economistThere[1]) /props.economistHere[1]) + 
      ((props.userData.childcare *props.economistThere[1]) /props.economistHere[1])).toFixed(2)}
    </Typography>
    <TableContainer component={Paper}>
      <Table aria-label="USD Table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Category</StyledTableCell>
            <StyledTableCell>Original Budget (USD)</StyledTableCell>
            <StyledTableCell>Indexed Budget (USD)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.category}
              </StyledTableCell>
              <StyledTableCell>{row.homeBudget}</StyledTableCell>
              <StyledTableCell>{row.awayBudget}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>

  );

}

//bruh