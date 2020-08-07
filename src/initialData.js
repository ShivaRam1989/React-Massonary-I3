import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
const options = {
  chart:{
width:400
  },
  xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
},
yAxis: [{
    title: {
        text: 'Primary Axis'
    },
    gridLineWidth: 0
}, {
    title: {
        text: 'Secondary Axis'
    },
    opposite: true
}],
legend: {
    layout: 'vertical',
    backgroundColor: '#FFFFFF',
    floating: true,
    align: 'left',
    x: 100,
    verticalAlign: 'top',
    y: 70
},
tooltip: {
    formatter: function () {
        return '<b>' + this.series.name + '</b><br/>' +
            this.x + ': ' + this.y;
    }
},
plotOptions: {
},
series: [{
    data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

}, {
    data: [129.9, 271.5, 306.4, 29.2, 544.0, 376.0, 435.6, 348.5, 216.4, 294.1, 35.6, 354.4],
    yAxis: 1

}]
}
const initialItems = [
  { id: 1, index: 1, content: <HighchartsReact
    highcharts={Highcharts}
    options={options}
  /> },
  { id: 2, index: 2, content:<div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>
  <div class="grid-item">7</div>
  <div class="grid-item">8</div>
  <div class="grid-item">9</div>
</div>},
  { id: 4, index: 4, content: <div class="row">
  <div class="column" >
    <h2>Column 3</h2>
    <p>Some text..</p>
  </div>
  <div class="column">
    <h2>Column 4</h2>
    <p>Some text..</p>
  </div>
</div>},
  { id: 10, index: 10, content: <img
    style={{
      alignSelf: 'center',
      height: 200,
      width: 300,
      borderWidth: 1,
      borderRadius: 20
    }}
    src={require('./images/holiday.jpg')}
    resizeMode="stretch"
  />},
  { id: 12, index: 12, content: "Once upon a time not so long ago Tommy used to work on the docks, union's been on strike He's down on his luck, it's tough, so tough Gina works the diner all day working for her man She brings home her pay, for love, for love She says, we've got to hold on to what we've got It doesn't make a difference if we make it or not We've got each other and that's a lot for love We'll give it a shot Woah, we're half way there Woah, livin' on a prayer Take my hand, we'll make it I swear Woah, livin' on a prayer Tommy's got his six-string in hock Now he's holding in what he used to make it talk So tough, it's tough Gina dreams of running away When she cries in the night, Tommy whispers Baby, it's okay, someday We've got to hold on to what we've got It doesn't make a difference if we make it or not We've got each other and that's a lot for love We'll give it a shot" },
];

export default () => initialItems;
