<template>
    <canvas id="point" width="400" height="400"></canvas>
</template>
<script>

const data = {
  labels: 'Dataset 1',
  datasets: [
    {
      label: 'Dataset 1',
      data: [150,50,100,56,98,37,45,35,89],
      borderColor: 'red',
      backgroundColor: 'red',
      yAxisID: 'y',
    }
  ]
};

import Chart from 'chart.js/auto';
export default {
    name: 'LinePage',
    mounted() {
        console.log("chart start")
        const ctx = document.getElementById('point');
        new Chart(ctx, {
            type: 'line',
            data: data,
            options: {
                responsive: true,
                interaction: {
                    mode: 'index',
                    intersect: false,
                },
                stacked: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'اجمالي عدد المبيعات'
                    }
                },
                scales: {
                    y: {
                        type: 'linear',
                        display: true,
                        position: 'left',
                    },
                    y1: {
                        type: 'linear',
                        display: true,
                        position: 'right',

                        // grid line settings
                        grid: {
                            drawOnChartArea: false, // only want the grid lines for one axis to show up
                        },
                    },
                }
            },

        });
    }
    // props: {
    //   msg: String
    // }
}
</script>