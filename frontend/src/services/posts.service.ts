import { fetchFromApi } from './api';

export const getPosts = () => fetchFromApi('/posts');

export const getPostById = (id: string) => fetchFromApi(`/posts/${id}`);
