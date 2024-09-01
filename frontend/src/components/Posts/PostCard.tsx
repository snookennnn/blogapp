import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../UI/Card';

interface PostCardProps {
  id: string;
  title: string;
  description: string;
  image?: string;
}

const PostCard: React.FC<PostCardProps> = ({ id, title, description, image }) => (
  <Link to={`/post/${id}`}>
    <Card title={title} image={image}>
      <p>{description}</p>
    </Card>
  </Link>
);

export default PostCard;
