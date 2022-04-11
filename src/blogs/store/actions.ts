import { ActionTree } from "vuex";
import { RootStateIntarface } from "@/store/types";
import { BlogPostsInterface, BlogsActionEnum, BlogsMutationEnum, Actions } from "@/blogs/store/types";

export const actions: ActionTree<BlogPostsInterface, RootStateIntarface> & Actions = {
  [BlogsActionEnum.TOGGLE_EDIT]({ commit }, payload): void {
    commit(BlogsMutationEnum.TOGGLE_EDIT_MODE, payload);
  },
};
