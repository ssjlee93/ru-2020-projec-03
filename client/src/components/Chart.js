import React, {useState} from 'react';
import { Pie } from 'react-chartjs-2';

const Chart = props => {
  const [ chartData, setChartData] = useState({
    labels: ["Administrative", "Tickets", "Auto", "Lodging", "Food", "Entertainment", "Shopping", "Childcare"],
    datasets: [
      {
        label: "Budget",
        data: [4,
          props.userData.tickets,
        props.userData.auto,
        props.userData.lodging,
        props.userData.food,
        props.userData.entertainment,
        props.userData.shopping,
        props.userData.childcare],
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
    )
        }

export default Chart