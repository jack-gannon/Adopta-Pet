import React from "react";
import { paginationMobile } from "../styles/component-modules/pagination.module.css";

const PaginationMobile = ({
  currentPage,
  handleNextPage,
  handlePreviousPage,
  isFirstPage
}) => {
  return (
    <div className={paginationMobile}>
      <button onClick={isFirstPage ? null : () => handlePreviousPage()}>
        &larr;
      </button>
      <p>{currentPage}</p>
      <button onClick={() => handleNextPage()}>&rarr;</button>
    </div>
  );
};

export default PaginationMobile;
