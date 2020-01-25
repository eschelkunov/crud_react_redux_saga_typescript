import test from "tape";
import { put, call } from "redux-saga/effects";

import { getPostsData, delay } from "./sagas";

test("getPostsData Saga test", (assert: any) => {
  const gen = getPostsData({ type: "", data: [] });

  assert.deepEqual(
    gen.next().value,
    call(delay, 1000),
    "getApiData Saga must call delay(2000)"
  );

  assert.deepEqual(
    gen.next().value,
    put({ type: "TEST", value: "testValue" }),
    "getApiData Saga must dispatch an TEST action"
  );

  assert.deepEqual(
    gen.next(),
    { done: true, value: undefined },
    "getApiData Saga must be done"
  );

  assert.end();
});
