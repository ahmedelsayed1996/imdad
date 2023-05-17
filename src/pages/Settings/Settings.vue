<template>
    <div id="app" class="bg-gray">
      <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">الاعدادات</a>
        </nav>
      </header>
  
      <div class="container mt-5">
        <div class="row">
          <div class="col-5">
            <div class="card bg-light mb-3 rounded-3 p-3">
              <h4 class="d-flex">اسم المنشاة</h4>
              <p class="d-flex">امداد</p>
            </div>
            <div class="card bg-light mb-3 rounded-3 p-3">
              <ul class="list-group">
                <li
                  v-for="(item, index) in menuItems"
                  :key="index"
                  class="list-group-item d-flex align-items-center"
                  :class="{ active: selectedIndex === index }"
                  @click="selectItem(index)"
                >
                  <i class="bi" :class="item.icon"></i>
                  {{ item.label }}
                </li>
              </ul>
            </div>
          </div>
          <div class="col-7">
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
                <p>محتوى قائمة التفاصيل المالية</p>
              </div>
              <div v-else-if="menuItems[selectedIndex].label === 'التفاصيل التشغيلية'">
                <!-- Content for 'التفاصيل التشغيلية' menu item -->
                <p>محتوى قائمة التفاصيل التشغيلية</p>
              </div>
              <div v-else-if="menuItems[selectedIndex].label === 'الموظفين'">
                <!-- Content for 'الموظفين' menu item -->
                <p>محتوى قائمة الموظفين</p>
              </div>
              <div v-else-if="menuItems[selectedIndex].label === 'مواعيد عمل الفروع'">
                <!-- Content for 'مواعيد عمل الفروع' menu item -->
                <p>محتوى قائمة مواعيد عمل الفروع</p>
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
  
  .form-check .form-check-input:checked + .form-check-label {
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
  </style>
  