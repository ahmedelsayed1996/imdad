<template>
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <!-- <div class="container-fluid"> -->
          <a class="navbar-brand" href="/dashboard">
            لوحه تحكم المنتج
          </a>
          <img src="https://static-00.iconduck.com/assets.00/shopping-cart-icon-512x462-yrde1eu0.png" alt="Logo" width="30" height="30" class="d-inline-block align-text-top me-2">
        <!-- </div> -->
      </nav>
      <!-- <div class="container mt-4"> -->
        <!-- Rest of your page content goes here -->
        <form class="form d-flex justify-content-between p-2 ">
            <div class="form-group mx-sm-3 mb-2 flex-grow-1">
                <input type="text" class="form-control bg-light" placeholder="ابحث عن المنتج" style="border: 1px solid lightgray;">

            </div>
            <button type="submit" class="btn btn-imdad mb-2  mx-2" id="search-button" style="background-color: #9651aa;">ابدأ البحث</button>
            <!-- <button type="button" class="btn btn-primary btn-sm mx-2" >
                تعديل اسعار وتوفير منتجات
            </button> -->
            <button type="button" class="btn btn-imdad2 mb-2  mx-2" data-bs-toggle="modal"
                data-bs-target="#staticBackdrop" >
                إضافة منتج جديد
            </button>
        </form>
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content text-bg-light">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">إضافة منتج جديد</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form class="row g-3 text-right">
                                <div class="col-md-6">
                                    <label for="inputState" class="form-label">العلامات التجارية</label>
                                    <select id="inputState" class="form-select">
                                      <option selected>العلامات التجارية</option>
                                      <option value="1" >البوادي</option>
                                      <option value="2">الملكه</option>
                                      <option value="3">حواء</option>
                                    </select>
                                  </div>
                                <div class="col-md-6">
                                  <label for="inputEmail4" class="form-label">اسم المنتج</label>
                                  <input type="text" class="form-control bg-light" id="inputEmail4" placeholder="ادخل اسم المنتج">
                                </div>
                                <div class="col-md-6">
                                  <label for="inputPassword4" class="form-label"> نوع المنتج</label>
                                  <input type="text" class="form-control bg-light" id="inputPassword4" placeholder="ادخل نوع المنتج ">
                                </div>
                                <div class="col-md-6">
                                    <label for="inputState" class="form-label">القسم</label>
                                    <select id="inputState" class="form-select">
                                      <option value="1" selected>القسم</option>
                                      <option value="2">البقالة</option>
                                      <option value="3">المطاعم</option>
                                    </select>
                                  </div>
        
                                <div class="col-md-6">
                                  <label for="inputState" class="form-label">وحده المنتج</label>
                                  <select id="inputState" class="form-select">
                                    <option value="1" selected >حبه</option>
                                    <option value="2">غرام</option>
                                    <option value="3">كيلو</option>
                                  </select>
                                </div>
                                <div class="col-md-6">
                                    <label for="inputPassword4" class="form-label">  الكميه في كل وحدة</label>
                                    <input type="text" class="form-control bg-light" id="inputPassword4" placeholder="الكميه في كل وحدة">
                                  </div>
                                  <div class="col-md-6">
                                    <label for="inputPassword4" class="form-label">  الكميه في كل كرتونة</label>
                                    <input type="text" class="form-control bg-light" id="inputPassword4" placeholder="الكميه في كل كرتونة">
                                  </div>
                                  <div class="col-md-6">
                                    <label for="inputPassword4" class="form-label">   سعر المنتج  </label>
                                    <input type="text" class="form-control bg-light" id="inputPassword4" placeholder="سعر المنتج">
                                  </div>
        
                                  <div class="col-md-6">
                                    <label for="inputPassword4" class="form-label">  الكميه  المتواجدة بالمستودع </label>
                                    <input type="text" class="form-control bg-light" id="inputPassword4" placeholder="الكميه المتواجدة في المستودع">
                                  </div>
                                  <div class="col-md-12">
                                    <label for="inputPassword4" class="form-label"> ارفع صورة للمنتج</label>
                                    <input type="file" class="form-control bg-light" id="inputPassword4" placeholder="الكميه في كل وحدة">
                                  </div>
        
        
                              </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">إرسال الطلب</button>
                            <!-- <button type="button" class="btn btn-primary">Understood</button> -->
                        </div>
                    </div>
                </div>
            </div>
        <div class="d-flex justify-content-center w-100 mt-3 p-2 ">
          <table class="table">
            
          <thead>
              <tr>
              <!-- <th><mark> #SL</mark></th> -->
              <th><mark> صوره المنتج</mark></th>
              
              <th><mark> اسم المنتج</mark></th>
              <th><mark> حجم المنتج</mark></th>
              <th><mark> اضافة المنتج</mark></th>
              <th><mark> حجم المنتج</mark></th>
              <!-- <th><mark> سعر الشراء</mark></th>
              <th><mark>المخزون </mark></th> -->
              <!-- <th><mark> مراجعه  </mark></th>
              <th><mark> حذف</mark></th> -->
            </tr>
          </thead>
          <tbody>
            <tr>
                <td><img src="https://cdnprod.mafretailproxy.com/sys-master-root/h13/h79/44951084204062/480Wx480H_349917_main.jpg" alt="a" class="rounded-circle " style="width: 50px;"/></td>
                <td>فيتا بلس</td>
              <td>500 * 24 غرام</td>
              <td><button class="btn btn-imdad2">إضافة</button></td>
              <td><button class="btn btn-light">إضافة حجم اخر</button></td>
            </tr>
            <tr>
                <td><img src="https://cdnprod.mafretailproxy.com/sys-master-root/h13/h79/44951084204062/480Wx480H_349917_main.jpg" alt="a" class="rounded-circle " style="width: 50px;"/></td>
                <td>فيتا بلس</td>
              <td>500 * 24 غرام</td>
              <td><button class="btn btn-imdad2">إضافة</button></td>
              <td><button class="btn btn-light">إضافة حجم اخر</button></td>
            </tr>
            <tr>
                <td><img src="https://cdnprod.mafretailproxy.com/sys-master-root/h13/h79/44951084204062/480Wx480H_349917_main.jpg" alt="a" class="rounded-circle " style="width: 50px;"/></td>
                <td>فيتا بلس</td>
              <td>500 * 24 غرام</td>
              <td><button class="btn btn-imdad2">إضافة</button></td>
              <td><button class="btn btn-light">إضافة حجم اخر</button></td>
            </tr>
            <tr>
                <td><img src="https://cdnprod.mafretailproxy.com/sys-master-root/h13/h79/44951084204062/480Wx480H_349917_main.jpg" alt="a" class="rounded-circle " style="width: 50px;"/></td>
                <td>فيتا بلس</td>
              <td>500 * 24 غرام</td>
              <td><button class="btn btn-imdad2">إضافة</button></td>
              <td><button class="btn btn-light">إضافة حجم اخر</button></td>
                        </tr>
            <tr>
                <td><img src="https://cdnprod.mafretailproxy.com/sys-master-root/h13/h79/44951084204062/480Wx480H_349917_main.jpg" alt="a" class="rounded-circle " style="width: 50px;"/></td>
                <td>فيتا بلس</td>
              <td>500 * 24 غرام</td>
              <td><button class="btn btn-imdad2">إضافة</button></td>
              <td><button class="btn btn-light">إضافة حجم اخر</button></td>
              
            </tr>
           
          </tbody>
        
          </table>
        </div>
      <!-- </div> -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductControlPage'
  };
  </script>
  
  <style>
  .table-container {
    background: linear-gradient(to bottom, #f0f2f5, #fff);
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td {
    padding: 10px;
    text-align: center;
  }
  
  th {
    background-color: #f2f2f2;
    font-weight: bold;
  }
  
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  </style>
  