import React from 'react';
import PostList from '../../components/Posts/PostList';
import { useFetch } from '../../hooks/useFetch';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';

const HomePage: React.FC = () => {
  const { data: posts, loading, error } = useFetch<{ id: string; title: string; description: string; image?: string }>({ url: '/api/posts' });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading posts</p>;

  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <PostList posts={posts || []} />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
