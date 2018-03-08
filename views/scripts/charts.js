 let myChart = document.getElementById('charts').getContext('2d');

// Global Options
Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#777';

let massPopChart = new Chart(myChart, {
  type:'line',
  data:{
    labels:['Bronze', 'Silver', 'Gold', 'Platinum'],
    datasets:[{
      label:'Monthly Premium',
      data:[
        49.75,
        87.25,
        139.75,
        211.1
      ],
      //backgroundColor:'green',
      backgroundColor:[
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
      ],
      borderWidth:1,
      borderColor:'#777',
      hoverBorderWidth:3,
      hoverBorderColor:'#000'
    }]
  },
  options: {
        responsive: true,
        title: {
          display: true,
          text: 'Average Premium per Tier'
        },
        tooltips: {
          mode: 'index',
          intersect: false,
        },
        hover: {
          mode: 'nearest',
          intersect: true
        },
        scales: {
          xAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Tier'
            }
          }],
          yAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: '$ Premium'
            }
          }]
        }
      }
  // options:{
  //   title:{
  //     display:true,
  //     text:'Average Premium per Tier',
  //     fontSize:25
  //   },
  //   legend:{
  //     display:true,
  //     position:'right',
  //     labels:{
  //       fontColor:'#000'
  //     }
  //   },
  //   layout:{
  //     padding:{
  //       left:50,
  //       right:0,
  //       bottom:0,
  //       top:0
  //     }
  //   },
  //   tooltips:{
  //     enabled:true
  //   }
  // }
});