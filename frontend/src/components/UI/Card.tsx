import React from 'react';

interface CardProps {
  title: string;
  image?: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, image, children }) => (
  <div className="bg-white shadow-md rounded overflow-hidden">
    {image && <img src={image} alt={title} className="w-full h-48 object-cover" />}
    <div className="p-4">
      <h2 className="text-xl font-bold">{title}</h2>
      {children}
    </div>
  </div>
);

export default Card;
