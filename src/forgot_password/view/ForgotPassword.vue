<template>
  <div class="form-wrapper">
    <form class="login">
      <h2 class="login-register">Reset password</h2>
      <p>Forgot your password? Enter your email to reset it</p>
      <div class="login-controls">
        <div class="p-inputgroup">
          <span class="p-inputgroup-addon">
            <i class="pi pi-envelope"></i>
          </span>
          <InputText placeholder="Email" v-model="email" class="p-inputtext-lg" />
        </div>
      </div>

      <MainButton>Reset</MainButton>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import InputText from "primevue/inputtext";
import MainButton from "@/components/MainButton.vue";

export default defineComponent({
  name: "ForgotPassword",
  components: {
    InputText,
    MainButton,
  },
  setup() {
    const email = ref();
    return {
      email,
    };
  },
});
</script>

<style scoped>
.form-wrapper {
  height: 100vh;
  width: 40%;
  min-width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: rgb(241, 130, 122);
  background: linear-gradient(35deg, rgba(241, 130, 122, 1) 0%, rgba(250, 193, 150, 1) 100%);
  clip-path: polygon(0 0, 86% 0, 75% 100%, 0% 100%);
}
.login {
  margin-right: 5em;
  display: flex;
  flex-direction: column;
  min-height: 400px;
  justify-content: center;
  align-items: flex-start;
  gap: 1em;
}
.p-inputgroup {
  margin-bottom: 1em;
}
</style>
