import { MutationTree } from "vuex";
import { BlogPostsInterface, BlogsMutationEnum, Mutations } from "@/blogs/store/types";

export const mutations: MutationTree<BlogPostsInterface> & Mutations = {
  [BlogsMutationEnum.TOGGLE_EDIT_MODE]: (state) => {
    state.isEditMode = !state.isEditMode;
  },
};
