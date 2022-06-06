import { Post } from '../models/Post';
import { ActionTypes } from './BlogActions';

export interface State {
  blogPosts: Post[];
  currentBlogPost: Post | null;
  loading: boolean;
};

const BlogReducer = (state: State, action: { type: ActionTypes; payload?: Post[] | Post; }): State => {
  switch(action.type) {
    case ActionTypes.set_posts:
      return {
        ...state,
        blogPosts: action.payload as Post[],
      };
    case ActionTypes.set_post:
      return {
        ...state,
        currentBlogPost: action.payload as Post,
      };
    case ActionTypes.sending_request:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.request_finished:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default BlogReducer;
