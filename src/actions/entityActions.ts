import IPost from "../entities/Post";

export const REQUEST_POSTS_DATA = "REQUEST_POSTS_DATA";
export const RECEIVE_POSTS_DATA = "RECEIVE_POSTS_DATA";
export const ADD_POST_DATA = "ADD_POST_DATA";
export const RECEIVE_SINGLE_POST_DATA = "RECEIVE_SINGLE_POST_DATA";
export const EDIT_POST_DATA = "EDIT_POST_DATA";
export const UPDATE_SINGLE_POST_DATA = "UPDATE_SINGLE_POST_DATA";
export const REMOVE_POST = "REMOVE_POST";
export const DELETE_POST = "DELETE_POST";

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
export const requestPostsData = (): IBaseActionType => ({
  type: REQUEST_POSTS_DATA
});

// Receive all posts
export const receivePostsData = (data: IPost[]): IPostsActionType => ({
  type: RECEIVE_POSTS_DATA,
  data
});

// Add single post
export const addPostData = (data: IPost): ISinglePostActionType => ({
  type: ADD_POST_DATA,
  data
});

// Receive single post
export const receiveSinglePostData = (data: IPost): ISinglePostActionType => ({
  type: RECEIVE_SINGLE_POST_DATA,
  data
});

// Edit single post
export const editPostData = (data: IPost): ISinglePostActionType => ({
  type: EDIT_POST_DATA,
  data
});

export const updatePostData = (data: IPost): ISinglePostActionType => ({
  type: UPDATE_SINGLE_POST_DATA,
  data
});

// Remove single post
export const removePost = (id: number): IRemovePostActionType => ({
  type: REMOVE_POST,
  id
});

export const deletePost = (data: any): ISinglePostActionType => ({
  type: DELETE_POST,
  data
});
