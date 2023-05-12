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
    <div class="container-fuild p-2 content-page ">
        <div class="container p-0 text-bg-light">
            <div class=" col-12 p-0 text-bg-light">
                <div class="d-flex justify-content-between align-items-center text-bg-light">
                    <div>
                        <button type="button" class="btn btn-success btn-sm " id="export"> <i class="bi bi-person"></i>
                            استيراد العملاء</button>
                        <button type="button" class="btn btn-success btn-sm"> + اضافة عميل جديد</button>
                    </div>
                    <div>
                        <div class="text-start mb-2 pr-4">العملاء</div>
                        <nav aria-label="breadcrumb"  >
                            <ol class="breadcrumb p-0" style="background-color: white;">
                                <li class="breadcrumb-item pr-4 "><a href="#" style="text-decoration: none;">العملاء</a>
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
        <form class="form d-flex justify-content-between p-0"  >
            <div class="form-group mx-sm-3 mb-2 flex-grow-1">
                <input type="text" class="form-control"
                    placeholder="ابحث عن طريق اسم العميل او رقم الهاتف او بالبريد الالكترونى">
            </div>
            <button type="submit" class="btn btn-dark mb-2 btn-sm" id="search-button">ابدأ البحث</button>
        </form>
        <div class="mt-3 mb-3 d-flex justify-content-end p-2">
            <button type="button" class="btn btn-success mr-2"> <i class="bi bi-person-fill"></i> تصدير جميع العملاء
            </button>
            <button type="button" class="btn btn-danger disabled mr-2 ">حذف العملاء </button>

        </div>
        <div class="table-responsive col-md-12 text-white text-bg-light">
            <table class="table   text-black"  >
                <thead>
                    <tr>
                        <th class="align-top"><input class="form-check-input" type="checkbox" value="" id="checkAll"></th>
                        <th>الاسم</th>
                        <th>رقم الجوال</th>
                        <th>البريد الالكترونى</th>
                        <th>المدينة</th>
                        <th>عدد الطلبات</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                        <td>Ali</td>
                        <td></td>
                        <td></td>
                        <td>صنعاء</td>
                        <td></td>
                        <td>
                            <i class="bi bi-pencil-fill btn btn-warning"></i>
                            <i class="bi bi-trash btn btn-danger"></i>
                        </td>
                    </tr>
                    <tr>
                        <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                        <td>Ahmed</td>
                        <td></td>
                        <td></td>
                        <td>صنعاء</td>
                        <td></td>
                        <td>
                            <i class="bi bi-pencil-fill btn btn-warning"></i>
                            <i class="bi bi-trash btn btn-danger"></i>
                        </td>
                    </tr>
                    <tr>
                        <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                        <td>نورة</td>
                        <td></td>
                        <td></td>
                        <td>صنعاء</td>
                        <td></td>
                        <td>
                            <i class="bi bi-pencil-fill btn btn-warning"></i>
                            <i class="bi bi-trash btn btn-danger"></i>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
</template>
<script>
export default {
    name: 'CustomerPage',
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
