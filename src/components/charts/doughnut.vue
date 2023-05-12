<template>
    <canvas id="doughnut" width="100" height="100"></canvas>
</template>

<script>
import Chart from 'chart.js/auto';
export default {
    name: 'DoughnutPage',
    mounted() {
        console.log("chart start")
        const ctx = document.getElementById('doughnut');
        const data = {
            labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
            datasets: [
                {
                    label: 'Dataset 1',
                    data: [300,50,100],
                    backgroundColor: [
                        'rgb(255,99,132)',
                        'rgb(54,162,235)',
                        'rgb(255,205,86)'
                    ],
                }
            ]
        };
        new Chart(ctx, {
            type: 'doughnut',
            data: data,
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'الطلبات'
                    }
                }
            },
        });
    }
    // props: {
    //   msg: String
    // }
}
</script>