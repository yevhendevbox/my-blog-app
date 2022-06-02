<template>
  <header class="header">
    <div class="header__logo">
      <img alt="logo" src="../assets/my-logo.jpg" height="50" />
      <p>YevhenD. blog->folio</p>
    </div>
    <div class="header__links">
      <ul>
        <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
        <router-link class="link" :to="{ name: 'Blogs' }">Blogs</router-link>
        <router-link class="link" :to="{ name: 'CreatePost' }">Create Post</router-link>
        <router-link class="link" :to="{ name: 'Login' }" v-if="!isLoggedIn">Login In / Register</router-link>
        <a v-else>
          <Button label="Info" type="button" class="p-button-rounded p-button-help p-button-sm" @click="handleSignOut">
            <Avatar icon="pi pi-user" class="p-mr-2" style="background-color: #ffffff; color: #609af8" shape="circle" />
            <span class="p-ml-2 p-text-bold"></span>
          </Button>
        </a>
      </ul>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
// import Menubar from "primevue/menubar";
import Avatar from "primevue/avatar";
import Button from "primevue/button";

import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "vue-router";

export default defineComponent({
  components: {
    // Menubar,
    Button,
    Avatar,
  },
  setup() {
    const isLoggedIn = ref(false);
    let auth: any;

    const router = useRouter();

    onMounted(() => {
      auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          isLoggedIn.value = true;
        } else {
          isLoggedIn.value = false;
        }
      });
    });

    const handleSignOut = () => {
      signOut(auth)
        .then(() => {
          router.push({ name: "Home" });
        })
        .catch((error) => {
          console.log(error.code, error.message);
        });
    };
    return { isLoggedIn, handleSignOut };
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
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--white);

  padding: 1em;
  box-shadow: -2px -5px 10px 2px rgba(0, 0, 0, 0.28);
}
.header__logo {
  display: flex;
  align-items: center;
}
.header__logo img {
  border-radius: 50px;
  max-width: 50px;
}
.header__links {
  text-transform: uppercase;
  font-size: 1.5rem;
}
.header__links a {
  line-height: 1.8;
  position: relative;
  z-index: 0;
}
.header__links ul a + a {
  margin-left: 2em;
}
.router-link-active::before {
  z-index: -1;
  content: "";
  position: absolute;
  top: 0;
  left: -0.5rem;
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: var(--accent);
  transform: rotate(118deg);
}
</style>
