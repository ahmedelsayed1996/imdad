<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
    
            <!-- <h2 class="ml-auto headLine"> البائعين</h2> -->
            <h3 class="headLine">>أخر العمليات</h3>

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
    <div class="row">
        
        <div class="table-responsive col-md-12 text-white text-bg-light">
            <table class="table   text-black">
                <thead>
                    <tr>
                        <!-- <th class="align-top"><input class="form-check-input" type="checkbox" value="" id="checkAll"></th> -->
                        <th><mark>رقم العملية</mark></th>
                        <th> <mark>التاريخ والوقت </mark></th>
                        <th> <mark> نوع العملية </mark></th>
                        <th> <mark>رقم الطلب</mark></th>
                        <th> <mark>اسم العميل</mark></th>
                        <th> <mark>رقم الجوال</mark></th>
                        <th> <mark>قيمة العمليه</mark></th>
                        <th> <mark>شبكة الدفع </mark></th>
                        <th> <mark>حالة العمليه</mark></th>


                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>545338</td>
                        <td><span>19/5/2023</span><span>12:00 AM</span> </td>
                        <td>شراء</td>
                        <td>#534354</td>
                        <td>عصام</td>
                        <td>01351323</td>
                        <td>50 ر.ي</td>
                        <td>VISA</td>
                        <td class="text-bg-success">ناجحة</td>
                    </tr>
                    <tr>
                        <td>545338</td>
                        <td><span>19/5/2023</span><span>12:00 AM</span> </td>
                        <td>شراء</td>
                        <td>#534354</td>
                        <td>احمد</td>
                        <td>01356351323</td>
                        <td>150 ر.ي</td>
                        <td>VISA</td>
                        <td class="text-bg-danger">فاشلة</td>

                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
</template>
<script> 
    export default{
        name:"LastOperationPage"
    }
</script>