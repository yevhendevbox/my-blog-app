import { BlogPostsInterface } from "@/blogs/store/types";

export interface RootStateIntarface {
  blogsStore: BlogPostsInterface;
}

export enum StoreModuleEnum {
  BlogsStore = "BlogsStore",
}
