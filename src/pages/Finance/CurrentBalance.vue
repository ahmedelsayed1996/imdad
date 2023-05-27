<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
    
            <!-- <h2 class="ml-auto headLine"> البائعين</h2> -->
            <h3 class="headLine my-3">رصيدك الحالي في المحفظة</h3>

            <!-- <button type="button" class="btn btn-success mx-1 " id="export"> <i class="bi bi-person"></i>
                استيراد البائعين</button>
            <button type="button" class="btn btn-imdad mx-1"> + اضافة بائع جديد</button> -->
        </nav>
        <div class="m-2">
            <!-- <button type="button" class="btn btn-imdad mx-2 mr-auto"> حفظ</button>
            <button type="button" class="btn btn-danger mr-auto">إلغاء</button> -->
        </div>
    </header>
    <div class="container">
        <div class="">
            <!-- <h3 class="headLine my-3">رصيدك الحالي في المحفظة</h3> -->
        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="card text-bg-light d-flex">
                    <div class="card-header d-flex">

                        <h5 class="card-title ">رصيد المتجر<i class="fas fa-money-bill-wave"></i></h5>
                    </div>
                    <div class="card-body d-flex justify-content-center">
                        <h1 class="card-text">35623.5 ر.ي</h1>
                    </div>
                    <div class="card-footer  d-flex justify-content-center">
                        <button class="btn btn-primary mx-2">إيداع</button>
                        <button class="btn btn-secondary">سحب</button>
                        <br />
                    </div>
                    <h5 class="card-title d-flex justify-content-center btn">سجل العمليات <i class="fas fa-history"></i>
                    </h5>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card text-bg-light d-flex">
                    <div class="card-header d-flex">

                        <h5 class="card-title ">رصيد المدفوعات الالكترونيه<i class="fas fa-money-bill-wave"></i></h5>
                    </div>
                    <div class="card-body d-flex justify-content-center">
                        <h1 class="card-text">5223.81 ر.ي</h1>
                    </div>
                    <div class="card-footer  d-flex justify-content-center">
                        <button class="btn btn-primary mx-2">التحويل لرصيد المتجر</button>
                        <!-- <button class="btn btn-secondary">سحب</button> -->
                        <br />
                    </div>
                    <h5 class="card-title d-flex justify-content-center btn">سجل العمليات <i class="fas fa-history"></i>
                    </h5>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "CurrentBalancePage"
}
</script>