import React from 'react';
import PostCard from './PostCard';

interface PostListProps {
  posts: {
    id: string;
    title: string;
    description: string;
    image?: string;
  }[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {posts.map(post => (
      <PostCard key={post.id} {...post} />
    ))}
  </div>
);

export default PostList;
