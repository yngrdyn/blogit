import { ReactNode, useReducer } from 'react';
import { ActionTypes } from './BlogActions';
import BlogContext from './BlogContext';
import BlogReducer, { State } from './BlogReducer';

const BlogProvider = ({children}: {children: ReactNode}) => {
  const initialState: State = {
    blogPosts: [],
    currentBlogPost: null,
    loading: true,
  };

  const [state, dispatch] = useReducer(BlogReducer, initialState);

  const getPosts = async () => {
    try {
      dispatch({type: ActionTypes.sending_request});
      const res = await fetch('/posts');
      const data = await res.json();
      dispatch({type: ActionTypes.request_finished});
      dispatch({type: ActionTypes.set_posts, payload: data});
    } catch (err) {
      console.log(err);
    }
  };

  const getPost = async (id: string) => {
    try {
      dispatch({type: ActionTypes.sending_request});
      const res = await fetch(`/posts/${Number(id)}`);
      const data = await res.json();
      dispatch({type: ActionTypes.request_finished});
      dispatch({type: ActionTypes.set_post, payload: data});
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <BlogContext.Provider value={{
      blogPosts: state.blogPosts,
      currentBlogPost: state.currentBlogPost,
      loading: state.loading,
      getPosts,
      getPost,
    }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogProvider;