import React from "react";
import { action } from "@storybook/addon-actions";
import { Post } from "./Post";

export default {
  title: "Todo",
  component: Post
};

export const New = () => {
  return (
    <div className="container">
      <ul>
        <Post
          post={{
            id: 100,
            title: "Learn typescript",
            completed: false
          }}
          classes={["todo"]}
          onToggle={action("clicked checkbox!")}
          removeHandler={e => {
            e.preventDefault();
            action("clicked remove")();
          }}
        />
      </ul>
    </div>
  );
};

export const Completed = () => {
  return (
    <div className="container">
      <ul>
        <Post
          post={{
            id: 100,
            title: "Learn typescript",
            completed: true
          }}
          classes={["todo completed"]}
          onToggle={action("clicked checkbox!")}
          removeHandler={e => {
            e.preventDefault();
            action("clicked remove")();
          }}
        />
      </ul>
    </div>
  );
};
