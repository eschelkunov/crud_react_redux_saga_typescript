import React from "react";
import { action } from "@storybook/addon-actions";
import Post from "./Post";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore();

export default {
  title: "Todo",
  component: Post,
  decorators: [
    (story: () => React.ReactNode) => (
      <Provider store={mockStore({ posts: [] })}>{story()}</Provider>
    )
  ]
};

const newTodo = { id: 1, title: "Task 1", completed: false };
const completedToDo = { id: 2, title: "Task 2", completed: true };

export const New = () => {
  return (
    <div className="container">
      <ul>
        <Post post={newTodo} classes={["todo"]} />
      </ul>
    </div>
  );
};

export const Completed = () => {
  return (
    <div className="container">
      <ul>
        <Post post={completedToDo} classes={["todo completed"]} />
      </ul>
    </div>
  );
};
