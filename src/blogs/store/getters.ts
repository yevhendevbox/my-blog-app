import { GetterTree } from "vuex";

import { RootStateIntarface } from "@/store/types";
import { BlogPostsInterface, Getters } from "@/blogs/store/types";

export const getters: GetterTree<BlogPostsInterface, RootStateIntarface> & Getters = {
  getEditModeStatus: (state) => {
    return state.isEditMode;
  },
  getPosts: (state) => {
    return state.samplePosts;
  },
};
