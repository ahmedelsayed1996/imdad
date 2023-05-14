<template>
    <div class="container-fluid ">
        <div class="row">
            <div class="input-group m-3  col-sm-12 col-xl-3">
                <label class="input-group-text" for="inputGroupSelect01"><i class="mdi mdi-calendar"></i> تاريخ التقرير
                </label>
                <select class="form-select" id="inputGroupSelect01">
                    <option selected>April 22,2023 - May 21,2023</option>
                    <option selected>June 22,2023 - July 21,2023</option>
                    <option selected>Jan 22,2023 - Fab 21,2023</option>
                    <option selected>Oct 22,2023 - Dec 21,2023</option>
                </select>
            </div>
        </div>

        <div class="row">
            <div class=" col-sm-12 col-xl-3">
                <h2 class="headLine mx-3">نوع التقرير :</h2>
            </div><br/>
            
            <div>
                <ul class="nav nav-tabs d-flex " style="justify-content:space-around;">
                  <li class="nav-item ">
                    <a class="nav-link border" data-toggle="tab" href="#home"><i class="mdi mdi-store"></i> المبيعات</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link border" data-toggle="tab" href="#profile"><i class="mdi mdi-wallet-travel"></i> المنتجات</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link border" data-toggle="tab" href="#contact"><i class="mdi mdi-account"></i>
                        العملاء</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link border" data-toggle="tab" href="#contact"><i class="mdi mdi-clock"></i> الزيارات</a>
                  </li>
                  <li class="nav-item ">
                    <a class="nav-link border" data-toggle="tab" href="#contact"><i class="mdi mdi-image-filter-drama"></i> الاكثر طلبا</a>
                  </li>
                </ul>
              
                <div class="tab-content">
                  <div class="tab-pane fade show active" id="home">
                    <h3 class="headLine my-3">اختر التقرير الفرعي :</h3>
                    <div class="w-75  d-inline">
                      <button class="btn btn-success w-25 d-inline ">عرض</button>
                      <select class=" form-select w-75 " id="table-dropdown" v-model="selectedTable">
                        <option value="table1">مبيعات المنتجات</option>
                        <option value="table2"> مبيعات التصنيفات</option>
                        <option value="table3"> مبيعات الماركات</option>
                        <option value="table4"> مبيعات الاكواد</option>
                        <option value="table5"> مبيعات كوبونات التخفيض</option>
                        <option value="table6"> مبيعات المدن</option>
                        <option value="table7"> مبيعات الفروع</option>
                        <option value="table8"> ملخص </option>
                      </select>
                      <div id="table-container" v-html="tableHTML"></div>
                      
                    </div>
                  </div>
                  <div class="tab-pane fade" id="profile">
                    <h3>المنتجات</h3>
                    <p>This is the profile tab content.</p>
                  </div>
                  <div class="tab-pane fade" id="contact">
                    <h3>العملاء</h3>
                    <p>This is the contact tab content.</p>
                  </div>
                  <div class="tab-pane fade" id="contact">
                    <h3>الزيارات</h3>
                    <p>This is the contact tab content.</p>
                  </div>
                  <div class="tab-pane fade" id="contact">
                    <h3>الاكثر طلبا</h3>
                    <p >This is the contact tab content.</p>
                  </div>
                </div>
              </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'GeneralReportsPage',
    data() {
    return {
      selectedTable: "",
      tableHTML: "",
    };
  },
  watch: {
    selectedTable() {
      if (this.selectedTable === "table1") {
        this.tableHTML = "<table class='table table-light' ><thead dir='rtl'><tr><th scope='col'><mark>#</mark></th><th scope='col'>الماركة</th><th scope='col'>النوع</th><th scope='col'>السعر</th><th scope='col'>الكمية المباعة</th><th scope='col'>المبيعات قبل التخفيض</th><th scope='col'>التخفيض</th><th scope='col'>اجمالي كلفه المبيعات</th><th scope='col'>صافي المبيعات</th><th scope='col'>الضرائب</th><th scope='col'>اجمالي المبيعات</th></tr></thead><tbody><tr><th scope='row'>1</th><td>zara</td><td>منتج جاهز</td><td>80 ري</td><td>1</td><td>100 ري</td><td>_</td><td>zara</td><td>80 ري</td> <td>12 ري</td> <td>92 ري</td></tr><td>2</td><td>Uturn</td><td>منتج جاهز</td><td>43 ري</td><td>1</td><td>55 ري</td><td>_</td><td>35 ري</td><td>56 ري</td><td>56 ري</td><td>87 ري</td></tbody></table>";
      } else if (this.selectedTable === "table2") {
        this.tableHTML = "<table>2</table>";
      } else if (this.selectedTable === "table3") {
        this.tableHTML = "<table><tr><td>Table 2 Row 1</td><td>Table 2 Row 1 Column 2</td></tr><tr><td>Table 2 Row 2</td><td>Table 2 Row 2 Column 2</td></tr></table>";
      } else if (this.selectedTable === "table4") {
        this.tableHTML = "<table><tr><td>Table 2 Row 1</td><td>Table 2 Row 1 Column 2</td></tr><tr><td>Table 2 Row 2</td><td>Table 2 Row 2 Column 2</td></tr></table>";
      } else if (this.selectedTable === "table5") {
        this.tableHTML = "<table><tr><td>Table 2 Row 1</td><td>Table 2 Row 1 Column 2</td></tr><tr><td>Table 2 Row 2</td><td>Table 2 Row 2 Column 2</td></tr></table>";
      } else if (this.selectedTable === "table6") {
        this.tableHTML = "<table><tr><td>Table 2 Row 1</td><td>Table 2 Row 1 Column 2</td></tr><tr><td>Table 2 Row 2</td><td>Table 2 Row 2 Column 2</td></tr></table>";
      } else if (this.selectedTable === "table7") {
        this.tableHTML = "<table><tr><td>Table 2 Row 1</td><td>Table 2 Row 1 Column 2</td></tr><tr><td>Table 2 Row 2</td><td>Table 2 Row 2 Column 2</td></tr></table>";
      }
    },
  },
};

</script>


