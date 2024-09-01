import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PostCard from '../components/PostCard';
import Pagination from '../components/Pagination';

interface Post {
  id: string;
  title: string;
  description: string;
  image: string;
}

const Home = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  useEffect(() => {
    // Fetch posts from backend API
    const fetchPosts = async () => {
      const res = await fetch('https://your-backend-api.com/posts');
      const data = await res.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentPosts.map((post) => (
            <PostCard key={post.id} id={post.id} title={post.title} description={post.description} image={post.image} />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(posts.length / postsPerPage)}
          onPageChange={setCurrentPage}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
