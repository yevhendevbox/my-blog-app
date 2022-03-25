<template>
  <Navigation />
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navigation from "@/components/Navigation.vue";
import Footer from "@/components/Footer.vue";

export default defineComponent({
  components: {
    Navigation,
    Footer,
  },
});
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-size: var(--fz-p);
}
</style>
