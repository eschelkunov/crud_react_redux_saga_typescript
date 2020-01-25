import React from "react";
import IPost from "../entities/Post";

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
            <li className={classes.join(" ")} key={post.id}>
              <label>
                <input
                  type="checkbox"
                  checked={post.completed}
                  onChange={() => onToggle(post.id)}
                />
                <span>{post.title}</span>
                <i
                  className="material-icons red-text"
                  onClick={e => removeHandler(e, post.id)}
                >
                  delete
                </i>
              </label>
            </li>
          );
        })}
    </ul>
  );
};
