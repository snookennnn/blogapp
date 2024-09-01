import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <div className="text-xl font-bold">
          <Link href="/">My Blog</Link>
        </div>
        <div className="space-x-4">
          <Link href="/admin">Admin</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
