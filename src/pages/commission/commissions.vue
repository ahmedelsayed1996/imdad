<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">

      <h2 class="ml-auto headLine text-dark"> العمولات</h2>
    </nav>
    <div class="m-2">
      <router-link to="/commissionseller">
        <button type="button" class="btn btn-imdad mx-2 mr-auto">إنشاء</button>
      </router-link>

      <button type="button" class="btn btn-imdad2 mr-auto">إستيراد</button>
    </div>
  </header>
  <!-- الجزء الأول -->
  <div class=" container-fluid">

    <!-- <div class="row mt-5 text-right">
            <div class="col-md-6">
                <div class="form-group">
                    <label for="text-input " class="fs-3 text-dark"> اسم العمولة</label>
                    <input type="text" class="form-control text-bg-light " id="text-input" placeholder="ادخل اسم العمولة">
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <label for="dropdown-select" class="fs-3 text-dark">نوع العمولة</label>
                    <select class="form-control bg-light text-dark fs-6" id="dropdown-select">
                        <option value="option1" class="text-dark">عامة</option>
                        <option value="option2">حسب البائع</option>
                        <option value="option3">حسب المنتج</option>
                        <option value="option4">حسب الفئة</option>
                    </select>
                </div>
            </div>
            <div class="col-md-6 ">
                <div class="form-group ">
                    <label for="dropdown-select" class="fs-3 text-dark">اسم البائع</label>
                    
                    <div>
                      <select class="form-control bg-light text-dark fs-6" id="dropdown-select" v-model="selectedOption">
                        <option value="">اختر اسمًا</option>
                        <option value="عصام">عصام</option>
                        <option value="أحمد">أحمد</option>
                        <option value="حسين">حسين</option>
                      </select>
                      <button @click="addOption">إضافة </button>
                      <p class="fs-3 text-dark"> اسم البائع: {{ displaySelectedOption }}</p>
                    </div>
            </div>
            </div>
            <div class="col-md-6 ">
              <div class="form-group ">
                  <label for="text-input-3" class="fs-3 text-dark">نسبة العمولة </label>
                  <input type="text" class="form-control bg-light text-dark" id="text-input-3" placeholder="15 %">
              </div>
          </div>
        </div> -->
    <!-- الجزء الثاني -->

    <!-- <div class="row mt-5 text-right">
            <div class="col-md-6">
                <div class="form-group">
                    <label for="text-input-3" class="fs-3 text-dark">نسبة عمولة الشريك</label>
                    <input type="text" class="form-control bg-light" id="text-input-3" placeholder="15 %">
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <label for="text-input-2" class="fs-3 text-dark">نسبة عمولة غير الشريك</label>
                    <input type="text" class="form-control bg-light" id="text-input-2" placeholder="20:00">
                </div>
                
            </div>
        </div> -->
    <!-- <div> -->
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

    <!--    <div class="tab-content">
              <div class="tab-pane fade show active" id="sales">
                <h3 class="headLine my-3">اختر نوع العمولة   :</h3>
                <div class="w-75  d-inline">
                  <select class=" form-select w-50 " id="table-dropdown" v-model="selectedTable">
                    <option value="table1">علي حسب نوع البائع</option>
                    <option selected  value="table2">العامة</option>
                    
                  </select>
               
    
                  <div id="table-container" v-html="tableHTML"></div>
    
                </div>
              </div>
              
            </div>
          </div> -->

    <table class="table table-light">
      <thead>
        <tr>
          <th class="text-dark" scope="col">#</th>
          <th class="text-dark" scope="col">اسم العمولة</th>
          <th class="text-dark" scope="col">نوع العمولة</th>
          <th class="text-dark" scope="col">النسبة المئوية للعمولة العامة</th>
          <th class="text-dark" scope="col">النسبة المئوية لعمولة البائع </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th class="text-dark" scope="row">1</th>
          <td class="text-dark">عمولة أ</td>
          <td class="text-dark">عامة</td>
          <td class="text-dark">10:00</td>
          <td class="text-dark">00:00</td>
        </tr>
        <tr>
          <th class="text-dark" scope="row">2</th>
          <td class="text-dark">عمولة ب</td>
          <td class="text-dark">حسب البائع</td>
          <td class="text-dark">10:00</td>
          <td class="text-dark">20:00</td>
        </tr>
        <tr>
          <th class="text-dark" scope="row">2</th>
          <td class="text-dark">عمولة ب</td>
          <td class="text-dark">حسب البائع</td>
          <td class="text-dark">10:00</td>
          <td class="text-dark">20:00</td>
        </tr>
        <tr>
          <th class="text-dark" scope="row">2</th>
          <td class="text-dark">عمولة ب</td>
          <td class="text-dark">حسب البائع</td>
          <td class="text-dark">10:00</td>
          <td class="text-dark">20:00</td>
        </tr>

      </tbody>
    </table>

  </div>
</template>
<script>
export default {
  name: "CommissionsPage",
  data() {
    return {
      selectedOptions: [],
      options: [
        { label: 'أحمد', value: 'أحمد' },
        { label: 'محمد', value: 'محمد' },
        { label: 'علي', value: 'علي' }
      ]
    }
  },
  computed: {
    displaySelectedOption() {
      if (this.selectedOptions.length === 0) {
        return '';
      } else if (this.selectedOptions.length === 1) {
        return this.selectedOptions[0];
      } else {
        return this.selectedOptions.join(' و ');
      }
    }
  },
  methods: {
    addOption() {
      const optionExists = this.selectedOptions.includes(this.selectedOption);
      if (!optionExists) {
        this.selectedOptions.push(this.selectedOption);
      }
    }
  }
  //   data() {
  //   return {
  //     selectedTable: "",
  //     tableHTML: "",
  //   };
  // },
  // watch: {
  //   selectedTable() {
  //     if (this.selectedTable === "table1") {
  //       this.tableHTML = "<div class='row mt-5 text-right'><div class='col-md-4'><div class='form-group'><label for='dropdown-select' class='fs-3 text-dark'>اختر نوع المنتج </label><select class='form-control bg-light text-dark fs-6' id='dropdown-select'><option value='option1' class='text-dark'>مياه</option><option value='option2'>مشروبات غازيه</option><option value='option3'>الكترونيات</option><option value='option4'>منظفات</option></select></div></div><div class='col-md-4'><div class='form-group'><label for='text-input ' class='fs-3 text-dark'>  العمولة</label><input type='text' class='form-control bg-light' id='text-input' placeholder='ادخل  العمولة'></div></div></div>";
  //     } else if (this.selectedTable === "table2") {
  //       this.tableHTML = "<div class='row mt-5 text-right'><div class='col-md-4'><div class='form-group'><label for='dropdown-select' class='fs-3 text-dark'>اختر نوع البائع </label><select class='form-control bg-light text-dark fs-6' id='dropdown-select'><option value='option1' class='text-dark'>عميل تجزئة</option><option value='option2'> عميل جملة</option><option value='option3'>كبار العملاء</option></select></div></div><div class='col-md-4'><div class='form-group'><label for='text-input ' class='fs-3 text-dark'>  العمولة</label><input type='text' class='form-control bg-light' id='text-input' placeholder='ادخل  العمولة'></div></div></div>";
  //     } 
  //   },
  // },
}
</script>