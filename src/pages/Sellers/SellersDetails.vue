<template>
  <div class="container p-2">
    <div class="card col-12 text-bg-light">
      <div class="card-body d-flex justify-content-between align-items-center ">
        <div>
          <div class="text-start" style="font-weight:bold">البائعين</div>
          <nav aria-label="breadcrumb" dir="rtl">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="#" style="text-decoration: none;">البائعين</a></li>
              <li class="breadcrumb-item active" aria-current="page">تفاصيل البائع</li>
            </ol>
          </nav>
        </div>
        <button type="button" class="btn btn-danger btn-sm">حذف البائع</button>

      </div>
    </div>
  </div>

  <div class="container ">
    <div class="row">
      
      <div class="col-md-7 col-sm-12">
        <div class="card m-2 text-bg-light">
          <div class="card-header" dir="rtl">
            <span class="card-title text-right"><b>Naif Ahmed</b></span>
            <span class="card-title text-left"> <img width="30vw"
                src="https://w7.pngwing.com/pngs/481/915/png-transparent-computer-icons-user-avatar-woman-avatar-computer-business-conversation-thumbnail.png"
                alt=""> </span>
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
                  <p class="m-0">اجمالى مبلغ المشتريات</p>
                  <p class="m-0"><b>3400.20</b> </p>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="card p-2 text-center btn-imdad ">
                  <p class="m-0"> اجمالى العمولات</p>
                  <p class="m-0"><b>100.01</b> </p>
                </div>
              </div>
            <!-- </div> -->
            <!-- <div class="row "> -->
              <div class="col-sm-4">
                <div class="card p-2 text-center btn-imdad ">
                  <p class="m-0"> طلبات جارى التوصيل</p>
                  <p class="m-0"><b>100.01</b> </p>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="card p-2 text-center btn-imdad ">
                  <p class="m-0"> محفظة البائع</p>
                  <p class="m-0"><b>100.01</b> </p>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="card p-2 text-center btn-imdad ">
                  <p class="m-0"> تقارير</p>
                  <p class="m-0"><b>100.01</b> </p>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div class="card m-2 text-bg-light">
          <div class="card-header text-right">
            <h6 class="card-title">ملاحظات</h6>
          </div>
          <div class="card-body d-flex flex-column">
            <textarea dir="rtl" class="form-control mb-3 bg-light"></textarea>
            <button class="btn btn-imdad align-self-start btn-sm ">اضافة ملاحظة</button>
          </div>
        </div>


        <div class="card m-2 bg-light">
          <div class="card-header" style="display: flex; justify-content: space-between; align-items: center;">
            <div>
              <a href="#" class="float-left bg-l headLine" style="text-decoration: none;font-weight:bold">جميع الطلبات</a>
            </div>
            <div dir="rtl">
              <!-- <h6 class="card-title text-right" style="display: inline-block;">احدث الطلبات</h6> -->
              <button class="btn btn-imdad btn-sm " style="display: inline-block;">اضافة طلب جديد +</button>
            </div>
          </div>

          <div class="card-body text-bg-light">
            <div class="table-responsive">
              <table class="table" dir="rtl">
                <thead>
                  <tr>
                    <th> رقم الطلب</th>
                    <th>تاريخ التعديل</th>
                    <th>الشحن</th>
                    <th>الدفع</th>
                    <th>حالة الطلب</th>
                    <th> المجموع</th>
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

        <div class="card m-2 bg-light">
          <div class="card-header" style="display: flex; justify-content: space-between; align-items: center;">
            <div>
              <a href="#" class="float-left bg-l headLine" style="text-decoration: none;font-weight:bold"> العلامات التجارية التابعه للبائع</a>
            </div>
            <div dir="rtl">
              <!-- <h6 class="card-title text-right" style="display: inline-block;">احدث الطلبات</h6> -->
              <!-- <button class="btn btn-imdad btn-sm text-light" style="display: inline-block;">اضافة طلب جديد +</button> -->
            </div>
          </div>

          <div class="card-body text-bg-light row">
           
            <div class="card text-bg-light col-4">
              <img class="rounded-circle w-25" src="https://muzawed.com/wp-content/uploads/2020/01/%D8%A7%D9%86%D9%88%D8%A7%D8%B9-%D8%A7%D9%84%D8%B9%D9%84%D8%A7%D9%85%D8%A7%D8%AA-%D8%A7%D9%84%D8%AA%D8%AC%D8%A7%D8%B1%D9%8A%D8%A9-1.png" alt="صورة البطاقة" />
              <h4 class="d-flex ">البوادي</h4>
            </div>
            <div class="card text-bg-light col-4">
              <img class="rounded-circle w-25" src="https://cdn.al-ain.com/lg/archive/inline/images/1_24.png" alt="صورة البطاقة" />
              <h4 class="d-flex ">ستار باكس</h4>
            </div>
            <div class="card text-bg-light col-4">
              <img class="rounded-circle w-50" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgqwtCa52w4rPWxyWWr2HcaEvdheVbSdLxpg&usqp=CAU" alt="صورة البطاقة" />
              <h4 class="d-flex justify-content-center">نايك</h4>
            </div>
            
            
            
          </div>
        </div>

      </div>

      <div class="col-md-5 col-sm-12">
        <div class="card m-2 text-bg-light">
          <div class="card-header">
            <a href="" style="text-decoration: none;font-weight:bold">تعديل </a>
            <span style="float:right;"><b style="text-decoration: none;font-weight:bold">البيانات الشخصية</b></span>
          </div>

          <div class="card-body ">

            <div class="text-right">
              <div class="p-1">
                <i class="bi bi-telephone-fill" style="float:left;"></i>
                <span><b>رقم البائع :</b> 96000000000</span>
              </div>
              <div class="p-1">
                <i style="float:left;">@</i>
                <span> test@test.test<b> : ايميل البائع </b></span>
              </div>
              <div class="p-1">
                <!-- <i class="bi-alarm" style="float:left;"></i> -->
                <span><b>عنوان البائع :</b> صنعاء</span>

              </div>
              <div class="p-1">
                <!-- <i class="bi-alarm" style="float:left;"></i> -->
                <span><b>دوام البائع :</b> ساعات</span>
              </div>
              <div class="p-1">
                <!-- <i class="bi-alarm" style="float:left;"></i> -->
                <span><b>نوع نشاط البائع :</b> مطعم </span>
              </div>
              <div class="p-1">
                <!-- <i class="bi-alarm" style="float:left;"></i> -->
                <span><b>اماكن التغطية للبائع : </b> احياء صنعاء </span>
              </div>
              <div class="p-1">
                <!-- <i class="bi-alarm" style="float:left;"></i> -->
                <span><b> تاريخ انضمام البائع : </b> 10/2022 </span>
              </div>

            </div>
          </div>

        </div>
        <div class="card m-2 text-bg-light">
          <div class="card-header">
            <span style="float:right;"><b style="text-decoration: none;font-weight:bold">اعدادات حساب البائع</b></span>
          </div>
          <div class="card-body">
            <div class="text-right">
              <div class="p-1 row">
                <div class="col">
                  <label class="switch">
                    <input type="checkbox" class="slider">
                    <span class="slider round"></span>
                  </label>
                </div>
                <div class="col"><span><b>حظر البائع</b></span></div>
              </div>

              <div class="p-1 row">
                <div class="col">
                  <label class="switch">
                    <input type="checkbox" class="slider">
                    <span class="slider round"></span>
                  </label>
                </div>
                <div class="col"><span><b>توثيق الحساب</b></span></div>
              </div>
            </div>
          </div>
        </div>
        <div class="card m-2 bg-light">
          <div class="card-header" style="display: flex; justify-content: space-between; align-items: center;">
            <div>
              <a href="#" class="float-left bg-l headLine "><b style="text-decoration: none;font-weight:bold"> فروع
                  البائع</b></a>
            </div>
            <div dir="rtl">
              <!-- <h6 class="card-title text-right" style="display: inline-block;">احدث الطلبات</h6> -->
              <!-- <button class="btn btn-imdad btn-sm text-light" style="display: inline-block;">اضافة طلب جديد +</button> -->
            </div>
          </div>

          <div class="card-body text-bg-light">
            <div class="table-responsive">
              <table class="table" dir="rtl">
                <thead>
                  <tr>
                    <th> اماكن تغطيه البائع</th>
                    <th> اماكن فروع البائع</th>
                    <th>عدد فروع البائع</th>

                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>صنعاء</td>
                    <td>الوحده</td>
                    <td>20</td>

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
  name: 'SellersDetailsPage',
  // props: {
  //   msg: String
  // }
  data() {
    return {
      showCheckboxes1: false,
      checkbox1Value: false,
      checkbox2Value: false,

      showCheckboxes2: false,
      checkbox3Value: false,
      checkbox4Value: false,
      checkbox5Value: false,
      checkbox6Value: false,
    };
  },
  // methods: {
  //   toggleCheckbox2() {
  //     this.showCheckbox2 = !this.showCheckbox2;
  //     if (!this.showCheckbox2) {
  //       this.showCheckbox3 = false;
  //       this.checkbox2Value = false;
  //       this.checkbox3Value = false;
  //       this.checkbox4Value = false;
  //       this.checkbox5Value = false;
  //     }
  //   },
  //   toggleCheckbox3() {
  //     this.showCheckbox3 = !this.showCheckbox3;
  //     if (!this.showCheckbox3) {
  //       this.checkbox3Value = false;
  //       this.checkbox4Value = false;
  //       this.checkbox5Value = false;
  //     }
  //   },
  // },
}
</script>

<style>
.index {
  
}

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


input:checked+.slider {
  background-color: #9b59b6;
}

input:focus+.slider {
  box-shadow: 0 0 1px #9b59b6;
}

input:checked+.slider:before {
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

.btn-imdad {
  background-color: purple;
}

.filter-sidebar {
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px;
}

.filter-sidebar label {
  display: block;
  margin-bottom: 5px;
  font-size: 16px;
}

.filter-sidebar .filter-subcategory {
  margin-left: 20px;
  margin-top: 5px;
}

.filter-sidebar input[type="checkbox"] {
  margin-right: 5px;
}</style>
