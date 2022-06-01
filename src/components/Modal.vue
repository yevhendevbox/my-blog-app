<template>
  <div class="modal-outer" :class="{ open: modalActive }">
    <div class="modal-inner">
      <slot />
      <MainButton @click="closeModal">Close</MainButton>
    </div>
  </div>
</template>

<script lang="ts">
import MainButton from "@/components/MainButton.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    MainButton,
  },
  props: ["modalActive"],
  emits: ["close-modal"],
  setup(props, context) {
    const closeModal = () => {
      context.emit("close-modal");
    };

    return {
      closeModal,
    };
  },
});
</script>

<style scoped>
.modal-outer {
  display: grid;
  background: hsla(0, 0%, 4%, 0.7);
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s;
}

.modal-outer.open {
  opacity: 1;
  pointer-events: all;
}

.modal-inner {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 600px;
  min-width: 400px;
  padding: 2rem;
  border-radius: 5px;
  min-height: 200px;
  background: white;
  transform: translateY(-200%);
  transition: transform 0.3s;
}

.modal-outer.open .modal-inner {
  transform: translateY(0);
}
</style>
