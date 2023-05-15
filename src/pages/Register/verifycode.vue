<template>
    <div class="d-flex justify-content-center align-items-center" id="verification-form" style="background-color: #26539C;">
      <b-card title="Verification Code" style="max-width: 25rem;">
        <div>
          <h3 class="d-flex justify-content-center text-white">ادخل كود التحقيق</h3>
          <form @submit.prevent="onSubmit" v-if="show">
            <div class="d-flex justify-content-center mb-3">
              <input type="text" class="form-control mx-2 text-bg-light" maxlength="1" v-model="code[0]" @keyup="handleInput(0, $event)" required ref="input0">
              <input type="text" class="form-control mx-2 text-bg-light" maxlength="1" v-model="code[1]" @keyup="handleInput(1, $event)" required ref="input1">
              <input type="text" class="form-control mx-2 text-bg-light" maxlength="1" v-model="code[2]" @keyup="handleInput(2, $event)" required ref="input2">
              <input type="text" class="form-control mx-2 text-bg-light" maxlength="1" v-model="code[3]" @keyup="handleInput(3, $event)" required ref="input3">
            </div>
            <b-button type="submit" variant="primary" class="d-flex justify-content-center btn-imdad btn-lg">ادخل</b-button>
          </form>
        </div>
      </b-card>
    </div>
  </template>
  
  <script>
  export default {
    name:'VerifyCodePage',
    data() {
      return {
        code: ['', '', '', ''],
        show: true
      }
    },
    methods: {
      onSubmit() {
        const code = this.code.join('');
        // do something with the verification code
        console.log('Verification code submitted:', code);
      },
      handleInput(index, event) {
        if (event.target.value.length === 1) {
          const nextIndex = index + 1;
          if (nextIndex < 4) {
            this.$refs[`input${nextIndex}`][0].focus();
          }
        }
      }
    }
  }
  </script>
  
  <style scoped>
  #verification-form {
    height: 100vh;
    background-color: #f8f9fa;
  }
  </style>