interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
  }
  
  const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    return (
      <div className="flex justify-center space-x-2 mt-8">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-gray-300 rounded"
        >
          Previous
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => onPageChange(index + 1)}
            className={`px-3 py-1 ${index + 1 === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-gray-300 rounded"
        >
          Next
        </button>
      </div>
    );
  };
  
  export default Pagination;
  