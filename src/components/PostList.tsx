import React from "react";
import IPost from "../interfaces/Post";
import Post from "./Post";

interface IPostList {
  posts: IPost[];
}

export const PostList: React.FC<IPostList> = ({ posts }) => {
  return (
    <ul>
      {posts &&
        [...posts].reverse().map(post => {
          const classes = ["todo"];
          if (post.completed) {
            classes.push("completed");
          }
          return <Post key={post.id} classes={classes} post={post} />;
        })}
    </ul>
  );
};
