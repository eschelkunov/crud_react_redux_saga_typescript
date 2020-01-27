import { takeLatest, put, all, call, takeEvery } from "redux-saga/effects";
import {
  fetchData,
  addSinglePost,
  editSinglePost,
  removeSinglePost
} from "../api";
import {
  ADD_POST_ASYNC,
  IPostsActionType,
  ISinglePostActionType,
  REMOVE_POST_ASYNC,
  IRemovePostActionType,
  removePost,
  EDIT_POST_ASYNC,
  editPost,
  addPost,
  fetchPosts,
  FETCH_POSTS_ASYNC
} from "../actions/entityActions";

export const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

// Fetch posts
export function* fetchPostsAsync(action: IPostsActionType) {
  try {
    const data = yield call(fetchData);
    yield put(fetchPosts(data));
  } catch (error) {
    console.log("There was an error in getApiData method", error);
  }
}
function* watchFetchPostsData() {
  yield takeLatest(FETCH_POSTS_ASYNC, fetchPostsAsync);
}

// Add post
export function* addPostAsync(action: ISinglePostActionType) {
  try {
    const data = yield call(addSinglePost, action.data);
    yield put(addPost(data));
  } catch (error) {
    console.log("There was an error in addPostData method", error);
  }
}
function* watchAddPostAsync() {
  yield takeEvery(ADD_POST_ASYNC, addPostAsync);
}

// Edit post
export function* editPostAsync(action: ISinglePostActionType) {
  try {
    const data = yield call(editSinglePost, action.data);
    yield put(editPost(data));
  } catch (error) {
    console.log("There was an error in addPostData method", error);
  }
}
function* watchEditPostAsync() {
  yield takeEvery(EDIT_POST_ASYNC, editPostAsync);
}

// Remove post
export function* removePostAsync(action: IRemovePostActionType) {
  try {
    const response = yield call(removeSinglePost, action.id);
    if (response.status === 200) {
      yield put(removePost({ id: action.id }));
    }
  } catch (error) {
    console.log("There was an error in addPostData method", error);
  }
}
function* watchRemovePostAsync() {
  yield takeEvery(REMOVE_POST_ASYNC, removePostAsync);
}

export default function* rootSaga() {
  yield all([
    watchFetchPostsData(),
    watchAddPostAsync(),
    watchEditPostAsync(),
    watchRemovePostAsync()
  ]);
}
