<template>
  <div id="app" class="bg-gray">
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">الاعدادات</a>
      </nav>
    </header>

    <div class="container mt-5">
      <div class="row">
        <div class="col-md-5 col-sm-12">
          <div class="card bg-light mb-3 rounded-3 p-3">
            <h4 class="d-flex">اسم المنشاة</h4>
            <p class="d-flex">امداد</p>
          </div>
          <div class="card bg-light mb-3 rounded-3 p-3">
            <ul class="list-group">
              <li v-for="(item, index) in menuItems" :key="index" class="list-group-item d-flex align-items-center"
                :class="{ active: selectedIndex === index }" @click="selectItem(index)">
                <i class="bi" :class="item.icon"></i>
                {{ item.label }}
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-7 col-sm-12">
          <div class="card bg-light mb-3 rounded-3 p-3">
            <div>
              <h2 class="h2 d-flex p-2 mb-3">{{ menuItems[selectedIndex].label }}</h2>
            </div>
            <div v-if="menuItems[selectedIndex].label === 'التنبيهات'">
              <div class="form-group d-flex">
                <label for="switcher1">تلقى الإشعارات عن طريق الإيميلات</label>
                <div class="form-check form-switch">
                  <input type="checkbox" id="switcher1" v-model="switcher1" class="form-check-input">
                  <label class="form-check-label" for="switcher1"></label>
                </div>
              </div>
              <div class="form-group d-flex">
                <label for="switcher2">تلقى الإشعارات عن طريق رسائل الجوال</label>
                <div class="form-check form-switch">
                  <input type="checkbox" id="switcher2" v-model="switcher2" class="form-check-input">
                  <label class="form-check-label" for="switcher2"></label>
                </div>
              </div>
            </div>
            <div v-else-if="menuItems[selectedIndex].label === 'التفاصيل المالية'">
              <!-- Content for 'التفاصيل المالية' menu item -->
              <div class="form-group d-flex">
                <label for="switcher2"> هل تريد منح الموصلين عمولة</label>
                <div class="form-check text-start">
                  <button type="button" class="btn btn-success mx-2" data-bs-toggle="modal"
                    data-bs-target="#exampleModal">
                    <i class="bi bi-check-circle-fill  px-5 "></i>
                  </button>
                  <button type="button" class="btn btn-danger mx-2">
                    <i class="bi bi-trash   px-5"></i>
                  </button>
                </div>
              </div>
              <!-- <div class="form-group d-flex">
                <label for="switcher1">هل تريد بيع المنتجات بالاجل</label>
                <div class="form-check text-start">
                  <button type="button" class="btn btn-success mx-2" data-bs-toggle="modal"
                    data-bs-target="#exampleModal2">
                    <i class="bi bi-check-circle-fill  px-5 "></i>
                  </button>
                  <button type="button" class="btn btn-danger mx-2">
                    <i class="bi bi-trash   px-5"></i>
                  </button>
                </div>
              </div> -->
              <div class="form-group d-flex">
                <label for="switcher2"> هل تريد اضافه عمولات للعملاء عن شراء كميات</label>
                <div class="form-check text-start">
                  <button type="button" class="btn btn-success mx-2" data-bs-toggle="modal"
                    data-bs-target="#exampleModal3">
                    <i class="bi bi-check-circle-fill  px-5 "></i>
                  </button>
                  <button type="button" class="btn btn-danger mx-2">
                    <i class="bi bi-trash   px-5"></i>
                  </button>
                </div>
                <!-- button -->

                <!-- model -->
                <div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                  aria-hidden="true">
                  <div class="modal-dialog ">
                    <div class="modal-content text-bg-light">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">العمولة علي التوصيل </h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <form class="row g-3 text-right">
                          <div class="col-12">
                            <label for="inputEmail4" class="form-label">الحد الادني للتوصيل</label>
                            <input type="text" class="form-control bg-light " id="inputEmail4" placeholder="عدد الكراتين">
                          </div>
                          <div class="col-12">
                            <label for="inputPassword4" class="form-label">نسبة العمولة</label>
                            <input type="text" class="form-control bg-light" id="inputPassword4"
                              placeholder="نسبه العمولة">
                          </div>
                          <div class="col-12">
                            <label for="inputAddress" class="form-label">تاريخ البدأ</label>
                            <input type="date" class="form-control bg-light" id="inputAddress">
                          </div>
                          <div class="col-12">
                            <label for="inputAddress2" class="form-label">تاريخ الانتهاء</label>
                            <input type="date" class="form-control  bg-light" id="inputAddress2">
                          </div>
                          <!--   <div class="col-md-6">
                            <label for="inputCity" class="form-label">City</label>
                            <input type="text" class="form-control" id="inputCity">
                          </div> -->
                          <!-- <div class="col-md-4">
                            <label for="inputState" class="form-label">State</label>
                            <select id="inputState" class="form-select">
                              <option selected>Choose...</option>
                              <option>...</option>
                            </select>
                          </div> -->
                          <!-- <div class="col-md-2">
                            <label for="inputZip" class="form-label">Zip</label>
                            <input type="text" class="form-control" id="inputZip">
                          </div>
                          <div class="col-12">
                            <div class="form-check">
                              <input class="form-check-input" type="checkbox" id="gridCheck">
                              <label class="form-check-label" for="gridCheck">
                                Check me out
                              </label>
                            </div>
                          </div> -->
                          <!-- <div class="col-12">
                            <button type="submit" class="btn btn-primary">Sign in</button>
                          </div> -->
                        </form>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">إلغاء</button>
                        <button type="button" class="btn btn-primary">حفظ </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="modal fade " id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel"
                  aria-hidden="true">
                  <div class="modal-dialog ">
                    <div class="modal-content text-bg-light">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">العمولة للعملاء </h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <form class="row g-3 text-right">
                          <div class="col-12">
                            <label for="inputEmail4" class="form-label">الحد الادني للعموله</label>
                            <input type="text" class="form-control bg-light " id="inputEmail4" placeholder="عدد الطلبات">
                          </div>
                          <div class="col-12">
                            <label for="inputPassword4" class="form-label">نسبة العمولة</label>
                            <input type="text" class="form-control bg-light" id="inputPassword4"
                              placeholder="نسبه العمولة">
                          </div>
                          <div class="col-12">
                            <label for="inputAddress" class="form-label">تاريخ البدأ</label>
                            <input type="date" class="form-control bg-light" id="inputAddress">
                          </div>
                          <div class="col-12">
                            <label for="inputAddress2" class="form-label">تاريخ الانتهاء</label>
                            <input type="date" class="form-control  bg-light" id="inputAddress2">
                          </div>
                          <!--   <div class="col-md-6">
                            <label for="inputCity" class="form-label">City</label>
                            <input type="text" class="form-control" id="inputCity">
                          </div> -->
                          <!-- <div class="col-md-4">
                            <label for="inputState" class="form-label">State</label>
                            <select id="inputState" class="form-select">
                              <option selected>Choose...</option>
                              <option>...</option>
                            </select>
                          </div> -->
                          <!-- <div class="col-md-2">
                            <label for="inputZip" class="form-label">Zip</label>
                            <input type="text" class="form-control" id="inputZip">
                          </div>
                          <div class="col-12">
                            <div class="form-check">
                              <input class="form-check-input" type="checkbox" id="gridCheck">
                              <label class="form-check-label" for="gridCheck">
                                Check me out
                              </label>
                            </div>
                          </div> -->
                          <!-- <div class="col-12">
                            <button type="submit" class="btn btn-primary">Sign in</button>
                          </div> -->
                        </form>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">إلغاء</button>
                        <button type="button" class="btn btn-primary">حفظ </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel"
                  aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        ...
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">ahmed</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-else-if="menuItems[selectedIndex].label === 'التفاصيل التشغيلية'">
              <!-- Content for 'التفاصيل التشغيلية' menu item -->
              <div class="form-group d-flex">
                <label for="switcher1">هل تريد تفعيل للموصل استقبال الطلبات تلقائي</label>
                <div class="form-check text-start">
                  <button type="button" class="btn btn-success mx-2" data-bs-toggle="modal"
                    data-bs-target="#exampleModal4">
                    <i class="bi bi-check-circle-fill  px-5 "></i>
                  </button>
                  <button type="button" class="btn btn-danger mx-2">
                    <i class="bi bi-trash   px-5"></i>
                  </button>
                </div>
              </div>
              <div class="modal fade " id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog modal-lg">
                  <div class="modal-content text-bg-light">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">اختر الموصل التي تريده ان يستقبل الطلبات تلقائي
                      </h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <table class="table">
                        <thead>
                          <tr>

                            <th scope="col"> <mark>اسم الموصل</mark></th>
                            <th scope="col"><mark>المنطقه</mark></th>
                            <th scope="col"> <mark>عددالطلبات </mark></th>
                            <th scope="col"><mark>المرتجع</mark></th>
                            <th scope="col"><mark>الرصيد</mark></th>
                            <th scope="col"> <mark>تسويه الرصيد</mark></th>
                            <th scope="col"><mark>الحالة</mark></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>

                            <td scope="row">عصام</td>
                            <td>السبعين</td>
                            <td>8</td>
                            <td>3</td>
                            <td>50 ر.ي</td>
                            <td>__</td>
                            <td><button class="btn btn-success mx-2">تفعيل</button><button
                                class="btn btn-danger">إلغاء</button></td>
                          </tr>

                        </tbody>
                      </table>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">إلغاء</button>
                      <button type="button" class="btn btn-primary">حفظ </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group d-flex">
                <label for="switcher2"> هل تريد تفعيل استقبال الطلبات حسب الاقرب</label>
                <div class="form-check text-start">
                  <button type="button" class="btn btn-success mx-2">
                    <i class="bi bi-check-circle-fill  px-5 "></i>
                  </button>
                  <button type="button" class="btn btn-danger mx-2">
                    <i class="bi bi-trash   px-5"></i>
                  </button>
                </div>
              </div>

            </div>
            <div v-else-if="menuItems[selectedIndex].label === 'الموظفين'">
              <!-- Content for 'الموظفين' menu item -->
              <button type="button" class="btn btn-imdad my-2 " data-bs-toggle="modal"
                data-bs-target="#exampleModal4">إضافة موظف </button>
              <div class="modal fade " id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog modal-lg">
                  <div class="modal-content text-bg-light">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">اضف موظف
                      </h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <form class="row g-3 text-right">
                        <div class="col-md-12">
                          <label for="inputEmail4" class="form-label">الاسم</label>
                          <input type="text" class="form-control bg-light" id="inputEmail4">
                        </div>
                        <div class="col-md-12">
                          <label for="inputPassword4" class="form-label">رقم الهاتف</label>
                          <input type="text" class="form-control bg-light" id="inputPassword4">
                        </div>

                        <div class="col-md-12">
                          <label for="inputState" class="form-label">الصلاحيات</label>
                          <select id="inputState" class="form-select">
                            <option selected>اختر احد الصلاحيات</option>
                            <option value="1">Supplier super admin:</option>
                            <option value="2">Supplier admin:</option>
                            <option value="3">Supplier staff:</option>
                          </select>
                        </div>

                        <div class="col-md-12">
                          <label for="inputState" class="form-label">الفروع</label>
                          <select id="inputState" class="form-select">
                            <option selected>اختر الفروع التي تريد الموظف ان يصل إليها </option>
                            <option value="1">الوحده</option>
                            <option value="2">السبعين</option>
                            <option value="3">الكل</option>
                          </select>
                        </div>


                      </form>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">إلغاء</button>
                      <button type="button" class="btn btn-primary">حفظ </button>
                    </div>
                  </div>
                </div>
              </div>
              <table class="table">
                <thead>
                  <tr>

                    <th scope="col"> <mark>الاسم </mark></th>
                    <th scope="col"><mark>رقم الهاتف</mark></th>
                    <th scope="col"> <mark>عددالطلبات </mark></th>
                    <th scope="col"><mark>الوظيفة</mark></th>
                    <th scope="col"><mark>الصلاحيات</mark></th>
                    <th scope="col"><mark>الفروع</mark></th>
                    <th scope="col" colspan="2"><mark>تعديل</mark></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>

                    <td scope="row">عصام</td>
                    <td>+51651682</td>
                    <td>8</td>
                    <td>صاحب متجر</td>
                    <td><select class="form-select" aria-label="Default select example">
                        <option selected>اختر احد الصلاحيات</option>
                        <option value="1">Supplier super admin:</option>
                        <option value="2">Supplier admin:</option>
                        <option value="3">Supplier staff:</option>
                      </select></td>
                    <td><select class="form-select" aria-label="Default select example">
                        <option selected>اختر الفروع التي تريد الموظف ان يصل إليها </option>
                        <option value="1">الوحده</option>
                        <option value="2">السبعين</option>
                        <option value="3">الكل</option>
                      </select></td>
                    <td><button type="button" class="btn btn-warning my-2 " data-bs-toggle="modal"
                        data-bs-target="#exampleModal5"> <i class="bi bi-pencil-fill "></i> </button> </td>
                    <td>
                      <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal6">
                        <i class="bi bi-trash-fill "></i>
                      </button>
                    </td>

                  </tr>

                </tbody>
              </table>
              <div class="modal fade" id="exampleModal6" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content text-bg-light">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">تاكيد حذف الموظف</h1>
                      <!-- <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> -->
                    </div>
                    <div class="modal-body">
                      <h4>
                        سيتم حذف عصام وسجلة إلي الابد
                      </h4>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-danger" data-bs-dismiss="modal">إلغاء</button>
                      <button type="button" class="btn btn-primary" data-bs-dismiss="modal">نعم</button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="modal fade " id="exampleModal5" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog modal-lg">
                  <div class="modal-content text-bg-light">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">تعديل بيانات الموظف موظف
                      </h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <form class="row g-3 text-right">
                        <div class="col-md-12">
                          <label for="inputEmail4" class="form-label">الاسم</label>
                          <input type="text" class="form-control bg-light" id="inputEmail4" value="عصام">
                        </div>
                        <div class="col-md-12">
                          <label for="inputPassword4" class="form-label">رقم الهاتف</label>
                          <input type="text" class="form-control bg-light" id="inputPassword4" value="+5465465">
                        </div>

                        <div class="col-md-12">
                          <label for="inputState" class="form-label">الصلاحيات</label>
                          <select id="inputState" class="form-select">
                            <option>اختر احد الصلاحيات</option>
                            <option value="1" selected>Supplier super admin:</option>
                            <option value="2">Supplier admin:</option>
                            <option value="3">Supplier staff:</option>
                          </select>
                        </div>

                        <div class="col-md-12">
                          <label for="inputState" class="form-label">الفروع</label>
                          <select id="inputState" class="form-select">
                            <option>اختر الفروع التي تريد الموظف ان يصل إليها </option>
                            <option value="1" selected>الوحده</option>
                            <option value="2">السبعين</option>
                            <option value="3">الكل</option>
                          </select>
                        </div>


                      </form>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">إلغاء</button>
                      <button type="button" class="btn btn-primary">حفظ </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-else-if="menuItems[selectedIndex].label === 'مواعيد عمل الفروع'">
              <div class="table-responsive">
                <!-- Content for 'مواعيد عمل الفروع' menu item -->
                <div class="row">
                  <h3 class="col-6">اختر الفرع </h3>
                  <div class="col-6"><select class="form-select" aria-label="Default select example">
                      <option selected>امداد- صنعاء</option>
                      <option value="1">امداد - الوحدة</option>
                      <option value="2">امداد - السبعين</option>
                      <option value="3">امداد - الحيدة</option>
                    </select></div>
                </div>
                <div class="form-group d-flex">
                  <div class="d-flex pt-4">
                    <label for="switcher1">السبت</label>
                    <div class="form-check form-switch">
                      <input type="checkbox" id="switcher1" v-model="switcher1" class="form-check-input">
                      <label class="form-check-label" for="switcher1"></label>
                    </div>
                  </div>
                  <div class="container d-flex">
                    <div class="number-input mx-2">
                      <label for="number1">من </label>
                      <div class="container">
                        <i class="bi bi-chevron-up fs-3 text-primary" @click="startTimeHours++"></i>
                        <div></div>
                        <input type="number" v-model="startTimeHours">
                        <i class="bi bi-chevron-down fs-3 text-primary" @click="startTimeHours--"></i>
                        <div></div>
                      </div>:<div class="container">
                        <i class="bi bi-chevron-up fs-3 text-primary" @click="startTimeMinutes++"></i>
                        <div></div>
                        <input type="number" v-model="startTimeMinutes">
                        <i class="bi bi-chevron-down fs-3 text-primary" @click="startTimeMinutes--"></i>
                        <div></div>
                      </div>
                    </div>
                    <div class="number-input mx-2">
                      <label for="number2">إلي </label>
                      <div class="container">
                        <i class="bi bi-chevron-up fs-3 text-primary" @click="endTimeHours++"></i>
                        <div></div>
                        <input type="number" v-model="endTimeHours">
                        <i class="bi bi-chevron-down fs-3 text-primary" @click="endTimeHours--"></i>
                        <div></div>
                      </div>:<div class="container">
                        <i class="bi bi-chevron-up fs-3 text-primary" @click="endTimeMinutes++"></i>
                        <div></div>
                        <input type="number" v-model="endTimeMinutes">
                        <i class="bi bi-chevron-down fs-3 text-primary" @click="endTimeMinutes--"></i>
                        <div></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form-group d-flex">
                  <div class="d-flex pt-4">
                    <label for="switcher1">الاحد</label>
                    <div class="form-check form-switch">
                      <input type="checkbox" id="switcher1" v-model="switcher2" class="form-check-input">
                      <label class="form-check-label" for="switcher1"></label>
                    </div>
                  </div>
                  <div class="container d-flex">
                    <div class="number-input mx-2">
                      <label for="number1">من </label>
                      <div class="container">
                        <i class="bi bi-chevron-up fs-3 text-primary" @click="startTimeHours2++"></i>
                        <div></div>
                        <input type="number" v-model="startTimeHours2">
                        <i class="bi bi-chevron-down fs-3 text-primary" @click="startTimeHours2--"></i>
                        <div></div>
                      </div>:<div class="container">
                        <i class="bi bi-chevron-up fs-3 text-primary" @click="startTimeMinutes2++"></i>
                        <div></div>
                        <input type="number" v-model="startTimeMinutes2">
                        <i class="bi bi-chevron-down fs-3 text-primary" @click="startTimeMinutes2--"></i>
                        <div></div>
                      </div>
                    </div>
                    <div class="number-input mx-2">
                      <label for="number2">إلي </label>
                      <div class="container">
                        <i class="bi bi-chevron-up fs-3 text-primary" @click="endTimeHours2++"></i>
                        <div></div>
                        <input type="number" v-model="endTimeHours2">
                        <i class="bi bi-chevron-down fs-3 text-primary" @click="endTimeHours2--"></i>
                        <div></div>
                      </div>:<div class="container">
                        <i class="bi bi-chevron-up fs-3 text-primary" @click="endTimeMinutes2++"></i>
                        <div></div>
                        <input type="number" v-model="endTimeMinutes2">
                        <i class="bi bi-chevron-down fs-3 text-primary" @click="endTimeMinutes2--"></i>
                        <div></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form-group d-flex">
                  <div class="d-flex pt-4">
                    <label for="switcher1">الاثنين</label>
                    <div class="form-check form-switch">
                      <input type="checkbox" id="switcher1" v-model="switcher3" class="form-check-input">
                      <label class="form-check-label" for="switcher1"></label>
                    </div>
                  </div>
                  <div class="container d-flex">
                    <div class="number-input mx-2">
                      <label for="number1">من </label>
                      <div class="container">
                        <i class="bi bi-chevron-up fs-3 text-primary" @click="startTimeHours3++"></i>
                        <div></div>
                        <input type="number" v-model="startTimeHours3">
                        <i class="bi bi-chevron-down fs-3 text-primary" @click="startTimeHours3--"></i>
                        <div></div>
                      </div>:<div class="container">
                        <i class="bi bi-chevron-up fs-3 text-primary" @click="startTimeMinutes3++"></i>
                        <div></div>
                        <input type="number" v-model="startTimeMinutes3">
                        <i class="bi bi-chevron-down fs-3 text-primary" @click="startTimeMinutes3--"></i>
                        <div></div>
                      </div>
                    </div>
                    <div class="number-input mx-2">
                      <label for="number2">إلي </label>
                      <div class="container">
                        <i class="bi bi-chevron-up fs-3 text-primary" @click="endTimeHours3++"></i>
                        <div></div>
                        <input type="number" v-model="endTimeHours3">
                        <i class="bi bi-chevron-down fs-3 text-primary" @click="endTimeHours3--"></i>
                        <div></div>
                      </div>:<div class="container">
                        <i class="bi bi-chevron-up fs-3 text-primary" @click="endTimeMinutes3++"></i>
                        <div></div>
                        <input type="number" v-model="endTimeMinutes3">
                        <i class="bi bi-chevron-down fs-3 text-primary" @click="endTimeMinutes3--"></i>
                        <div></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form-group d-flex">
                  <div class="d-flex pt-4">
                    <label for="switcher1">الثلاثاء</label>
                    <div class="form-check form-switch">
                      <input type="checkbox" id="switcher1" v-model="switcher4" class="form-check-input">
                      <label class="form-check-label" for="switcher1"></label>
                    </div>
                  </div>
                  <div class="container d-flex">
                    <div class="number-input mx-2">
                      <label for="number1">من </label>
                      <div class="container">
                        <i class="bi bi-chevron-up fs-3 text-primary" @click="startTimeHours4++"></i>
                        <div></div>
                        <input type="number" v-model="startTimeHours4">
                        <i class="bi bi-chevron-down fs-3 text-primary" @click="startTimeHours4--"></i>
                        <div></div>
                      </div>:<div class="container">
                        <i class="bi bi-chevron-up fs-3 text-primary" @click="startTimeMinutes4++"></i>
                        <div></div>
                        <input type="number" v-model="startTimeMinutes4">
                        <i class="bi bi-chevron-down fs-3 text-primary" @click="startTimeMinutes4--"></i>
                        <div></div>
                      </div>
                    </div>
                    <div class="number-input mx-2">
                      <label for="number2">إلي </label>
                      <div class="container">
                        <i class="bi bi-chevron-up fs-3 text-primary" @click="endTimeHours4++"></i>
                        <div></div>
                        <input type="number" v-model="endTimeHours4">
                        <i class="bi bi-chevron-down fs-3 text-primary" @click="endTimeHours4--"></i>
                        <div></div>
                      </div>:<div class="container">
                        <i class="bi bi-chevron-up fs-3 text-primary" @click="endTimeMinutes4++"></i>
                        <div></div>
                        <input type="number" v-model="endTimeMinutes4">
                        <i class="bi bi-chevron-down fs-3 text-primary" @click="endTimeMinutes4--"></i>
                        <div></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form-group d-flex">
                  <div class="d-flex pt-4">
                    <label for="switcher1">الاربعاء</label>
                    <div class="form-check form-switch">
                      <input type="checkbox" id="switcher1" v-model="switcher5" class="form-check-input">
                      <label class="form-check-label" for="switcher1"></label>
                    </div>
                  </div>
                  <div class="container d-flex">
                    <div class="number-input mx-2">
                      <label for="number1">من </label>
                      <div class="container">
                        <i class="bi bi-chevron-up fs-3 text-primary" @click="startTimeHours5++"></i>
                        <div></div>
                        <input type="number" v-model="startTimeHours5">
                        <i class="bi bi-chevron-down fs-3 text-primary" @click="startTimeHours5--"></i>
                        <div></div>
                      </div>:<div class="container">
                        <i class="bi bi-chevron-up fs-3 text-primary" @click="startTimeMinutes5++"></i>
                        <div></div>
                        <input type="number" v-model="startTimeMinutes5">
                        <i class="bi bi-chevron-down fs-3 text-primary" @click="startTimeMinutes5--"></i>
                        <div></div>
                      </div>
                    </div>
                    <div class="number-input mx-2">
                      <label for="number2">إلي </label>
                      <div class="container">
                        <i class="bi bi-chevron-up fs-3 text-primary" @click="endTimeHours5++"></i>
                        <div></div>
                        <input type="number" v-model="endTimeHours5">
                        <i class="bi bi-chevron-down fs-3 text-primary" @click="endTimeHours5--"></i>
                        <div></div>
                      </div>:<div class="container">
                        <i class="bi bi-chevron-up fs-3 text-primary" @click="endTimeMinutes5++"></i>
                        <div></div>
                        <input type="number" v-model="endTimeMinutes5">
                        <i class="bi bi-chevron-down fs-3 text-primary" @click="endTimeMinutes5--"></i>
                        <div></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form-group d-flex">
                  <div class="d-flex pt-4">
                    <label for="switcher1">الخميس</label>
                    <div class="form-check form-switch">
                      <input type="checkbox" id="switcher1" v-model="switcher6" class="form-check-input">
                      <label class="form-check-label" for="switcher1"></label>
                    </div>
                  </div>
                  <div class="container d-flex">
                    <div class="number-input mx-2">
                      <label for="number1">من </label>
                      <div class="container">
                        <i class="bi bi-chevron-up fs-3 text-primary" @click="startTimeHours6++"></i>
                        <div></div>
                        <input type="number" v-model="startTimeHours6">
                        <i class="bi bi-chevron-down fs-3 text-primary" @click="startTimeHours6--"></i>
                        <div></div>
                      </div>:<div class="container">
                        <i class="bi bi-chevron-up fs-3 text-primary" @click="startTimeMinutes6++"></i>
                        <div></div>
                        <input type="number" v-model="startTimeMinutes6">
                        <i class="bi bi-chevron-down fs-3 text-primary" @click="startTimeMinutes6--"></i>
                        <div></div>
                      </div>
                    </div>
                    <div class="number-input mx-2">
                      <label for="number2">إلي </label>
                      <div class="container">
                        <i class="bi bi-chevron-up fs-3 text-primary" @click="endTimeHours6++"></i>
                        <div></div>
                        <input type="number" v-model="endTimeHours6">
                        <i class="bi bi-chevron-down fs-3 text-primary" @click="endTimeHours6--"></i>
                        <div></div>
                      </div>:<div class="container">
                        <i class="bi bi-chevron-up fs-3 text-primary" @click="endTimeMinutes6++"></i>
                        <div></div>
                        <input type="number" v-model="endTimeMinutes6">
                        <i class="bi bi-chevron-down fs-3 text-primary" @click="endTimeMinutes6--"></i>
                        <div></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form-group d-flex">
                  <div class="d-flex pt-4">
                    <label for="switcher1">الجمعة</label>
                    <div class="form-check form-switch">
                      <input type="checkbox" id="switcher1" v-model="switcher7" class="form-check-input">
                      <label class="form-check-label" for="switcher1"></label>
                    </div>
                  </div>
                  <div class="container d-flex">
                    <div class="number-input mx-2">
                      <label for="number1">من </label>
                      <div class="container">
                        <i class="bi bi-chevron-up fs-3 text-primary" @click="startTimeHours7++"></i>
                        <div></div>
                        <input type="number" v-model="startTimeHours7">
                        <i class="bi bi-chevron-down fs-3 text-primary" @click="startTimeHours7--"></i>
                        <div></div>
                      </div>:<div class="container">
                        <i class="bi bi-chevron-up fs-3 text-primary" @click="startTimeMinutes7++"></i>
                        <div></div>
                        <input type="number" v-model="startTimeMinutes7">
                        <i class="bi bi-chevron-down fs-3 text-primary" @click="startTimeMinutes7--"></i>
                        <div></div>
                      </div>
                    </div>
                    <div class="number-input mx-2">
                      <label for="number2">إلي </label>
                      <div class="container">
                        <i class="bi bi-chevron-up fs-3 text-primary" @click="endTimeHours7++"></i>
                        <div></div>
                        <input type="number" v-model="endTimeHours7">
                        <i class="bi bi-chevron-down fs-3 text-primary" @click="endTimeHours7--"></i>
                        <div></div>
                      </div>:<div class="container">
                        <i class="bi bi-chevron-up fs-3 text-primary" @click="endTimeMinutes7++"></i>
                        <div></div>
                        <input type="number" v-model="endTimeMinutes7">
                        <i class="bi bi-chevron-down fs-3 text-primary" @click="endTimeMinutes7--"></i>
                        <div></div>
                      </div>
                    </div>
                  </div>
                </div>
                <button type="button" class="btn btn-imdad my-2 " data-bs-toggle="modal" data-bs-target="#exampleModal7">
                  حفظ التغيرات </button>
                <div class="modal fade" id="exampleModal7" tabindex="-1" aria-labelledby="exampleModalLabel"
                  aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content text-bg-light">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">تاكيد </h1>
                        <!-- <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> -->
                      </div>
                      <div class="modal-body">
                        <h4>
                          هل انت متأكد من تغير وقت التشغيل
                        </h4>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">إلغاء</button>
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">تأكيد</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-else-if="menuItems[selectedIndex].label === 'اتفاقية الاستخدام' || menuItems[selectedIndex].label === 'سياسة الخصوصية'">
              <!-- Content for 'اتفاقية الاستخدام' and 'سياسة الخصوصية' menu items -->
              <p>محتوى قائمة اتفاقية الاستخدام وسياسة الخصوصية</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'SettingsPage',
  
  data() {
    return {
      menuItems: [
        { label: 'التنبيهات', icon: 'bi-bell' },
        { label: 'التفاصيل المالية', icon: 'bi-currency-dollar' },
        { label: 'التفاصيل التشغيلية', icon: 'bi-gear' },
        { label: 'الموظفين', icon: 'bi-people' },
        { label: 'مواعيد عمل الفروع', icon: 'bi-clock' },
        { label: 'اتفاقية الاستخدام', icon: 'bi-file-earmark-text' },
        { label: 'سياسة الخصوصية', icon: 'bi-lock' },
      ],
      selectedIndex: 0,
      switcher1: false,
      switcher2: false,
      switcher3: false,
      switcher4: false,
      switcher5: false,
      switcher6: false,
      switcher7: false,
      startTimeHours: 0,
      startTimeMinutes: 0,
      endTimeHours: 0,
      endTimeMinutes: 0,
      startTimeHours2: 0,
      startTimeMinutes2: 0,
      endTimeHours2: 0,
      endTimeMinutes2: 0,
      startTimeHours3: 0,
      startTimeMinutes3: 0,
      endTimeHours3: 0,
      endTimeMinutes3: 0,
      startTimeHours4: 0,
      startTimeMinutes4: 0,
      endTimeHours4: 0,
      endTimeMinutes4: 0,
      startTimeHours5: 0,
      startTimeMinutes5: 0,
      endTimeHours5: 0,
      endTimeMinutes5: 0,
      startTimeHours6: 0,
      startTimeMinutes6: 0,
      endTimeHours6: 0,
      endTimeMinutes6: 0,
      startTimeHours7: 0,
      startTimeMinutes7: 0,
      endTimeHours7: 0,
      endTimeMinutes7: 0,
    };
  },
  methods: {
    selectItem(index) {
      this.selectedIndex = index;
    },
  },
};
</script>
  
<style scoped>
.card {
  border: none;
}

.mb-3 {
  margin-bottom: 1rem;
}

.h2 {
  font-size: 1.5rem;
  font-weight: bold;
}

.form-check-input {
  margin-right: 0.5rem;
}

.bg-gray {
  background-color: #f1f1f1;
}

.card {
  background-color: #f8f9fa;
}

.form-check .form-check-input {
  width: 30px;
  height: 20px;
}

.form-check .form-check-label {
  margin-right: 5px;
}

.form-check .form-check-input:checked {
  background-color: #0d6efd;
}

.form-check .form-check-input:checked+.form-check-label {
  color: white;
}

.list-group-item {
  cursor: pointer;
}

.list-group-item:focus,
.list-group-item:hover {
  background-color: #e9ecef;
}

.list-group-item.active {
  background-color: #0d6efd;
  color: white;
}

.list-group-item .bi {
  font-size: 1.2rem;
  margin: 7px;
}

.number-input {
  display: flex;
  align-items: center;
}

.number-input label {
  margin-right: 10px;
}

.number-input input[type="number"] {
  width: 60px;
  text-align: center;
  font-size: 16px;
  padding: 6px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
}

.number-input .container {
  display: flex;
  flex-direction: column;
}

.number-input .container i {
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease;

  margin-right: 20px;

}

/* .number-input .container i:hover {
  background-color: #e0e0e0;
} */



.number-input .container i:hover::before {
  border-color: darkgreen;
}</style>
  