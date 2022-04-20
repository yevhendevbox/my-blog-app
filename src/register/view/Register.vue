<template>
  <div class="form-wrapper">
    <form class="login">
      <p class="login-register">
        Already have an account?
        <router-link class="router-link" :to="{ name: 'Login' }">Login</router-link>
      </p>
      <h2>Create your account</h2>
      <div class="login-controls">
        <div class="p-inputgroup">
          <span class="p-inputgroup-addon">
            <i class="pi pi-user"></i>
          </span>
          <InputText placeholder="First Name" v-model="userData.firstName" class="p-inputtext-lg" />
        </div>
        <div class="p-inputgroup">
          <span class="p-inputgroup-addon">
            <i class="pi pi-user"></i>
          </span>
          <InputText placeholder="Last Name" v-model="userData.lastName" class="p-inputtext-lg" />
        </div>
        <div class="p-inputgroup">
          <span class="p-inputgroup-addon">
            <i class="pi pi-user"></i>
          </span>
          <InputText placeholder="Username" v-model="userData.userName" class="p-inputtext-lg" />
        </div>
        <div class="p-inputgroup">
          <span class="p-inputgroup-addon">
            <i class="pi pi-envelope"></i>
          </span>
          <InputText placeholder="Email" v-model="userData.email" class="p-inputtext-lg" />
        </div>
        <div class="p-inputgroup">
          <span class="p-inputgroup-addon">
            <i class="pi pi-lock"></i>
          </span>
          <Password v-model="userData.password" class="p-inputtext-lg"></Password>
        </div>
      </div>

      <MainButton>Sign up</MainButton>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import InputText from "primevue/inputtext";
import Password from "primevue/password";
import MainButton from "@/components/MainButton.vue";

export default defineComponent({
  name: "Register",
  components: {
    InputText,
    Password,
    MainButton,
  },
  setup() {
    const userData = reactive({
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
    });
    return {
      userData,
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
