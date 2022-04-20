<template>
  <button class="custom-button">
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainButton",
  setup() {
    return {};
  },
});
</script>

<style scoped>
.custom-button {
  font-family: var(--ff-p);
  font-weight: 500;
  background: transparent;
  outline: none !important;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;

  width: 50%;
  max-width: 250px;
  height: 40px;
  line-height: 42px;
  padding: 0;
  border: none;
}
.custom-button span {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
}
.custom-button::before,
.custom-button::after {
  position: absolute;
  content: "";
  height: 0%;
  width: 2px;
  background: #000;
}
.custom-button::before {
  right: 0;
  top: 0;
  transition: all 0.1s ease;
}
.custom-button::after {
  left: 0;
  bottom: 0;
  transition: all 0.1s 0.2s ease;
}
.custom-button:hover::before {
  transition: all 0.1s 0.2s ease;
  height: 100%;
}
.custom-button:hover::after {
  transition: all 0.1s ease;
  height: 100%;
}
.custom-button span::before,
.custom-button span::after {
  position: absolute;
  content: "";
  background: #000;
}
.custom-button span::before {
  left: 0;
  top: 0;
  width: 0%;
  height: 2px;
  transition: all 0.1s 0.1s ease;
}
.custom-button span::after {
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
}
.custom-button span:hover::before {
  width: 100%;
}
</style>
