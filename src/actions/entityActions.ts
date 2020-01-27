import IPost from "../interfaces/Post";

export const FETCH_POSTS_ASYNC = "FETCH_POSTS_ASYNC";
export const FETCH_POSTS = "FETCH_POSTS";
export const ADD_POST_ASYNC = "ADD_POST_ASYNC";
export const ADD_POST = "ADD_POST";
export const EDIT_POST = "EDIT_POST";
export const EDIT_POST_ASYNC = "EDIT_POST_ASYNC";
export const REMOVE_POST_ASYNC = "REMOVE_POST_ASYNC";
export const REMOVE_POST = "REMOVE_POST";

export interface IBaseActionType {
  type: string;
}

export interface IPostsActionType extends IBaseActionType {
  data: IPost[];
}

export interface ISinglePostActionType extends IBaseActionType {
  data: IPost;
}

export interface IRemovePostActionType extends IBaseActionType {
  id: number;
}

// Request all posts
export const fetchPostsAsync = (): IBaseActionType => ({
  type: FETCH_POSTS_ASYNC
});

// Receive all posts
export const fetchPosts = (data: IPost[]): IPostsActionType => ({
  type: FETCH_POSTS,
  data
});

// Add single post
export const addPostAsync = (data: IPost): ISinglePostActionType => ({
  type: ADD_POST_ASYNC,
  data
});

// Receive single post
export const addPost = (data: IPost): ISinglePostActionType => ({
  type: ADD_POST,
  data
});

// Edit single post
export const editPostAsync = (data: IPost): ISinglePostActionType => ({
  type: EDIT_POST_ASYNC,
  data
});

export const editPost = (data: IPost): ISinglePostActionType => ({
  type: EDIT_POST,
  data
});

// Remove single post
export const removePostAsync = (id: number): IRemovePostActionType => ({
  type: REMOVE_POST_ASYNC,
  id
});

export const removePost = (data: any): ISinglePostActionType => ({
  type: REMOVE_POST,
  data
});
