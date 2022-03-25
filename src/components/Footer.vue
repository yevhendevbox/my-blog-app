<template>
  <footer>
    <div class="container">
      <div class="footer-wrapper">
        <div class="left">
          <div class="footer-social">
            <router-link class="header" :to="{ name: 'Home' }"
              >MyFireBlog</router-link
            >
            <ul>
              <li>
                <a href="https://twitter.com/yevhen_dovhan" target="_blank"
                  ><i class="pi pi-twitter"></i
                ></a>
              </li>
              <li>
                <a href="https://www.facebook.com/yevhen.dovhan" target="_blank"
                  ><i class="pi pi-facebook"></i
                ></a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/yevhen-dovhan/"
                  target="_blank"
                  ><i class="pi pi-linkedin"></i
                ></a>
              </li>
              <li>
                <a href="https://github.com/yevhendevbox" target="_blank"
                  ><i class="pi pi-github"></i
                ></a>
              </li>
              <li>
                <a href="mailto:dovhan.work@gmail.com" target="_blank"
                  ><i class="pi pi-google"></i
                ></a>
              </li>
            </ul>
          </div>
          <div class="footer-links">
            <ul>
              <router-link class="link" :to="{ name: 'Home' }"
                >Home</router-link
              >
              <router-link class="link" :to="{ name: 'Blogs' }"
                >Blogs</router-link
              >
              <router-link class="link" :to="{ name: 'CreatePost' }"
                >Create Post</router-link
              >
              <router-link class="link" :to="{ name: 'Login' }"
                >Login In / Register</router-link
              >
            </ul>
          </div>
        </div>
        <div class="right">
          <p>&copy; 2022 All Rights Reserved</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Footer",
  setup() {
    return {};
  },
});
</script>

<style scoped>
footer {
  padding: 1.5em 0;
  margin-top: auto;
  background-color: var(--darken-4);
  color: var(--white);
  text-align: center;
}
footer ul {
  padding: 0;
  margin: 0;
  list-style: none;
}
footer i {
  font-size: 2rem;
}
.left,
.right {
  width: 100%;
}
.footer-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.footer-links ul,
.footer-social ul {
  display: flex;
  padding: 1em 0;
  align-items: center;
  justify-content: center;
  gap: 2em;
}
.link {
  text-transform: uppercase;
}
.header {
  display: block;
  font-size: 2rem;
  margin: 0.5em 0;
}
</style>
