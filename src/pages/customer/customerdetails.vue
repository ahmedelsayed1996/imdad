<template>
    <div class="container-fuild p-2 content-page index">
        <div class="card col-12 text-bg-light">
          <div class="card-body d-flex justify-content-between align-items-center ">
            <button type="button" class="btn btn-danger btn-sm">حذف العميل</button>
            <div>
              <div class="text-start">العملاء</div>
              <nav aria-label="breadcrumb"   >
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="#" style="text-decoration: none;">العملاء</a></li>
                  <li class="breadcrumb-item active" aria-current="page">تفاصيل العميل</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    
      <div class="container-fuild content-page  index">
        <div class="row ">
          <div class="col-5 ">
            <div class="card m-2 text-bg-light">
              <div class="card-header">
                <a href="" style="text-decoration: none;">تعديل </a>
                <span style="float:right;"><b>البيانات الشخصية</b></span>
              </div>
    
              <div class="card-body">
    
                <div class="text-right">
                  <div class="p-1">
                    <i class="bi bi-telephone-fill" style="float:left;"></i>
                    <span>+96000000000</span>
                  </div>
                  <div class="p-1">
                    <i style="float:left;">@</i>
                    <span>test@test.com</span>
                  </div>
                  <div class="p-1">
                    <!-- <i class="bi-alarm" style="float:left;"></i> -->
                    <span><b>مدينة الشحن:</b>
                      قنا</span>
                  </div>
                  <div class="p-1">
                    <!-- <i class="bi-alarm" style="float:left;"></i> -->
                    <span><b>دولة الشحن:</b>
                      اليمن</span>
                  </div>
                  <div class="p-1">
                    <!-- <i class="bi-alarm" style="float:left;"></i> -->
                    <span><b>الجنس</b>
                      ذكر</span>
                  </div>
                  <div class="p-1">
                    <!-- <i class="bi-alarm" style="float:left;"></i> -->
                    <span><b>تاريخ الميلاد:</b>
                      اضف تاريخ الميلاد</span>
                  </div>
                </div>
              </div>
    
            </div>
            <div class="card m-2 text-bg-light">
              <div class="card-header">
                
                <span style="float:right;"><b>اعدادات حساب العميل</b></span>
              </div>
    
              <div class="card-body">
    
                <div class="text-right">
                  <div class="p-1">
    
                    <input style="float:left; display: block;" class="form-check-input ml-2" type="checkbox" role="switch"
                      id="flexSwitchCheckDefault">
                    <span><b>حظر العميل</b></span>
                  </div>
                  <div class="p-1">
                    <input style="float:left; display: block;" class="form-check-input ml-2" type="checkbox" role="switch"
                      id="flexSwitchCheckDefault">
                    <span><b>الغاء الدفع عند الاستلام</b></span>
                  </div>
                  <div class="p-1">
                    <input style="float:left; display: block;" class="form-check-input ml-2" type="checkbox" role="switch"
                      id="flexSwitchCheckDefault">
                    <span><b>الفاء الاشتراك فى النشرة الاخبارية</b></span>
                  </div>
                </div>
              </div>
    
            </div>
          </div>
          <div class="col-7">
            <div class="card m-2 text-bg-light">
              <div class="card-header"   >
                <span class="card-title text-right"><b>Naif Ahmed</b></span>
                <span class="card-title text-left"> <img width="30vw" src="https://w7.pngwing.com/pngs/481/915/png-transparent-computer-icons-user-avatar-woman-avatar-computer-business-conversation-thumbnail.png" alt=""> </span>
              </div>
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center"   >
                  <div class="card p-2  text-center bg-success text-light">
                    <p class="m-0">اجمالى عدد الطلبات</p>
                    <p class="m-0"><b>5</b></p>
                  </div>
                  <div class="card p-2 text-center bg-success text-light">
                    <p class="m-0">اجمالى الانفاق حتى الان</p>
                    <p class="m-0"><b>3400.20</b> </p>
                  </div>
                  <div class="card p-2 text-center bg-success text-light">
                    <p class="m-0">متوسط قيمة الطلب</p>
                    <p class="m-0"><b>100.01</b> </p>
                  </div>
                </div>
    
    
              </div>
            </div>
    
    
            <div class="card m-2 text-bg-light">
              <div class="card-header text-right">
                <h6 class="card-title">ملاحظات</h6>
              </div>
              <div class="card-body d-flex flex-column">
                <textarea    class="form-control mb-3 bg-light"></textarea>
                <button class="btn btn-success align-self-start btn-sm">اضافة ملاحظة</button>
              </div>
            </div>
    
    
            <div class="card m-2 text-bg-light">
              <div class="card-header" style="display: flex; justify-content: space-between; align-items: center;">
                <div>
                  <a href="#" class="float-left" style="text-decoration: none;"><h6 class="card-title">جميع الطلبات </h6> </a>
                </div>
                <div   >
                  <!-- <h6 class="card-title float-right" style="display: inline-block;">احدث الطلبات</h6> -->
                  <button class="btn btn-success btn-sm" style="display: inline-block;">اضافة طلب جديد +</button>
                </div>
              </div>
    
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table" >
                    <thead>
                      <tr>
                        <th>اجمالى عدد الطلبات</th>
                        <th>اجمالى الانفاق  </th>
                        <th>متوسط الطلب</th>
                        <th>المنتجات فى سلة العميل</th>
                        <th>محفظة العميل</th>
                        <th>مؤشر اداء العميل</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>5</td>
                        <td>10000</td>
                        <td>20</td>
                        <td>5</td>
                        <td>23000</td>
                        <td>8</td>
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
export default {
    name: 'CustomerDetailsPage',
    // props: {
    //   msg: String
    // }
}
</script>
<style>
.index{
background-color: white !important;
}
</style>