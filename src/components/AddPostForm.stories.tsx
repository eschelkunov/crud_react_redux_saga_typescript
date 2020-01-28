import React from "react";
import { action } from "@storybook/addon-actions";
import { AddPostForm } from "./AddPostForm";
import "../index.css";

export default {
  title: "Input",
  component: AddPostForm
};

export const Default = () => {
  return (
    <div className="container">
      <AddPostForm addPostAsync={action("Post is on the way to store!")} />
    </div>
  );
};
