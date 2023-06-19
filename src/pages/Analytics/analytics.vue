<template>
    <div>
        <!-- Header -->
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12 text-start">
                    <h5 class="d-flex">التحليلات</h5>
                </div>
            </div>
        </div>

        <!-- Navigation Bar -->
        <div class="container-fluid bg-light">
            <div class="row justify-content-center">
                <div class="col-md-10 col-sm-12 ">
                    <ul class="nav nav-tabs d-flex justify-content-between flex-wrap">
                        <li class="nav-item p-2">
                            <a class="nav-link bg-light text-dark" href="#sales" data-toggle="tab">
                                <i class="bi bi-graph-up-arrow"></i><br> المبيعات
                            </a>
                        </li>
                        <li class="nav-item p-2">
                            <a class="nav-link bg-light text-dark" href="#products" data-toggle="tab">
                                <i class="bi bi-bag"></i><br> المنتجات
                            </a>
                        </li>
                        <li class="nav-item p-2">
                            <a class="nav-link bg-light text-dark" href="#customers" data-toggle="tab">
                                <i class="bi bi-people"></i><br> العملاء
                            </a>
                        </li>
                        <li class="nav-item p-2">
                            <a class="nav-link bg-light text-dark" href="#discounts" data-toggle="tab">
                                <i class="bi bi-cash"></i><br> الخصومات
                            </a>
                        </li>
                        <li class="nav-item p-2">
                            <a class="nav-link bg-light text-dark" href="#baskets" data-toggle="tab">
                                <i class="bi bi-basket"></i><br> السلات المتروكة
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>


    <div>
        <!-- Header -->
        <div class="container-fluid p-4">
            <div class="row">
                <div class="col-md-6 text-start">
                    <button type="button" class="btn btn-outline btn-imdad d-flex">
                        <i class="bi bi-filter"></i> فلتر
                    </button>
                </div>
                <div class="col-md-6 text-end">
                    <button type="button" class="btn btn-outline btn-imdad">
                        <i class="bi bi-printer"></i> طباعة
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div class="tab-content">

        <!-- المبيعات -->
        <div class="container-fluid mt-3 tab-pane fade" id="sales">
            <div class="row">
                <div class="col-md-4 ">
                    <div class="card btn-imdad ">
                        <div class="card-body text-center ">
                            <i class="bi bi-shop"></i>
                            <h5 class="card-title mt-2">5000</h5>
                            <p class="card-text">اجمالى المبيعات</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card btn-imdad ">
                        <div class="card-body text-center">
                            <i class="bi bi-bag"></i>
                            <h5 class="card-title mt-2">44 طلب</h5>
                            <p class="card-text">عدد الطلبات</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card btn-imdad ">
                        <div class="card-body text-center">
                            <i class="bi bi-cash"></i>
                            <h5 class="card-title mt-2">20</h5>
                            <p class="card-text">اجمالى قيمة قسائم التخفيض</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-md-4">
                    <div class="card btn-imdad">
                        <div class="card-body text-center">
                            <i class="bi bi-cash"></i>
                            <h5 class="card-title mt-2">650</h5>
                            <p class="card-text">اجمالى قيمة الضريبة المضافة</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card btn-imdad ">
                        <div class="card-body text-center">
                            <i class="bi bi-truck"></i>
                            <h5 class="card-title mt-2">1,050</h5>
                            <p class="card-text">اجمالى قيمة مصاريف الشحن</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card btn-imdad ">
                        <div class="card-body text-center">
                            <i class="bi bi-wallet"></i>
                            <h5 class="card-title mt-2">561</h5>
                            <p class="card-text">اجمالى رسوم الدفع عند الاستلام</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-md-4">
                    <div class="card btn-imdad ">
                        <div class="card-body text-center">
                            <i class="bi bi-basket2"></i>
                            <h5 class="card-title mt-2">130</h5>
                            <p class="card-text">متوسط حجم سلة المشتريات</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card btn-imdad ">
                        <div class="card-body text-center">
                            <i class="bi bi-basket2"></i>
                            <h5 class="card-title mt-2">Card 8</h5>
                            <p class="card-text">متوسط عددالمنتجات بالطلب الواحد</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 ">
                    <div class="card btn-imdad ">
                        <div class="card-body text-center ">
                            <i class="bi bi-bag-heart"></i>
                            <h5 class="card-title mt-2">5000</h5>
                            <p class="card-text">المنتجات الاكثر مبيعا</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 ">
                    <div class="card btn-imdad ">
                        <div class="card-body text-center ">
                            <i class="bi bi-buildings"></i>
                            <h5 class="card-title mt-2">5000</h5>
                            <p class="card-text">اعلى المدن مبيعا</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 ">
                    <div class="card btn-imdad ">
                        <div class="card-body text-center ">
                            <i class="bi bi-calendar"></i>
                            <h5 class="card-title mt-2">5000</h5>
                            <p class="card-text">المبيعات عبر الزمن</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 ">
                    <div class="card btn-imdad ">
                        <div class="card-body text-center ">
                            <i class="bi bi-smartwatch"></i>
                            <h5 class="card-title mt-2">5000</h5>
                            <p class="card-text">عدد الطلبات عبر الزمن</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 ">
                    <div class="card btn-imdad ">
                        <div class="card-body text-center ">
                            <i class="bi bi-credit-card-2-back"></i>
                            <h5 class="card-title mt-2">5000</h5>
                            <p class="card-text">المبيعات بناء على وسيلة الدفع</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 ">
                    <div class="card btn-imdad ">
                        <div class="card-body text-center ">
                            <i class="bi bi-truck"></i>
                            <h5 class="card-title mt-2">5000</h5>
                            <p class="card-text">المبيعات بناء على وسيلة الشحن</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 ">
                    <div class="card btn-imdad ">
                        <div class="card-body text-center ">
                            <i class="bi bi-diagram-3"></i>
                            <h5 class="card-title mt-2">5000</h5>
                            <p class="card-text">المبيعات بناء على قناة البيع</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>



        <!-- المنتجات -->
        <!-- <div class="container-fluid">
          <div class="row">
            <div class="col-md-6 text-start">
              <button type="button" class="btn btn-outline-secondary">
                <i class="bi bi-filter"></i> Filter
              </button>
            </div>
            <div class="col-md-6 text-end">
              <button type="button" class="btn btn-outline-secondary">
                <i class="bi bi-printer"></i> طباعة
              </button>
            </div>
          </div>
        </div> -->
        <div class="container tab-pane fade" id="products">
            <div class="table-responsive">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">تحليلات المنتجات</th>
                            <th scope="col">الكميات</th>
                            <th scope="col">المبيعات</th>
                            <th scope="col">مرات الاضافة الى السلة</th>
                            <th scope="col">المبيعات</th>
                            <th scope="col">مرات الطلب</th>
                            <th scope="col">تكلفة المنتج</th>
                            <th scope="col">ارباح المنتج</th>
                            <th scope="col">الكمية المباعة</th>
                            <th scope="col">العملاء الذين اضافوا بريدهم</th>
                            <th scope="col">عدد التقييمات</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>John</td>
                            <td>Doe</td>
                            <td>john.doe@example.com</td>
                            <td>(123) 456-7890</td>
                            <td>123 Main St</td>
                            <td>Anytown</td>
                            <td>CA</td>
                            <td>90210</td>
                            <td>USA</td>
                            <td>
                                <a href="#" class="btn btn-imdad2 btn-sm mx-2">Edit</a>
                                <a href="#" class="btn btn-danger btn-sm">Delete</a>
                            </td>
                        </tr>
                        <!-- <tr>
              <th scope="row">2</th>
              <td>Jane</td>
              <td>Smith</td>
              <td>jane.smith@example.com</td>
              <td>(987) 654-3210</td>
              <td>456 Oak St</td>
              <td>Another City</td>
              <td>NY</td>
              <td>12345</td>
              <td>USA</td>
              <td>
                <a href="#" class="btn btn-primary btn-sm">Edit</a>
                <a href="#" class="btn btn-danger btn-sm">Delete</a>
              </td>
            </tr> -->
                    </tbody>
                </table>
            </div>
        </div>


        <!-- العملاء -->


        <div class="container-fluid mt-3 tab-pane fade" id="customers">
            <div class="row">
                <div class="col-md-4 ">
                    <div class="card btn-imdad ">
                        <div class="card-body text-center ">
                            <i class="bi bi-eye"></i>
                            <h5 class="card-title mt-2">14 زيارة</h5>
                            <p class="card-text">الزيارات</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card btn-imdad ">
                        <div class="card-body text-center">
                            <i class="bi bi-people"></i>
                            <h5 class="card-title mt-2"> 1 عميل </h5>
                            <p class="card-text">العملاء</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card btn-imdad ">
                        <div class="card-body text-center">
                            <i class="bi bi-shop"></i>
                            <h5 class="card-title mt-2">0%</h5>
                            <p class="card-text">معدل تمويل الطلبات</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-md-4">
                    <div class="card btn-imdad ">
                        <div class="card-body text-center">
                            <i class="bi bi-people"></i>
                            <h5 class="card-title mt-2">650</h5>
                            <p class="card-text">معدل العملاء العائدين</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card btn-imdad ">
                        <div class="card-body text-center">
                            <i class="bi bi-shop"></i>
                            <h5 class="card-title mt-2">1,050</h5>
                            <p class="card-text">متوسط المبيعات للعميل الواحد</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card btn-imdad">
                        <div class="card-body text-center">
                            <i class="bi bi-bag"></i>
                            <h5 class="card-title mt-2">561</h5>
                            <p class="card-text">متوسط عدد الطلبات للعميل الواحد</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-6">
                    <div class="card btn-imdad">
                        <div class="card-body">
                            <h5 class="card-title text-start">Left Card</h5>
                            <div class="col-9 ">
                                <p class="text-end">
                                    <span>خريطة الموقع </span>
                                    <button class="btn btn-primary">الموقع</button>
                                </p>
                            </div>

                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut mauris sit
                                amet magna venenatis gravida. Fusce et interdum lorem. Morbi nec sapien a libero vestibulum
                                tempor. Curabitur posuere mauris quis consectetur viverra. </p>
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="card btn-imdad">
                        <div class="card-header ">
                            <h5>Right Card</h5>
                        </div>
                        <div class="card-body">
                            <div class="row">

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>

        <!-- الخصومات -->
        <div class="container-fluid mt-3 tab-pane fade" id="discounts">
            <div class="row">
                <div class="col-md-4 ">
                    <div class="card btn-imdad ">
                        <div class="card-body text-center ">
                            <i class="bi bi-shop"></i>
                            <h5 class="card-title mt-2">5000</h5>
                            <p class="card-text">اجمالى المبيعات</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card btn-imdad ">
                        <div class="card-body text-center">
                            <i class="bi bi-shop"></i>
                            <h5 class="card-title mt-2">44 طلب</h5>
                            <p class="card-text">عدد الطلبات</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card btn-imdad ">
                        <div class="card-body text-center">
                            <i class="bi bi-shop"></i>
                            <h5 class="card-title mt-2">20</h5>
                            <p class="card-text">اجمالى قيمة قسائم التخفيض</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-md-4">
                    <div class="card btn-imdad ">
                        <div class="card-body text-center">
                            <i class="bi bi-cash-stack"></i>
                            <h5 class="card-title mt-2">650</h5>
                            <p class="card-text">اجمالى قيمة الضريبة المضافة</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card btn-imdad ">
                        <div class="card-body text-center">
                            <i class="bi bi-cash-stack"></i>
                            <h5 class="card-title mt-2">1,050</h5>
                            <p class="card-text">اجمالى قيمة مصاريف الشحن</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card btn-imdad ">
                        <div class="card-body text-center">
                            <i class="bi bi-cash-stack"></i>
                            <h5 class="card-title mt-2">561</h5>
                            <p class="card-text">اجمالى رسوم الدفع عند الاستلام</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-md-4">
                    <div class="card btn-imdad ">
                        <div class="card-body text-center">
                            <i class="bi bi-bag"></i>
                            <h5 class="card-title mt-2">130</h5>
                            <p class="card-text">متوسط حجم سلة المشتريات</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card btn-imdad ">
                        <div class="card-body text-center">
                            <i class="bi bi-cash-stack"></i>
                            <h5 class="card-title mt-2">Card 8</h5>
                            <p class="card-text">متوسط عددالمنتجات بالطلب الواحد</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>


        <!-- السلات المتروكة -->
        <div class="container-fluid mt-3 tab-pane fade" id="baskets">
            <div class="row">
                <div class="col-md-4 ">
                    <div class="card btn-imdad ">
                        <div class="card-body text-center ">
                            <i class="bi bi-file-earmark"></i>
                            <h5 class="card-title mt-2">5000</h5>
                            <p class="card-text">عدد السلات المتروكة</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card btn-imdad ">
                        <div class="card-body text-center">
                            <i class="bi bi-file-earmark"></i>
                            <h5 class="card-title mt-2">44 طلب</h5>
                            <p class="card-text">عدد السلات المتروكة التى تحولت لطلبات</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card btn-imdad ">
                        <div class="card-body text-center">
                            <i class="bi bi-file-earmark"></i>
                            <h5 class="card-title mt-2">20</h5>
                            <p class="card-text">معدل التحويل</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-md-4">
                    <div class="card btn-imdad ">
                        <div class="card-body text-center">
                            <i class="bi bi-file-earmark"></i>
                            <h5 class="card-title mt-2">650</h5>
                            <p class="card-text">اجمالى قيمة السلات المتروكة</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card btn-imdad ">
                        <div class="card-body text-center">
                            <i class="bi bi-file-earmark"></i>
                            <h5 class="card-title mt-2">1,050</h5>
                            <p class="card-text">اجمالى مبيعات السلات المتروكة التى تحولت لطلبات</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card btn-imdad ">
                        <div class="card-body text-center">
                            <i class="bi bi-file-earmark"></i>
                            <h5 class="card-title mt-2">561</h5>
                            <p class="card-text">مسار السلات المتروكة</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-md-4">
                    <div class="card btn-imdad ">
                        <div class="card-body text-center">
                            <i class="bi bi-file-earmark"></i>
                            <h5 class="card-title mt-2">130</h5>
                            <p class="card-text">مرحلة التخلى عن السلة</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AnalyticsPage",
    data() {
        return {
            activeTab: "home",
        };
    },
};
</script>

<style scoped>
/* Add any custom styles here */
.nav-tabs .nav-link {
    font-size: 14px;
    padding: 10px;
    margin: 0 10px;
    text-align: center;
    
}

.nav-tabs .nav-item .nav-link.active {
    border: none;
    
}
</style>