import Link from 'next/link';

interface PostCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
}

const PostCard: React.FC<PostCardProps> = ({ id, title, description, image }) => {
  return (
    <div className="border rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-600">{description}</p>
        <Link href={`/post/${id}`}>
          <a className="text-blue-500 mt-2 inline-block">Read More</a>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
