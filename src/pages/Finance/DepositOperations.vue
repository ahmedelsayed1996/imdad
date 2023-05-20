<template>
    <div class="container">
        <div>
            <h3 class="headLine my-3">>كشف الحساب والايداعات </h3>
            <ul class="nav nav-tabs d-flex " style="justify-content:space-around;">
                <li class="nav-item ">
                    <a class="nav-link border" data-toggle="tab" href="#done"><i class="mdi mdi-store"></i> تم الايداع</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link border" data-toggle="tab" href="#not"><i class="mdi mdi-wallet-travel"></i>
                        لم يتم الايداع</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link border" data-toggle="tab" href="#pending"><i class="mdi mdi-account"></i>
                        قيد المعالجة</a>
                </li>
            </ul>
            <div class="tab-content">
                <div class="tab-pane fade" id="done">
                    <h3 class="headLine my-3">تم الايداع</h3>
                    <div class="row">
            
                        <div class="table-responsive col-md-12 text-white text-bg-light">
                            <table class="table   text-black">
                                <thead>
                                    <tr>
                                        <!-- <th class="align-top"><input class="form-check-input" type="checkbox" value="" id="checkAll"></th> -->
                                        <th><mark>رقم عملية الايداع</mark></th>
                                        <th> <mark>التاريخ والوقت </mark></th>
                                        <th> <mark> اليوم  </mark></th>
                                        <th> <mark> إجمالي المبلغ</mark></th>
                                        <th> <mark> رسوم الايداع</mark></th>
                                        <th> <mark> المبلغ المستحق</mark></th>
                                        <th> <mark>البنك المودع فية </mark></th>
                                        
            
            
                                    </tr>
                                </thead>
            
                                <tbody>
                                    <tr>
                                        <td>#545338</td>
                                        <td><span>20/5/2023</span><span>12:00 AM</span> </td>
                                        <td>السبت</td>
                                        <td>5331.25 ر.ي</td>
                                        <td>3 ر.ي</td>
                                        <td>45432.52 ر.ي</td>
                                        <!-- <td></td> -->
                                        <td>VISA</td>
                                       
                                    </tr>
                                    <tr>
                                        <td>#545338</td>
                                        <td><span>20/5/2023</span><span>12:00 AM</span> </td>
                                        <td>السبت</td>
                                        <td>5331.25 ر.ي</td>
                                        <td>3 ر.ي</td>
                                        <td>45432.52 ر.ي</td>
                                        <!-- <td></td> -->
                                        <td>VISA</td>
                                       
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="not">
                    <h3>لم يتم الايداع</h3>
                    <p>This is the contact tab content.</p>
                  </div>
                  <div class="tab-pane fade" id="pending">
                    <div class="row">
                      <div class="col-lg-6 col-sm-12 shadow">
                        <h3 class="headLine my-3"> قيد المعالجة</h3>
                        ...
                      </div>
                      
                    </div>
                  </div>
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
    name: "DepositOperationsPage"
}
</script>