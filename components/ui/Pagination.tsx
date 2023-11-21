import ReactPaginate from "react-paginate";

type PaginationProps = {
  handlePageClick: (event: { selected: number }) => void;
  pageCount: number;
};

const Pagination = ({ handlePageClick, pageCount }: PaginationProps) => {
  return (
    <ReactPaginate
      nextLabel="Next"
      previousLabel="Previous"
      onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      marginPagesDisplayed={2}
      pageCount={pageCount}
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      breakLabel="..."
      breakClassName="page-item"
      breakLinkClassName="page-link"
      containerClassName="pagination"
      activeClassName="active"
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
