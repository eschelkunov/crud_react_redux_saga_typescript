import React, { useState } from "react";
import { connect } from "react-redux";
import { addPostAsync } from "../actions/entityActions";

interface IPostForm {
  addPostAsync({ title: string, completed: boolean }: any): void;
}

export const AddPostForm: React.FC<IPostForm> = props => {
  const [title, setTitle] = useState("");
  const [completed] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent): void => {
    if (e.key === "Enter") {
      props.addPostAsync({ title, completed });
      setTitle("");
    }
  };

  return (
    <div className="input-field mt2">
      <input
        type="text"
        id="title"
        placeholder="What are you thinking about?"
        value={title}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <label htmlFor="title" className="active">
        Add new post here
      </label>
    </div>
  );
};

const mapDispatch = {
  addPostAsync
};

const connector = connect(null, mapDispatch);

export default connector(AddPostForm);
