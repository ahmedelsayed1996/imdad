<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">

            <h2 class="ml-auto headLine"> العمولات</h2>
        </nav>
        <div class="m-2">
            <button type="button" class="btn btn-imdad mx-2 mr-auto"> حفظ</button>
            <button type="button" class="btn btn-danger mr-auto">إلغاء</button>
        </div>
    </header>
    <div class=" container-fluid">
        <!-- الجزء الأول -->

        <div class="row mt-5 text-right">
            <div class="col-md-6">
                <div class="form-group">
                    <label for="text-input " class="fs-3 text-black"> اسم العمولة</label>
                    <input type="text" class="form-control text-bg-light " id="text-input" placeholder="ادخل اسم العمولة">
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <label for="dropdown-select" class="fs-3 text-black">نوع العمولة</label>
                    <select class="form-control bg-light text-black fs-6" id="dropdown-select" v-model="selectedOption1">
                        <option value="option1" class="text-black">عامة</option>
                        <option value="option2">حسب البائع</option>
                        <option value="option3">حسب المنتج</option>
                        <option value="option4">حسب الفئة</option>
                    </select>
                </div>
            </div>
            <div class="col-md-6 ">
                <div class="form-group ">
                    <label for="dropdown-select" class="fs-3 text-black">اسم البائع</label>

                    <div>
                        <select class="form-control bg-light text-black fs-6" id="dropdown-select" v-model="selectedOption">
                            <option value="">اختر اسمًا</option>
                            <option value="عصام">عصام</option>
                            <option value="أحمد">أحمد</option>
                            <option value="حسين">حسين</option>
                        </select>
                        <button @click="addOption">إضافة </button>
                        <p class="fs-3 text-black"> اسم البائع: {{ displaySelectedOption }}</p>
                    </div>
                </div>
            </div>
            <div class="col-md-6 ">
                <div class="col-md-6" v-show="selectedOption1 !== 'option2'">
                    <label for="text-input-3" class="fs-3 text-black">نسبة العمولة </label>
                    <input type="text" class="form-control bg-light text-black" id="text-input-3" placeholder="15 %">
                </div>
            </div>
        </div>

        <!-- الجزء الثاني -->
        <div class="row mt-5 text-right">
            <div class="col-md-6" v-show="selectedOption1 === 'option2'">
              <div class="form-group">
                <label for="text-input-3" class="fs-3 text-black">نسبة عمولة الشريك</label>
                <input type="text" class="form-control text-bg-light" id="text-input-3" placeholder="15 %">
              </div>
            </div>
          </div>>

    </div>
</template>
<script>
export default {
    name: "CommissionPage",
    data() {
        return {
            selectedOption1:"",
            selectedOptions: [],
            options: [
                { label: 'أحمد', value: 'أحمد' },
                { label: 'عصام', value: 'عصام' },
                { label: 'حسين', value: 'حسين' }
            ]
        }
    },
    computed: {
        displaySelectedOption() {
            if (this.selectedOptions.length === 0) {
                return '';
            } else if (this.selectedOptions.length === 1) {
                return this.selectedOptions[0];
            } else {
                return this.selectedOptions.join(' و ');
            }
        }
    },
    methods: {
        addOption() {
            const optionExists = this.selectedOptions.includes(this.selectedOption);
            if (!optionExists) {
                this.selectedOptions.push(this.selectedOption);
            }
        }
    }

}
</script>