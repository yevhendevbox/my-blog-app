<template>
  <div class="container">
    <section class="hero">
      <h1>{{ heroSection.title }}</h1>
      <p class="hero-content">{{ heroSection.heroContent }}</p>
      <MainButton>Register now ></MainButton>
    </section>
    <section class="latest-posts">
      <h2>Latest posts</h2>
      <div class="posts-wrapper">
        <Card class="sample-post" v-for="post in sampleBlogPost" :key="post.id">
          <template #header>
            <img
              :src="require(`../assets/${post.thumbnail}.jpg`)"
              style="height: 15rem"
            />
          </template>
          <template #title> {{ post.title }} </template>
          <template #content>
            <p>{{ post.content }}</p>
          </template>
          <template #footer> </template>
        </Card>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import MainButton from "@/components/MainButton.vue";
import Card from "primevue/card";

export default defineComponent({
  name: "Home",
  components: { MainButton, Card },

  setup() {
    const heroSection = reactive({
      title: "Welcome!",
      heroContent:
        "Weekly blog articles with all things programming including HTML, CSS, JavaScript and more. Register today to never miss a post!",
    });

    const sampleBlogPost = reactive([
      {
        id: 0,
        title: "This is the filler title",
        content: "Dummy text to emulate the description of a post",
        thumbnail: "poster1",
      },
      {
        id: 1,
        title: "This is the filler title",
        content: "Dummy text to emulate the description of a post",
        thumbnail: "poster2",
      },
      {
        id: 2,
        title: "This is the filler title",
        content: "Dummy text to emulate the description of a post",
        thumbnail: "poster3",
      },
      {
        id: 3,
        title: "This is the filler title",
        content: "Dummy text to emulate the description of a post",
        thumbnail: "poster4",
      },
    ]);

    return { heroSection, sampleBlogPost };
  },
});
</script>
<style scoped>
.hero {
  display: flex;
  flex-direction: column;
  gap: 2em;
  margin-bottom: 8em;
  margin-top: 4em;
}
.hero h1 {
  font-size: 11.5rem;
}
.hero-content {
  font-size: 2.4rem;
  line-height: 1.6;
  margin: 0;
  margin-bottom: 2em;
}
.posts-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  margin-bottom: 4em;
  width: 100%;
}
.latest-posts h2 {
  margin-bottom: 2em;
}
.sample-post {
  width: 48%;
  font-size: 1.4rem;
}
@media screen and (min-width: 768px) {
  .posts-wrapper {
    justify-content: space-between;
  }
  .sample-post {
    width: 23%;
  }
}
</style>
