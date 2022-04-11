import { ActionContext } from "vuex";
import { RootStateIntarface } from "@/store/types";

export interface PostTypeInterface {
  id: number;
  title: string;
  content: string;
  thumbnail: string;
}

export interface BlogPostsInterface {
  samplePosts: Array<PostTypeInterface> | [];
  isEditMode: boolean;
}

export enum BlogsGettersEnum {
  getEditModeStatus = "getEditModeStatus",
  getPosts = "getPosts",
}

export enum BlogsMutationEnum {
  TOGGLE_EDIT_MODE = "TOGGLE_EDIT_MODE",
}

export enum BlogsActionEnum {
  TOGGLE_EDIT = "TOGGLE_EDIT",
}

export type Getters<S = BlogPostsInterface> = {
  [BlogsGettersEnum.getEditModeStatus](state: S): boolean;
  [BlogsGettersEnum.getPosts](state: S): Array<PostTypeInterface>;
};

export type Mutations<S = BlogPostsInterface> = {
  [BlogsMutationEnum.TOGGLE_EDIT_MODE](state: S): void;
};

export interface Actions {
  [BlogsActionEnum.TOGGLE_EDIT]({ commit }: AugmentedActionContext, payload?: any): void;
}
export type AugmentedActionContext = {
  commit<K extends keyof Mutations>(key: K, payload: Parameters<Mutations[K]>[1]): ReturnType<Mutations[K]>;
} & Omit<ActionContext<BlogPostsInterface, RootStateIntarface>, "commit">;
