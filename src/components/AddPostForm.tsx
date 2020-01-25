import React, { Component } from "react";
import { connect } from "react-redux";
import { addPostData } from "../actions/entityActions";

interface IPostForm {
  addPostData({}): void;
}

export class AddPostForm extends Component<IPostForm> {
  state = {
    title: "",
    completed: false
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      title: e.target.value
    });
  };

  handleKeyPress = (e: React.KeyboardEvent): void => {
    if (e.key === "Enter") {
      this.props.addPostData(this.state);
      this.setState({
        title: ""
      });
    }
  };

  render() {
    return (
      <div className="input-field mt2">
        <input
          type="text"
          id="title"
          placeholder="What are you thinking about?"
          value={this.state.title}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <label htmlFor="title" className="active">
          Add new post here
        </label>
      </div>
    );
  }
}

const mapDispatch = {
  addPostData
};

const connector = connect(null, mapDispatch);

export default connector(AddPostForm);
