import {
  RECEIVE_POSTS_DATA,
  RECEIVE_SINGLE_POST_DATA,
  UPDATE_SINGLE_POST_DATA,
  DELETE_POST
} from "../actions/entityActions";
import { IStoreStructure } from "../entities/StoreStructure";

const initialState: IStoreStructure = {
  posts: []
};

export default function entityReducer(
  state = initialState,
  { type, data }: any
): IStoreStructure {
  debugger;
  switch (type) {
    case RECEIVE_POSTS_DATA:
      return {
        posts: data
      };
    case RECEIVE_SINGLE_POST_DATA:
      return {
        ...state,
        posts: state.posts.concat(data)
      };
    case UPDATE_SINGLE_POST_DATA:
      return {
        ...state,
        posts: state.posts.map(post => (post.id === data.id ? data : post))
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== data.id)
      };

    default:
      return state;
  }
}
