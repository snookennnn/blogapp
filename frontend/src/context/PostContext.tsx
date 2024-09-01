import React, { createContext, useContext, useState, ReactNode } from 'react';

interface PostContextType {
  posts: any[];
  setPosts: React.Dispatch<React.SetStateAction<any[]>>;
}

const PostContext = createContext<PostContextType | undefined>(undefined);

export const PostProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [posts, setPosts] = useState<any[]>([]);
  
  return (
    <PostContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePostContext = () => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error('usePostContext must be used within a PostProvider');
  }
  return context;
};
