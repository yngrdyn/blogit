import { createContext } from 'react';
import { Post } from '../models/Post';

export interface BlogPostContext {
  blogPosts: Post[];
  currentBlogPost: Post | null;
  loading: boolean;
  getPosts: () => Promise<void>;
  getPost: (id: string) => Promise<void>;
}

const BlogContext = createContext<BlogPostContext | null>(null);

export default BlogContext;
