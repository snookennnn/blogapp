import React from 'react';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';

const AdminPage: React.FC = () => {
  // Admin functionalities will be implemented here

  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">Admin Page</h1>
        {/* Add admin functionalities here */}
      </main>
      <Footer />
    </div>
  );
};

export default AdminPage;
