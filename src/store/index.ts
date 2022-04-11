import { createStore } from "vuex";
import { RootStateIntarface } from "@/store/types";
import { BlogsStore } from "@/blogs/store";

export default createStore<RootStateIntarface>({
  strict: process.env.NODE_ENV !== "production",
  modules: {
    BlogsStore,
  },
});
