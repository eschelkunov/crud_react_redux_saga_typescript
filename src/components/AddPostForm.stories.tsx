import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import { AddPostForm } from "./AddPostForm";
import "materialize-css/dist/css/materialize.css";
import "../index.css";
import "@storybook/addon-console";

export default {
  title: "Input",
  component: AddPostForm,
  excludeStories: /.*Data$/
};

export const Default = () => {
  return <AddPostForm addPostData={action("Post is on the way to store!")} />;
};
