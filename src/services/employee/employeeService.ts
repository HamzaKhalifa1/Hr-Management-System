// src/services/employeeService.ts

import employeesData from "../../../public/data/employees.json";
import { Employee } from "./general-types";

/**
 * Returns an array of all employees.
 * For now, we simply import from the JSON file.
 */
export function getAllEmployees(): Employee[] {
  return employeesData as Employee[];
}

/**
 * Returns one employee by emp_id (or undefined if not found).
 */
export function getEmployeeById(empId: string): Employee | undefined {
  return (employeesData as Employee[]).find((emp) => emp.emp_id === empId);
}
