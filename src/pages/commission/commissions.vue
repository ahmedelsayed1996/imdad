<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">

            <h2 class="ml-auto headLine"> العمولات</h2>
        </nav>
        <div class="m-2">
            <button type="button" class="btn btn-imdad mx-2 mr-auto"> حفظ</button>
            <button type="button" class="btn btn-danger mr-auto">إلغاء</button>
        </div>
    </header>
    <div class=" container-fluid">
        <!-- الجزء الأول -->
        
        <!-- <div class="row mt-5 text-right">
            <div class="col-md-4">
                <div class="form-group">
                    <label for="text-input " class="fs-3 text-black"> اسم العمولة</label>
                    <input type="text" class="form-control bg-light" id="text-input" placeholder="ادخل اسم العمولة">
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label for="dropdown-select" class="fs-3 text-black">نوع العمولة</label>
                    <select class="form-control bg-light text-black fs-6" id="dropdown-select">
                        <option value="option1" class="text-black">عامة</option>
                        <option value="option2">حسب البائع</option>
                        <option value="option3">حسب المنتج</option>
                        <option value="option4">حسب الفئة</option>
                    </select>
                </div>
            </div>
            <div class="col-md-6 ">
                <div class="form-group ">
                    <label for="dropdown-select" class="fs-3 text-black">اسم البائع</label>
                    <select class="form-control bg-light text-black fs-6" id="dropdown-select">
                        <option value="option1" >عصام</option>
                        <option value="option2">عصام</option>
                        <option value="option3">حسب المنتج</option>
                        <option value="option4">حسب الفئة</option>
                        
                    </select>
                </div>
            </div>
        </div> -->

        <!-- الجزء الثاني -->
        <!-- <div class="row mt-5 text-right">
            <div class="col-md-6">
                <div class="form-group">
                    <label for="text-input-3" class="fs-3 text-black">نسبة عمولة الشريك</label>
                    <input type="text" class="form-control bg-light" id="text-input-3" placeholder="15 %">
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <label for="text-input-2" class="fs-3 text-black">نسبة عمولة غير الشريك</label>
                    <input type="text" class="form-control bg-light" id="text-input-2" placeholder="20:00">
                </div>
                
            </div>
        </div> -->
        <div>
            <!-- <ul class="nav nav-tabs d-flex " style="justify-content:space-around;">
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
            </ul> -->
    
            <div class="tab-content">
              <div class="tab-pane fade show active" id="sales">
                <h3 class="headLine my-3">اختر نوع العمولة   :</h3>
                <div class="w-75  d-inline">
                  <select class=" form-select w-50 " id="table-dropdown" v-model="selectedTable">
                    <option value="table1">علي حسب نوع البائع</option>
                    <option selected  value="table2">العامة</option>
                    
                  </select>
                  <!-- <button class="btn btn-imdad w-25 ">عرض</button> -->
    
                  <div id="table-container" v-html="tableHTML"></div>
    
                </div>
              </div>
              
            </div>
          </div>
    
    
    </div>
</template>
<script>
export default {
    name: "CommissionsPage",
    data() {
    return {
      selectedTable: "",
      tableHTML: "",
    };
  },
  watch: {
    selectedTable() {
      if (this.selectedTable === "table1") {
        this.tableHTML = "<table class='table table-striped table-hover mt-5 text-right'><thead><tr><th class='fs-3 text-black'>الاسم</th><th class='fs-3 text-black'>الايميل</th><th class='fs-3 text-black'>نوع النشاط</th><th class='fs-3 text-black'>العمولة</th></tr></thead><tbody><tr class='bg-light'><td><div class='form-group'><label for='name-input' class='text-black'>عصام</label></div></td><td><div class='form-group'><label for='email-input' class='text-black'>essam@imdad.com</label></div></td><td><div class='form-group'><select class='form-control bg-light text-black fs-6' id='category-select'><option value='option1' class='text-black'>جملة</option><option value='option2'>تجزئة</option><option value='option3'>كبار عملاء</option></select></div></td><td><div class='form-group'><button type='btn' class='btn btn-primary' id='set-category-input' data-toggle='modal' data-target='#exampleModal'>اضف عمولة</button></div></td></tr></tbody></table>";

// Modal content
this.modalContent = "<div class='row mt-5 text-right'><div class='col-md-4'><div class='form-group'><label for='mobiles-input' class='fs-3 text-black'>موبايلات</label><input type='text' class='form-control bg-light' id='mobiles-input' placeholder='ادخل العمولة'></div></div><div class='col-md-4'><div class='form-group'><label for='food-input' class='fs-3 text-black'>مواد غذائية</label><input type='text' class='form-control bg-light' id='food-input' placeholder='ادخل العمولة'></div></div><div class='col-md-4'><div class='form-group'><label for='accessories-input' class='fs-3 text-black'>اكسسوارات</label><input type='text' class='form-control bg-light' id='accessories-input' placeholder='ادخل العمولة'></div></div></div><div class='row mt-3 text-right'><div class='col-md-4'><div class='form-group'><label for='label4' class='fs-3 text-black'>مواد تنظيف</label><input type='text' class='form-control bg-light' id='input4' placeholder='ادخل العمولة'></div></div><div class='col-md-4'><div class='form-group'><label for='label5' class='fs-3 text-black'>الكترونيات</label><input type='text' class='form-control bg-light' id='input5' placeholder='ادخل العمولة'></div></div><div class='col-md-4'><div class='form-group'><label for='label6' class='fs-3 text-black'>لابتوب</label><input type='text' class='form-control bg-light' id='input6' placeholder='ادخل العمولة'></div></div></div>";

// Add the modal markup with updated background color
this.tableHTML += "<div class='modal fade' id='exampleModal' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'><div class='modal-dialog' role='document'><div class='modal-content bg-light'><div class='modal-header'><h5 class='modal-title' id='exampleModalLabel'>اضافة عمولة</h5><button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div><div class='modal-body'>" + this.modalContent + "</div><div class='modal-footer'><button type='button' class='btn btn-secondary' data-dismiss='modal'>اغلاق</button><button type='button' class='btn btn-primary'>حفظ</button></div></div></div></div>";

      } else if (this.selectedTable === "table2") {
        this.tableHTML = "<div class='row mt-5 text-right'><div class='col-md-4'><div class='form-group'><label for='mobiles-input' class='fs-3 text-black'>موبايلات</label><input type='text' class='form-control bg-light' id='mobiles-input' placeholder='ادخل العمولة'></div></div><div class='col-md-4'><div class='form-group'><label for='food-input' class='fs-3 text-black'>مواد غذائية</label><input type='text' class='form-control bg-light' id='food-input' placeholder='ادخل العمولة'></div></div><div class='col-md-4'><div class='form-group'><label for='accessories-input' class='fs-3 text-black'>اكسسوارات</label><input type='text' class='form-control bg-light' id='accessories-input' placeholder='ادخل العمولة'></div></div></div><div class='row mt-3 text-right'><div class='col-md-4'><div class='form-group'><label for='label4' class='fs-3 text-black'>مواد تنظيف</label><input type='text' class='form-control bg-light' id='input4' placeholder='ادخل العمولة'></div></div><div class='col-md-4'><div class='form-group'><label for='label5' class='fs-3 text-black'>الكترونيات</label><input type='text' class='form-control bg-light' id='input5' placeholder='ادخل العمولة'></div></div><div class='col-md-4'><div class='form-group'><label for='label6' class='fs-3 text-black'>لابتوب</label><input type='text' class='form-control bg-light' id='input6' placeholder='ادخل العمولة'></div></div></div>";
      } 
    },
  },
}
</script>