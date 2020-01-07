import React from "react";
import {
  paginationMobile,
  pageNumber,
  pageBtn,
  pageBtnDisabled
} from "../styles/component-modules/pagination.module.css";

const PaginationMobile = ({
  currentPage,
  handleNextPage,
  handlePreviousPage,
  isFirstPage,
  isLastPage,
  pageCount
}) => {
  return (
    <div className={paginationMobile}>
      <button
        onClick={isFirstPage ? null : () => handlePreviousPage()}
        className={`${pageBtn} ${isFirstPage && pageBtnDisabled}`}
        disabled={isFirstPage}
      >
        &larr;
      </button>
      <p className={pageNumber}>
        {currentPage}
        {pageCount === 0 || pageCount > 999 ? null : ` / ${pageCount}`}
      </p>
      <button
        onClick={isLastPage ? null : () => handleNextPage()}
        className={`${pageBtn} ${isLastPage && pageBtnDisabled}`}
        disabled={isLastPage}
      >
        &rarr;
      </button>
    </div>
  );
};

export default PaginationMobile;
