<template>
    <canvas id="myChart" width="20" height="20"></canvas>
</template>
<script>
import Chart from 'chart.js/auto';
export default {
    name: 'LineChartPage',
    mounted() {
        console.log("chart start")
        const ctx = document.getElementById('myChart');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: 'عرض الطلبات',
                    data: [11, 8, 3, 5, 2, 3],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
    // props: {
    //   msg: String
    // }
}
</script>