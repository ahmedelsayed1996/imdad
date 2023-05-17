<template>
    <form class="form d-flex justify-content-between p-0 w-50 m-auto"  >
        <div class="form-group mx-sm-3 mb-2 flex-grow-1">
            <input type="text" class="form-control"
                placeholder="ابحث عن المنتج">
        </div>
        <button type="submit" class="btn btn-imdad mb-2 btn-sm" id="search-button">ابدأ البحث</button>
    </form>
    <div class="table-container">
      <table>
        <thead>
            <tr>
            <th><mark> #SL</mark></th>
            <th><mark>اسم التاجر</mark></th>
            <th><mark> اسم المنتج</mark></th>
            <th><mark> نوع المنتج</mark></th>
            <th><mark> الوحده</mark></th>
            <th><mark> السعر</mark></th>
            <th><mark> سعر الشراء</mark></th>
            <th><mark>المخزون </mark></th>
            <th><mark> صوره</mark></th>
            <th><mark> مراجعه  </mark></th>
            <th><mark> حذف</mark></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>آدم</td>
            <td>فيتا بلس</td>
            <td>الاصلي</td>
            <td>غرام</td>
            <td> 190</td>
            <td>200</td>
            <td>220</td>
            <td>40</td>
            <td><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/RegisteredTM.svg/220px-RegisteredTM.svg.png" alt="a" class="rounded-circle w-25"/></td>
            <td>مراجعه</td>
            <td><i class="bi bi-trash btn btn-danger"></i></td>

          </tr>
         
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PendingProductsPage'
  }
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