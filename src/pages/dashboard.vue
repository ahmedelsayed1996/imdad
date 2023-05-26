<template>
    <!-- Begin page -->
    <div id="wrapper">
        <!-- Top Bar Start -->
        <div class="topbar">
            <!-- LOGO -->
            <div class="topbar-left">
                <a href="/dashboard" class="logo">
                    <span class="logo-light">
                        <i class="mdi mdi-camera-control"></i>
                         إمداد لسوق الجملة
                    </span>
                    <span>

                    </span>
                    <span class="logo-sm">
                        <i class="mdi mdi-camera-control"></i>
                    </span>
                </a>
            </div>

            <nav class="navbar-custom">
                <ul class="navbar-right list-inline float-right mb-0">
                    <!-- language-->
                    <!-- <li class="dropdown notification-list list-inline-item d-none d-md-inline-block">
                          <a class="nav-link dropdown-toggle arrow-none waves-effect" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                              <img src="assets/images/us_flag.jpg" class="mr-2" height="12" alt="" /> English <span class="mdi mdi-chevron-down"></span>
                          </a>
                          <div class="dropdown-menu dropdown-menu-right dropdown-menu-animated language-switch">
                              <a class="dropdown-item" href="#"><img src="assets/images/french_flag.jpg" alt="" height="16" /><span> French </span></a>
                              <a class="dropdown-item" href="#"><img src="assets/images/spain_flag.jpg" alt="" height="16" /><span> Spanish </span></a>
                              <a class="dropdown-item" href="#"><img src="assets/images/russia_flag.jpg" alt="" height="16" /><span> Russian </span></a>
                              <a class="dropdown-item" href="#"><img src="assets/images/germany_flag.jpg" alt="" height="16" /><span> German </span></a>
                              <a class="dropdown-item" href="#"><img src="assets/images/italy_flag.jpg" alt="" height="16" /><span> Italian </span></a>
                          </div>
                      </li> -->
                    <!-- full screen -->
                    <li class="dropdown notification-list list-inline-item d-none d-md-inline-block">
                        <a class="nav-link waves-effect" href="#" id="btn-fullscreen">
                            <i class="mdi mdi-arrow-expand-all noti-icon"></i>
                        </a>
                    </li>
                    <!-- notification -->
                    <li class="dropdown notification-list list-inline-item">
                        <a class="nav-link dropdown-toggle arrow-none waves-effect" data-toggle="dropdown" href="#"
                            role="button" aria-haspopup="false" aria-expanded="false">
                            <i class="mdi mdi-bell-outline noti-icon"></i>
                            <span class="badge badge-pill badge-danger noti-icon-badge">3</span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right dropdown-menu-animated dropdown-menu-lg px-1">
                            <!-- item-->
                            <h6 class="dropdown-item-text">
                                الاشعارات
                            </h6>
                            <div class="slimscroll notification-item-list">
                                <!-- item-->
                                <a href="javascript:void(0);" class="dropdown-item notify-item active">
                                    <div class="notify-icon bg-success"><i class="mdi mdi-cart-outline"></i></div>
                                    <p class="notify-details"><b>تم طلب اوردر</b><span class="text-muted"> 
                                           من العيسوي للمنتجات</span></p>
                                </a>
                                <!-- item-->
                                <a href="javascript:void(0);" class="dropdown-item notify-item">
                                    <div class="notify-icon bg-danger"><i class="mdi mdi-message-text-outline"></i></div>
                                    <p class="notify-details"><b>رسالة جديده</b><span class="text-muted">لديك 75 رسالة غير مقروءه</span></p>
                                </a>
                                <!-- item-->
                                <a href="javascript:void(0);" class="dropdown-item notify-item">
                                    <div class="notify-icon bg-info"><i class="mdi mdi-filter-outline"></i></div>
                                    <p class="notify-details"><b>تم شحن منتجك</b><span class="text-muted">...............</span></p>
                                </a>
                                <!-- item-->
                                <!-- <a href="javascript:void(0);" class="dropdown-item notify-item">
                                    <div class="notify-icon bg-success"><i class="mdi mdi-message-text-outline"></i></div>
                                    <p class="notify-details"><b>New Message received</b><span class="text-muted">You have
                                            87 unread messages</span></p>
                                </a> -->
                                <!-- item-->
                                <a href="javascript:void(0);" class="dropdown-item notify-item">
                                    <div class="notify-icon bg-warning"><i class="mdi mdi-cart-outline"></i></div>
                                    <p class="notify-details"><b>تم انشاء طلبك</b><span class="text-muted">............</span></p>
                                </a>
                            </div>
                            <!-- All-->
                            <router-link   to="/notification"><a  class="dropdown-item text-center notify-all text-primary">
                                رؤية الكل <i class="fi-arrow-right"></i>
                            </a></router-link>
                            
                        </div>
                    </li>
                    <!-- profile -->
                    <li class="dropdown notification-list list-inline-item">
                        <div class="dropdown notification-list nav-pro-img">
                            <a class="dropdown-toggle nav-link arrow-none nav-user" data-toggle="dropdown" href="#"
                                role="button" aria-haspopup="false" aria-expanded="false">
                                <img src="https://emdadb2b.com/imdad2022/storage/app/public/admin/2022-06-06-629e3f0892308.png"
                                    style="background-color: white;" alt="user" class="rounded-circle">
                            </a>
                            <div class="dropdown-menu dropdown-menu-right profile-dropdown ">
                                <!-- item-->
                                <a class="dropdown-item" href="#"><i class="mdi mdi-account-circle"></i> الصفحة الشخصية</a>
                                <a class="dropdown-item" href="/wallet"><i class="mdi mdi-wallet"></i> المحفظة</a>
                                <a class="dropdown-item d-block" href="/settings"><span
                                        class="badge badge-success float-right">11</span><i class="mdi mdi-settings"></i>
                                    الاعدادات
                                </a>
                                <!-- <a class="dropdown-item" href="#"><i class="mdi mdi-lock-open-outline"></i> Lock screen
                                </a> -->
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item text-danger" href="/"><i class="mdi mdi-power text-danger"></i>
                                    تسجيل الخروج</a>
                            </div>
                        </div>
                    </li>
                </ul>

                <ul class="list-inline menu-left mb-0">
                    <li class="float-left">
                        <button class="button-menu-mobile open-left waves-effect">
                            <i class="mdi mdi-menu"></i>
                        </button>
                    </li>
                    <!-- <li class="d-none d-md-inline-block">
                        <form role="search" class="app-search">
                            <div class="form-group mb-0">
                                <input type="text" class="form-control" placeholder="Search..">
                                <button type="submit"><i class="fa fa-search"></i></button>
                            </div>
                        </form>
                    </li> -->
                </ul>
            </nav>
        </div>
        <!-- Top Bar End -->
        <!-- ========== Left Sidebar Start ========== -->
        <div class="left side-menu">
            <div class="slimscroll-menu " id="remove-scroll">
                <!--- Sidemenu -->
                <div id="sidebar-menu">
                    <!-- Left Menu Start -->
                    <ul class="metismenu" id="side-menu">

                        <li class="menu-title">
                            <span style="font-size: 37px; justify-content: center;
                            display: flex;"> امداد

                            </span>
                        </li>



                        <li>
                            <a href="#" class="waves-effect">
                                <span class="badge badge-success badge-pill float-right">9+
                                </span>
                                <span> لوحة التحكم

                                </span>
                                <i class="icon-accelerator"></i>
                            </a>
                        </li>

                        <li>
                            <a href="calendar.html" class="waves-effect"><span> طلبات الشراء
                                    <i class="icon-calendar"></i></span></a>
                        </li>

                        <li>
                            <a href="javascript:void(0);" class="waves-effect"><span> طلبات الشراء
                                    <i class="icon-mail-open"></i><span class="float-right menu-arrow"><i
                                            class="mdi mdi-chevron-right"></i></span>
                                </span></a>
                            <ul class="submenu">

                                <li><a href="#">إضافة جديد </a></li>
                                <li><a href="#">قائمة</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:void(0);" class="waves-effect"><span> طلبات خاصة
                                    <i class="icon-paper-sheet"></i><span class="float-right menu-arrow"><i
                                            class="mdi mdi-chevron-right"></i></span>
                                </span></a>
                            <ul class="submenu">
                                <li><a href="#">قائمة</a></li>
                                <li><a href="#">إضافة جديد</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="javascript:void(0);" class="waves-effect"><span> الاقسام
                                    <i class="icon-paper-sheet"></i><span class="float-right menu-arrow"><i
                                            class="mdi mdi-chevron-right"></i></span>
                                </span></a>
                            <ul class="submenu">
                                <li><a href="#">قائمة</a></li>
                                <li><a href="#">إضافة جديد</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="javascript:void(0);" class="waves-effect"><span> العلامة التجارية
                                    <i class="icon-paper-sheet"></i><span class="float-right menu-arrow"><i
                                            class="mdi mdi-chevron-right"></i></span>
                                </span></a>
                            <ul class="submenu">
                                <li><a href="#">قائمة</a></li>
                                <li><a href="#">إضافة جديد</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="javascript:void(0);" class="waves-effect"><span>منتجات امداد في المخازن <i
                                        class="icon-pencil-ruler"></i><span class="float-right menu-arrow"><i
                                            class="mdi mdi-chevron-right"> </i></span> </span> </a>
                            <ul class="submenu">
                                <li><a href="#">منتجات</a></li>
                                <li><a href="#">المخزون والاسعار</a></li>
                                <li><a href="#">استيراد من ملف </a></li>
                                <li><a href="#">تصدير من ملف</a></li>
                                <li><a href="#">المواصفات والخصائص</a></li>

                            </ul>
                        </li>



                        <li>
                            <a href="javascript:void(0);" class="waves-effect"> <span> منتجات البائعين
                                    <i class="icon-diamond"></i> <span class="float-right menu-arrow"><i
                                            class="mdi mdi-chevron-right"></i></span>
                                </span> </a>
                            <ul class="submenu">
                                <li><a href="#">انشاء جديد</a></li>
                                <li><a href="#">مكتمل المنتجات</a></li>
                                <li><a href="#">تم حصر المنتجات</a></li>
                                <li><a href="#"> المنتجات معلقة</a></li>

                            </ul>
                        </li>

                        <li>
                            <a href="javascript:void(0);" class="waves-effect"><span> الفروع ونقاط البيع <i
                                        class="icon-pencil-ruler"></i><span class="float-right menu-arrow"><i
                                            class="mdi mdi-chevron-right"> </i></span> </span> </a>
                            <ul class="submenu">
                                <li><a href="#">منتجات</a></li>
                                <li><a href="#">المخزون والاسعار</a></li>
                                <li><a href="#">استيراد من ملف </a></li>
                                <li><a href="#">تصدير من ملف</a></li>
                                <li><a href="#">المواصفات والخصائص</a></li>

                            </ul>
                        </li>

                        <li>
                            <a href="javascript:void(0);" class="waves-effect"><span>
                                    الموصل <i class="icon-todolist-check"></i><span
                                        class="badge badge-pill badge-danger float-right">8</span> </span></a>
                            <ul class="submenu">
                                <li><a href="#">انشاء جديد</a></li>
                                <li><a href="#">عرض</a></li>

                            </ul>
                        </li>

                        <li>
                            <a href="javascript:void(0);" class="waves-effect"><span> المالية <i
                                        class="icon-graph"></i><span class="float-right menu-arrow"><i
                                            class="mdi mdi-chevron-right"></i></span>
                                </span></a>
                            <ul class="submenu">
                                <li><a href="#">Morris Chart</a></li>
                                <li><a href="#">Chartist Chart</a></li>
                                <li><a href="#">Chartjs Chart</a></li>
                                <li><a href="#">Flot Chart</a></li>
                                <li><a href="#">C3 Chart</a></li>
                                <li><a href="#">Jquery Knob Chart</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="javascript:void(0);" class="waves-effect"><span> التقارير
                                    <i class="icon-spread"></i><span class="float-right menu-arrow"><i
                                            class="mdi mdi-chevron-right"></i></span>
                                </span></a>
                            <ul class="submenu">
                                <li><a href="#">Basic Tables</a></li>
                                <li><a href="#">Data Table</a></li>

                            </ul>
                        </li>

                        <li>
                            <a href="javascript:void(0);" class="waves-effect"><span> التسويق
                                    <i class="icon-coffee"></i> <span class="float-right menu-arrow"><i
                                            class="mdi mdi-chevron-right"></i></span></span>
                            </a>
                            <ul class="submenu">
                                <li><a href="#"> البنرات</a></li>
                                <li><a href="#">الشعارات </a></li>
                                <li><a href="#">قسم التخفيضات </a></li>
                                <li><a href="#"> تسويق وعروض في الموقع والتطبيق</a></li>
                                <li><a href="#"> التخفيضات</a></li>
                                <li><a href="#"> التسويق عبر رسائل الواتس</a></li>

                            </ul>
                        </li>

                        <li>
                            <a href="javascript:void(0);" class="waves-effect"><span> البائعين علي المنصة
                                    <i class="icon-coffee"></i> <span class="float-right menu-arrow"><i
                                            class="mdi mdi-chevron-right"></i></span></span>
                            </a>
                            <ul class="submenu">
                                <li><a href="#">Material Design</a></li>
                                <li><a href="#">Font Awesome</a></li>

                            </ul>
                        </li>

                        <li>
                            <a href="javascript:void(0);" class="waves-effect"><span> العملاء <i class="icon-map"></i><span
                                        class="float-right menu-arrow"><i class="mdi mdi-chevron-right"></i></span>
                                </span></a>
                            <!-- <ul class="submenu">
                                <li><a href="#"> Google Map</a></li>
                                <li><a href="#"> Vector Map</a></li>
                            </ul> -->
                        </li>

                        <li>
                            <a href="javascript:void(0);" class="waves-effect"><span> الاعدادات <i
                                        class="icon-pencil"></i><span class="float-right menu-arrow"><i
                                            class="mdi mdi-chevron-right"></i></span>
                                </span></a>
                            <ul class="submenu">
                                <li><a href="#"> السياسة الخصوصية للبائع </a></li>
                                <li><a href="#"> اتفاقيه الموصل</a></li>
                                <li><a href="#"> السياسة الخصوصية للموصل </a></li>
                                <li><a href="#"> اتفاقيه الاستخدام</a></li>
                                <li><a href="#"> سياسه الخصوصيه</a></li>
                                <li><a href="#"> شروط الاستخدام</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:void(0);" class="waves-effect"><span> المراسلات والدعم الفني <i
                                        class="icon-paper-sheet"></i><span class="float-right menu-arrow"><i
                                            class="mdi mdi-chevron-right"></i></span>
                                </span></a>
                            <ul class="submenu">
                                <li><a href="#"> العملاء</a></li>
                                <li><a href="#"> البائعين</a></li>
                                <li><a href="#"> الموصلين</a></li>
                                <li><a href="#"> الفروع</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:void(0);" class="waves-effect"><span> التعديلات <i
                                        class="icon-download"></i><span class="float-right menu-arrow"><i
                                            class="mdi mdi-chevron-right"></i></span>
                                </span></a>
                            <!-- <ul class="submenu">
                                <li><a href="#"> Google Map</a></li>
                                <li><a href="#"> Vector Map</a></li>
                            </ul> -->
                        </li>
                        <li>
                            <a href="javascript:void(0);" class="waves-effect"><span> اعدادات الصفحات <i
                                        class="icon-pencil-ruler"></i><span class="float-right menu-arrow"><i
                                            class="mdi mdi-chevron-right"></i></span>
                                </span></a>
                            <!-- <ul class="submenu">
                                <li><a href="#"> Google Map</a></li>
                                <li><a href="#"> Vector Map</a></li>
                            </ul> -->
                        </li>
                        <li>
                            <a href="javascript:void(0);" class="waves-effect"><span> اعدادات الموقع والتطبيق <i
                                        class="icon-pencil"></i><span class="float-right menu-arrow"><i
                                            class="mdi mdi-chevron-right"></i></span>
                                </span></a>
                            <!-- <ul class="submenu">
                                <li><a href="#"> Google Map</a></li>
                                <li><a href="#"> Vector Map</a></li>
                            </ul> -->
                        </li>
                        <li>
                            <a href="javascript:void(0);" class="waves-effect"><span> اعدادات النشاط التجاري <i
                                        class="icon-cloud-download"></i><span class="float-right menu-arrow"><i
                                            class="mdi mdi-chevron-right"></i></span>
                                </span></a>
                            <!-- <ul class="submenu">
                                <li><a href="#"> Google Map</a></li>
                                <li><a href="#"> Vector Map</a></li>
                            </ul> -->
                        </li>
                        <li>
                            <a href="javascript:void(0);" class="waves-effect"><span> معلومات النشاط التجاري <i
                                        class="icon-folder"></i><span class="float-right menu-arrow"><i
                                            class="mdi mdi-chevron-right"></i></span>
                                </span></a>
                            <!-- <ul class="submenu">
                                <li><a href="#"> Google Map</a></li>
                                <li><a href="#"> Vector Map</a></li>
                            </ul> -->
                        </li>

                    </ul>
                </div>
                <!-- Sidebar -->
                <div class="clearfix"></div>
            </div>
            <!-- Sidebar -left -->
        </div>
        <!-- Left Sidebar End -->
        <!-- ============================================================== -->
        <!-- Start right Content here -->
        <!-- ============================================================== -->
        <div class="content-page">
            <!-- Start content -->
            <div class="content">
                <div class="container-fluid">
                    <div class="page-title-box text-black">
                        <div class="row align-items-center">
                            <div class="col-sm-12">
                                <h4 class="page-title  justify-content-center d-flex"> مرحباً بك عزيزي الادمن في منصة إمداد
                                    سوق الجملة</h4>
                            </div>
                            <!-- <div class="col-sm-6">
                                <ol class="breadcrumb float-right">
                                    <li class="breadcrumb-item"><a href="#">Emdad</a></li>
                                    <li class="breadcrumb-item active">لوحة التحكم</li>
                                </ol>
                            </div> -->
                        </div>
                        <!-- end row -->
                    </div>
                    <h1 class="headLine">لوحة التحكم</h1> <br />
                    <!-- end page-title -->
                    <div class="row">
                        <div class="col-sm-6 col-xl-3">
                            <a href="#">
                                <div class="card card-image  ">
                                    <div class="card-heading p-4">
                                        <!-- <div class="mini-stat-icon float-right">
                                        <i class="mdi mdi-pause bg-primary  text-white"></i>
                                    </div> -->
                                        <div>
                                            <h5 class="font-16" style="text-align: center;"> المبيعات اليوم  </h5>
                                        </div>
                                        <h3 class="mt-4" style="text-align: center;">108</h3>
                                        <!-- <div class="progress mt-4" style="height: 4px;">
                                        <div class="progress-bar bg-primary" role="progressbar" style="width: 75%"
                                            aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div> -->
                                        <!-- <p class="text-muted mt-2 mb-0">النسبة المئوية <span class="float-right">75%</span></p> -->
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div class="col-sm-6 col-xl-3">
                            <router-link to="/customer"><div class="card card-image  ">
                                    <div class="card-heading p-4">
                                        <!-- <div class="mini-stat-icon float-right">
                                        <i class="mdi mdi-pause bg-primary  text-white"></i>
                                    </div> -->
                                        <div>
                                            <h5 class="font-16" style="text-align: center;">العملاء </h5>
                                        </div>
                                        <h3 class="mt-4" style="text-align: center;">95</h3>
                                        <!-- <div class="progress mt-4" style="height: 4px;">
                                        <div class="progress-bar bg-primary" role="progressbar" style="width: 75%"
                                            aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div> -->
                                        <!-- <p class="text-muted mt-2 mb-0">النسبة المئوية <span class="float-right">75%</span></p> -->
                                    </div>
                                </div></router-link>
                                
                           
                        </div>

                        <div class="col-sm-6 col-xl-3">
                            
                                <router-link   to="/branchchat"><div class="card card-image  ">
                                    <div class="card-heading p-4">
                                        <!-- <div class="mini-stat-icon float-right">
                                        <i class="mdi mdi-pause bg-primary  text-white"></i>
                                    </div> -->
                                        <div>
                                            <h5 class="font-16" style="text-align: center;">الدردشه </h5>
                                        </div>
                                        <h3 class="mt-4" style="text-align: center;">850</h3>
                                        <!-- <div class="progress mt-4" style="height: 4px;">
                                        <div class="progress-bar bg-primary" role="progressbar" style="width: 75%"
                                            aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div> -->
                                        <!-- <p class="text-muted mt-2 mb-0">النسبة المئوية <span class="float-right">75%</span></p> -->
                                    </div>
                                </div></router-link>
                                
                           
                        </div>

                        <div class="col-sm-6 col-xl-3">
                            <a href="#">
                                <div class="card card-image  ">
                                    <div class="card-heading p-4">
                                        <!-- <div class="mini-stat-icon float-right">
                                        <i class="mdi mdi-pause bg-primary  text-white"></i>
                                    </div> -->
                                        <div>
                                            <h5 class="font-16" style="text-align: center;"> اجمالي المدفوعات الرقمية </h5>
                                        </div>
                                        <h3 class="mt-4" style="text-align: center;">43</h3>
                                        <!-- <div class="progress mt-4" style="height: 4px;">
                                        <div class="progress-bar bg-primary" role="progressbar" style="width: 75%"
                                            aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div> -->
                                        <!-- <p class="text-muted mt-2 mb-0">النسبة المئوية <span class="float-right">75%</span></p> -->
                                    </div>
                                </div>
                            </a>
                        </div>

                        <!-- <div class="col-sm-6 col-xl-2">
                            <a href="#">
                                <div class="card card-image  ">
                                    <div class="card-heading p-4">
                                        
                                        <div>
                                            <h5 class="font-16">الزيارات </h5>
                                        </div>
                                        <h3 class="mt-4">75</h3>
                                        
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-sm-6 col-xl-2">
                            <a href="#">
                                <div class="card card-image  ">
                                    <div class="card-heading p-4">
                                        
                                        <div>
                                            <h5 class="font-16"> معدل التحويل</h5>
                                        </div>
                                        <h3 class="mt-4">10</h3>
                                        
                                    </div>
                                </div>
                            </a>
                        </div> -->



                    </div>

                    <!-- <h3 class="headLine"> مصادر الزيارات :</h3> -->
                    <!-- <div class="row">
                        <div class="col-sm-6 col-xl-2 ">
                            <div class="card card-image">
                                <div class="card-heading p-4">
                                    <div class="mini-stat-icon float-right">
                                         <i class="mdi mdi-pause bg-primary  text-white"></i> 
                                    </div>
                                    <div>
                                        <h5 class="font-20"> مصادر الزيارات :</h5>
                                    </div>
                                    <h3 class="mt-4">35</h3>
                                    <div class="progress mt-4" style="height: 4px;">
                                        <div class="progress-bar bg-primary" role="progressbar" style="width: 75%"
                                            aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <p class="text-muted mt-2 mb-0">النسبة المئوية <span class="float-right">75%</span></p> 
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-xl-8">
                            <div class="card card-image">
                                <div class="card-heading p-4">
                                    <div class="mini-stat-icon float-right">
                                         <i class="mdi mdi-briefcase-check bg-success text-white"></i> 
                                    </div>
                                    <div>
                                        <h5 class="font-16">أكثر المنتجات مبيعاَ</h5>
                                    </div>
                                    <h3 class="mt-4">265 </h3>
                                     <div class="progress mt-4" style="height: 4px;">
                                        <div class="progress-bar bg-success" role="progressbar" style="width: 88%"
                                            aria-valuenow="88" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <p class="text-muted mt-2 mb-0"> النسبة المئوية<span class="float-right">88%</span></p> 
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-xl-2">
                            <div class="card card-image">
                                <div class="card-heading p-4">
                                    <div class="mini-stat-icon float-right">
                                         <i class="mdi mdi-clock bg-warning text-white"></i> 
                                    </div>
                                    <div>
                                        <h5 class="font-16">اخر منتج تم بيعه</h5>
                                    </div>
                                    <h3 class="mt-4">447 </h3>
                                     <div class="progress mt-4" style="height: 4px;">
                                        <div class="progress-bar bg-warning" role="progressbar" style="width: 68%"
                                            aria-valuenow="68" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <p class="text-muted mt-2 mb-0"> النسبة المئوية<span class="float-right">68%</span></p> 
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-xl-6">
                            <div class="card card-image">
                                <div class="card-heading p-4">
                                    <div class="mini-stat-icon float-right">
                                         <i class="mdi mdi-motorbike bg-danger text-white"></i> 
                                    </div>
                                    <div>
                                        <h5 class="font-16">افضل العملاء</h5>
                                    </div>
                                    <h3 class="mt-4">86 </h3>
                                     <div class="progress mt-4" style="height: 4px;">
                                        <div class="progress-bar bg-danger" role="progressbar" style="width: 82%"
                                            aria-valuenow="82" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <p class="text-muted mt-2 mb-0">النسبة المئوية<span class="float-right">82%</span></p> 
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-xl-6">
                            <div class="card card-image">
                                <div class="card-heading p-4">
                                    <div class="mini-stat-icon float-right">
                                         <i class="mdi mdi-calendar bg-warning text-white"></i> 
                                    </div>
                                    <div>
                                        <h5 class="font-16"> افضل البائعين </h5>
                                    </div>
                                    <h3 class="mt-4">12</h3>
                                     <div class="progress mt-4" style="height: 4px;">
                                        <div class="progress-bar bg-warning" role="progressbar" style="width: 68%"
                                            aria-valuenow="68" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <p class="text-muted mt-2 mb-0"> النسبة المئوية<span class="float-right">68%</span></p> 
                                </div>
                            </div>
                        </div>

                    </div> -->
                    <!-- end row -->
                    <h3 class="headLine"> محفظة إدارة إمداد:</h3>
                    <div class="row">
                        <div class="col-sm-6 col-xl-4">
                            <div class="card">
                                <div class="card-heading p-4">
                                    <div class="mini-stat-icon float-right">
                                        <i class="mdi mdi-pause bg-primary  text-white"></i>
                                    </div>
                                    <div>
                                        <h5 class="font-16 text-light">الرصيد الحالي</h5>
                                    </div>
                                    <h3 class="mt-4">35 ري</h3>
                                    <div class="progress mt-4" style="height: 4px;">
                                        <div class="progress-bar bg-primary" role="progressbar" style="width: 75%"
                                            aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <p class="text-muted mt-2 mb-0">النسبة المئوية <span class="float-right">75%</span></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-xl-4">
                            <div class="card">
                                <div class="card-heading p-4">
                                    <div class="mini-stat-icon float-right">
                                        <i class="mdi mdi-briefcase-check bg-success text-white"></i>
                                    </div>
                                    <div>
                                        <h5 class="font-16 text-light">إجمالي الارباح</h5>
                                    </div>
                                    <h3 class="mt-4">265 ري</h3>
                                    <div class="progress mt-4" style="height: 4px;">
                                        <div class="progress-bar bg-success" role="progressbar" style="width: 88%"
                                            aria-valuenow="88" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <p class="text-muted mt-2 mb-0"> النسبة المئوية<span class="float-right">88%</span></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-xl-4">
                            <div class="card">
                                <div class="card-heading p-4">
                                    <div class="mini-stat-icon float-right">
                                        <i class="mdi mdi-clock bg-warning text-white"></i>
                                    </div>
                                    <div>
                                        <h5 class="font-16 text-light">طلبات الايداع </h5>
                                    </div>
                                    <h3 class="mt-4">447 ري</h3>
                                    <div class="progress mt-4" style="height: 4px;">
                                        <div class="progress-bar bg-warning" role="progressbar" style="width: 68%"
                                            aria-valuenow="68" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <p class="text-muted mt-2 mb-0"> النسبة المئوية<span class="float-right">68%</span></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-xl-6">
                            <div class="card">
                                <div class="card-heading p-4">
                                    <div class="mini-stat-icon float-right">
                                        <i class="mdi mdi-motorbike bg-danger text-white"></i>
                                    </div>
                                    <div>
                                        <h5 class="font-16 text-light"> اجمالي الحركة المالية في المحفظة</h5>
                                    </div>
                                    <h3 class="mt-4">86 ري</h3>
                                    <div class="progress mt-4" style="height: 4px;">
                                        <div class="progress-bar bg-danger" role="progressbar" style="width: 82%"
                                            aria-valuenow="82" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <p class="text-muted mt-2 mb-0">النسبة المئوية<span class="float-right">82%</span></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-xl-6">
                            <div class="card">
                                <div class="card-heading p-4">
                                    <div class="mini-stat-icon float-right">
                                        <i class="mdi mdi-calendar bg-warning text-white"></i>
                                    </div>
                                    <div>
                                        <h5 class="font-16 text-light">معدل العمليات اليومية </h5>
                                    </div>
                                    <h3 class="mt-4">447 ري</h3>
                                    <div class="progress mt-4" style="height: 4px;">
                                        <div class="progress-bar bg-warning" role="progressbar" style="width: 68%"
                                            aria-valuenow="68" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <p class="text-muted mt-2 mb-0"> النسبة المئوية<span class="float-right">68%</span></p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <!-- start row -->
                    <br />
                    <div class="row">

                        <h3 class="mt-0  mb-4 headLine"> ارباح العام <i
                                class="mdi mdi-chart-histogram bg-primary  text-white"></i> </h3>
                        <div class="col-xl-12">
                            <LineChartPage />
                        </div>
                        <br />


                    </div><br />
                    <!-- end row -->

                    <!-- start row -->
                    <h3 class="mt-0  mb-4 headLine"> نظرة عامة علي الاعمال :</h3>
                    <div class="row">

                        <div class="col-xl-12">
                            <!-- <div class="card m-b-30">
                                <div class="card-body">
                                    <div id="morris-donut-example" class="morris-charts morris-chart-height"></div>
                                </div>
                            </div> -->
                            <LinePage />
                        </div>
                        <div class="col-xl-6">
                            <!-- <div class="card m-b-30">
                                <div class="card-body">
                                    <h4 class="mt-0 header-title mb-4">Sales Analytics</h4>
                                    <div id="morris-line-example" class="morris-chart" style="height: 360px"></div>
                                </div>
                            </div> -->
                        </div>
                    </div>
                    <!-- end row -->

                    <div class="row">
                        <div class="col-xl-6 row ">
                            <h3 class="headLine col-xl-12 justify-content-start">المنتجات الاكثر مبيعا :</h3>
                            <div class="col-sm-6 col-xl-4">
                                <div class="card mb-3 bg-light text-right">
                                    <img src="https://kddi-h.assetsadobe3.com/is/image/content/dam/au-com/mobile/mb_img_58.jpg?scl=1"
                                        class="card-img-top " alt="ايفون 13">
                                    <div class="card-body">
                                        <h5 class="card-title">ايفون 13</h5>
                                        <!-- <p class="card-text">موبايل ابل</p> -->
                                        <!-- <p class="card-text">خصم 10%</p> -->
                                        <button class="btn btn-primary btn-block rounded-pill " @click="addToCart">500
                                            قطعة</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-xl-4">
                                <div class="card mb-3 bg-light text-right">
                                    <img src="https://sary-production.imgix.net/media/582022-06-08T09%3A43%3A34.324Z.jpg"
                                        class="card-img-top " alt="ايفون 13">
                                    <div class="card-body">
                                        <h5 class="card-title"> زيت كريستال</h5>
                                        <!-- <p class="card-text">موبايل ابل</p> -->
                                        <!-- <p class="card-text">خصم 10%</p> -->
                                        <button class="btn btn-primary btn-block rounded-pill " @click="addToCart">400
                                            قطعة</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-xl-4">
                                <div class="card mb-3 bg-light text-right">
                                    <img src="https://sary-production.imgix.net/product/package/2022/7/105.jpg"
                                        class="card-img-top " alt="ايفون 13">
                                    <div class="card-body">
                                        <h5 class="card-title"> مكرونة حواء </h5>
                                        <!-- <p class="card-text">موبايل ابل</p> -->
                                        <!-- <p class="card-text">خصم 10%</p> -->
                                        <button class="btn btn-primary btn-block rounded-pill " @click="addToCart">300
                                            قطعة</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-xl-4">
                                <div class="card mb-3 bg-light text-right">
                                    <img src="https://sary-production.imgix.net/product/package/2022/9/3.jpg"
                                        class="card-img-top " alt="ايفون 13">
                                    <div class="card-body">
                                        <h5 class="card-title"> فيجيتار</h5>
                                        <!-- <p class="card-text">موبايل ابل</p> -->
                                        <!-- <p class="card-text">خصم 10%</p> -->
                                        <button class="btn btn-primary btn-block rounded-pill " @click="addToCart">200
                                            قطعة</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-xl-4">
                                <div class="card mb-3 bg-light text-right">
                                    <img src="https://sary-production.imgix.net/product/package/2022/7/62230002644922022031"
                                        class="card-img-top " alt="ايفون 13">
                                    <div class="card-body">
                                        <h5 class="card-title"> سمن روابي</h5>
                                        <!-- <p class="card-text">موبايل ابل</p> -->
                                        <!-- <p class="card-text">خصم 10%</p> -->
                                        <button class="btn btn-primary btn-block rounded-pill " @click="addToCart">150
                                            قطعة</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-xl-4">
                                <div class="card mb-3 bg-light text-right">
                                    <img src="https://sary-production.imgix.net/media/142022-05-23T11%3A37%3A55.477Z.jpg"
                                        class="card-img-top " alt="ايفون 13">
                                    <div class="card-body">
                                        <h5 class="card-title"> مكرونة الملكه</h5>
                                        <!-- <p class="card-text">موبايل ابل</p> -->
                                        <!-- <p class="card-text">خصم 10%</p> -->
                                        <button class="btn btn-primary btn-block rounded-pill " @click="addToCart">100
                                            قطعة</button>
                                    </div>
                                </div>
                            </div>

                            
                            

                        </div>
                        <div class="col-xl-6 row ">
                            <h3 class="headLine col-xl-12 justify-content-start">افضل بائع بحسب كمية الطلبات :</h3>
                            <div class="col-sm-6 col-xl-4">
                                <div class="card align-item-center">
                                    <div class="card-heading p-4">
                                        <div>
                                            <h5 class="font-16 " style="background-color: purple;color:white">

                                                14563 ري </h5>
                                        </div>
                                        <div class="mini-stat-icon float-right d-block">
                                            <img src="assets/images/user-3.jpg" alt=""
                                                class="rounded-circle thumb-md aling-item-center">
                                        </div><br />

                                        <h5 class="mt-4 text-light ">شركه بن ربيع</h5>
                                        <!-- <div class="progress mt-4" style="height: 4px;">
                                            <div class="progress-bar bg-primary" role="progressbar" style="width: 75%"
                                                aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <p class="text-muted mt-2 mb-0">النسبة المئوية <span class="float-right">75%</span>
                                        </p> -->
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-xl-4">
                                <div class="card align-item-center">
                                    <div class="card-heading p-4">
                                        <div>
                                            <h5 class="font-16 " style="background-color:rgb(126, 3, 120);color:white">

                                                11368 ري </h5>
                                        </div>
                                        <div class="mini-stat-icon float-right d-block">
                                            <img src="assets/images/user-4.jpg" alt=""
                                                class="rounded-circle thumb-md aling-item-center">
                                        </div><br />

                                        <h5 class="mt-4 text-light"> شائع واولاده للتجاره </h5>
                                        <!-- <div class="progress mt-4" style="height: 4px;">
                                            <div class="progress-bar bg-primary" role="progressbar" style="width: 75%"
                                                aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <p class="text-muted mt-2 mb-0">النسبة المئوية <span class="float-right">75%</span>
                                        </p> -->
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-xl-4">
                                <div class="card align-item-center">
                                    <div class="card-heading p-4">
                                        <div>
                                            <h5 class="font-16 " style="background-color:rgb(126, 3, 120);color:white">

                                                10862 ري </h5>
                                        </div>
                                        <div class="mini-stat-icon float-right d-block">
                                            <img src="assets/images/user-5.jpg" alt=""
                                                class="rounded-circle thumb-md aling-item-center">
                                        </div><br />

                                        <h5 class="mt-4 text-light"> Qader Food</h5>
                                        <!-- <div class="progress mt-4" style="height: 4px;">
                                            <div class="progress-bar bg-primary" role="progressbar" style="width: 75%"
                                                aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <p class="text-muted mt-2 mb-0">النسبة المئوية <span class="float-right">75%</span>
                                        </p> -->
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-xl-4">
                                <div class="card align-item-center">
                                    <div class="card-heading p-4">
                                        <div>
                                            <h5 class="font-16 " style="background-color:rgb(126, 3, 120);color:white">

                                                9615 ري </h5>
                                        </div>
                                        <div class="mini-stat-icon float-right d-block">
                                            <img src="assets/images/user-3.jpg" alt=""
                                                class="rounded-circle thumb-md aling-item-center">
                                        </div><br />

                                        <h5 class="mt-4 text-light">مؤسسة الغراسي</h5>
                                        <!-- <div class="progress mt-4" style="height: 4px;">
                                            <div class="progress-bar bg-primary" role="progressbar" style="width: 75%"
                                                aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <p class="text-muted mt-2 mb-0">النسبة المئوية <span class="float-right">75%</span>
                                        </p> -->
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-xl-4">
                                <div class="card align-item-center">
                                    <div class="card-heading p-4">
                                        <div>
                                            <h5 class="font-16 " style="background-color:rgb(126, 3, 120);color:white">

                                                8133 ري </h5>
                                        </div>
                                        <div class="mini-stat-icon float-right d-block">
                                            <img src="assets/images/user-3.jpg" alt=""
                                                class="rounded-circle thumb-md aling-item-center">
                                        </div><br />

                                        <h5 class="mt-4 text-light">شركه بن عوض النقيب</h5>
                                        <!-- <div class="progress mt-4" style="height: 4px;">
                                            <div class="progress-bar bg-primary" role="progressbar" style="width: 75%"
                                                aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <p class="text-muted mt-2 mb-0">النسبة المئوية <span class="float-right">75%</span>
                                        </p> -->
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-xl-4">
                                <div class="card align-item-center">
                                    <div class="card-heading p-4">
                                        <div>
                                            <h5 class="font-16 " style="background-color:rgb(126, 3, 120);color:white">

                                                5665 ري </h5>
                                        </div>
                                        <div class="mini-stat-icon float-right d-block">
                                            <img src="assets/images/user-3.jpg" alt=""
                                                class="rounded-circle thumb-md aling-item-center">
                                        </div><br />

                                        <h5 class="mt-4 text-light">شركه مياه حده </h5>
                                        <!-- <div class="progress mt-4" style="height: 4px;">
                                            <div class="progress-bar bg-primary" role="progressbar" style="width: 75%"
                                                aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <p class="text-muted mt-2 mb-0">النسبة المئوية <span class="float-right">75%</span>
                                        </p> -->
                                    </div>
                                </div>
                            </div>

                        </div>
                        <h3 class="headLine col-xl-12 justify-content-start">افضل بائع بحسب عدد الطلبات</h3>
                        <div class="col-sm-6 col-xl-4">
                            <div class="card align-item-center">
                                <div class="card-heading p-4">
                                    <div>
                                        <h5 class="font-16 " style="background-color: purple;color:white">
                                            الطلبات :
                                            45 </h5>
                                    </div>
                                    <div class="mini-stat-icon float-right d-block">
                                        <img src="assets/images/user-3.jpg" alt=""
                                            class="rounded-circle thumb-md aling-item-center">
                                    </div><br />

                                    <h5 class="mt-4 text-light"> QADERFOOD </h5>
                                    <!-- <div class="progress mt-4" style="height: 4px;">
                                            <div class="progress-bar bg-primary" role="progressbar" style="width: 75%"
                                                aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <p class="text-muted mt-2 mb-0">النسبة المئوية <span class="float-right">75%</span>
                                        </p> -->
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-xl-4">
                            <div class="card align-item-center">
                                <div class="card-heading p-4">
                                    <div>
                                        <h5 class="font-16 " style="background-color: purple;color:white">
                                            الطلبات :
                                            40 </h5>
                                    </div>
                                    <div class="mini-stat-icon float-right d-block">
                                        <img src="assets/images/user-4.jpg" alt=""
                                            class="rounded-circle thumb-md aling-item-center">
                                    </div><br />

                                    <h5 class="mt-4 text-light">شائع واولاده</h5>
                                    <!-- <div class="progress mt-4" style="height: 4px;">
                                            <div class="progress-bar bg-primary" role="progressbar" style="width: 75%"
                                                aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <p class="text-muted mt-2 mb-0">النسبة المئوية <span class="float-right">75%</span>
                                        </p> -->
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-xl-4">
                            <div class="card align-item-center">
                                <div class="card-heading p-4">
                                    <div>
                                        <h5 class="font-16 " style="background-color: purple;color:white">
                                            الطلبات :
                                            38 </h5>
                                    </div>
                                    <div class="mini-stat-icon float-right d-block">
                                        <img src="assets/images/user-5.jpg" alt=""
                                            class="rounded-circle thumb-md aling-item-center">
                                    </div><br />

                                    <h5 class="mt-4 text-light">مؤسسه الغراسي </h5>
                                    <!-- <div class="progress mt-4" style="height: 4px;">
                                            <div class="progress-bar bg-primary" role="progressbar" style="width: 75%"
                                                aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <p class="text-muted mt-2 mb-0">النسبة المئوية <span class="float-right">75%</span>
                                        </p> -->
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-xl-4">
                            <div class="card align-item-center">
                                <div class="card-heading p-4">
                                    <div>
                                        <h5 class="font-16 " style="background-color: purple;color:white">
                                            الطلبات :
                                            20 </h5>
                                    </div>
                                    <div class="mini-stat-icon float-right d-block">
                                        <img src="assets/images/user-3.jpg" alt=""
                                            class="rounded-circle thumb-md aling-item-center">
                                    </div><br />

                                    <h5 class="mt-4 text-light"> شركه بن ربيع</h5>
                                    <!-- <div class="progress mt-4" style="height: 4px;">
                                            <div class="progress-bar bg-primary" role="progressbar" style="width: 75%"
                                                aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <p class="text-muted mt-2 mb-0">النسبة المئوية <span class="float-right">75%</span>
                                        </p> -->
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-xl-4">
                            <div class="card align-item-center">
                                <div class="card-heading p-4">
                                    <div>
                                        <h5 class="font-16 " style="background-color: purple;color:white">
                                            الطلبات :
                                            15 </h5>
                                    </div>
                                    <div class="mini-stat-icon float-right d-block">
                                        <img src="assets/images/user-3.jpg" alt=""
                                            class="rounded-circle thumb-md aling-item-center">
                                    </div><br />

                                    <h5 class="mt-4 text-light">شركة بن ربيع</h5>
                                    <!-- <div class="progress mt-4" style="height: 4px;">
                                            <div class="progress-bar bg-primary" role="progressbar" style="width: 75%"
                                                aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <p class="text-muted mt-2 mb-0">النسبة المئوية <span class="float-right">75%</span>
                                        </p> -->
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-xl-4">
                            <div class="card align-item-center">
                                <div class="card-heading p-4">
                                    <div>
                                        <h5 class="font-16 " style="background-color: purple;color:white">
                                            الطلبات :
                                            5 </h5>
                                    </div>
                                    <div class="mini-stat-icon float-right d-block">
                                        <img src="assets/images/user-3.jpg" alt=""
                                            class="rounded-circle thumb-md aling-item-center">
                                    </div><br />

                                    <h5 class="mt-4 text-light">مياه حده </h5>
                                    <!-- <div class="progress mt-4" style="height: 4px;">
                                            <div class="progress-bar bg-primary" role="progressbar" style="width: 75%"
                                                aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <p class="text-muted mt-2 mb-0">النسبة المئوية <span class="float-right">75%</span>
                                        </p> -->
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- start row -->


                    <!-- Friends Suggestions -->
                    <!-- <div class="row">
                        <div class="col-xl-4">
                            <div class="card m-b-30">
                                <div class="card-body">
                                    <h4 class="mt-0 header-title mb-4">Friends Suggestions</h4>
                                    <div class="friends-suggestions">
                                        <a href="#" class="friends-suggestions-list">
                                            <div class="border-bottom position-relative">
                                                <div class="float-left mb-0 mr-3">
                                                    <img src="assets/images/user-3.jpg" alt=""
                                                        class="rounded-circle thumb-md">
                                                </div>
                                                <div class="suggestion-icon float-right mt-2 pt-1">
                                                    <i class="mdi mdi-plus"></i>
                                                </div>
                                                <div class="desc">
                                                    <h5 class="font-14 mb-1 pt-2">Ralph Ramirez</h5>
                                                    <p class="text-muted">3 Friend suggest</p>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="#" class="friends-suggestions-list">
                                            <div class="border-bottom position-relative">
                                                <div class="float-left mb-0 mr-3">
                                                    <img src="assets/images/user-3.jpg" alt=""
                                                        class="rounded-circle thumb-md">
                                                </div>
                                                <div class="suggestion-icon float-right mt-2 pt-1">
                                                    <i class="mdi mdi-plus"></i>
                                                </div>
                                                <div class="desc">
                                                    <h5 class="font-14 mb-1 pt-2">Patrick Beeler</h5>
                                                    <p class="text-muted">17 Friend suggest</p>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="#" class="friends-suggestions-list">
                                            <div class="border-bottom position-relative">
                                                <div class="float-left mb-0 mr-3">
                                                    <img src="assets/images/user-4.jpg" alt=""
                                                        class="rounded-circle thumb-md">
                                                </div>
                                                <div class="suggestion-icon float-right mt-2 pt-1">
                                                    <i class="mdi mdi-plus"></i>
                                                </div>
                                                <div class="desc">
                                                    <h5 class="font-14 mb-1 pt-2">Victor Zamora</h5>
                                                    <p class="text-muted">12 Friend suggest</p>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="#" class="friends-suggestions-list">
                                            <div class="border-bottom position-relative">
                                                <div class="float-left mb-0 mr-3">
                                                    <img src="assets/images/user-5.jpg" alt=""
                                                        class="rounded-circle thumb-md">
                                                </div>
                                                <div class="suggestion-icon float-right mt-2 pt-1">
                                                    <i class="mdi mdi-plus"></i>
                                                </div>
                                                <div class="desc">
                                                    <h5 class="font-14 mb-1 pt-2">Bryan Lacy</h5>
                                                    <p class="text-muted">18 Friend suggest</p>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="#" class="friends-suggestions-list">
                                            <div class="position-relative">
                                                <div class="float-left mb-0 mr-3">
                                                    <img src="assets/images/user-6.jpg" alt=""
                                                        class="rounded-circle thumb-md">
                                                </div>
                                                <div class="suggestion-icon float-right mt-2 pt-1">
                                                    <i class="mdi mdi-plus"></i>
                                                </div>
                                                <div class="desc">
                                                    <h5 class="font-14 mb-1 pt-2">James Sorrells</h5>
                                                    <p class="text-muted mb-1">6 Friend suggest</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-xl-4">
                            <div class="card m-b-30">
                                <div class="card-body">
                                    <h4 class="mt-0 header-title mb-4">Recent Activity</h4>
                                    <ol class="activity-feed mb-0">
                                        <li class="feed-item">
                                            <div class="feed-item-list">
                                                <p class="text-muted mb-1">Now</p>
                                                <p class="font-15 mt-0 mb-0">Jassa magna Jassa, risus posted a new article:
                                                    <b class="text-primary">Forget UX Rowland</b>
                                                </p>
                                            </div>
                                        </li>
                                        <li class="feed-item">
                                            <p class="text-muted mb-1">Yesterday</p>
                                            <p class="font-15 mt-0 mb-0">Jassa posted a new article: <b
                                                    class="text-primary">Designer Alex</b></p>
                                        </li>
                                        <li class="feed-item">
                                            <p class="text-muted mb-1">2:30PM</p>
                                            <p class="font-15 mt-0 mb-0">Jassa, Jassa, Jassa Commented <b
                                                    class="text-primary">
                                                    Developer Moreno</b></p>
                                        </li>
                                        <li class="feed-item pb-1">
                                            <p class="text-muted mb-1">12:48 PM</p>
                                            <p class="font-15 mt-0 mb-2">Jassa, Jassa Commented <b class="text-primary">UX
                                                    Murphy</b></p>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div> -->
                    <!-- START ROW -->
                    <div class="row">
                        <div class="col-xl-12">
                            <h4 class="mt-0 mb-4 headLine">افضل العملاء :</h4>
                            <div class="card m-b-30">
                                <div class="card-body">


                                    <div class="table-responsive">
                                        <table class="table table-hover">
                                            <thead>
                                                <tr>
                                                    <th scope="col">الاسم</th>
                                                    <th scope="col">حالة الطلب</th>
                                                    <th scope="col">إجمالي</th>
                                                    <th scope="col">صورة العميل</th>
                                                    <th scope="col">المحافظه</th>
                                                    <th scope="col">تاريخ الطلب</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>عصام قادر</td>
                                                    <td>
                                                        <select class="badge badge-success" id="status-order">
                                                            <option value="accepted">تم الموافقه عليها</option>
                                                            <option value="pending">يتم تجهيزها</option>
                                                            <option value="inaway">في الطريق</option>
                                                            <option value="delivered">تم التوصيل</option>
                                                            <option value="throwback">مرتجع</option>
                                                            <option value="cancel">فشل</option>
                                                        </select>
                                                        <!-- <span class="badge badge-success">Delivered</span> -->
                                                    </td>
                                                    <td>$9,420,000</td>
                                                    <td>
                                                        <div>
                                                            <img src="assets/images/user-4.jpg" alt=""
                                                                class="thumb-md rounded-circle mr-2">
                                                        </div>
                                                    </td>
                                                    <td>صنعاء</td>
                                                    <td>5/10/2023</td>
                                                    <td>
                                                        <div>
                                                            <a href="#" class="btn btn-primary btn-sm">تعديل</a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>عصام قادر</td>
                                                    <td>
                                                        <select class="badge badge-success" id="status-order">
                                                            <option value="accepted">تم الموافقه عليها</option>
                                                            <option value="pending">يتم تجهيزها</option>
                                                            <option value="inaway">في الطريق</option>
                                                            <option value="delivered">تم التوصيل</option>
                                                            <option value="throwback">مرتجع</option>
                                                            <option value="cancel">فشل</option>
                                                        </select>
                                                        <!-- <span class="badge badge-success">Delivered</span> -->
                                                    </td>
                                                    <td>$3,120,000</td>
                                                    <td>
                                                        <div>
                                                            <img src="assets/images/user-3.jpg" alt=""
                                                                class="thumb-md rounded-circle mr-2">
                                                        </div>
                                                    </td>
                                                    <td>صنعاء</td>
                                                    <td>10/5/2023</td>
                                                    <td>
                                                        <div>
                                                            <a href="#" class="btn btn-primary btn-sm">تعديل</a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>عصام قادر</td>
                                                    <td>
                                                        <select class="badge badge-success" id="status-order">
                                                            <option value="accepted">تم الموافقه عليها</option>
                                                            <option value="pending">يتم تجهيزها</option>
                                                            <option value="inaway">في الطريق</option>
                                                            <option value="delivered">تم التوصيل</option>
                                                            <option value="throwback">مرتجع</option>
                                                            <option value="cancel">فشل</option>
                                                        </select>
                                                        <!-- <span class="badge badge-success">Delivered</span> -->
                                                    </td>
                                                    <td>$6,360,000</td>
                                                    <td>
                                                        <div>
                                                            <img src="assets/images/user-4.jpg" alt=""
                                                                class="thumb-md rounded-circle mr-2">
                                                        </div>
                                                    </td>
                                                    <td>صنعاء</td>
                                                    <td>10/5/2023</td>
                                                    <td>
                                                        <div>
                                                            <a href="#" class="btn btn-primary btn-sm">تعديل</a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>عصام قادر</td>
                                                    <td>
                                                        <select class="badge badge-success" id="status-order">
                                                            <option value="accepted">تم الموافقه عليها</option>
                                                            <option value="pending">يتم تجهيزها</option>
                                                            <option value="inaway">في الطريق</option>
                                                            <option value="delivered">تم التوصيل</option>
                                                            <option value="throwback">مرتجع</option>
                                                            <option value="cancel">فشل</option>
                                                        </select>
                                                        <!-- <span class="badge badge-success">Delivered</span> -->
                                                    </td>
                                                    <td>$5,200,000</td>
                                                    <td>
                                                        <div>
                                                            <img src="assets/images/user-5.jpg" alt=""
                                                                class="thumb-md rounded-circle mr-2">
                                                        </div>
                                                    </td>
                                                    <td>صنعاء</td>
                                                    <td>10/5/2023</td>
                                                    <td>
                                                        <div>
                                                            <a href="#" class="btn btn-primary btn-sm">تعديل</a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>عصام قادر</td>
                                                    <td>
                                                        <select class="badge badge-success" id="status-order">
                                                            <option value="accepted">تم الموافقه عليها</option>
                                                            <option value="pending">يتم تجهيزها</option>
                                                            <option value="inaway">في الطريق</option>
                                                            <option value="delivered">تم التوصيل</option>
                                                            <option value="throwback">مرتجع</option>
                                                            <option value="cancel">فشل</option>
                                                        </select>
                                                        <!-- <span class="badge badge-success">Delivered</span> -->
                                                    </td>
                                                    <td>$7,250,000</td>
                                                    <td>
                                                        <div>
                                                            <img src="assets/images/user-6.jpg" alt=""
                                                                class="thumb-md rounded-circle mr-2">
                                                        </div>
                                                    </td>
                                                    <td>صنعاء</td>
                                                    <td>10/5/2023</td>
                                                    <td>
                                                        <div>
                                                            <a href="#" class="btn btn-primary btn-sm">تعديل</a>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
    <!-- Button to trigger the modal -->
  <div class="bg-gray rounded p-3">
    <span class="float-start fs-5">عندك طلب خاص؟</span>
    <button class="btn btn-primary float-end rounded" data-bs-toggle="modal" data-bs-target="#myModal">اضغط هنا</button>
  </div>

  <!-- Modal HTML code -->
  <div class="modal" id="myModal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content bg-light">
      <div class="modal-header">
        <h5 class="modal-title ms-auto">ادخل معلومات طلبك الخاص</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="mb-3">
          <label for="product-name" class="form-label text-end" style="text-align: right;">اسم المنتج</label>
          <input type="text" class="form-control bg-light" id="product-name" placeholder="اسم المنتج">
        </div>
        <div class="row">
          <div class="col-md-6 mb-3">
            <label for="quantity" class="form-label text-end" style="text-align: right;">الكمية</label>
            <input type="text" class="form-control bg-light" id="quantity" placeholder="الكمية">
          </div>
          <div class="col-md-6 mb-3">
            <label for="price" class="form-label text-end" style="text-align: right;">السعر المتوقع</label>
            <input type="text" class="form-control bg-light" id="price" placeholder="السعر المتوقع">
          </div>
        </div>
        <div class="mb-3">
          <label for="description" class="form-label text-end" style="text-align: right;">الوصف</label>
          <input type="text" class="form-control bg-light" id="description" placeholder="الوصف">
        </div>
        <div class="mb-3">
          <label for="upload-img" class="form-label text-end" style="text-align: right;">ارفع صورة اذا عندك</label>
          <input type="file" class="form-control bg-light" id="upload-img">
        </div>
        <button type="button" class="btn btn-primary w-100">إرسال</button>
      </div>
    </div>
  </div>
</div>


                    </div>
  

                    <!-- END ROW -->
                    <!-- end col -->
                    <!-- <div class="col-xl-4">
                        <div class="card m-b-30">
                            <div class="card-body">
                                <h4 class="mt-0 header-title mb-4">Donut Chart</h4>
                                <div id="morris-donut-example" class="morris-charts morris-chart-height"></div>
                            </div>
                        </div>
                    </div> -->
                    <!-- end col -->

                </div>
                <!-- container-fluid -->
            </div>
            <!-- content -->
            
            <footer class="footer">
                ©2022 imdad <span class="d-none d-sm-inline-block">
                    imdad2022.com</span>.
            </footer>
        </div>

        <!-- ============================================================== -->
        <!-- End Right content here -->
        <!-- ============================================================== -->
    </div>
<!-- END wrapper --></template>

<script>
import '../../public/assets/css/style.css'
import LineChartPage from '../components/charts/linechart.vue'
import LinePage from '../components/charts/line.vue'
// import SidebarPage from '../components/Sidebar/Sidebar.vue'
export default {
    name: 'DashboardPage',
    components: {
        LineChartPage,
        LinePage,
        // SidebarPage

    }
    // props: {
    //   msg: String
    // }
}
</script>

