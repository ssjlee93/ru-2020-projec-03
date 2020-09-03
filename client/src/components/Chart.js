import React, {useState, useEffect} from 'react';
import { Pie } from 'react-chartjs-2';

const Chart = props => {

  // chartData state
  const [ chartData, setChartData] = useState({
    labels: ["Administrative", "Tickets", "Auto", "Lodging", "Food", "Entertainment", "Shopping", "Childcare"],
    datasets: [
      {
        label: "Budget",

        data: [100,
          150,
        50,
        200,
        75,
        75,
        100,
        175],
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