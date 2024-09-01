import React from 'react';
import PostDetail from '../../components/Posts/PostDetail';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';

const PostPage: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <PostDetail />
      </main>
      <Footer />
    </div>
  );
};

export default PostPage;
