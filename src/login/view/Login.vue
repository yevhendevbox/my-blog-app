<template>
  <div class="form-wrapper">
    <form class="login">
      <p class="login-register">
        Don't have an account?
        <router-link class="router-link" :to="{ name: 'Register' }">Register</router-link>
      </p>
      <h2>Login to YevheD. blog->folio</h2>
      <div class="login-controls">
        <div class="p-inputgroup">
          <span class="p-inputgroup-addon">
            <i class="pi pi-envelope"></i>
          </span>
          <InputText placeholder="Email" v-model="email" class="p-inputtext-lg" />
        </div>
        <div class="p-inputgroup">
          <span class="p-inputgroup-addon">
            <i class="pi pi-lock"></i>
          </span>
          <Password placeholder="Password" v-model="password" class="p-inputtext-lg"></Password>
        </div>
      </div>
      <router-link class="forgot-password" :to="{ name: 'ForgotPassword' }">Forgot your password?</router-link>
      <MainButton @click.prevent="signIn">Sign in</MainButton>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import InputText from "primevue/inputtext";
import Password from "primevue/password";
import MainButton from "@/components/MainButton.vue";

// import firebase from "firebase/";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "Login",
  components: {
    InputText,
    Password,
    MainButton,
  },
  setup() {
    const password = ref("");
    const email = ref("");
    const error = ref(false);
    const errorMsg = ref("");
    const router = useRouter();

    const signIn = (): void => {
      if (email.value !== "" && password.value !== "") {
        error.value = false;
        errorMsg.value = "";
        signInWithEmailAndPassword(getAuth(), email.value, password.value)
          .then((data) => {
            console.log("Succesfully signed!");
            router.push({ name: "Home" });
          })
          .catch((error) => {
            console.log(error.message);
          });
        return;
      }
      error.value = !error.value;
      errorMsg.value = "Please fill out all the fields!";
      return;
    };

    return {
      password,
      email,
      error,
      errorMsg,
      signIn,
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
