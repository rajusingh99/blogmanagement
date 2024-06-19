
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { getPostById } from '../components/api';

const BlogPostPage = () => {
  const { postId } = useParams();
  const post = getPostById(Number(postId));

  if (!post) {
    return <div>Post not found.</div>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default BlogPostPage;
