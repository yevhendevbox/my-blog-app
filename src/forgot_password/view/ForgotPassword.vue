<template>
  <div>
    <div class="spiner-wrapper" v-if="loading">
      <ProgressSpinner class="p-progress-spinner-color" />
    </div>
    <div class="form-wrapper">
      <form class="fpassword">
        <p class="login-register">
          Back to
          <router-link class="router-link" :to="{ name: 'Login' }">Login</router-link>
        </p>
        <h2 class="fpassword-register">Reset password</h2>
        <p>Forgot your password? Enter your email to reset it</p>
        <div class="fpassword-controls">
          <div class="p-inputgroup">
            <span class="p-inputgroup-addon">
              <i class="pi pi-envelope"></i>
            </span>
            <InputText placeholder="Email" v-model="email" class="p-inputtext-lg" />
          </div>
          <p v-show="errorMsg" class="error-msg">{{ errorMsg }}</p>
        </div>
        <MainButton type="button" @click.prevent="resetPassword">Reset</MainButton>
      </form>
    </div>
    <Modal @close-modal="onCloseModal" :modalActive="modalActive">
      <p>{{ modalMessage }}</p>
    </Modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import InputText from "primevue/inputtext";
import MainButton from "@/components/MainButton.vue";
import Modal from "@/components/Modal.vue";
import ProgressSpinner from "primevue/progressspinner";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

export default defineComponent({
  name: "ForgotPassword",
  components: {
    InputText,
    MainButton,
    Modal,
    ProgressSpinner,
  },
  setup() {
    const email = ref("");
    const errorMsg = ref("");
    const modalActive = ref(false);
    const modalMessage = ref("");
    const loading = ref(false);
    const auth = getAuth();

    const resetPassword = () => {
      loading.value = true;
      sendPasswordResetEmail(auth, email.value)
        .then(() => {
          modalMessage.value = "If your account exist you will receive a email";
          loading.value = false;
          modalActive.value = true;
        })
        .catch((err) => {
          modalMessage.value = err.message;
          loading.value = false;
          modalActive.value = true;
        });
    };

    const onCloseModal = (): void => {
      modalActive.value = false;
      email.value = "";
    };

    return {
      email,
      errorMsg,
      modalActive,
      modalMessage,
      loading,
      onCloseModal,
      resetPassword,
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
.fpassword {
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
.error-msg {
  color: red;
}

.spiner-wrapper {
  display: grid;
  z-index: 1;
  background: hsla(0, 0%, 4%, 0.4);
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  transition: opacity 0.2s;
}

@keyframes p-progress-spinner-color {
  100%,
  0% {
    stroke: rgba(241, 130, 122, 1);
  }
  40% {
    stroke: rgba(250, 193, 150, 1);
  }
  66% {
    stroke: rgba(241, 130, 122, 1);
  }
  80%,
  90% {
    stroke: rgba(250, 193, 150, 1);
  }
}
</style>
