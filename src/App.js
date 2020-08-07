import React, { useState } from 'react';
import styled from 'styled-components';
import { DndProvider } from 'react-dnd';
import MultiBackend from 'react-dnd-multi-backend';
import HTML5toTouch from './dnd/HTML5toTouch';
import DraggableGridItem from './dnd/DraggableGridItem';
import Grid from './grid/Grid';
import initialItems from './initialData';
export default function App() {
  const [ list, setList ] = useState(initialItems);
  const options = {
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
  const onDrop = (firstItemId, secondItemId) => {
    let newList = [ ...list ];
    let firstItem = newList.find(i => i.id === firstItemId);
    let secondItem = newList.find(i => i.id === secondItemId);
    const firstIndex = firstItem.index;
    firstItem.index = secondItem.index;
    secondItem.index = firstIndex;
    setList(newList);
  };

  return (
    <DndProvider backend={MultiBackend} options={HTML5toTouch}>
      <AppWrapper>
        <h1>Responsive Drag-and-Drop Grid</h1>
        <Grid>
          { list.sort(sortItems).map(item =>
            <DraggableGridItem
              key={item.id}
              item={item}
              onDrop={onDrop}
            >{item.content}</DraggableGridItem>
          )}
        </Grid>
      </AppWrapper>
    </DndProvider>
  );
}

const sortItems = (a, b) => a.index - b.index;

const AppWrapper = styled.div `
  padding: 10px 200px;

  @media (max-width: 800px) {
    padding: 10px;
  }
`;
