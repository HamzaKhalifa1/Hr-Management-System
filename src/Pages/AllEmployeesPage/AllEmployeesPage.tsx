import styles from "./AllEmployeesPage.module.css"
import Search from "../../common/Search";
import { Employee } from "../../services/employee/general-types";
import { getAllEmployees } from "../../services/employee/employeeService";
import { EmployeeTable } from "../../common/EmployeeTable";
import addCircle from "../../assets/icons/addCircle.svg"; 
import filter from "../../assets/icons/filter.svg";

export default function AllEmployeesPage() {
    const employees: Employee[] = getAllEmployees();
    return (
      <main className={styles.main}>
        <header className={styles.header}>
          <Search />
          <div className={styles.rightHeader}>
            <button className={styles.addEmp}><img src={addCircle} alt="addCircle" />Add New Employee</button>
            <button className={styles.filterEmp}><img src={filter} alt="filter" />Filter</button>
          </div>
        </header>
        <EmployeeTable data={employees} />
      </main>
    );
}
