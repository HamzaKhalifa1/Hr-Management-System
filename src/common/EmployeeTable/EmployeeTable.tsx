import React from 'react'
import { useState } from 'react'
import { Employee } from '../../services/employee/general-types'
import styles from './EmployeeTable.module.css'
import edit from "../../assets/icons/edit.svg";
import view from "../../assets/icons/view.svg";
import trash from "../../assets/icons/trash.svg";
import Pagination from '../Pagination';

interface EmployeeTableProps {
  data: Employee[];
}

export const EmployeeTable: React.FC<EmployeeTableProps> = ({ data }) => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [employeesPerPage, setEmployeesPerPage] = useState<number>(10);
  
    const indexOfLastRecord = currentPage * employeesPerPage;      
    const indexOfFirstRecord = indexOfLastRecord - employeesPerPage;
  
    const currentEmployees = data.slice(indexOfFirstRecord, indexOfLastRecord);
  
    const totalPages = Math.ceil(data.length / employeesPerPage);
  
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  
    const paginate = (pageNumber: number) => {
      setCurrentPage(pageNumber);
    };
  
    const goToPrevious = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
    const goToNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  return (
    <>
        <table className={styles.employeeTable}>
        <thead className={styles.tableHeader}>
          <tr>
            <th>Employee Name</th>
            <th>Employee ID</th>
            <th>Department</th>
            <th>Designation</th>
            <th>Type</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          {currentEmployees.map((emp) => (
            <tr key={emp.emp_id} className={styles.tableRow}>
              <td>
                <span className={styles.employeeName}>
                  <img 
                  src={emp.emp_Img} 
                  alt={emp.emp_name} 
                  style={{ width: "35px", height: "35px", borderRadius: "50%" }} 
                  />
                  {emp.emp_name}
                </span>
                
              </td>
              <td>{emp.emp_id}</td>
              <td>{emp.department}</td>
              <td>{emp.designation}</td>
              <td>{emp.employee_type}</td>
              <td>{emp.marital_status}</td>
              <td>
                <div className={styles.actionButtons}>
                    <button className={styles.viewButton}><img src={view} alt="view" /></button>
                    <button className={styles.editButton}><img src={edit} alt="edit" /></button>
                    <button className={styles.deleteButton}><img src={trash} alt="delete" /></button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        employeesPerPage={employeesPerPage}
        setEmployeesPerPage={setEmployeesPerPage}
        currentPage={currentPage}
        goToPrevious={goToPrevious}
        goToNext={goToNext}
        paginate={paginate}
        pageNumbers={pageNumbers}
        totalPages={totalPages}
        data={data}
      />
    </>
  )
}


