import {
  FETCH_POSTS,
  ADD_POST,
  EDIT_POST,
  REMOVE_POST
} from "../actions/entityActions";
import { IStoreStructure } from "../interfaces/StoreStructure";

const initialState: IStoreStructure = {
  posts: []
};

export default function entityReducer(
  state = initialState,
  { type, data }: any
): IStoreStructure {
  switch (type) {
    case FETCH_POSTS:
      return {
        posts: data
      };
    case ADD_POST:
      return {
        ...state,
        posts: state.posts.concat(data)
      };
    case EDIT_POST:
      return {
        ...state,
        posts: state.posts.map(post => (post.id === data.id ? data : post))
      };
    case REMOVE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== data.id)
      };

    default:
      return state;
  }
}
