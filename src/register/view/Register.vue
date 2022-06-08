<template>
  <div class="form-wrapper">
    <form class="login">
      <p class="login-register">
        Already have an account?
        <router-link class="router-link" :to="{ name: 'Login' }">Login</router-link>
      </p>
      <h2>Create your account</h2>
      <div class="register-controls">
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
          <Password placeholder="Password" v-model="userData.password" class="p-inputtext-lg"></Password>
        </div>
        <p class="error" v-show="error">{{ errorMsg }}</p>
      </div>

      <MainButton @click.prevent="register">Sign up</MainButton>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import InputText from "primevue/inputtext";
import Password from "primevue/password";
import MainButton from "@/components/MainButton.vue";
import { useRouter } from "vue-router";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "@/firebase/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";

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
    const error = ref(false);
    const errorMsg = ref("");
    const router = useRouter();

    const register = () => {
      if (userData.firstName !== "" && userData.lastName !== "" && userData.userName !== "" && userData.email !== "" && userData.password !== "") {
        error.value = false;
        errorMsg.value = "";
        const firebaseAuth = getAuth();
        createUserWithEmailAndPassword(firebaseAuth, userData.email, userData.password)
          .then((data) => {
            setDoc(doc(db, "users", data.user.uid), {
              email: userData.email,
              password: userData.password,
              firstName: userData.firstName,
              lastName: userData.lastName,
              userName: userData.userName,
            });
            router.push({ name: "CreatePost" });
          })
          .catch((error) => {
            console.log(error.code, error.message);
          });
        return;
      }
      error.value = !error.value;
      errorMsg.value = "Please fill out all the fields!";
      return;
    };

    return {
      error,
      errorMsg,
      userData,
      register,
      router,
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
