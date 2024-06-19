import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import BlogPostPage from './components/BlogPost';
import CreateBlogPostPage from './components/CreateBlogPost';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post/:postId" element={<BlogPostPage />} />
        <Route path="/create" element={<CreateBlogPostPage />} />
      </Routes>
    </Router>
  );
};

export default App;
