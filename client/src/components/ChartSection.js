import React, {useState} from "react";
import Typography from '@material-ui/core/Typography';
import Chart from "./Chart";
import { Pie } from 'react-chartjs-2';

export default function ChartSection(props) {
  const [administrative, tickets, auto, lodging, food, entertainment, shopping, childcare] = props.userData;
  // console.log("Test admin value: " + props.userData.administrative);
  const [propData, setPropData] = useState([
        administrative,
        tickets,
        auto,
        lodging,
        food,
        entertainment,
        shopping,
        childcare
  ])

  const [ chartData, setChartData] = useState({
    labels: ["Administrative", "Tickets", "Auto", "Lodging", "Food", "Entertainment", "Shopping", "Childcare"],
    datasets: [
      {
        label: "Budget",
        data: [
          administrative,
          tickets,
          auto,
          lodging,
          food,
          entertainment,
          shopping,
          childcare
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
  </div>
  );
}
