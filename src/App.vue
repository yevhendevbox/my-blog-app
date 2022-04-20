<template>
  <Navigation v-if="!navigation" />
  <router-view />
  <Footer v-if="!navigation" />
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import Navigation from "@/components/Navigation.vue";
import Footer from "@/components/Footer.vue";
import { useRoute } from "vue-router";

export default defineComponent({
  components: {
    Navigation,
    Footer,
  },
  setup() {
    const route = useRoute();
    const navigation = ref(false);

    const checkRoute = () => {
      if (route.name === "Login" || route.name === "Register" || route.name === "ForgotPassword") {
        navigation.value = true;
        return;
      }
      navigation.value = false;
    };
    checkRoute();
    watch(() => route.name, checkRoute);
    return {
      navigation,
    };
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
