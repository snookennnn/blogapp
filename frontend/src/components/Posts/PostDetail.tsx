import React from 'react';
import { useParams } from 'react-router-dom';
import { usePost } from '../../hooks/usePost';

const PostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { post, loading, error } = usePost(id);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading post</p>;

  return (
    <article>
      <h1 className="text-3xl font-bold">{post?.title}</h1>
      <img src={post?.image} alt={post?.title} className="w-full h-64 object-cover" />
      <div dangerouslySetInnerHTML={{ __html: post?.content || '' }} />
    </article>
  );
};

export default PostDetail;
