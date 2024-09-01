import { motion } from 'framer-motion';

const PostCard = ({ post }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md"
    >
      <h2 className="text-xl font-bold">{post.title}</h2>
      <p>{post.description}</p>
    </motion.div>
  );
};

export default PostCard;
