import { EmployeeMap, GetEmployee } from '../../interfaces/employee.interface';

export const mapEmployeesToArray = (projects: EmployeeMap): GetEmployee[] =>
  Object.values(projects);
