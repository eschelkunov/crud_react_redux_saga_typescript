import React, { useEffect } from "react";
import { connect } from "react-redux";
import AddPostForm from "../components/AddPostForm";
import IPost from "../interfaces/Post";
import { IStoreStructure } from "../interfaces/StoreStructure";
import {
  fetchPostsAsync,
  editPostAsync,
  removePostAsync
} from "../actions/entityActions";
import { PostList } from "../components/PostList";

declare var confirm: (question: string) => boolean;

interface IHomeProps {
  fetchPostsAsync(): void;
  editPostAsync({ id: number, title: string, completed: boolean }: any): void;
  removePostAsync(id: number): void;
  posts: IPost[];
}

const HomePage: React.FC<IHomeProps> = props => {
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
    <>
      <AddPostForm />
      <PostList posts={posts} onToggle={handleToggle} onRemove={handleRemove} />
    </>
  );
};

const mapState = (state: IStoreStructure) => ({ posts: state.posts });

const mapDispatch = {
  fetchPostsAsync,
  editPostAsync,
  removePostAsync
};

const connector = connect(mapState, mapDispatch);

export default connector(HomePage);
