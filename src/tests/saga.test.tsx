import { call } from "redux-saga/effects";
import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import {
  fetchData,
  addSinglePost,
  editSinglePost,
  removeSinglePost
} from "../api";
import {
  fetchPostsAsync,
  addPostAsync,
  editPostAsync,
  removePostAsync
} from "../saga/sagas";
import {
  fetchPosts,
  addPost,
  editPost,
  removePost
} from "../actions/entityActions";

describe("Saga fetchPosts", () => {
  it("fetches the posts", () => {
    const fakeData = [
      { id: 1, title: "Test 1", completed: true },
      { id: 2, title: "Test 2", completed: false }
    ];

    return expectSaga(fetchPostsAsync, fetchData)
      .provide([[call(fetchData), fakeData]])
      .put(fetchPosts(fakeData))
      .run();
  });
});

describe("Saga addPostAsync", () => {
  it("adds the post", () => {
    const fakePost = { title: "Test 1", completed: false };
    const response = { id: 100, title: "Test 1", completed: false };

    return expectSaga(addPostAsync, addSinglePost)
      .provide([[matchers.call.fn(addSinglePost), response]])
      .put(addPost(response))
      .run();
  });
});

describe("Saga editPostAsync", () => {
  it("edits the post", () => {
    const updates = { id: 1, title: "Test 1", completed: true };
    const response = { id: 1, title: "Test 1", completed: true };

    return expectSaga(editPostAsync, editSinglePost)
      .provide([[matchers.call.fn(editSinglePost), response]])
      .put(editPost(response))
      .run();
  });
});

describe("Saga removePostAsync", () => {
  it("removes the post from store when api call succeeded", () => {
    const responseMock = {
      status: 200
    };
    return expectSaga(removePostAsync, removeSinglePost)
      .provide([[matchers.call.fn(removeSinglePost), responseMock]])
      .put(removePost({ id: undefined }))
      .run();
  });

  it("does not remove the post from store if api call failed", () => {
    const responseMock = {
      status: 400
    };
    return expectSaga(removePostAsync, removeSinglePost)
      .provide([[matchers.call.fn(removeSinglePost), responseMock]])
      .not.put(removePost({ id: undefined }))
      .run();
  });
});
