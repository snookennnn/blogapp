import { GetServerSideProps } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

interface PostProps {
  title: string;
  content: string;
  image: string;
}

const Post = ({ title, content, image }: PostProps): JSX.Element => {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <img src={image} alt={title} className="w-full h-64 object-cover mb-4" />
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </main>
      <Footer />
    </div>
  );
};


/**
 * Fetches a post by ID and returns its title, content, and image as props.
 * This is a server-side function, so it will only be called by the server.
 * @param context The Next.js context object, which contains the request and response objects.
 * @returns An object with the post's title, content, and image as props.
 */
export const getServerSideProps: GetServerSideProps<PostProps> = async (context) => {
  const { id } = context.params as { id: string };
  const res = await fetch(`http://localhost:3000/api/posts/${id}`);
  const post = await res.json() as PostProps;

  return {
    props: {
      title: post.title,
      content: post.content,
      image: post.image,
    },
  };
};

export default Post;
