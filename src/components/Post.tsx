import React from "react";
import IPost from "../interfaces/Post";
import { connect } from "react-redux";
import { editPostAsync, removePostAsync } from "../actions/entityActions";

interface IPostProps {
  classes: string[];
  post: IPost;
  editPostAsync({ id: number, title: string, completed: boolean }: any): void;
  removePostAsync(id: number): void;
}

declare var confirm: (question: string) => boolean;

export const Post: React.FC<IPostProps> = props => {
  const { post, classes, editPostAsync } = props;

  const handleRemove = (e: React.MouseEvent, id: number) => {
    e.preventDefault();
    handlePopup(id);
  };

  const handleToggle = (id: number) => {
    editPostAsync({
      id,
      title: post.title,
      completed: !post.completed
    });
  };

  const handlePopup = (id: number) => {
    const confirmRemoving = confirm(
      "Are you sure you want to delete this post? "
    );
    if (confirmRemoving) {
      props.removePostAsync(id);
    }
  };

  return (
    <li className={classes.join(" ")}>
      <label>
        <input
          type="checkbox"
          checked={post.completed}
          onChange={() => handleToggle(post.id)}
        />
        <span>{post.title}</span>
        <i
          className="material-icons red-text"
          id="rm-icon"
          onClick={e => handleRemove(e, post.id)}
        >
          delete
        </i>
      </label>
    </li>
  );
};

const mapDispatch = {
  editPostAsync,
  removePostAsync
};

const connector = connect(null, mapDispatch);

export default connector(Post);
