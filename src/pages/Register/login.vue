<template>
 <div class="d-flex justify-content-center align-items-center" id="bgform">
  <div>
    <!-- Add your image here -->
  </div>
  <div class="card" style="width: 30rem; margin: 10rem 8rem 10rem 8rem; background-color: aliceblue;">
    <div class="card-header">
      <h5 class="card-title text-right">تسجيل الدخول</h5>
    </div>
    <div class="card-body">
      <form @submit="onSubmit" @reset="onReset" v-if="show">
        <div class="form-group text-right">
          <label for="input-2" class="text-right">رقم التليفون:</label>
          <div class="input-group">
            <input v-model="form.phone" type="number" class="form-control bg-light" id="input-2" placeholder="أدخل الرقم" required>
            <div class="input-group-prepend">
              <div class="input-group-text text-bg-light" style="padding: 5px;  border: 1px solid black; margin-right: 5px; border-radius: 5px;">
                976+
                <img src="../../assets/323279.png"  width="20" style="margin-right: 10px;">
              </div>
            </div>
          </div>
        </div>
        <div class="form-group text-right">
          <label for="input-3" class="text-right">الرقم السري:</label>
          <input type="password" class="form-control bg-light" id="input-3" v-model="form.password" required>
        </div>
        <div class="form-group">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" v-model="form.checked" id="checkboxes-4" value="that">
            <label class="form-check-label text-right" for="checkboxes-4">تذكرني</label>
          </div>
        </div>
        <button type="submit" class="btn  d-flex justify-content-center" > <router-link class="router-btn btn-imdad btn-lg"  to="/dashboard">ادخل</router-link></button>
       
      </form>
    </div>
  </div>
</div>





</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      form: {
        phone: '',
        password: '',
        checked: []
      },
      show: true
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      this.form.phone = '';
      this.form.password = '';
      this.form.checked = [];
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>

<style>
* {}

#bgform {
  background-color: #5435b7;
  background-size: cover;
  background-repeat: no-repeat;
}

.router-btn{
  color: aliceblue;
  background-color: purple;
}
</style>
