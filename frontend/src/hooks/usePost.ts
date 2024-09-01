import { useFetch } from './useFetch';

export const usePost = (id: string) => {
  const { data: post, loading, error } = useFetch<{ title: string; content: string; image: string }>({ url: `/api/posts/${id}` });

  return { post, loading, error };
};
