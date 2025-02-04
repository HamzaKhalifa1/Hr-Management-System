import React from 'react'
import styles from './Pagination.module.css'

interface PaginationProps {
  employeesPerPage: number;
  setEmployeesPerPage: (num: number) => void;
  currentPage: number;
  goToPrevious: () => void;
  goToNext: () => void;
  paginate: (pageNum: number) => void;
  pageNumbers: number[];
  totalPages: number;
  data: any[];
}

export default function Pagination({
  employeesPerPage,
  setEmployeesPerPage,
  currentPage,
  goToPrevious,
  goToNext,
  paginate,
  pageNumbers,
  totalPages,
  data
}: PaginationProps) {
  return (
    <section className={styles.pagination}>
      <div className={styles.empNumbers}>
        <p>Showing</p>
        <select
          className={styles.empSelect}
          value={employeesPerPage}
          onChange={(e) => setEmployeesPerPage(Number(e.target.value))}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={25}>25</option>
        </select>
      </div>
      <div className={`${styles.empRecords} small-text`}>
        <span>Showing 1 to {employeesPerPage} out of {data.length} records</span>
      </div>
      <div className={styles.pageNumbers}>
        <button onClick={goToPrevious} disabled={currentPage === 1} style={{padding: "1em", borderRadius: "8px", backgroundColor: "transparent", border: "none", color: "black"}}>
          {"<"}
        </button>

        {pageNumbers.map((pageNum) => (
          <button
            key={pageNum}
            onClick={() => paginate(pageNum)}
            style={{
              backgroundColor: "transparent",
              color: pageNum === currentPage ? "#7152f3" : "black",
              padding: "0.5em 1em",
              border: pageNum === currentPage ? "1px solid #7152f3" : "none",
              borderRadius: "8px"
            }}
          >
            {pageNum}
          </button>
        ))}

        <button onClick={goToNext} disabled={currentPage === totalPages} style={{padding: "1em", borderRadius: "8px", backgroundColor: "transparent", border: "none", color: "black"}}>
          {">"}
        </button>
      </div>
    </section>
  )
}