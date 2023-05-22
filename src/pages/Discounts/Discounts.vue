<template>
  <div class="container">
    <div class="d-flex">
      <h2 class="ml-auto">منتجات التخفيضات</h2>
      <div class="mt-2">
        <a href="" class="mr-3 ml-3">تصدير</a>
        <a href="" class="mr-3 ml-3">استيراد</a>
        <button type="button" class="btn btn-success mr-auto">اضافة منتج</button>
      </div>


    </div>



    <!-- <div class="row">
      <div class="col-md-4">
        <div class="card mb-3 bg-light text-right">
          <img src="https://kddi-h.assetsadobe3.com/is/image/content/dam/au-com/mobile/mb_img_58.jpg?scl=1"
            class="card-img-top" alt="ايفون 13">
          <div class="card-body">
            <h5 class="card-title">ايفون 13</h5>
            <p class="card-text">موبايل ابل</p>
            <p class="card-text">خصم 10%</p>
            <button class="btn btn-primary btn-block rounded-pill " @click="addToCart">اضف الى السلة</button>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card mb-3 bg-light text-right">
          <img src="https://kddi-h.assetsadobe3.com/is/image/content/dam/au-com/mobile/mb_img_58.jpg?scl=1"
            class="card-img-top" alt="ايفون 13">
          <div class="card-body">
            <h5 class="card-title">ايفون 13</h5>
            <p class="card-text">موبايل ابل</p>
            <p class="card-text">خصم 10%</p>
            <button class="btn btn-primary btn-block rounded-pill " @click="addToCart">اضف الى السلة</button>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card mb-3 bg-light text-right">
          <img src="https://kddi-h.assetsadobe3.com/is/image/content/dam/au-com/mobile/mb_img_58.jpg?scl=1"
            class="card-img-top" alt="ايفون 13">
          <div class="card-body">
            <h5 class="card-title">ايفون 13</h5>
            <p class="card-text">موبايل ابل</p>
            <p class="card-text">خصم 10%</p>
            <button class="btn btn-primary btn-block rounded-pill " @click="addToCart">اضف الى السلة</button>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card mb-3 bg-light text-right">
          <img src="https://kddi-h.assetsadobe3.com/is/image/content/dam/au-com/mobile/mb_img_58.jpg?scl=1"
            class="card-img-top" alt="ايفون 13">
          <div class="card-body">
            <h5 class="card-title">ايفون 13</h5>
            <p class="card-text">موبايل ابل</p>
            <p class="card-text">خصم 10%</p>
            <button class="btn btn-primary btn-block rounded-pill " @click="addToCart">اضف الى السلة</button>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card mb-3 bg-light text-right">
          <img src="https://kddi-h.assetsadobe3.com/is/image/content/dam/au-com/mobile/mb_img_58.jpg?scl=1"
            class="card-img-top" alt="ايفون 13">
          <div class="card-body">
            <h5 class="card-title">ايفون 13</h5>
            <p class="card-text">موبايل ابل</p>
            <p class="card-text">خصم 10%</p>
            <button class="btn btn-primary btn-block rounded-pill " @click="addToCart">اضف الى السلة</button>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card mb-3 bg-light text-right">
          <img src="https://kddi-h.assetsadobe3.com/is/image/content/dam/au-com/mobile/mb_img_58.jpg?scl=1"
            class="card-img-top" alt="ايفون 13">
          <div class="card-body">
            <h5 class="card-title">ايفون 13</h5>
            <p class="card-text">موبايل ابل</p>
            <p class="card-text">خصم 10%</p>
            <button class="btn btn-primary btn-block rounded-pill " @click="addToCart">اضف الى السلة</button>
          </div>
        </div>
      </div>
    </div> -->
    <div class="card bg-light">
  <div class="card-header">
    <ul class="nav nav-tabs card-header-tabs">
      <li class="nav-item">
        <a class="nav-link active" href="#tab1">الكل</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#tab2">النشط</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#tab3">المسودة</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#tab4">الارشيف</a>
      </li>
    </ul>
  </div>
  <div class="card-body  " >
    <div class="row mb-3  ">
      <div class="col-md-7 mr-2 ml-2">
  <div class="input-group">
    <input type="text" class="form-control bg-light" placeholder="بحث">
    <div class="input-group-prepend ">
      <span class="input-group-text bg-light">
        <i class="bi bi-search text-dark"></i>
      </span>
    </div>
  </div>
</div>

      <div class="col-md-3 d-flex">
        
          <div class="dropdown">
            <button class="btn btn-body dropdown-toggle borderr" type="button" id="dropdown1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              بائع المنتج
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdown1">
              <a class="dropdown-item" href="#">Option 1</a>
              <a class="dropdown-item" href="#">Option 2</a>
              <a class="dropdown-item" href="#">Option 3</a>
            </div>
          </div>
        
        
          <div class="dropdown ml-2 mr-2">
            <button class="btn btn-body dropdown-toggle borderr" type="button" id="dropdown2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              اشارة الى
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdown2">
              <a class="dropdown-item" href="#">Option 1</a>
              <a class="dropdown-item" href="#">Option 2</a>
              <a class="dropdown-item" href="#">Option 3</a>
            </div>
          </div>
        
        <div class="">
          <button type="button" class="btn btn-body borderr" style="width: 100px;">خيارات اخرى</button>
        </div>
        <div class="" >
          <button type="button" class="btn btn-secondary borderr ml-2 mr-2" disabled>حفظ</button>
        </div>
        <div class="">
          <button type="button" class="btn btn-body borderr">ترتيب</button>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="table-responsive">
  <table class="table table-bordered table-secondary text-right">
    <thead class="thead-dark">
      <tr>
        <th><input type="checkbox"></th>
        <th></th>
        <th>اسم المنتج</th>
        <th>الحالة</th>
        <th>المخزون</th>
        <th>النوع</th>
        <th>البائع</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><input type="checkbox"></td>
        <td><img src="https://files.refurbed.com/ii/samsung-galaxy-s20-1581675180.jpg" alt="Product Image" width="50"></td>
        <td>+Samsung s20</td>
        <td class="status-cell"><span class="active-status">Active</span></td>
        <td>10</td>
        <td>Type 1</td>
        <td>Vendor 1</td>
      </tr>
      <tr>
        <td><input type="checkbox"></td>
        <td><img src="https://files.refurbed.com/ii/samsung-galaxy-s20-1581675180.jpg" alt="Product Image" width="50"></td>
        <td>+Samsung s20</td>
        <td class="status-cell"><span class="inactive-status">Inactive</span></td>
        <td>5</td>
        <td>Type 2</td>
        <td>Vendor 2</td>
      </tr>
      <!-- Add more rows for other products -->
    </tbody>
  </table>
</div>




  </div>
  <!-- <template>
  <div>
    <router-link to="/register">Home</router-link>
   
    <router-view></router-view>
  </div>
</template> -->
</template>
  
<script>
export default {
  name: 'DiscountsPage',
  methods: {
    addToCart() {
      // Add logic to add product to cart
    }
  }
};
</script>
  
<style>
  .card-body .row.mb-3 {
    align-items: center;
    gap: 0;
  }

  .card-body .row.mb-3 > * {
    padding: 0;
  }

  .card-body .row.mb-3 .col-md-2:first-child {
    padding-right: 0;
  }

  .card-body .row.mb-3 .col {
    flex: 1;
    padding: 0;
    
  }
  .borderr{
    border: solid 1px;
  }
  .borderr:hover{
    border: solid 1px;
  }
  .status-cell {
  padding: 0;
}

.active-status {
  background-color: lightgreen;
  padding: 3px 5px;
}

.inactive-status {
  background-color: red;
  padding: 3px 5px;
}



</style>