// Import Chart.js library
import Chart from 'chart.js';

// Define data for the chart
const data = {
  labels: ['Repo 1', 'Repo 2', 'Repo 3', 'Repo 4'],
  datasets: [
    {
      label: 'Stars',
      data: [10, 20, 30, 40],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
  ],
};

// Create a new bar chart
const starsChart = new Chart(document.getElementById('stars-chart'), {
  type: 'bar',
  data: data,
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
});

// Import Cal-Heatmap library
import CalHeatMap from 'cal-heatmap';

// Define data for the heatmap
const data = [
  { date: '2022-01-01', value: 2 },
  { date: '2022-01-02', value: 4 },
  { date: '2022-01-03', value: 6 },
  // ...
];

// Create a new heatmap
const contributions = new CalHeatMap()
  .data(data)
  .itemSelector('#contributions')
  .domain('month')
  .subDomain('day')
  .cellSize(12)
  .cellPadding(3)
  .range(1)
  .displayLegend(true)
  .legendColors({
    min: '#E5F5E0',
    max: '#31A354',
    empty: '#EFEFEF',
  });

// Import D3.js library
import * as d3 from 'd3';

// Define data for the graph
const data = {
  nodes: [
    { id: 'Repo 1', group: 1 },
    { id: 'Repo 2', group: 2 },
    { id: 'Repo 3', group: 2 },
    { id: 'Repo 4', group: 3 },
    { id: 'Repo 5', group: 3 },
 
