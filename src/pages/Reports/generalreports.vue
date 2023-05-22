<template>
  <div class="container-fluid ">
    <div class="row my-3">
      <div class="input-group   col-sm-12 col-xl-6">
        <label class="input-group-text btn-imdad" for="inputGroupSelect01"><i class="mdi mdi-calendar "></i> تاريخ التقرير
        </label>
        <select class="form-select" id="inputGroupSelect01">
          <option selected>April 22,2023 - May 21,2023</option>
          <option selected>June 22,2023 - July 21,2023</option>
          <option selected>Jan 22,2023 - Fab 21,2023</option>
          <option selected>Oct 22,2023 - Dec 21,2023</option>
        </select>
      </div>
      <div class="col-md-6 text-end col-sm-12">
        <button type="button" class="btn btn-outline btn-imdad">
            <i class="bi bi-printer"></i> طباعة
        </button>
    </div>
    </div>

    <div class="row">
      <div class=" col-sm-12 col-xl-3">
        <h2 class="headLine mx-3">نوع التقرير :</h2>
      </div><br />

      <div>
        <ul class="nav nav-tabs d-flex " style="justify-content:space-around;">
          <li class="nav-item ">
            <a class="nav-link border" data-toggle="tab" href="#sales"><i class="mdi mdi-store"></i> المبيعات</a>
          </li>
          <li class="nav-item">
            <a class="nav-link border" data-toggle="tab" href="#products"><i class="mdi mdi-wallet-travel"></i>
              المنتجات</a>
          </li>
          <li class="nav-item">
            <a class="nav-link border" data-toggle="tab" href="#custom"><i class="mdi mdi-account"></i>
              العملاء</a>
          </li>
          <li class="nav-item">
            <a class="nav-link border" data-toggle="tab" href="#vistor"><i class="mdi mdi-clock"></i> الزيارات</a>
          </li>
          <li class="nav-item ">
            <a class="nav-link border" data-toggle="tab" href="#more"><i class="mdi mdi-image-filter-drama"></i> الاكثر
              طلبا</a>
          </li>
        </ul>

        <div class="tab-content">
          <div class="tab-pane fade show active" id="sales">
            <h3 class="headLine my-3">اختر التقرير الفرعي :</h3>
            <div class="w-75  d-inline">
              <select class=" form-select w-75 " id="table-dropdown" v-model="selectedTable">
                <option selected value="table1">مبيعات المنتجات</option>
                <option value="table2"> مبيعات التصنيفات</option>
                <option value="table3"> مبيعات الماركات</option>
                <option value="table4"> مبيعات الاكواد</option>
                <option value="table5"> مبيعات كوبونات التخفيض</option>
                <option value="table6"> مبيعات المدن</option>
                <option value="table7"> مبيعات الفروع</option>
                <option value="table8">طلبات المنتجات</option>
                <option value="table9">تصنيف البائعين </option>
                <option value="table14">ارباح المنصه </option>
                <option value="table15">عمولات الموصلين </option>
                <option value="table16">عمولات العملاء </option>
                <option value="table17"> ملخص </option>
              </select>
              <button class="btn btn-imdad w-25 ">عرض</button>

              <div id="table-container" v-html="tableHTML"></div>

            </div>
          </div>
          <div class="tab-pane fade" id="products">
            <h3 class="headLine my-3">اختر التقرير الفرعي :</h3>
            <div class="w-75  d-inline">
              <button class="btn btn-imdad w-25 d-inline ">عرض</button>
              <select class=" form-select w-75 " id="table-dropdown" v-model="selectedTable">
                <option value="table10" selected >المنتجات الاكثر مبيعا  </option>
                <option value="table11">  اعلمني عند التوفير</option>
                <option value="table12"> المنتجات الاكثر ربحا </option>
                <option value="table13">  السلالات المتروكة</option>
               
              </select>
              <div id="table-container" v-html="tableHTML"></div>
            </div>
            
          </div>
          <div class="tab-pane fade" id="custom">
            <h3>العملاء</h3>
            <p>This is the contact tab content.</p>
          </div>
          <div class="tab-pane fade" id="vistor">
            <div class="row">
              <div class="col-lg-6 col-sm-12 shadow">
                <h3 class="headLine my-3"> الزيارات</h3>
                <canvas id='circle'  ></canvas>
              </div>
              <div class="col-lg-6 col-sm-12 shadow">
                <h3 class="headLine my-3"> مصادر الزيارات </h3>
                <canvas id="circle2" ></canvas>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="more">
            <div class="row">
              <div class="col-lg-6 col-sm-12 shadow">
                <h3 class="headLine my-3">عدد الطلبات</h3>
                <canvas id='doughnutt' width='100' height='100'></canvas>
              </div>
              <div class="col-lg-6 col-sm-12 shadow">
                <h3 class="headLine my-3"> اجمالي المبيعات</h3>
                <canvas id="line" width='100' height='100'></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Chart from 'chart.js/auto';

export default {
  name: 'GeneralReportsPage',

  data() {
    return {
      selectedTable: "",
      tableHTML: "",
    };
  },
  watch: {
    selectedTable() {
      if (this.selectedTable === "table1") {
        this.tableHTML = "<h3 class='headLine my-3'>مبيعات المنتجات    :</h3><table class='table table-light' ><thead dir='rtl'><tr><th scope='col'><mark>#</mark></th><th scope='col'>الماركة</th><th scope='col'>النوع</th><th scope='col'>السعر</th><th scope='col'>الكمية المباعة</th><th scope='col'>المبيعات قبل التخفيض</th><th scope='col'>التخفيض</th><th scope='col'>اجمالي كلفه المبيعات</th><th scope='col'>صافي المبيعات</th><th scope='col'>الضرائب</th><th scope='col'>اجمالي المبيعات</th></tr></thead><tbody><tr><th scope='row'>1</th><td>zara</td><td>منتج جاهز</td><td>80 ر.ي</td><td>1</td><td>100 ر.ي</td><td>_</td><td>92 ر.ي</td><td>80 ر.ي</td> <td>12 ر.ي</td> <td>92 ر.ي</td></tr><td>2</td><td>Uturn</td><td>منتج جاهز</td><td>43 ر.ي</td><td>1</td><td>55 ر.ي</td><td>_</td><td>35 ر.ي</td><td>56 ر.ي</td><td>56 ر.ي</td><td>87 ر.ي</td></tbody></table>";
      } else if (this.selectedTable === "table2") {
        this.tableHTML = "<h3 class='headLine my-3'>مبيعات التصنيفات    :</h3><table class='table table-light' ><thead dir='rtl'><tr><th scope='col'><mark>#</mark></th><th scope='col'>التصنيف</th><th scope='col'>الكمية المباعة</th><th scope='col'>المبيعات قبل التخفيض</th><th scope='col'>التخفيض </th><th scope='col'> صافي المبيعات </th><th scope='col'>الضرائب</th><th scope='col'>اجمالي المبيعات</th></tr></thead><tbody><tr><th scope='row'>1</th><td>مجموعة العناية</td><td> 19</td><td>1.300 ر.ي</td><td>_</td><td>1.300 ر.ي </td><td>65 ر.ي</td><td>1365 ر.ي</td></tr><td>2</td><td>Uturn</td><td>منتج جاهز</td><td>43 ر.ي</td><td>1</td><td>55 ر.ي</td><td>_</td><td>35 ر.ي</td></tbody></table>";
      } else if (this.selectedTable === "table3") {
        this.tableHTML = "<h3 class='headLine my-3'>مبيعات الماركات    :</h3><table class='table table-light' ><thead dir='rtl'><tr><th scope='col'><mark>#</mark></th><th scope='col'>الماركة</th><th scope='col'>الكمية المباعة</th><th scope='col'>المبيعات قبل التخفيض</th><th scope='col'>التخفيض </th><th scope='col'> صافي المبيعات </th><th scope='col'>الضرائب</th><th scope='col'>اجمالي المبيعات</th></tr></thead><tbody><tr><th scope='row'>1</th><td>ماركت المزدلفه </td><td> 22</td><td>23.300 ر.ي</td><td>2.535 ر.س</td><td>56.562 ر.ي </td><td>65.53 ر.ي</td><td>53.564 ر.ي</td></tr><td>2</td><td>Uturn</td><td>منتج جاهز</td><td>43 ر.ي</td><td>1</td><td>55 ر.ي</td><td>_</td><td>35 ر.ي</td></tbody></table>";
      } else if (this.selectedTable === "table4") {
        this.tableHTML = "<h3 class='headLine my-3'>مبيعات الاكواد الرقمية    :</h3><table class='table table-light' ><thead dir='rtl'><tr><th scope='col'><mark>#</mark></th><th scope='col'>الكود</th><th scope='col'>المنتج </th><th scope='col'> سعر الكود </th><th scope='col'>رقم الطلب </th><th scope='col'> تاريخ الطلب  </th><th scope='col'>اسم العميل</th></tr></thead><tbody><tr><th scope='row'>1</th><td>5354646535</td><td> بطاقة موبايلي</td><td>300 ر.ي</td><td>5346563</td><td>14-5-2023</td><td>خالد صهيب</td></tr><tr><th scope='row'>2</th><td>5354646535</td><td> بطاقة موبايلي</td><td>300 ر.ي</td><td>5346563</td><td>14-5-2023</td><td> كوثر خوجه</td></tr></tbody></table>";
      } else if (this.selectedTable === "table5") {
        this.tableHTML = "<h3 class='headLine my-3'>مبيعات كوبونات التخفيض    :</h3><table class='table table-light' ><thead dir='rtl'><tr><th scope='col'><mark>#</mark></th><th scope='col'>كود الكوبون</th><th scope='col'>تاريخ الانشاء </th><th scope='col'>مرات الاستخدام </th><th scope='col'>طريقه تطبيق الخصم </th><th scope='col'> نوع الخصم  </th><th scope='col'>المبيعات قبل التخفيض</th><th scope='col'>اجمالي التخفيض</th></tr></thead><tbody><tr><th scope='row'>1</th><td>test </td><td> 14-5-2023</td><td>1</td><td>code</td><td>نسبة مئويه </td><td>65 ر.ي</td><td>50 ر.ي</td></tr><tr><th scope='row'>1</th><td>may2023 </td><td> 14-5-2023</td><td>1</td><td>code</td><td>نسبة مئويه </td><td>65 ر.ي</td><td>50 ر.ي</td></tr></tbody></table>";
      } else if (this.selectedTable === "table6") {
        this.tableHTML = "<h3 class='headLine my-3'>مبيعات المدن    :</h3><table class='table table-light w-50' ><thead dir='rtl'><tr><th scope='col'><mark>#</mark></th><th scope='col'>المدينة</th><th scope='col'>إجمالي المبيعات </th></tr></thead><tbody><tr><th scope='row'>1</th><td>صنعاء</td><td> 1.542 ر.ي</td></tr><tr><th scope='row'>2</th><td>الوحده</td><td> 56.533 ر.ي</td></tr><tr><th scope='row'>3</th><td>حيدة</td><td> 1.542 ر.ي</td></tr></tbody></table>";
      } else if (this.selectedTable === "table7") {
        this.tableHTML = "<h3 class='headLine my-3'>مبيعات الفروع    :</h3><table class='table table-light w-50' ><thead dir='rtl'><tr><th scope='col'><mark>#</mark></th><th scope='col'>الفرع</th><th scope='col'>المدينة</th><th scope='col'>إجمالي المبيعات </th></tr></thead><tbody><tr><th scope='row'>1</th><td>الشوقة</td><td>صنعاء</td><td> 1.542 ر.ي</td></tr><tr><th scope='row'>2</th><td>العوالي</td><td>الوحده</td><td> 56.533 ر.ي</td></tr><tr><th scope='row'>3</th><td>المستودع</td><td>حيدة</td><td> 1.542 ر.ي</td></tr></tbody></table>";
      } else if (this.selectedTable === "table8") {
        this.tableHTML = "<h3 class='headLine my-3'>طلبات المنتجات    :</h3><table class='table table-light' ><thead dir='rtl'><tr><th scope='col'><mark>#</mark></th><th scope='col'>رقم التخزين</th><th scope='col'>الماركة</th><th scope='col'>الكمية</th><th scope='col'> الاجمالي</th><th scope='col'>رقم الطلب</th><th scope='col'>تاريخ الطلب</th><th scope='col'>حالة الطلب</th><th scope='col'>اجمالي سعر التكلفة </th><th scope='col'> مدينة العميل</th><th scope='col'>طريقه الدفع</th><th scope='col'> اسم العميل</th></tr></thead><tbody><tr><th scope='row'>هدايا</th><td>35453</td><td>zara </td><td>80 </td><td>1562 ر.ي</td><td>100353</td><td>14-5-2023</td><td>تم التنفيذ</td><td>23 ر.ي</td> <td>الوحدة</td> <td>حوالة بنكية</td><td>حمزه</td></tr><tr><th scope='row'>T-shirt</th><td>35453</td><td>zara </td><td>80 </td><td>1562 ر.ي</td><td>100353</td><td>14-5-2023</td><td>تم التنفيذ</td><td>23 ر.ي</td> <td>الوحدة</td> <td>حوالة بنكية</td><td>حمزه</td></tr></tbody></table>";
      } else if (this.selectedTable === "table9") {
        this.tableHTML = "<div><canvas id='doughnutt' width='100' height='100'></canvas></div>";
      } else if (this.selectedTable === "table10") {
        this.tableHTML = "<h3 class='headLine my-3'> المنتجات الاكثر مبيعا     :</h3><table class='table table-light' ><thead dir='rtl'><tr><th scope='col'><mark>#</mark></th><th scope='col'>المنتج </th><th scope='col'>تكلفة المنتج   </th><th scope='col'>سعر البيع  </th><th scope='col'>ارباح المنتج   </th><th scope='col'> عدد طلبات المنتج   </th></tr></thead><tbody><tr><th scope='row'>1</th><td>زيت الزيتون <img src='#' class='' alt='circle'></td><td> 250 ر.ي</td><td> 458 ر.ي</td><td> 8463 ر.ي</td><td> 546 ر.ي</td></tr><tr><th scope='row'>1</th><td>زيت الزيتون <img src='#' class='' alt='circle'></td><td> 250 ر.ي</td><td> 458 ر.ي</td><td> 8463 ر.ي</td><td> 54</td></tr></tbody></table>";
      } else if (this.selectedTable === "table11") {
        this.tableHTML = "<h3 class='headLine my-3'> اعلمني عند التوفير :</h3><table class='table table-light' ><thead dir='rtl'><tr><th scope='col'><mark>#</mark></th><th scope='col'>المنتج </th><th scope='col'>تكلفة المنتج   </th><th scope='col'>سعر البيع  </th><th scope='col'>ارباح المنتج   </th><th scope='col'> عدد طلبات المنتج   </th></tr></thead><tbody><tr><th scope='row'>1</th><td>زيت الزيتون <img src='#' class='' alt='circle'></td><td> 250 ر.ي</td><td> 458 ر.ي</td><td> 8463 ر.ي</td><td> 546 ر.ي</td></tr><tr><th scope='row'>1</th><td>زيت الزيتون <img src='#' class='' alt='circle'></td><td> 250 ر.ي</td><td> 458 ر.ي</td><td> 8463 ر.ي</td><td> 54</td></tr></tbody></table>";
      }else if (this.selectedTable === "table12") {
        this.tableHTML = "<h3 class='headLine my-3'> المنتجات الاكثر ربحا   :</h3><table class='table table-light' ><thead dir='rtl'><tr><th scope='col'><mark>#</mark></th><th scope='col'>المنتج </th><th scope='col'>تكلفة المنتج   </th><th scope='col'>سعر البيع  </th><th scope='col'>ارباح المنتج   </th><th scope='col'> عدد طلبات المنتج   </th></tr></thead><tbody><tr><th scope='row'>1</th><td>زيت الزيتون <img src='#' class='' alt='circle'></td><td> 250 ر.ي</td><td> 458 ر.ي</td><td> 8463 ر.ي</td><td> 546 ر.ي</td></tr><tr><th scope='row'>1</th><td>زيت الزيتون <img src='#' class='' alt='circle'></td><td> 250 ر.ي</td><td> 458 ر.ي</td><td> 8463 ر.ي</td><td> 54</td></tr></tbody></table>";
      }else if (this.selectedTable === "table13") {
        this.tableHTML = "<h3 class='headLine my-3'> السلالات المتروكة  :</h3><table class='table table-light' ><thead dir='rtl'><tr><th scope='col'><mark>#</mark></th><th scope='col'>المنتج </th><th scope='col'>تكلفة المنتج   </th><th scope='col'>سعر البيع  </th><th scope='col'>ارباح المنتج   </th><th scope='col'> عدد طلبات المنتج   </th></tr></thead><tbody><tr><th scope='row'>1</th><td>زيت الزيتون <img src='#' class='' alt='circle'></td><td> 250 ر.ي</td><td> 458 ر.ي</td><td> 8463 ر.ي</td><td> 546 ر.ي</td></tr><tr><th scope='row'>1</th><td>زيت الزيتون <img src='#' class='' alt='circle'></td><td> 250 ر.ي</td><td> 458 ر.ي</td><td> 8463 ر.ي</td><td> 54</td></tr></tbody></table>";
      }  else if (this.selectedTable === "table14") {
        this.tableHTML = "<h3 class='headLine my-3'>مبيعات كوبونات التخفيض    :</h3><table class='table table-light' ><thead dir='rtl'><tr><th scope='col'><mark>#</mark></th><th scope='col'>كود الكوبون</th><th scope='col'>تاريخ الانشاء </th><th scope='col'>مرات الاستخدام </th><th scope='col'>طريقه تطبيق الخصم </th><th scope='col'> نوع الخصم  </th><th scope='col'>المبيعات قبل التخفيض</th><th scope='col'>اجمالي التخفيض</th></tr></thead><tbody><tr><th scope='row'>1</th><td>test </td><td> 14-5-2023</td><td>1</td><td>code</td><td>نسبة مئويه </td><td>65 ر.ي</td><td>50 ر.ي</td></tr><tr><th scope='row'>1</th><td>may2023 </td><td> 14-5-2023</td><td>1</td><td>code</td><td>نسبة مئويه </td><td>65 ر.ي</td><td>50 ر.ي</td></tr></tbody></table>";
      } else if (this.selectedTable === "table15") {
        this.tableHTML = "<h3 class='headLine my-3'>مبيعات المدن    :</h3><table class='table table-light w-50' ><thead dir='rtl'><tr><th scope='col'><mark>#</mark></th><th scope='col'>المدينة</th><th scope='col'>إجمالي المبيعات </th></tr></thead><tbody><tr><th scope='row'>1</th><td>صنعاء</td><td> 1.542 ر.ي</td></tr><tr><th scope='row'>2</th><td>الوحده</td><td> 56.533 ر.ي</td></tr><tr><th scope='row'>3</th><td>حيدة</td><td> 1.542 ر.ي</td></tr></tbody></table>";
      } else if (this.selectedTable === "table16") {
        this.tableHTML = "<h3 class='headLine my-3'>مبيعات الفروع    :</h3><table class='table table-light w-50' ><thead dir='rtl'><tr><th scope='col'><mark>#</mark></th><th scope='col'>الفرع</th><th scope='col'>المدينة</th><th scope='col'>إجمالي المبيعات </th></tr></thead><tbody><tr><th scope='row'>1</th><td>الشوقة</td><td>صنعاء</td><td> 1.542 ر.ي</td></tr><tr><th scope='row'>2</th><td>العوالي</td><td>الوحده</td><td> 56.533 ر.ي</td></tr><tr><th scope='row'>3</th><td>المستودع</td><td>حيدة</td><td> 1.542 ر.ي</td></tr></tbody></table>";
      } else if (this.selectedTable === "table17") {
        this.tableHTML = "<h3 class='headLine my-3'>طلبات المنتجات    :</h3><table class='table table-light' ><thead dir='rtl'><tr><th scope='col'><mark>#</mark></th><th scope='col'>رقم التخزين</th><th scope='col'>الماركة</th><th scope='col'>الكمية</th><th scope='col'> الاجمالي</th><th scope='col'>رقم الطلب</th><th scope='col'>تاريخ الطلب</th><th scope='col'>حالة الطلب</th><th scope='col'>اجمالي سعر التكلفة </th><th scope='col'> مدينة العميل</th><th scope='col'>طريقه الدفع</th><th scope='col'> اسم العميل</th></tr></thead><tbody><tr><th scope='row'>هدايا</th><td>35453</td><td>zara </td><td>80 </td><td>1562 ر.ي</td><td>100353</td><td>14-5-2023</td><td>تم التنفيذ</td><td>23 ر.ي</td> <td>الوحدة</td> <td>حوالة بنكية</td><td>حمزه</td></tr><tr><th scope='row'>T-shirt</th><td>35453</td><td>zara </td><td>80 </td><td>1562 ر.ي</td><td>100353</td><td>14-5-2023</td><td>تم التنفيذ</td><td>23 ر.ي</td> <td>الوحدة</td> <td>حوالة بنكية</td><td>حمزه</td></tr></tbody></table>";
      }
    },
  },
  mounted() {
    const ctx = document.getElementById('doughnutt');
    const data = {
      labels: ['مستعرض جوال', 'تطبيق جوال', 'مستعرض كمبيوتر', 'غير معرف', 'مستعرض مأكولات'],
      datasets: [
        {
          label: 'Dataset 1',
          data: [80, 50, 100,75,78],
          backgroundColor: [
            'rgb(255,99,132)',
            'rgb(54,162,235)',
            'rgb(255,205,86)',
            'rgb(255,100,86)',
            'rgb(54,186,222)'
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
    const ctx2 = document.getElementById('line');

    new Chart(ctx2, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
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
    const data2 = {
  labels: [
    'السعودية',
    'سوريا',
    'قطر',
    'امريكا',
    'المانيا',
    'اليمن'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [50, 80, 100,78,23,84],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)',
      'rgb(45, 42, 25)',
      'rgb(42, 78, 86)',
      'rgb(87, 75, 86)',
    ],
    hoverOffset: 4
  }]
};
    const ctx3 = document.getElementById('circle');

  new Chart(ctx3, {
    type: 'doughnut',
  data: data2,
  });

  const data3 = {
  labels: [
    
    'روابط مباشرة',
    'محركات بحث',
    'مواقع التواصل',
    
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [45,55,50],
    backgroundColor: [
      
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)',
      'rgb(45, 42, 25)',
     
    ],
    hoverOffset: 4
  }]
};
    const ctx4 = document.getElementById('circle2');

  new Chart(ctx4, {
    type: 'doughnut',
  data: data3,
  });
  }
};

</script>


