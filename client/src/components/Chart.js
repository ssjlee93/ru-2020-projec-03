import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:{
          labels: ["Administrative", "Tickets", "Auto", "Lodging", "Food", "Entertainment", "Shopping", "Childcare"],
          datasets:[
              {
                  label:"Budget",
                  data:[props.userData.administrative,
                    props.userData.tickets,
                    props.userData.auto,
                    props.userData.lodging,
                    props.userData.food,
                    props.userData.entertainment,
                    props.userData.shopping,
                    props.userData.childcare],
                  backgroundColor:[
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(255, 99, 132, 0.6)'
                  ],
              }
          ]
      }
    }
  }

  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right'
  }

  render(){
    return (
      <div className="chart">
        <Pie
          data={this.state.chartData}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'Budget Allocation Summary',
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />
      </div>
    )
  }
}

export default Chart;