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
    <div class="container-fuild p-2  ">
        <div class="container p-0 text-bg-light">
            <div class=" col-12 p-0 text-bg-light">
                <div class="d-flex justify-content-between align-items-center text-bg-light">
                    <div>
                        <button type="button" class="btn btn-success btn-sm " id="export"> <i class="bi bi-person"></i>
                            استيراد العملاء</button>
                        <button type="button" class="btn btn-imdad btn-sm"> + اضافة عميل جديد</button>
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
        <form class="form d-flex justify-content-between p-0 w-50 m-auto"  >
            <div class="form-group mx-sm-3 mb-2 flex-grow-1">
                <input type="text" class="form-control"
                    placeholder="ابحث عن طريق اسم العميل او رقم الهاتف او بالبريد الالكترونى">
            </div>
            <button type="submit" class="btn btn-imdad mb-2 btn-sm" id="search-button">ابدأ البحث</button>
        </form>
        <div class="mt-3 mb-3 d-flex justify-content-end p-2">
            <button type="button" class="btn btn-imdad mr-2"> <i class="bi bi-person-fill"></i> تصدير جميع العملاء
            </button>
            <button type="button" class="btn btn-danger disabled mr-2 ">حذف العملاء </button>

        </div>
        <div class="table-responsive col-md-12 text-white text-bg-light">
            <table class="table   text-black"  >
                <thead>
                    <tr>
                        <th class="align-top">#SL</th>
                        <th><mark>صورة العميل</mark></th>
                        <th><mark>الاسم</mark></th>
                        <th>  <mark> نوع النشاط</mark></th>
                        <th>  <mark>>عنوان  </mark></th>
                        <th>  <mark>رقم الجوال</mark></th>
                        <th>  <mark>اجمالي الطلبات</mark></th>
                        <th>  <mark>توثيق الحساب </mark></th>
                        <th>  <mark>محضور / غير محضور </mark></th>
                        
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>1</td>
                        <td><img src="" alt="avatar"/></td>
                        <td>essam </td>
                        <td>البقالات</td>
                        <td>صنعاء</td>
                        <td>+65654623</td>
                        <td>
                            0
                        </td>
                        <td>
                            <div class="form-group ">
                                <label for="switcher1"></label>
                                <div class="form-check form-switch">
                                  <input type="checkbox" id="switcher1" v-model="switcher1" class="form-check-input">
                                  <label class="form-check-label" for="switcher1"></label>
                                </div>
                              </div>
                        </td>
                        <td>
                            <div class="form-group ">
                                <!-- <label for="switcher1">تلقى الإشعارات عن طريق الإيميلات</label> -->
                                <div class="form-check form-switch">
                                  <input type="checkbox" id="switcher1" v-model="switcher1" class="form-check-input">
                                  <label class="form-check-label" for="switcher1"></label>
                                </div>
                              </div>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td><img src="" alt="avatar"/></td>
                        <td>essam </td>
                        <td>البقالات</td>
                        <td>صنعاء</td>
                        <td>+65654623</td>
                        <td>
                            0
                        </td>
                        <td>
                            <div class="form-group ">
                                <label for="switcher1"></label>
                                <div class="form-check form-switch">
                                  <input type="checkbox" id="switcher1" v-model="switcher1" class="form-check-input">
                                  <label class="form-check-label" for="switcher1"></label>
                                </div>
                              </div>
                        </td>
                        <td>
                            <div class="form-group ">
                                <!-- <label for="switcher1">تلقى الإشعارات عن طريق الإيميلات</label> -->
                                <div class="form-check form-switch">
                                  <input type="checkbox" id="switcher1" v-model="switcher1" class="form-check-input">
                                  <label class="form-check-label" for="switcher1"></label>
                                </div>
                              </div>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td><img src="" alt="avatar"/></td>
                        <td>essam </td>
                        <td>البقالات</td>
                        <td>صنعاء</td>
                        <td>+65654623</td>
                        <td>
                            0
                        </td>
                        <td>
                            <div class="form-group ">
                                <label for="switcher1"></label>
                                <div class="form-check form-switch">
                                  <input type="checkbox" id="switcher1" v-model="switcher1" class="form-check-input">
                                  <label class="form-check-label" for="switcher1"></label>
                                </div>
                              </div>
                        </td>
                        <td>
                            <div class="form-group ">
                                <!-- <label for="switcher1">تلقى الإشعارات عن طريق الإيميلات</label> -->
                                <div class="form-check form-switch">
                                  <input type="checkbox" id="switcher1" v-model="switcher1" class="form-check-input">
                                  <label class="form-check-label" for="switcher1"></label>
                                </div>
                              </div>
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
