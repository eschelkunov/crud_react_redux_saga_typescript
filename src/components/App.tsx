import React, { Component } from "react";
import "../App.css";
import { connect } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import { HOME, ADD_POST, VIEW_POST } from "../routes/postRoutes";
import AddPostForm from "./AddPostForm";
import IPost from "../entities/Post";
import { NavBar } from "./NavBar";
import { IStoreStructure } from "../entities/StoreStructure";
import {
  requestPostsData,
  editPostData,
  removePost
} from "../actions/entityActions";
import { PostList } from "./PostList";

interface IAppProps {
  requestPostsData(): void;
  editPostData({}): void;
  removePost(id: number): void;
  posts: IPost[];
}

declare var confirm: (question: string) => boolean;

class App extends Component<IAppProps> {
  componentDidMount() {
    this.props.requestPostsData();
  }

  handleToggle = (id: number) => {
    this.props.posts.map(post => {
      if (post.id === id) {
        this.props.editPostData({
          id,
          title: post.title,
          completed: !post.completed
        });
      }
    });
  };

  handleRemove = (id: number) => {
    const confirmRemoving = confirm(
      "Are you sure you want to delete this post? "
    );
    if (confirmRemoving) {
      this.props.removePost(id);
    }
  };

  render() {
    const { posts } = this.props;
    debugger;
    return (
      <BrowserRouter>
        <NavBar />
        <div className="container">
          <Route path={ADD_POST} exact component={AddPostForm} />
          <PostList
            posts={posts}
            onToggle={this.handleToggle}
            onRemove={this.handleRemove}
          />
        </div>
      </BrowserRouter>
    );
  }
}

const mapState = (state: IStoreStructure) => ({ posts: state.posts });

const mapDispatch = {
  requestPostsData,
  editPostData,
  removePost
};

const connector = connect(mapState, mapDispatch);

export default connector(App);
