const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white p-4 mt-8">
        <div className="container mx-auto text-center">
          © {new Date().getFullYear()} My Blog. All Rights Reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  