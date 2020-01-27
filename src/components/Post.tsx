import React from "react";
import IPost from "../interfaces/Post";

interface IPostProps {
  classes: string[];
  post: IPost;
  onToggle(id: number): void;
  removeHandler(event: React.MouseEvent, id: number): void;
}

export const Post: React.FC<IPostProps> = props => {
  const { post, onToggle, removeHandler, classes } = props;

  return (
    <li className={classes.join(" ")}>
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
};
