<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">

            <h1 class="headLine text-black">  قسم المالية :</h1> <br />
            <!-- <h2 class="ml-auto headLine"> العمولات</h2> -->
        </nav>
        <div class="m-2">
            <!-- <button type="button" class="btn btn-imdad mx-2 mr-auto"> حفظ</button>
            <button type="button" class="btn btn-danger mr-auto">إلغاء</button> -->
        </div>
    </header>
    <div class="container-fluid ">
        <div class="row">
            <div class="col-sm-6 col-xl-4">
                <a href="#">
                    <div class="card card-image  ">
                        <div class="card-heading p-4">

                            <div>
                                <h5 class="font-16"> المبيعات </h5>
                            </div>
                            <h3 class="mt-4">108 طلب</h3>
                            <!-- <div class="progress mt-4" style="height: 4px;"> 
                             <div class="progress-bar bg-primary" role="progressbar" style="width: 75%" aria-valuenow="75"
                                aria-valuemin="0" aria-valuemax="100">
                            </div>
                        </div> -->
                            <button class="btn btn-success">معرفه التفاصيل</button>
                            <!-- <p class="text-muted mt-2 mb-0">النسبة المئوية <span class="float-right">75%</span></p> -->
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-sm-6 col-xl-4">
            <router-link to="/generalreports">
                    <div class="card card-image  ">
                        <div class="card-heading p-4">

                            <div>
                                <h5 class="font-16">التقارير </h5>
                            </div>
                            <h3 class="mt-4">108 طلب</h3>
                            <!-- <div class="progress mt-4" style="height: 4px;"> 
                             <div class="progress-bar bg-primary" role="progressbar" style="width: 75%" aria-valuenow="75"
                                aria-valuemin="0" aria-valuemax="100">
                            </div>
                          </div> -->
                            <button class="btn btn-success">معرفه التفاصيل</button>
                            <!-- <p class="text-muted mt-2 mb-0">النسبة المئوية <span class="float-right">75%</span></p> -->
                        </div>
                    </div>
            </router-link>
            </div>
            <div class="col-sm-6 col-xl-4">
                <router-link to="/wallet">
                    <div class="card card-image  ">
                        <div class="card-heading p-4">

                            <div>
                                <h5 class="font-16"> المحفظه </h5>
                            </div>
                            <h3 class="mt-4">108 طلب</h3>
                            <!-- <div class="progress mt-4" style="height: 4px;"> 
                             <div class="progress-bar bg-primary" role="progressbar" style="width: 75%" aria-valuenow="75"
                                aria-valuemin="0" aria-valuemax="100">
                            </div>
                        </div> -->
                            <button class="btn btn-success">معرفه التفاصيل</button>
                            <!-- <p class="text-muted mt-2 mb-0">النسبة المئوية <span class="float-right">75%</span></p> -->
                        </div>
                    </div>
                </router-link>
            </div>
            <!-- <div class="col-sm-6 col-xl-6">
                <a href="#">
                    <div class="card card-image  ">
                        <div class="card-heading p-4">

                            <div>
                                <h5 class="font-16"> المدفوعات الرقميه </h5>
                            </div>
                            <h3 class="mt-4">108 طلب</h3>
                            
                            <button class="btn btn-success">معرفه التفاصيل</button>
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
                            
                            <button class="btn btn-success">معرفه التفاصيل</button>
                        </div>
                    </div>
                </a>
            </div> -->
        </div>

        <!-- start row -->
        <!-- <h1 class="headLine"> تقارير الزيارات :</h1> <br /> -->
        <div class="row">

            <!-- <div class="col-sm-6 col-xl-6">
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
            </div> -->
            <div class="col-sm-12 col-xl-12">
                <canvas id="finace" width="50" height="50"></canvas>
            </div>
            <div class="col-sm-6 card  text-bg-light">
                <div class="card-header" style="display: flex; justify-content: space-between; align-items: center;">
                    <div>
                        <a href="#" class="float-left headLine" style="text-decoration: none;">المنتجات الاكثر مبيعا </a>
                    </div>
                    <div dir="rtl">
                        <!-- <h6 class="card-title text-right" style="display: inline-block;">احدث الطلبات</h6> -->
                        <button class="btn-dark  fs-5 " style="display: inline-block;"><i class="bi bi-gift"></i></button>
                    </div>
                </div>

                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table text-start" dir="rtl">
                            <thead>
                                <tr>
                                    <th> صورة المنتج</th>
                                    <th> اسم المنتج</th>
                                    <th>السعر</th>
                                    <th>عدد القطع</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td> <img
                                            src="https://kddi-h.assetsadobe3.com/is/image/content/dam/au-com/mobile/mb_img_58.jpg?scl=1"
                                            class="card-img-top  " style="width: 50px;" alt="ايفون 13"></td>
                                    <td>ايفون 13</td>
                                    <td>313535</td>
                                    <td>50</td>

                                </tr>
                                <tr>
                                    <td> <img
                                            src="https://kddi-h.assetsadobe3.com/is/image/content/dam/au-com/mobile/mb_img_58.jpg?scl=1"
                                            class="card-img-top  " style="width: 50px;" alt="ايفون 13"></td>
                                    <td>ايفون 13</td>
                                    <td>313535</td>
                                    <td>50</td>

                                </tr>
                                <tr>
                                    <td> <img
                                            src="https://kddi-h.assetsadobe3.com/is/image/content/dam/au-com/mobile/mb_img_58.jpg?scl=1"
                                            class="card-img-top  " style="width: 50px;" alt="ايفون 13"></td>
                                    <td>ايفون 13</td>
                                    <td>313535</td>
                                    <td>50</td>

                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 card  text-bg-light">
                <div class="card-header" style="display: flex; justify-content: space-between; align-items: center;">
                    <div>
                        <a href="#" class="float-left headLine" style="text-decoration: none;">اخر المنتجات التي تم طلبها
                        </a>
                    </div>
                    <div dir="rtl">
                        <!-- <h6 class="card-title text-right" style="display: inline-block;">احدث الطلبات</h6> -->
                        <button class="btn-dark  fs-5 " style="display: inline-block;"><i class="bi bi-gift"></i></button>
                    </div>
                </div>

                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table text-start" dir="rtl">
                            <thead>
                                <tr>
                                    <th> صورة المنتج</th>
                                    <th>رقم الطلب</th>
                                    <th>الكميه</th>
                                    <th>التاريخ</th>
                                    <th>السعر</th>


                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td> <img
                                            src="https://kddi-h.assetsadobe3.com/is/image/content/dam/au-com/mobile/mb_img_58.jpg?scl=1"
                                            class="card-img-top  " style="width: 50px;" alt="ايفون 13"></td>
                                    <td>3213213</td>
                                    <td>20</td>
                                    <td>20/5/2023</td>
                                    <td>22310 ر.ي</td>


                                </tr>
                                <tr>
                                    <td> <img
                                            src="https://kddi-h.assetsadobe3.com/is/image/content/dam/au-com/mobile/mb_img_58.jpg?scl=1"
                                            class="card-img-top  " style="width: 50px;" alt="ايفون 13"></td>
                                    <td>ايفون 13</td>
                                    <td>313535</td>
                                    <td>50</td>

                                </tr>
                                <tr>
                                    <td> <img
                                            src="https://kddi-h.assetsadobe3.com/is/image/content/dam/au-com/mobile/mb_img_58.jpg?scl=1"
                                            class="card-img-top  " style="width: 50px;" alt="ايفون 13"></td>
                                    <td>ايفون 13</td>
                                    <td>313535</td>
                                    <td>50</td>

                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <!-- <div class="col-sm-6 col-xl-12 row">
                <h3 class="headLine col-xl-12 justify-content-start">المنتجات الاكثر مبيعا :</h3>
                            <div class="col-sm-6 col-xl-2">
                                <div class="card mb-3 bg-light text-right">
                                    <img src="https://kddi-h.assetsadobe3.com/is/image/content/dam/au-com/mobile/mb_img_58.jpg?scl=1"
                                        class="card-img-top " alt="ايفون 13">
                                    <div class="card-body">
                                        <h5 class="card-title">ايفون 13</h5>
                                        
                                        <button class="btn btn-primary btn-block rounded-pill " @click="addToCart">500
                                            قطعة</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-xl-2">
                                <div class="card mb-3 bg-light text-right">
                                    <img src="https://sary-production.imgix.net/media/582022-06-08T09%3A43%3A34.324Z.jpg"
                                        class="card-img-top " alt="ايفون 13">
                                    <div class="card-body">
                                        <h5 class="card-title"> زيت كريستال</h5>
                                       
                                        <button class="btn btn-primary btn-block rounded-pill " @click="addToCart">400
                                            قطعة</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-xl-2">
                                <div class="card mb-3 bg-light text-right">
                                    <img src="https://sary-production.imgix.net/product/package/2022/7/105.jpg"
                                        class="card-img-top " alt="ايفون 13">
                                    <div class="card-body">
                                        <h5 class="card-title"> مكرونة حواء </h5>
                                       
                                        <button class="btn btn-primary btn-block rounded-pill " @click="addToCart">300
                                            قطعة</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-xl-2">
                                <div class="card mb-3 bg-light text-right">
                                    <img src="https://sary-production.imgix.net/product/package/2022/9/3.jpg"
                                        class="card-img-top " alt="ايفون 13">
                                    <div class="card-body">
                                        <h5 class="card-title"> فيجيتار</h5>
                                     
                                        <button class="btn btn-primary btn-block rounded-pill " @click="addToCart">200
                                            قطعة</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-xl-2">
                                <div class="card mb-3 bg-light text-right">
                                    <img src="https://sary-production.imgix.net/product/package/2022/7/62230002644922022031"
                                        class="card-img-top " alt="ايفون 13">
                                    <div class="card-body">
                                        <h5 class="card-title"> سمن روابي</h5>
                                       
                                        <button class="btn btn-primary btn-block rounded-pill " @click="addToCart">150
                                            قطعة</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-xl-2">
                                <div class="card mb-3 bg-light text-right">
                                    <img src="https://sary-production.imgix.net/media/142022-05-23T11%3A37%3A55.477Z.jpg"
                                        class="card-img-top " alt="ايفون 13">
                                    <div class="card-body">
                                        <h5 class="card-title"> مكرونة الملكه</h5>
                                        
                                        <button class="btn btn-primary btn-block rounded-pill " @click="addToCart">100
                                            قطعة</button>
                                    </div>
                                </div>
                            </div>

            
            </div> -->

            <!-- <div class="col-sm-6 col-xl-6">
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
                <DoughnutPage />
            </div>
            
            <div class="col-sm-6 col-xl-6">
                <!-- <LineChartPage/> -->
                <!-- <LinePage/> -->
            </div>
            <div class="col-sm-6 col-xl-6">

            </div>
        </div>
        <!-- end row -->

    </div>
</template>

<script>
import '../../.././public/assets/css/style.css'
// import Chart from 'chart.js/auto';
// import LineChartPage from '../../components/charts/linechart.vue'
import DoughnutPage from '../../components/charts/doughnut.vue'
// import LinePage from '../../components/charts/line.vue'
import Chart from 'chart.js/auto';
// const data = {
//   labels: 'Dataset 1',
//   datasets: [
//     {
//       label: 'Dataset 1',
//       data: [150,50,100,56,98,37,45,35,89],
//       borderColor: 'green',
//       backgroundColor: 'blue',
//       yAxisID: 'y',
//     }
//   ]
// };
export default {
    name: 'FinancePage',
    components: {
        // LineChartPage,
        DoughnutPage,
        // LinePage,
    },
    mounted() {
        console.log("chart start")
        // const ctx = document.getElementById('finace');
        // new Chart(ctx, {
        //     type: 'line',
        //     data: data,
        //     options: {
        //         responsive: true,
        //         interaction: {
        //             mode: 'index',
        //             intersect: false,
        //         },
        //         stacked: false,
        //         plugins: {
        //             title: {
        //                 display: true,
        //                 text: 'اجمالي عدد المبيعات'
        //             }
        //         },
        //         scales: {
        //             y: {
        //                 type: 'linear',
        //                 display: true,
        //                 position: 'left',
        //             },
        //             y1: {
        //                 type: 'linear',
        //                 display: true,
        //                 position: 'right',

        //                 // grid line settings
        //                 grid: {
        //                     drawOnChartArea: false, // only want the grid lines for one axis to show up
        //                 },
        //             },
        //         }
        //     },

        // });
        const data = [
            { year: 2010, count: 10 },
            { year: 2011, count: 20 },
            { year: 2012, count: 15 },
            { year: 2013, count: 25 },
            { year: 2014, count: 22 },
            { year: 2015, count: 30 },
            { year: 2016, count: 28 },
            { year: 2017, count: 10 },
            { year: 2018, count: 20 },
            { year: 2019, count: 15 },
            { year: 2020, count: 25 },
            { year: 2021, count: 22 },
            { year: 2022, count: 30 },
            { year: 2023, count: 28 },
        ];
        new Chart(
            document.getElementById('finace'),
            {
                type: 'bar',
                data: {
                    labels: data.map(row => row.year),
                    datasets: [
                        {
                            label: 'Acquisitions by year',
                            data: data.map(row => row.count)
                        }
                    ]
                }
            }
        );
    }

}
</script>
