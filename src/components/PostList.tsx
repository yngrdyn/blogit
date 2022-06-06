import { useContext, useEffect } from 'react';
import BlogContext, { BlogPostContext } from '../context/BlogContext';
import PostCard from './PostCard';

const PostList = () => {
  const {getPosts, blogPosts, loading } = useContext(BlogContext) as BlogPostContext;

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className='posts'>
      <div className='container'>
        {!loading && (
          <div className='grid'>
            {blogPosts.map((blogPost) => (
              <PostCard key={blogPost.id} {...blogPost}></PostCard>
            ))}
          </div>
        )}
        {loading && (
          <span>Loading...</span>
        )}
      </div>
    </div>
  );
};

export default PostList;
