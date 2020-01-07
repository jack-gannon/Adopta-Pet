import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PaginationMobile from "./PaginationMobile";
import PaginationDesktop from "./PaginationDesktop";
import { NEXT_PAGE, PREVIOUS_PAGE } from "../actions/types";

const Pagination = ({ currentPage }) => {
  const dispatch = useDispatch();
  const pageCount = useSelector(state => state.page.pageCount);
  const handleNextPage = () => {
    dispatch({ type: NEXT_PAGE });
  };
  const handlePreviousPage = () => {
    dispatch({ type: PREVIOUS_PAGE });
  };
  return (
    <>
      {pageCount === 1 ? null : (
        <>
          <PaginationMobile
            currentPage={currentPage}
            handleNextPage={handleNextPage}
            handlePreviousPage={handlePreviousPage}
            isFirstPage={currentPage === 1}
            isLastPage={currentPage === pageCount}
            pageCount={pageCount}
          />
          <PaginationDesktop currentPage={currentPage} />
        </>
      )}
    </>
  );
};

export default Pagination;
