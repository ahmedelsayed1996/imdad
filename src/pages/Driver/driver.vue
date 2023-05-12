<template>
    <div class="row">
        <div class="col-sm-6 col-xl-6">
            <canvas id="circle" width="100" height="100"></canvas>
        </div>
        <div class="col-sm-6 col-xl-6 row">
            <div class="col-sm-6 col-xl-4">
                <div class="card">
                    <div class="card-heading p-4">
                        <div class="mini-stat-icon float-right">
                            <i class="mdi mdi-pause bg-primary  text-white"></i>
                        </div>
                        <div>
                            <h5 class="font-16">الرصيد الحالي</h5>
                        </div>
                        <h3 class="mt-4">35 ري</h3>
                        <div class="progress mt-4" style="height: 4px;">
                            <div class="progress-bar bg-primary" role="progressbar" style="width: 75%"
                                aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <p class="text-muted mt-2 mb-0">النسبة المئوية <span class="float-right">75%</span></p>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-xl-4">
                <div class="card">
                    <div class="card-heading p-4">
                        <div class="mini-stat-icon float-right">
                            <i class="mdi mdi-briefcase-check bg-success text-white"></i>
                        </div>
                        <div>
                            <h5 class="font-16">إجمالي الارباح</h5>
                        </div>
                        <h3 class="mt-4">265 ري</h3>
                        <div class="progress mt-4" style="height: 4px;">
                            <div class="progress-bar bg-success" role="progressbar" style="width: 88%"
                                aria-valuenow="88" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <p class="text-muted mt-2 mb-0"> النسبة المئوية<span class="float-right">88%</span></p>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-xl-4">
                <div class="card">
                    <div class="card-heading p-4">
                        <div class="mini-stat-icon float-right">
                            <i class="mdi mdi-clock bg-warning text-white"></i>
                        </div>
                        <div>
                            <h5 class="font-16">طلبات الايداع </h5>
                        </div>
                        <h3 class="mt-4">447 ري</h3>
                        <div class="progress mt-4" style="height: 4px;">
                            <div class="progress-bar bg-warning" role="progressbar" style="width: 68%"
                                aria-valuenow="68" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <p class="text-muted mt-2 mb-0"> النسبة المئوية<span class="float-right">68%</span></p>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-xl-4">
                <div class="card">
                    <div class="card-heading p-4">
                        <div class="mini-stat-icon float-right">
                            <i class="mdi mdi-motorbike bg-danger text-white"></i>
                        </div>
                        <div>
                            <h5 class="font-16"> اجمالي الحركة المالية في المحفظة</h5>
                        </div>
                        <h3 class="mt-4">86 ري</h3>
                        <div class="progress mt-4" style="height: 4px;">
                            <div class="progress-bar bg-danger" role="progressbar" style="width: 82%"
                                aria-valuenow="82" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <p class="text-muted mt-2 mb-0">النسبة المئوية<span class="float-right">82%</span></p>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-xl-4">
                <div class="card">
                    <div class="card-heading p-4">
                        <div class="mini-stat-icon float-right">
                            <i class="mdi mdi-calendar bg-warning text-white"></i>
                        </div>
                        <div>
                            <h5 class="font-16">معدل العمليات اليومية </h5>
                        </div>
                        <h3 class="mt-4">447 ري</h3>
                        <div class="progress mt-4" style="height: 4px;">
                            <div class="progress-bar bg-warning" role="progressbar" style="width: 68%"
                                aria-valuenow="68" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <p class="text-muted mt-2 mb-0"> النسبة المئوية<span class="float-right">68%</span></p>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-xl-4">
                <div class="card">
                    <div class="card-heading p-4">
                        <div class="mini-stat-icon float-right">
                            <i class="mdi mdi-calendar bg-warning text-white"></i>
                        </div>
                        <div>
                            <h5 class="font-16">معدل العمليات اليومية </h5>
                        </div>
                        <h3 class="mt-4">447 ري</h3>
                        <div class="progress mt-4" style="height: 4px;">
                            <div class="progress-bar bg-warning" role="progressbar" style="width: 68%"
                                aria-valuenow="68" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <p class="text-muted mt-2 mb-0"> النسبة المئوية<span class="float-right">68%</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
const labels = ['Red', 'Orange', 'Yellow', 'Green', 'Blue'];
const data = {
  labels: labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [130,50,100,30,180],
      backgroundColor: [
        'red',
        'orange',
        'yellow',
        'green',
        'blue',
      ]
    }
  ]
};
import Chart from 'chart.js/auto';
export default {
    name: 'DriverPage',
    mounted() {
        console.log("chart start")
        const ctx = document.getElementById('circle');
        new Chart(ctx, {
            type: 'polarArea',
            data: data,
            options: {
                responsive: true,
                scales: {
                    r: {
                        pointLabels: {
                            display: true,
                            centerPointLabels: true,
                            font: {
                                size: 18
                            }
                        }
                    }
                },
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'حركة الموصل'
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