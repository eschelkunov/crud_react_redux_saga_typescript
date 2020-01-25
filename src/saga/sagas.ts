import { takeLatest, put, all, call, takeEvery } from "redux-saga/effects";
import {
  fetchData,
  addSinglePost,
  editSinglePost,
  removeSinglePost
} from "../api";
import {
  REQUEST_POSTS_DATA,
  ADD_POST_DATA,
  receivePostsData,
  IPostsActionType,
  ISinglePostActionType,
  receiveSinglePostData,
  EDIT_POST_DATA,
  updatePostData,
  REMOVE_POST,
  deletePost,
  IRemovePostActionType
} from "../actions/entityActions";

export const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

// Fetch posts
export function* getPostsData(action: IPostsActionType) {
  try {
    const data = yield call(fetchData);
    yield put(receivePostsData(data));
  } catch (error) {
    console.log("There was an error in getApiData method", error);
  }
}
function* watchFetchPostsData() {
  yield takeLatest(REQUEST_POSTS_DATA, getPostsData);
}

// Add post
export function* addPostData(action: ISinglePostActionType) {
  try {
    const data = yield call(addSinglePost, action.data);
    yield put(receiveSinglePostData(data));
  } catch (error) {
    console.log("There was an error in addPostData method", error);
  }
}
function* watchAddPostData() {
  yield takeEvery(ADD_POST_DATA, addPostData);
}

// Edit post
export function* editPostData(action: ISinglePostActionType) {
  try {
    const data = yield call(editSinglePost, action.data);
    yield put(updatePostData(data));
  } catch (error) {
    console.log("There was an error in addPostData method", error);
  }
}
function* watchEditPostData() {
  yield takeEvery(EDIT_POST_DATA, editPostData);
}

// Remove post
export function* removePost(action: IRemovePostActionType) {
  try {
    const response = yield call(removeSinglePost, action.id);
    if (response.status === 200) {
      yield put(deletePost({ id: action.id }));
    }
  } catch (error) {
    console.log("There was an error in addPostData method", error);
  }
}
function* watchRemovePost() {
  yield takeEvery(REMOVE_POST, removePost);
}

export default function* rootSaga() {
  yield all([
    watchFetchPostsData(),
    watchAddPostData(),
    watchEditPostData(),
    watchRemovePost()
  ]);
}
