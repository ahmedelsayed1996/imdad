<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">

        <h2 class="ml-auto headLine text-dark" > العملاء</h2>
        <!-- <button type="button" class="btn btn-success mx-1 " id="export"> <i class="bi bi-person"></i>
            استيراد العملاء</button>
        <button type="button" class="btn btn-imdad mx-1"> + اضافة عميل جديد</button> -->
        <button type="button" class="btn btn-danger btn-sm">حذف العميل</button>
    </nav>
    <div class="m-2">
        <!-- <button type="button" class="btn btn-imdad mx-2 mr-auto"> حفظ</button>
        <button type="button" class="btn btn-danger mr-auto">إلغاء</button> -->
    </div>
</header>
  <div class="container p-2">
    <div class="card col-12 bg-light">
      <div class="card-body d-flex justify-content-between align-items-center ">
        
        <div>
          <!-- <div class="text-start">العملاء</div> -->
          <nav aria-label="breadcrumb" >
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="#" style="text-decoration: none;">العملاء</a></li>
              <li class="breadcrumb-item active" aria-current="page">تفاصيل العميل</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row  ">
      
      <div class="col-md-7 col-sm-12 ">
        <div class="card m-2 bg-light">
          <div class="card-header" dir="rtl">
            <span class="card-title left"> <img width="30vw" src="https://w7.pngwing.com/pngs/481/915/png-transparent-computer-icons-user-avatar-woman-avatar-computer-business-conversation-thumbnail.png" alt=""> </span>
            <span class="card-title float-right"><b class="text-dark">Naif Ahmed</b></span>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-sm-4">
                <div class="card p-2 text-center btn-imdad ">
                  <p class="m-0">اجمالى عدد الطلبات</p>
                  <p class="m-0"><b>5</b></p>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="card p-2 text-center btn-imdad ">
                  <p class="m-0">اجمالى الانفاق حتى الان</p>
                  <p class="m-0"><b>3400.20</b> </p>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="card p-2 text-center btn-imdad ">
                  <p class="m-0">متوسط الطلب</p>
                  <p class="m-0"><b>100.01</b> </p>
                </div>
              </div>
            <!-- </div>
            <div class="row mt-3"> -->
              <div class="col-sm-4">
                <div class="card p-2 text-center btn-imdad ">
                  <p class="m-0"> المنتجات فى سلة العميل</p>
                  <p class="m-0"><b>100.01</b> </p>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="card p-2 text-center btn-imdad ">
                  <p class="m-0"> محفظة العميل</p>
                  <p class="m-0"><b>100.01</b> </p>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="card p-2 text-center btn-imdad ">
                  <p class="m-0"> مؤشر اداء العميل</p>
                  <p class="m-0"><b>100.01</b> </p>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div class="card m-2 bg-light">
          <div class="card-header text-right">
            <h6 class="card-title text-dark">ملاحظات</h6>
          </div>
          <div class="card-body d-flex flex-column">
            <textarea dir="rtl" class="form-control mb-3 bg-light"></textarea>
            <button class="btn btn-imdad align-self-start btn-sm ">اضافة ملاحظة</button>
          </div>
        </div>


        <div class="card m-2 bg-light">
          <div class="card-header" style="display: flex; justify-content: space-between; align-items: center;">
            <div>
              <h6 class="float-left text-dark"  style="text-decoration: none;">جميع الطلبات</h6>
            </div>
            <div dir="rtl">
              <h6 class="card-title text-right text-dark" style="display: inline-block;">احدث الطلبات</h6>
              <button class="btn btn-imdad btn-sm " style="display: inline-block;">اضافة طلب جديد +</button>
            </div>
          </div>

          <div class="card-body">
            <div class="table-responsive">
              <table class="table text-dark" dir="rtl">
                <thead>
                  <tr>
                    <th class="text-dark"> رقم الطلب</th>
                    <th class="text-dark">تاريخ التعديل</th>
                    <th class="text-dark">الشحن</th>
                    <th class="text-dark">الدفع</th>
                    <th class="text-dark">حالة الطلب</th>
                    <th class="text-dark"> المجموع</th>
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
      <div class="col-md-5 col-sm-12">
        <div class="card m-2  bg-light">
          <div class="card-header">
            <a href="" style="text-decoration: none;" class="text-dark">تعديل </a>
            <h6 style="float:right;"><b class="text-dark">البيانات الشخصية</b></h6>
          </div>

          <div class="card-body">

            <div class="text-right text-dark">
              <div class="p-1">
                <i class="bi bi-telephone-fill" style="float:left;"></i>
                <span><b>رقم العميل :</b> 96000000000</span>
              </div>
              <div class="p-1">
                <i style="float:left;">@</i>
                <span><b>  ايميل العميل :</b> test@test.test</span>
              </div>
              <div class="p-1">
                <!-- <i class="bi-alarm" style="float:left;"></i> -->
                <span><b>عنوان العميل :</b> صنعاء</span>
                 
              </div>
              <div class="p-1">
                <!-- <i class="bi-alarm" style="float:left;"></i> -->
                <span><b>دوام العميل :</b> ساعات</span>
              </div>
              <div class="p-1">
                <!-- <i class="bi-alarm" style="float:left;"></i> -->
                <span><b>نوع نشاط العميل :</b> مطعم </span>
              </div>
              
            </div>
          </div>

        </div>
        <div class="card m-2 bg-light">
          <div class="card-header d-flex text-dark">
            <span><h6>اعدادات حساب العميل</h6></span>
          </div>
          <div class="card-body">
            <div class="text-right text-dark">
              <div class="p-1 row">
                <div class="col"><span><b>حظر العميل</b></span></div>
                <div class="col">
                  <label class="switch">
                    <input type="checkbox" class="slider">
                    <span class="slider round"></span>
                  </label>
                </div>
              </div>
              <div class="p-1 row">
                <div class="col"><span><b>الغاء الدفع عند الاستلام</b></span></div>
                <div class="col">
                  <label class="switch">
                    <input type="checkbox" class="slider">
                    <span class="slider round"></span>
                  </label>
                </div>
              </div>
              <div class="p-1 row">
                <div class="col"><span><b>توثيق الحساب</b></span></div>
                <div class="col">
                  <label class="switch">
                    <input type="checkbox" class="slider">
                    <span class="slider round"></span>
                  </label>
                </div>
              </div>
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
<!-- <style>
.index{
background-color: white !important;
}
.form-check .form-check-input {
  width: 30px;
  height: 20px;
}

.form-check .form-check-label {
  margin-right: 5px;
}

.form-check .form-check-input:checked {
  background-color: #0d6efd;
}

.form-check .form-check-input:checked+.form-check-label {
  color: white;
}
</style> -->
<style>
    .switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  margin-right: 10px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 34px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 50%;
}


input:checked + .slider {
  background-color: #9b59b6;
}

input:focus + .slider {
  box-shadow: 0 0 1px #9b59b6;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

.switch {
  display: flex;
  align-items: center;
}
.btn-imdad{
  background-color: purple;
}


  </style>