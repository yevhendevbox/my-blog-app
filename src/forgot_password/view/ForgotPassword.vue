<template>
  <div>
    <div class="form-wrapper">
      <ProgressSpinner v-if="loading" /> 
      <form class="fpassword">
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
        <MainButton type="button" @click="toggleModal">Reset</MainButton>
      </form>
    </div>
    <Modal @close-modal="onCloseModal" :modalActive="modalActive">
      <p>Succesfull change the email!</p>
    </Modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import InputText from "primevue/inputtext";
import MainButton from "@/components/MainButton.vue";
import Modal from "@/components/Modal.vue";
import ProgressSpinner from 'primevue/progressspinner';

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
    const loading = ref(false);

    const toggleModal = () => {
      errorMsg.value = "";
      if (!email.value) {
        errorMsg.value = "Email input is empty!";
        return;
      }
      modalActive.value = !modalActive.value;
    };
    const onCloseModal = (): void => {
      toggleModal();
      email.value = "";
    };

    return {
      email,
      errorMsg,
      modalActive,
      loading,
      toggleModal,
      onCloseModal,
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
@keyframes p-progress-spinner-color {
    100%,
    0% {
        stroke: #d62d20;
    }
    40% {
        stroke: #0057e7;
    }
    66% {
        stroke: #008744;
    }
    80%,
    90% {
        stroke: #ffa700;
    }
}
</style>
