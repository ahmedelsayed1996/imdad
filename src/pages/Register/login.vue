<template>
    <h1>asdas.dassds/das/l</h1>
    <div class="d-flex justify-content-center">
      <div>
        <img style="max-width: 30rem; max-height: 24rem; border-radius: 5px;"
          src="https://emdadb2b.com/imdad2022/storage/app/public/company/2022-06-20-62b0d4a963f4e.png" alt=""
          srcset="">
      </div>
      <b-card title="Login Form" style="max-width: 25rem;" class="mb-2 ">
  
        <div>
          <vue-tel-input v-model="phoneNumber"></vue-tel-input>
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group id="input-group-2" label="Your password:" label-for="input-2" class="bg-dark">
              <b-form-input id="input-2" v-model="form.password" placeholder="Enter password" required></b-form-input>
            </b-form-group>
  
            <!-- <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
              <b-form-checkbox-group v-model="form.checked" id="checkboxes-4" :aria-describedby="ariaDescribedby">
                <b-form-checkbox value="that">Remember Me</b-form-checkbox>
              </b-form-checkbox-group>
            </b-form-group> -->
  
            <b-button type="submit" variant="primary" class="d-flex justify-content-center">Submit</b-button>
          </b-form>
  
        </div>
      </b-card>
  
    </div>
  </template>
  
  <script>
    // import Vue from 'vue'
    // import VueTelInput from 'vue-tel-input'
    // import 'vue-tel-input/dist/vue-tel-input.css'
  
    export default {
      name: 'LoginPage',
  
      
  
      data() {
        return {
          phoneNumber: '',
          form: {
            email: '',
            password: '',
            food: null,
            checked: []
          },
          foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
          show: true
        }
      },
  
      methods: {
        onSubmit(event) {
          event.preventDefault()
          alert(JSON.stringify(this.form))
        },
        onReset(event) {
          event.preventDefault()
          // Reset our form values
          this.form.email = ''
          this.form.password = ''
          this.form.food = null
          this.form.checked = []
          // Trick to reset/clear native browser form validation state
          this.show = false
          this.$nextTick(() => {
            this.show = true
          })
        }
      }
    }
  </script>