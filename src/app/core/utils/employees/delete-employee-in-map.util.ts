import { EmployeeMap } from '../../interfaces/employee.interface';

export const deleteEmployeeInMap = (projects: EmployeeMap, id: string): EmployeeMap => {
  delete projects[id];
  return projects;
};
