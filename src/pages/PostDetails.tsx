import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BlogContext, { BlogPostContext } from '../context/BlogContext';

const PostDetails = () => {
  const { getPost, currentBlogPost } = useContext(BlogContext) as BlogPostContext;
  const { postId } = useParams();

  useEffect(() => {
    getPost(postId as string);
  }, []);

  return (
    <div className='post-details'>
      { currentBlogPost && (
        <>
          <div className='post-image' style={{backgroundImage: `url(${currentBlogPost.image})`}}></div>
          <div className='post-content container'>
            <span className='card-date'>{currentBlogPost.date}</span>
            <h2>{currentBlogPost.title}</h2>
            <h5>By {currentBlogPost.author}</h5>
            <p>{currentBlogPost.content}</p>
          </div>
        </>
      )}
      { !currentBlogPost && (
        <div className='post-content container'>
          <h3>Blog post not found.</h3>
        </div>
      )}
    </div>
  );
};

export default PostDetails;