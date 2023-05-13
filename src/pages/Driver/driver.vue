<template>
    <div class="container-fluid ">
        <div class="row">
            <div class="col-sm-6 col-xl-6">
                <canvas id="circle" width="100" height="100"></canvas>
            </div>
            <div class="col-sm-6 col-xl-6 row mt-3">
                <div class="col-sm-6 col-xl-4">
                    <div class="card">
                        <div class="card-heading p-4">
                            <div class="mini-stat-icon float-right">
                                <i class="mdi mdi-store bg-primary  text-white"></i>
                            </div>
                            <div>
                                <h5 class="font-16 text-white"> الاجمالي</h5>
                            </div>
                            <h3 class="mt-4 text-white">35 </h3>
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
                                <h5 class="font-16 text-white">تم التسليم </h5>
                            </div>
                            <h3 class="mt-4 text-white">265 </h3>
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
                                <i class="mdi mdi-car bg-warning text-white"></i>
                            </div>
                            <div>
                                <h5 class="font-16 text-white"> قيد التوصيل </h5>
                            </div>
                            <h3 class="mt-4 text-white">78</h3>
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
                                <i class="mdi mdi-wallet-travel bg-danger text-white"></i>
                            </div>
                            <div>
                                <h5 class="font-16 text-white">انتظار الشحن</h5>
                            </div>
                            <h3 class="mt-4 text-white">86 </h3>
                            <div class="progress mt-4" style="height: 4px;">
                                <div class="progress-bar bg-danger" role="progressbar" style="width: 82%" aria-valuenow="82"
                                    aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p class="text-muted mt-2 mb-0">النسبة المئوية<span class="float-right">82%</span></p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-xl-4">
                    <div class="card">
                        <div class="card-heading p-4">
                            <div class="mini-stat-icon float-right ">
                                <i class="mdi mdi-file-excel-box bg-danger text-white "></i>
                            </div>
                            <div>
                                <h5 class="font-16 text-white"> تم الرفض  </h5>
                            </div>
                            <h3 class="mt-4 text-white">447 </h3>
                            <div class="progress mt-4" style="height: 4px;">
                                <div class="progress-bar bg-danger" role="progressbar" style="width: 68%"
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
                                <h5 class="font-16 text-white">الشحنات المرتجعه</h5>
                            </div>
                            <h3 class="mt-4 text-white">45</h3>
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
        <hr style="border: 2px solid black;"/>
        <div class="row">
            <div class="col-xl-12">
                <h4 class="mt-0 header-title mb-4 headLine btn btn-success w-25"> إضافة موصل :</h4>
                <div class="card m-b-30">
                    <div class="card-body">


                        <div class="table-responsive">
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">الاسم</th>
                                        <th scope="col">المنطقة </th>
                                        <th scope="col">عدد الطلبات</th>
                                        <th scope="col">المرتجع </th>
                                        <th scope="col">الرصيد</th>
                                        <th scope="col"> تسويه الرصيد</th>
                                        <th scope="col"> تعديل</th>
                                        <th scope="col">حذف </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>عصام قادر</td>
                                        <td>
                                           صنعاء
                                            <!-- <span class="badge badge-success">Delivered</span> -->
                                        </td>
                                        <td>64</td>
                                        <td>
                                            <div>
                                                5
                                            </div>
                                        </td>
                                        <td>$9,420,000</td>
                                        <td></td>
                                        <td>
                                            <div>
                                                <a href="#" class="btn btn-primary btn-sm">تعديل</a>
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                <a href="#" class="btn btn-danger btn-sm">حذف</a>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
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
            data: [130, 50, 100, 30, 180],
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