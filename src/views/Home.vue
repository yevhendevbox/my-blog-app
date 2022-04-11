/* eslint-disable max-len */
<template>
  <div class="container">
    <section class="hero">
      <div class="hero-title">
        <h1>{{ heroSection.title }}</h1>
        <h2>{{ heroSection.subTitle }}</h2>
      </div>
      <div class="hero-content">
        <p class="hero-text">{{ heroSection.heroContent }}</p>
        <MainButton>Register now ></MainButton>
      </div>
    </section>
    <section class="latest-posts">
      <h2>Latest posts</h2>
      <div class="posts-wrapper">
        <Card class="sample-post" v-for="post in sampleBlogPost" :key="post.id">
          <template #header>
            <img :src="require(`../assets/${post.thumbnail}.jpg`)" style="height: 15rem" />
          </template>
          <template #title> {{ post.title }} </template>
          <template #content>
            <p>{{ post.content }}</p>
          </template>
          <template #footer>
            <div class="card-control">
              <Button icon="pi pi-pencil" class="p-button-rounded p-button-help p-button-outlined" />
              <Button icon="pi pi-trash" class="p-button-rounded p-button-danger p-button-outlined" />
            </div>
          </template>
        </Card>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import MainButton from "@/components/MainButton.vue";
import Card from "primevue/card";
import Button from "primevue/button";
import { useStore } from "vuex";

export default defineComponent({
  name: "Home",
  components: { MainButton, Card, Button },

  setup() {
    const heroSection = reactive({
      title: "Web Developer",
      subTitle: "Freelancer",
      heroContent: "Weekly blog articles with all things programming including HTML, CSS, JavaScript and more. Register today to never miss a post!",
    });

    const store = useStore();
    const sampleBlogPost = reactive(store.state.BlogsStore.samplePosts);

    return { heroSection, sampleBlogPost };
  },
});
</script>
<style scoped>
.hero {
  display: flex;
  flex-direction: column;
  gap: 2em;
  margin-bottom: 4em;
  margin-top: 4em;
}
.hero h1 {
  font-size: 10.5rem;
  line-height: 1;
}
.hero h2 {
  font-size: 5.6rem;
  line-height: 1;
  font-family: var(--ff-p);
  text-transform: none;
  font-weight: 300;
  line-height: 0.8;
}
.hero-content {
  font-size: 2.4rem;
  line-height: 1.6;
  margin: 0;
  margin-bottom: 2em;
}
.latest-posts h2 {
  margin-bottom: 2em;
}
@media screen and (min-width: 768px) {
  .hero {
    display: flex;
    margin-bottom: 8em;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
  }
  .hero h1 {
    font-size: 25rem;
    line-height: 0.8;
    margin-bottom: 0;
  }
  .hero h2 {
    margin: 0;
    font-size: 20rem;
  }
  .hero h1::before {
    top: -40px;
  }
  .hero-title {
    width: 70%;
    margin: 6em 0;
  }
  .hero-content {
    width: 20%;
    font-size: 1.6rem;
  }
  .hero-text {
    margin-bottom: 4em;
  }
  .posts-wrapper {
    justify-content: flex-start;
  }
}
</style>
