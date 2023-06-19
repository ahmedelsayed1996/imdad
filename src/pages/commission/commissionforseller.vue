<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">

            <h2 class="ml-auto headLine text-dark"> العمولات</h2>
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
                    <label for="text-input " class="fs-3 text-dark"> اسم العمولة</label>
                    <input type="text" class="form-control bg-light " id="text-input" placeholder="ادخل اسم العمولة">
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <label for="dropdown-select" class="fs-3 text-dark">نوع العمولة</label>
                    <select class="form-control bg-light text-dark fs-6" id="dropdown-select" v-model="selectedOption1">
                        <option value="option1" class="text-dark">عامة</option>
                        <option value="option2">حسب البائع</option>
                        <option value="option3">حسب المنتج</option>
                        <option value="option4">حسب الفئة</option>
                    </select>
                </div>
            </div>
            <div class="col-md-6 ">
                <div class="form-group ">
                    <label for="dropdown-select" class="fs-3 text-dark">اسم البائع</label>

                    <div>
                        <select class="form-control bg-light text-dark fs-6" id="dropdown-select" v-model="selectedOption">
                            <option value="">اختر اسمًا</option>
                            <option value="عصام">عصام</option>
                            <option value="أحمد">أحمد</option>
                            <option value="حسين">حسين</option>
                        </select>
                        <button @click="addOption" class="btn btn-imdad2 m-2">إضافة </button>
                        <p class="fs-3 text-dark"> اسم البائع: {{ displaySelectedOption }}</p>
                    </div>
                </div>
            </div>
            <div class="col-md-6 ">
                <div class="col-md-6" v-show="selectedOption1 === 'option1'">
                    <label for="text-input-3" class="fs-3 text-dark">نسبة العمولة </label>
                    <input type="text" class="form-control bg-light text-dark" id="text-input-3" placeholder="15 %">
                </div>
            </div>
        </div>

        <!-- الجزء الثاني -->
        <div class="row mt-5 text-right">
            <div class="col-md-6" v-show="selectedOption1 === 'option2'">
                <div class="form-group">
                    <label for="text-input-3" class="fs-3 text-dark">نسبة عمولة الشريك</label>
                    <input type="text" class="form-control bg-light" id="text-input-3" placeholder="15 %">
                </div>
            </div>
        </div>>

        <div class="row mt-5 text-right" v-show="selectedOption1 === 'option3'">
            <button type="button" class="btn btn-imdad2 m-3" data-bs-toggle="modal" data-bs-target="#test">
                اضف عمولة</button>
            <div class="modal fade" id="test" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content bg-light">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">إنشاء عموله للمنتج</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-6 my-2">
                                    <div class="dropdown">
                                        <button class="btn btn-secondary dropdown-toggle" type="button"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            منتج
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="#">المنتج</a></li>
                                            <li><a class="dropdown-item" href="#">فئة المنتج </a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-6 my-2 ">
                                    <label for="inputPassword5" class="form-label">العمولة فوق السعر</label>
                                    <input type="text" id="inputPassword5" class="form-control bg-light"
                                        aria-labelledby="passwordHelpBlock">
                                </div>
                                <div class="col-6 my-2">
                                    <div class="dropdown">
                                        <button class="btn btn-secondary dropdown-toggle" type="button"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            اختر المنتج
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="#">[FRN-523] مكرونة حواء</a></li>
                                            <li><a class="dropdown-item" href="#">[FRFNMN-5563] علكة</a></li>
                                            <li><a class="dropdown-item" href="#">[DCN-55223] موبايل</a></li>

                                        </ul>
                                    </div>
                                </div>
                                <div class="col-6 my-2 ">
                                    <label for="inputPassword5" class="form-label">السعر المستهدف</label>
                                    <input type="text" id="inputPassword5" class="form-control text-dark bg-light"
                                        aria-labelledby="passwordHelpBlock">
                                </div>

                                <div class="col-6 my-2">
                                    <div class="dropdown">
                                        <button class="btn btn-secondary dropdown-toggle" type="button"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            سعر محدد
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="#"> سعر محدد </a></li>
                                            <li><a class="dropdown-item" href="#">هامش الربح</a></li>
                                            <li><a class="dropdown-item" href="#">عمولة مستثناء</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">حفظ</button>
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">إلغاء</button>
                        </div>
                    </div>
                </div>
            </div>

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col" class="text-dark">#</th>
                        <th scope="col" class="text-dark">المنتج</th>
                        <th scope="col" class="text-dark">مع </th>
                        <th scope="col" class="text-dark">اسم المنتج</th>
                        <th scope="col" class="text-dark"> السعر المستهدف</th>
                        <th scope="col" class="text-dark">السعر فوق العمولة </th>
                        <th scope="col" class="text-dark">هامش الربح </th>


                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>المنتج</td>
                        <td>سعر محدد</td>
                        <td>مكرونة</td>
                        <td>500</td>
                        <td>10:00</td>
                        <td>00:00</td>
                    </tr>

                </tbody>
            </table>
            
        </div>

    </div>
</template>
<script>
export default {
    name: "CommissionSellerPage",
    data() {
        return {
            selectedOption1: "",
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