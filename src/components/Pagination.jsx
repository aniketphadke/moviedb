import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Pagination as BootstrapPagination } from "react-bootstrap";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <BootstrapPagination className="justify-content-center my-4">
      {/* Previous Button */}
      <BootstrapPagination.Prev
        onClick={handlePrevious}
        disabled={currentPage === 1}
        aria-label="Previous Page"
      >
        <ChevronLeft size={20} />
      </BootstrapPagination.Prev>

      {/* Current Page Display */}
      <BootstrapPagination.Item active>
        {currentPage} of {totalPages}
      </BootstrapPagination.Item>

      {/* Next Button */}
      <BootstrapPagination.Next
        onClick={handleNext}
        disabled={currentPage === totalPages}
        aria-label="Next Page"
      >
        <ChevronRight size={20} />
      </BootstrapPagination.Next>
    </BootstrapPagination>
  );
};

export default Pagination;