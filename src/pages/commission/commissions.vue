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
                    <option selected value="table1">علي حسب نوع المنتج</option>
                    <option value="table2">  علي حسب نوع البائع</option>
                    
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
        this.tableHTML = "<div class='row mt-5 text-right'><div class='col-md-4'><div class='form-group'><label for='dropdown-select' class='fs-3 text-black'>اختر نوع المنتج </label><select class='form-control bg-light text-black fs-6' id='dropdown-select'><option value='option1' class='text-black'>مياه</option><option value='option2'>مشروبات غازيه</option><option value='option3'>الكترونيات</option><option value='option4'>منظفات</option></select></div></div><div class='col-md-4'><div class='form-group'><label for='text-input ' class='fs-3 text-black'>  العمولة</label><input type='text' class='form-control bg-light' id='text-input' placeholder='ادخل  العمولة'></div></div></div>";
      } else if (this.selectedTable === "table2") {
        this.tableHTML = "<div class='row mt-5 text-right'><div class='col-md-4'><div class='form-group'><label for='dropdown-select' class='fs-3 text-black'>اختر نوع البائع </label><select class='form-control bg-light text-black fs-6' id='dropdown-select'><option value='option1' class='text-black'>عميل تجزئة</option><option value='option2'> عميل جملة</option><option value='option3'>كبار العملاء</option></select></div></div><div class='col-md-4'><div class='form-group'><label for='text-input ' class='fs-3 text-black'>  العمولة</label><input type='text' class='form-control bg-light' id='text-input' placeholder='ادخل  العمولة'></div></div></div>";
      } 
    },
  },
}
</script>