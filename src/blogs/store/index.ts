import { Module } from "vuex";
import { RootStateIntarface } from "@/store/types";
import { BlogPostsInterface } from "@/blogs/store/types";
import { getters } from "@/blogs/store/getters";
import { mutations } from "@/blogs/store/mutations";
import { actions } from "@/blogs/store/actions";

export const state: BlogPostsInterface = {
  samplePosts: [
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
  ],
  isEditMode: false,
};

export const BlogsStore: Module<BlogPostsInterface, RootStateIntarface> = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
