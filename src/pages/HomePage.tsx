import React, { useEffect } from "react";
import { connect } from "react-redux";
import AddPostForm from "../components/AddPostForm";
import IPost from "../interfaces/Post";
import { IStoreStructure } from "../interfaces/StoreStructure";
import { fetchPostsAsync } from "../actions/entityActions";
import { PostList } from "../components/PostList";

interface IHomeProps {
  posts: IPost[];
  fetchPostsAsync(): void;
}

const HomePage: React.FC<IHomeProps> = props => {
  const { posts, fetchPostsAsync } = props;

  useEffect(() => {
    fetchPostsAsync();
  }, [fetchPostsAsync]);

  return (
    <>
      <AddPostForm />
      <PostList posts={posts} />
    </>
  );
};

const mapState = (state: IStoreStructure) => ({ posts: state.posts });

const mapDispatch = {
  fetchPostsAsync
};

const connector = connect(mapState, mapDispatch);

export default connector(HomePage);
