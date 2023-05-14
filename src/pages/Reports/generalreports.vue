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
                    <select class="form-select form-select-sm w-75 d-inline" aria-label="Default select example">
                      <option selected>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <button class="btn btn-success w-25 d-inline ">عرض</button>
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
                    <p>This is the contact tab content.</p>
                  </div>
                </div>
              </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'GeneralReportsPage',
}
</script>


