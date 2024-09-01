import React from 'react';

const Sidebar: React.FC = () => (
  <aside className="bg-gray-200 p-4">
    <h2 className="font-bold text-xl mb-4">Categories</h2>
    <ul>
      <li><a href="#" className="block py-2 px-4 hover:bg-gray-300">Category 1</a></li>
      <li><a href="#" className="block py-2 px-4 hover:bg-gray-300">Category 2</a></li>
    </ul>
  </aside>
);

export default Sidebar;
