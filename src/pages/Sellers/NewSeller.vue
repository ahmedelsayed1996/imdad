<style>
#export {
    background-color: aliceblue;
    color: rgb(64, 143, 64);
}

#export:hover {
    background-color: rgb(64, 143, 64);
    color: rgb(255, 255, 255);
}

#search-button:hover {
    background-color: aliceblue;
    color: black;
}
</style>
<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
    
            <h2 class="ml-auto headLine"> البائعين</h2>
            <button type="button" class="btn btn-success mx-1 " id="export"> <i class="bi bi-person"></i>
                استيراد البائعين</button>
            <button type="button" class="btn btn-imdad mx-1"> + اضافة بائع جديد</button>
        </nav>
        <div class="m-2">
            <!-- <button type="button" class="btn btn-imdad mx-2 mr-auto"> حفظ</button>
            <button type="button" class="btn btn-danger mr-auto">إلغاء</button> -->
        </div>
    </header>
    <div class="container-fuild p-2 border shadow m-2 ">
        <div class="container p-0 text-bg-light">
            <div class=" col-12 p-0 text-bg-light">
                <!-- <div class="d-flex justify-content-between align-items-center text-bg-light">
                    <div>
                        <button type="button" class="btn btn-success btn-sm " id="export"> <i class="bi bi-person"></i>
                            استيراد البائعين</button>
                        <button type="button" class="btn btn-imdad btn-sm"> + اضافة بائع جديد</button>
                    </div>
                    <div>
                        <div class="text-start mb-2 pr-4">البائعين</div>
                        <nav aria-label="breadcrumb"  >
                            <ol class="breadcrumb p-0" style="background-color: white;">
                                <li class="breadcrumb-item pr-4 "><a href="#" style="text-decoration: none;">البائعين</a>
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div> -->
            </div>
        </div>
        <form class="form d-flex justify-item-bettwen p-0 w-50 m-auto"  >
            <div class="form-group mx-sm-3 mb-2 flex-grow-1 ">
                <input type="text" class="form-control"
                    placeholder="ابحث عن طريق اسم البائع او رقم الهاتف او بالبريد الالكترونى">
            </div>
            <button type="submit" class="btn btn-imdad mb-2 btn-sm" id="search-button">ابدأ البحث</button>
        </form>
        <div class="mt-3 mb-3 d-flex justify-content-end p-2">
            <button type="button" class="btn btn-success mr-2"> <i class="bi bi-person-fill"></i> تصدير جميع البائعين
            </button>
            <button type="button" class="btn btn-danger disabled mr-2 ">حذف البائعين </button>

        </div>
        <div class="table-responsive col-md-12 text-white text-bg-light">
            <table class="table   text-black"  >
                <thead>
                    <tr>
                        <!-- <th class="align-top"><input class="form-check-input" type="checkbox" value="" id="checkAll"></th> -->
                        <th>#SL</th>
                        <th>الاسم</th>
                        <th>رقم الجوال</th>
                        <th>البريد الالكترونى</th>
                        <th>الماركة</th>
                        <th> الطلبات</th>
                        <th>المنتجات</th>
                        <th>العمليات</th>
                        <th>الحالة</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <!-- <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td> -->
                        <td>1</td>
                        <td>Ali</td>
                        <td>+56515385</td>
                        <td>xxxx@xxxx.xxx</td>
                        <td>بقالة</td>
                        <td>20</td>
                        <td>0</td>
                        <td >بيع</td>
                        <td>
                            <i class="mx-1 bi bi-box-arrow-in-up-right btn btn-success"></i>
                        <router-link to="/sellersdetails">
                            <i class="mx-1 bi bi-pencil-fill btn btn-warning"></i>
                        </router-link>
                            <i class="mx-1 bi bi-trash btn btn-danger"></i>
                        </td>
                    </tr>
                   
                </tbody>
            </table>
        </div>

    </div>
</template>
<script>
export default {
    name: 'NewSellerPage',
    // props: {
    //   msg: String
    // }
}
</script>
  
<!-- <script>
const checkAll = document.getElementById("checkAll");
const checkboxes = document.querySelectorAll("tbody input[type='checkbox']");

checkAll.addEventListener("click", function () {
    checkboxes.forEach((checkbox) => {
        checkbox.checked = this.checked;
    });
});
</script> -->
