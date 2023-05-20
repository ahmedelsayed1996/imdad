<template>
    <div class="container-fluid">
        <div class="d-flex justify-content-end">
            <button type="button" class="btn btn-outline-dark   btn-sm p-2 m-2 ml-auto mr-5" id="add-btn">اضافة فرع جديد
                +</button>
        </div>
        <div class="card-body">

            <div class="col-3 ">
                <div class="card p-3 text-center btn-imdad ">
                    <p class="m-0"> المبيعات </p>
                    <p class="m-0"><b>5</b></p>
                </div>
            </div>
            <div class="col-3">
                <div class="card p-3 text-center btn-imdad ">
                    <p class="m-0"> التقارير</p>
                    <p class="m-0"><b>3400.20</b> </p>
                </div>
            </div>
            <div class="col-3">
                <div class="card p-3 text-center btn-imdad ">
                    <p class="m-0"> الزيارات</p>
                    <p class="m-0"><b>100.01</b> </p>
                </div>
            </div>
            <div class="col-3">
                <div class="card p-3 text-center btn-imdad ">
                    <p class="m-0"> المحفظة</p>
                    <p class="m-0"><b>100.01</b> </p>
                </div>
            </div>
        </div>

        <!-- start row -->
        <!-- <h1 class="headLine"> تقارير الزيارات :</h1> <br /> -->
        <div class="row">

            <!-- <div class="col-sm-6 col-xl-3">
                <a href="#">
                    <div class="card card-image  ">
                        <div class="card-heading p-4">

                            <div>
                                <h5 class="font-16"> مصادر الزيارات </h5>
                            </div>
                            <h3 class="mt-4">108 طلب</h3>
                            <div class="progress mt-4" style="height: 4px;"> 
                             <div class="progress-bar bg-primary" role="progressbar" style="width: 75%" aria-valuenow="75"
                                aria-valuemin="0" aria-valuemax="100">
                            </div>
                        </div> 
                            <button class="btn btn-success">معرفه التفاصيل</button>
                            <p class="text-muted mt-2 mb-0">النسبة المئوية <span class="float-right">75%</span></p> 
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-sm-6 col-xl-6">
                <a href="#">
                    <div class="card card-image  ">
                        <div class="card-heading p-4">

                            <div>
                                <h5 class="font-16"> اكثر المنتجات مبيعات </h5>
                            </div>
                            <h3 class="mt-4">108 طلب</h3>
                            <div class="progress mt-4" style="height: 4px;"> 
                             <div class="progress-bar bg-primary" role="progressbar" style="width: 75%" aria-valuenow="75"
                                aria-valuemin="0" aria-valuemax="100">
                            </div>
                        </div> 
                            <button class="btn btn-success">معرفه التفاصيل</button>
                            <p class="text-muted mt-2 mb-0">النسبة المئوية <span class="float-right">75%</span></p> 
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-sm-6 col-xl-3">
                <a href="#">
                    <div class="card card-image  ">
                        <div class="card-heading p-4">

                            <div>
                                <h5 class="font-16"> اخر المنتجات التي تم بيعها</h5>
                            </div>
                            <h3 class="mt-4">108 طلب</h3>
                            <div class="progress mt-4" style="height: 4px;"> 
                             <div class="progress-bar bg-primary" role="progressbar" style="width: 75%" aria-valuenow="75"
                                aria-valuemin="0" aria-valuemax="100">
                            </div>
                        </div> 
                            <button class="btn btn-success">معرفه التفاصيل</button>
                            <p class="text-muted mt-2 mb-0">النسبة المئوية <span class="float-right">75%</span></p> 
                        </div>
                    </div>
                </a>
            </div>

            <div class="col-sm-6 col-xl-6">
                <a href="#">
                    <div class="card card-image  ">
                        <div class="card-heading p-4">

                            <div>
                                <h5 class="font-16"> المدفوعات الرقميه </h5>
                            </div>
                            <h3 class="mt-4">108 طلب</h3>
                            <div class="progress mt-4" style="height: 4px;"> 
                             <div class="progress-bar bg-primary" role="progressbar" style="width: 75%" aria-valuenow="75"
                                aria-valuemin="0" aria-valuemax="100">
                            </div>
                        </div> 
                            <button class="btn btn-success">معرفه التفاصيل</button>
                            <p class="text-muted mt-2 mb-0">النسبة المئوية <span class="float-right">75%</span></p> 
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-sm-6 col-xl-6">
                <a href="#">
                    <div class="card card-image  ">
                        <div class="card-heading p-4">

                            <div>
                                <h5 class="font-16"> التقارير </h5>
                            </div>
                            <h3 class="mt-4">108 %</h3>
                            <div class="progress mt-4" style="height: 4px;"> 
                             <div class="progress-bar bg-primary" role="progressbar" style="width: 75%" aria-valuenow="75"
                                aria-valuemin="0" aria-valuemax="100">
                            </div>
                        </div> 
                            <button class="btn btn-success">معرفه التفاصيل</button>
                            <p class="text-muted mt-2 mb-0">النسبة المئوية <span class="float-right">75%</span></p> 
                        </div>
                    </div>
                </a>
            </div> -->



            <div class="col-sm-6 col-xl-6">
                <h5 class="font-16 text-black d-flex"> اجمالي عدد المبيعات </h5>
                <!-- <canvas id="myChart" width="400" height="400"></canvas> -->
                <LineChartPage />
            </div>
            <div class="col-sm-6 col-xl-6">
                <DoughnutPage />
            </div>
            <div class="col-sm-6 col-xl-6">
                <LinePage />
            </div>
            <div class="col-sm-6 col-xl-6">
                <!-- <LinePage/> -->
            </div>
        </div>
        <!-- end row -->
    </div>
</template>
<script>
import '../../.././public/assets/css/style.css'
// import Chart from 'chart.js/auto';
import LineChartPage from '../../components/charts/linechart.vue'
import DoughnutPage from '../../components/charts/doughnut.vue'
import LinePage from '../../components/charts/line.vue'
export default {
    name: 'BranchesPage',
    components: {
        LineChartPage,
        DoughnutPage,
        LinePage,
    }
    // props: {
    //   msg: String
    // }
}
</script>

<style>
.card-body {
    display: flex;
    justify-content: space-between;

}
</style>