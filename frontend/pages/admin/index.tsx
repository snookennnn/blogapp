import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Admin = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');

  const handleCreatePost = async () => {
    const post = { title, description, content, image };
    await fetch('https://your-backend-api.com/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(post),
    });
  };

  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Admin - Create Post</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleCreatePost();
          }}
        >
          <div className="mb-4">
            <label className="block text-gray-700">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border rounded p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border rounded p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Content</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full border rounded p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Image URL</label>
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full border rounded p-2"
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Create Post
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default Admin;
