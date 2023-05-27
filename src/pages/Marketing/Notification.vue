<template>
    <div class="headLine fs-3 text-start p-2 pr-4">التسويق عبر الاشعارات</div>
    <div class="d-flex justify-content-center align-items-center"
        style="height: 100vh; background: url('https://cdn.vectorstock.com/i/preview-1x/27/48/incoming-message-notification-icon-speech-bubble-vector-6742748.jpg');">
        <div class="card " style="width: 30rem; background-color:lightgrey;">
            <img src="https://emdadb2b.com/imdad2022/storage/app/public/company/2022-06-20-62b0d4a963f4e.png"
                style="width: 200px; align-self: center;" class="card-img-top mt-2" alt="">
            <div class="card-body d-block">
                <div class="mb-3">
                    <label for="formFile" class="form-label d-flex">اختر الصورة المراد ارسالها</label>
                    <input class="form-control bg-light" type="file" id="formFile">
                </div>

                <div class="mb-3">
                    <h5 class="card-title d-flex"> الرسالة:</h5>
                    <label for="exampleFormControlTextarea1" class="form-label"></label>
                    <textarea class="form-control bg-light" id="exampleFormControlTextarea1" rows="3"
                        placeholder="اكتب الرسالة هنا"></textarea>
                </div>

                <div class="input-group mb-3">
                    <select class="form-select" id="inputGroupSelect01">
                        <option selected>اختر نوع نشاط العملاء</option>
                        <option value="1">مطاعم</option>
                        <option value="2">بقالة</option>
                        <option value="3">اخرى</option>
                    </select>
                </div>
                <div class="input-group mb-3">
                    <select class="form-select" id="inputGroupSelect01">
                        <option selected>اختر نوع نشاط العملاء</option>
                        <option value="1">مطاعم</option>
                        <option value="2">بقالة</option>
                        <option value="3">اخرى</option>
                    </select>
                </div>
            </div>
            <div class="card-footer d-flex justify-content-start">
                <button type="submit" class="btn btn-primary" @click="submitForm">ارسل</button>
            </div>

        </div>
    </div>
</template>
  
<script>
export default {
    name: 'NotificationPage',
    data() {
        return {
            categories: ['Option 1', 'Option 2', 'Option 3'],
            selectedCategory: ''
        };
    },
    methods: {
        submitForm() {
            // Handle form submission logic here
        }
    }
};
</script>
  
<style scoped>
.card {
    margin: auto;
    position: relative;
}
</style>
