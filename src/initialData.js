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
    </div>
    },
    {
        id: 3, index: 3, content: <div class="row">
            <div class="column" >
                <h2>Column 3</h2>
                <p>Some text..</p>
            </div>
            <div class="column">
                <h2>Column 4</h2>
                <p>Some text..</p>
            </div>
        </div>
    },
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
  { id: 5, index: 5, content: <img
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
    {
        id: 6, index: 6, content: "React (also known as React.js or ReactJS) is an open-source JavaScript library[3] for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.React can be used as a base in the development of single-page or mobile applications.However, React is only concerned with rendering data to the DOM, and so creating React applications usually requires the use of additional libraries for state management and routing. Redux and React Router are respective examples of such libraries."
    },
    {
        id: 7, index: 7, content: <div class="row">
            <div class="column" >
                <h2>Column 3</h2>
                <p>Some text..</p>
            </div>
            <div class="column">
                <h2>Column 4</h2>
                <p>Some text..</p>
            </div>
        </div>
    },
];

export default () => initialItems;
