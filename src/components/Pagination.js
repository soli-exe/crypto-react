import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = () => {
    return (
        <ReactPaginate
            containerClassName='paginate-container'
            activeClassName='current'
            pageClassName="page-item"
            previousClassName="page-item-btn"
            nextClassName="page-item-btn"
            nextLinkClassName="page-link"
            previousLinkClassName="page-link"
            breakClassName="disabled-item"
            breakLinkClassName="disabled-link"
            breakLabel="..."
            pageRangeDisplayed={window.screen.width > '768' ? 5 : 1}
            nextLabel="Next >"
            previousLabel="< Previous"
            pageCount={Math.ceil(pageCount)}
            onPageChange={handlePageChange}
            renderOnZeroPageCount={null} />
    );
};

export default Pagination;