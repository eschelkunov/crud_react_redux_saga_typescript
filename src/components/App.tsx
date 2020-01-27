import React, { useEffect } from "react";
import "../App.css";
import { connect } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import { ADD_POST } from "../routes/postRoutes";
import AddPostForm from "./AddPostForm";
import IPost from "../interfaces/Post";
import { NavBar } from "./NavBar";
import { IStoreStructure } from "../interfaces/StoreStructure";
import {
  fetchPostsAsync,
  editPostAsync,
  removePostAsync
} from "../actions/entityActions";
import { PostList } from "./PostList";

interface IAppProps {
  fetchPostsAsync(): void;
  editPostAsync({ id: number, title: string, completed: boolean }: any): void;
  removePostAsync(id: number): void;
  posts: IPost[];
}

declare var confirm: (question: string) => boolean;

const App: React.FC<IAppProps> = props => {
  const { posts, fetchPostsAsync, editPostAsync } = props;

  useEffect(() => {
    fetchPostsAsync();
  }, [fetchPostsAsync]);

  const handleToggle = (id: number) => {
    const [post] = posts.filter(post => post.id === id);
    editPostAsync({
      id,
      title: post.title,
      completed: !post.completed
    });
  };

  const handleRemove = (id: number) => {
    const confirmRemoving = confirm(
      "Are you sure you want to delete this post? "
    );
    if (confirmRemoving) {
      props.removePostAsync(id);
    }
  };

  return (
    <BrowserRouter>
      <NavBar />
      <div className="container">
        <Route path={ADD_POST} exact component={AddPostForm} />
        <PostList
          posts={posts}
          onToggle={handleToggle}
          onRemove={handleRemove}
        />
      </div>
    </BrowserRouter>
  );
};

const mapState = (state: IStoreStructure) => ({ posts: state.posts });

const mapDispatch = {
  fetchPostsAsync,
  editPostAsync,
  removePostAsync
};

const connector = connect(mapState, mapDispatch);

export default connector(App);
