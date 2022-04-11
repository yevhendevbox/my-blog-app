<template>
  <div class="container">
    <div class="edit-header">
      <h1>Blogs archive</h1>
      <div class="edit-control">
        <p class="edit-title">Toggle edit post</p>
        <InputSwitch v-model="checked" @click="editModeToggle" />
      </div>
    </div>
    <div class="posts-wrapper">
      <Card class="sample-post" v-for="post in posts" :key="post.id">
        <template #header>
          <!-- eslint-disable -->
          <img
            :src="require(`../../assets/${post.thumbnail}.jpg`)"
            style="height: 15rem"
          />
        </template>
        <template #title> {{ post.title }} </template>
        <template #content>
          <p>{{ post.content }}</p>
        </template>
        <template #footer>
                      <div class="card-control" v-show="checked">
              <Button
                icon="pi pi-pencil"
                class="p-button-rounded p-button-help p-button-outlined"
              />
              <Button
                icon="pi pi-trash"
                class="p-button-rounded p-button-danger p-button-outlined"
              />
            </div>
        </template>
      </Card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from "vue";
import Card from "primevue/card";
import Button from "primevue/button";
import InputSwitch from "primevue/inputswitch";
import { useStore } from "vuex";
import { BlogsActionEnum, BlogsGettersEnum } from "@/blogs/store/types";
import { StoreModuleEnum } from "@/store/types";

export default defineComponent({
  name: "Blog",
  components: { Card, Button, InputSwitch },
  setup() {
    const store = useStore();
    const posts = reactive(store.state.BlogsStore.samplePosts);
    let checked = ref(false);

    onMounted(() => {
      checked.value = store.getters[`${StoreModuleEnum.BlogsStore}/${BlogsGettersEnum.getEditModeStatus}`];
    });
    const editModeToggle = () => {
      store.dispatch(`${StoreModuleEnum.BlogsStore}/${BlogsActionEnum.TOGGLE_EDIT}`);
    };

    return {
      posts,
      checked,
      editModeToggle,
    };
  },
});
</script>

<style scoped>
.posts-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  margin: 4em 0;
  width: 100%;
}
.edit-header {
  display: flex;
  justify-content: space-between;
}
.edit-control {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
::v-deep(.p-inputswitch-checked .p-inputswitch-slider) {
  background: var(--accent) !important;
}
</style>
