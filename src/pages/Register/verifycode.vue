<template>
  <div class="d-flex justify-content-center align-items-center" id="verification-form">
    <b-card title="رمز التحقيق :" style="max-width: 25rem;">
      <h1 class="p-3 text-light">ادخل رمز التحقيق</h1>
      <div>
        <form @submit.prevent="onSubmit" v-if="show">
          <div class="verification-inputs">
            <input type="text" class="form-control bg-light" maxlength="1" v-model="code[0]" @keyup="handleInput(0, $event)"
              required ref="input0">
            <input type="text" class="form-control bg-light" maxlength="1" v-model="code[1]" @keyup="handleInput(1, $event)"
              required ref="input1">
            <input type="text" class="form-control bg-light" maxlength="1" v-model="code[2]" @keyup="handleInput(2, $event)"
              required ref="input2">
            <input type="text" class="form-control bg-light" maxlength="1" v-model="code[3]" @keyup="handleInput(3, $event)"
              required ref="input3">
          </div>
          <b-button type="submit" variant="primary" class="verification-button btn-imdad btn-lg">تحقٌق</b-button>
        </form>
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "VerifyCodePage",
  data() {
    return {
      code: ["", "", "", ""],
      show: true,
    };
  },
  methods: {
    onSubmit() {
      const code = this.code.join("");
      // do something with the verification code
      console.log("Verification code submitted:", code);
    },
    handleInput(index) {
  const inputLength = this.code[index].length;
  if (inputLength === 1) {
    const nextIndex = index + 1;
    if (nextIndex < 4 && this.$refs[`input${nextIndex}`] && this.$refs[`input${nextIndex}`][0]) {
      this.$nextTick(() => {
        this.$refs[`input${nextIndex}`][0].$el.focus();
      });
    }
  } else if (inputLength === 0 && index > 0) {
    const prevIndex = index - 1;
    this.$nextTick(() => {
      this.$refs[`input${prevIndex}`][0].$el.focus();
    });
  }
}



,


  },
};
</script>

<style scoped>
#verification-form {
  height: 100vh;
  background-color: #4226a1;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
}

.verification-inputs {
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.verification-inputs input {
  margin: 0 0.5rem;
  text-align: center;
  width: 2rem;
  height: 2rem;
}

.verification-button {
  display: flex;
  justify-content: center;
  
}
</style>
