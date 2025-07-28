function Pagination({ totalComments, commentsPerPage, currentPage, setCurrentPage }) {
  const totalPages = Math.ceil(totalComments / commentsPerPage);
  
  if (totalPages <= 1) return null;

  return (
    <div className="pagination">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
        <button
          key={num}
          onClick={() => setCurrentPage(num)}
          className={`pagination-button ${currentPage === num ? 'active' : ''}`}
        >
          {num}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
