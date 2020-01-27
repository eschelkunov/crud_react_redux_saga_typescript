import React from "react";
import IPost from "../interfaces/Post";
import { Post } from "./Post";

interface IPostList {
  posts: IPost[];
  onToggle(id: number): void;
  onRemove: (id: number) => void;
}

export const PostList: React.FC<IPostList> = ({
  posts,
  onToggle,
  onRemove
}) => {
  const removeHandler = (e: React.MouseEvent, id: number) => {
    e.preventDefault();
    onRemove(id);
  };

  return (
    <ul>
      {posts &&
        [...posts].reverse().map(post => {
          const classes = ["todo"];
          if (post.completed) {
            classes.push("completed");
          }
          return (
            <Post
              key={post.id}
              classes={classes}
              post={post}
              onToggle={onToggle}
              removeHandler={removeHandler}
            />
          );
        })}
    </ul>
  );
};
