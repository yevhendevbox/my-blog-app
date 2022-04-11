<template>
  <div>
    <Menubar :model="items" class="main-nav justify-content-between">
      <template #start>
        <img alt="logo" src="../assets/my-logo.jpg" height="50" />
        <p>YevhenD. blog->folio</p>
      </template>
      <template #item="{ item }">
        <router-link :to="item.to" custom v-slot="{ href, navigate, isActive, isExactActive }">
          <a
            :href="href"
            @click="navigate"
            :class="{
              'active-link': isActive,
              'active-link-exact': isExactActive,
            }"
            >{{ item.label }}</a
          >
        </router-link>
      </template>
    </Menubar>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Menubar from "primevue/menubar";

export default defineComponent({
  components: {
    Menubar,
  },
  setup() {
    const items = ref([
      {
        label: "Home",
        to: "/",
      },
      {
        label: "About",
        to: "/about",
      },
      {
        label: "Blogs",
        to: "/blogs",
      },
      {
        label: "Create post",
        to: "/create-post",
      },
      {
        label: "Login",
        to: "/login",
      },
    ]);

    return { items };
  },
});
</script>

<style scoped>
.main-nav {
  padding: 0 1em;
  margin-bottom: 2em;
  font-size: 1.6rem;
  font-family: var(--ff-p) !important;
  text-transform: uppercase;
}
.main-nav .p-menubar-start {
  align-self: flex-start;
  display: flex;
}
[role="menubar"] * {
  margin-left: 3em;
}
::v-deep(.p-menubar-button i) {
  font-size: 1.8rem;
}
::v-deep(.p-menubar-root-list) {
  padding: 2em 0 !important;
  gap: 1em;
}
::v-deep(.p-menubar-start) {
  display: flex;
  gap: 1em;
}
::v-deep(.p-menubar-start p) {
  text-transform: none;
}
.main-nav img {
  border-radius: 50px;
  max-width: 50px;
}
</style>
